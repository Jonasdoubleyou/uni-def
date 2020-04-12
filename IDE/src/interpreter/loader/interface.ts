import * as AST from "./../../AST/";

export interface Loader {
    name: string;
    load(reference: AST.IModuleReference): Promise<AST.IModule>;
    has(reference: AST.IModuleReference): Promise<boolean>;
}