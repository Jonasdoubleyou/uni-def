import * as AST from "./../AST/index";
import { ModuleReferenceError } from "./errors";

const modules = new Map<AST.ModuleReference["moduleID"], AST.Module>();

const cycle = new Set<AST.ModuleReference["moduleID"]>();

export async function loadModule(reference: AST.ModuleReference, parent: AST.ModuleReference | null = null) {
    if(modules.has(reference.moduleID))
        return modules.get(reference.moduleID);

    if(cycle.has(reference.moduleID)) {
        throw new ModuleReferenceError(`Cyclic Reference: ${reference.moduleID} was loaded from ${parent!!.moduleID}, but it is in loading phase itself`, reference, parent!!);
    }

    const module = loadFromSource(reference);
}

async function loadFromSource(reference: AST.ModuleReference): Promise<AST.Module | never> {
    return 
}

