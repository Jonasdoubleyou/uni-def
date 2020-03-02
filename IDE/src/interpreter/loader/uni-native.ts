import { Loader } from "./interface";
import * as AST from "./../../AST";
import { ModuleReferenceError } from "../errors";


export const NativeLoader: Loader = {
    name: "Native Loader",
    async has(reference: AST.ModuleReference) {
        if(reference.domain[0] === "uni") {
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
}

const NativeModules: { [key: string]: AST.Module } = {
    "uni": {
        id: {
            domain: ["uni"],
            moduleID: 0,
            version: 0
        },
        dependencies: [],
        types: [
            {
                id: 1,
                function: {
                    parameters: [{
                        id: 0, 
                        name: "condition",
                        description: "If true, the branch paremeter will be called. If false the elseBranch parameter wil be called",
                        type: { primitive: AST.PrimitiveType.Boolean }
                    }, {
                        id: 1,
                        name: "branch",
                        type: { complex: { moduleID: 0, type: 2 }}
                    }, {
                        id: 2,
                        name: "elseBranch",
                        type: { complex: { moduleID: 0, type: 2 }}
                    }]
                }
            }, {
                id: 2,
                function: {

                    returns: {  },
                    parameters: [],
                    typeParameters: [{
                        id: 1,
                        name: "Returns",
                        typeBoundary: { primitive: AST.PrimitiveType.Any }
                    }],
                }
            }
        ],
        functions: [
            {
                id: 1,
                name: "if",
                type: { moduleID: 0, type: 1 },

                parameters: [
                    {
                        id: 0,
                        name: "condition",
                        type: { primitive: AST.PrimitiveType.Boolean },
                    },
                    {
                        id: 1,
                        name: "branch",
                        type: { complex: { moduleID: 0, type: 2 } },
                    },
                    {
                        id: 2,
                        name: "elseBranch",
                        type: { complex: { moduleID: 0, type: 2 }}
                    }
                ]
            }
        ],
        main: {
            id: 0,
            name: "main",
            body: [],
            parameters: [],
        },
        toJSON() { return this; }
    }
};