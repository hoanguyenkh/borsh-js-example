import BN from "bn.js";
import {Schema, serialize, deserialize} from "borsh";
import * as Buffer from "buffer";

export class example1Instruction {
    tag: number
    amount: BN;
    request_id: any;

    static schema: Schema = new Map([
        [example1Instruction,
            {
                kind: 'struct',
                fields: [
                    ['tag', 'u8'],
                    ['amount', 'u64'],
                    ['request_id', 'string']
                ]
            }],
    ]);

    constructor(obj: { amount: BN, request_id: any }) {
            this.tag = 1;
            this.amount = obj.amount;
            this.request_id = obj.request_id;
    }

    serialize(): Uint8Array {
        return serialize(example1Instruction.schema, this);
    }
}



export class example2Instruction {
    tag: number
    amount: BN;
    orderId: BN;
    address: any;

    static schema: Schema = new Map([
        [example2Instruction,
            {
                kind: 'struct',
                fields: [
                    ['tag', 'u8'],
                    ['amount', 'u64'],
                    ["orderId", "u128"],
                    ['address', ['string', 3]],
                ]
            }],
    ]);

    constructor(obj: { amount: BN, orderId: BN, address: any }) {
        this.tag = 2;
        this.amount = obj.amount;
        this.address = obj.address;
        this.orderId = obj.orderId;
    }

    serialize(): Uint8Array {
        return serialize(example2Instruction.schema, this);
    }

    deserialize(data: Buffer): example2Instruction {
        return deserialize(example2Instruction.schema, example2Instruction, data);
    }
}


export class example3Instruction {
    tag: number
    amount: BN;
    orderId: BN;
    address: Uint8Array

    static schema: Schema = new Map([
        [example3Instruction,
            {
                kind: 'struct',
                fields: [
                    ['tag', 'u8'],
                    ['amount', 'u64'],
                    ["orderId", "u128"],
                    ['address', [32]],
                ]
            }],
    ]);

    constructor(obj: { amount: BN, orderId: BN, address: Uint8Array }) {
        this.tag = 3;
        this.amount = obj.amount;
        this.address = obj.address;
        this.orderId = obj.orderId;
    }

    serialize(): Uint8Array {
        return serialize(example3Instruction.schema, this);
    }

    deserialize(data: Buffer): example3Instruction {
        return deserialize(example3Instruction.schema, example3Instruction, data);
    }
}
