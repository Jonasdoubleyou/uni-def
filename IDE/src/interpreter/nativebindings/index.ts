import * as AST from "../../AST";
import { Executor } from "../executor";
import { Value } from "../memory";

export function getNativeBinding(nativeBinding: string): NativeBinding[] {
    return bindings[nativeBinding];
}

export interface NativeBinding {
    function: AST.FunctionReference;
    execute(executor: Executor): Value;
}

const bindings: { [binding: string]: NativeBinding[] } = {
    // TODO ...
};