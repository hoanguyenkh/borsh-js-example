import {example1Instruction, example2Instruction, example3Instruction} from "./raw_instructions";
import BN from "bn.js";
import * as assert from "assert";
import { PublicKey } from '@solana/web3.js'
import * as Buffer from "buffer";


async function main() {
    const example1 = new example1Instruction({amount: new BN(1), request_id: "123"})
    let result1 = example1.serialize();
    assert.equal(16, result1.length)
    assert.equal(0o1, result1[0])


    const example2 = new example2Instruction({amount: new BN(2), orderId: new BN(3),
        address: ["1", "2", "3"]})
    let buffer2 = example2.serialize();

    let result2 = example2.deserialize(buffer2 as Buffer);
    assert.equal(2, result2.tag);
    assert.equal(3, result2.address.length);


    let pubKey = new PublicKey("B3fuLaQ9orHBEkeGL95m2oKcZZQgwm2uRaxVcaAJpcqm");
    const example3 = new example3Instruction({
        amount: new BN(4),
        orderId: new BN(5),
        address: pubKey.toBuffer()})
    let buffer3 = example3.serialize();
    let result3 = example3.deserialize(buffer3 as Buffer);
    assert.equal(3, result3.tag);
    assert.ok(pubKey.equals(new PublicKey(result3.address)))
}


main().then(
    () => process.exit(),
    err => {
        console.error(err);
        process.exit(-1);
    },
);
