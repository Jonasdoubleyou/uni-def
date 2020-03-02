import * as AST from "./../../AST/";

export interface Loader {
    name: string;
    load(reference: AST.ModuleReference): Promise<AST.Module>;
    has(reference: AST.ModuleReference): Promise<boolean>;
}