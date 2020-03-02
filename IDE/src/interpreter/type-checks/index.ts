import * as AST from "./../../AST";

export function isEqual(a: AST.IType, b: AST.IType): boolean {
    
}

export function isSubtypeOf(parent: AST.IType, subType: AST.IType): boolean {

}

export function isSuperTypeOf(parent: AST.IType, superType: AST.IType): boolean {
    return !isSubtypeOf(parent, subType);
}