import { Loader, Module } from "./interface";
import * as AST from "./../../AST";
import { ModuleReferenceError } from "../errors";

const NativeModules: { [domain: string]: Module } = {};

export const NativeLoader: Loader = {
    name: "Native Loader",
    async has(reference: AST.IModuleReference) {
        if(reference.domain![0] === "uni") {
            return true;
        }

        return false;
    },

    async load(reference: AST.ModuleReference) {
        const key = reference.domain.join(".");
        
        if(!NativeModules[key])
            throw new ModuleReferenceError(`Native Loader could not find ${key}`, reference, null);

        return NativeModules[key];
    }
};

