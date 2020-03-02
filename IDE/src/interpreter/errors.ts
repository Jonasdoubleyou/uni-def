import * as AST from "./../AST/index";


export class ModuleReferenceError extends Error {
    constructor(type: string, public reference: AST.ModuleReference, public parent: AST.ModuleReference | null) {
        super(type);
    }
}