import * as AST from "./../AST";
import { Dictionary } from "./dictionary";

interface LiteralOperation {
    parse(data: string): Uint8Array;
    serialize(data: Uint8Array): string;
}

export const Literal = {
    VOID: new Uint8Array([0]),
    parse(literal: AST.ILiteral, dictionary: Dictionary) {
        // The literal modules only contian one type each
        const { type, module } = dictionary.getType(literal.type!);
        const domain = module?.id?.domain!;
        const operation = literalOperations[domain.join(".")];

        return operation.parse(literal.data!);
    }
}

const literalOperations: Record<string, LiteralOperation> =  {
    "uni.primitive.boolean": {
        parse(data) {
            if(data === "true")
                return new Uint8Array([1]);
            else if(data === "false")
                return new Uint8Array([0])
            else 
                throw new Error(`[LITERAL] Invalid Boolean literal. Must be "true" or "false"`);
        },
        serialize(data) {
            if(data[0] === 0)
                return "false"
            else return "true";
        }
    },
    "uni.primitive.void": {
        parse(data) {
            return Literal.VOID;
        },
        serialize(data) {
            return "";
        }
    },
    "uni.primitive.uint8": {
        parse(data) {
            const n = new Uint8Array([0]);
            n[0] = parseInt(data);
            return n;
        },
        serialize(data) {
            return data[0].toString();
        }
    }
}