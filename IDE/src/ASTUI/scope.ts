import * as AST from "./../AST";

/* Scope describes the current environment where variables are defined in */
export default class Scope {

  constructor(public module: AST.IModule, public fn: AST.IFunction, public parent: Scope | undefined = undefined) {
    console.log("Scope", "parent", parent, "module", module, "fn", fn);
  }

  innerFunction(fn: AST.IFunction) {
    return new Scope(this.module, fn, /*parent*/ this);
  }

  lookupVariable(reference: AST.IVariableReference): AST.IVariable {
    console.log("lookupVariable", reference, this.module);
    
    if(reference.moduleID !== this.module.id!.moduleID) // TODO
      throw new Error("Different modules not supported yet!");

    if(reference.functionID !== this.fn.id && !this.parent) 
      throw new Error("Cannot find function!");

    if(reference.functionID !== this.fn.id && this.parent)
      return this.parent.lookupVariable(reference);

    for(const parameter of this.fn.parameters!) {
      if(parameter.id === reference.id)
        return parameter;
    }

    for(const variable of this.fn.variables!) {
      if(variable.id === reference.id)
        return variable;
    }

    throw new Error("Cannot reference variable");
  }

  lookupFunction(reference: AST.IFunctionReference): AST.IFunction {
    console.log("lookupFunction", reference, this.module);
    
    if(reference.moduleID !== this.module.id!.moduleID) // TODO
      throw new Error("Different modules not supported yet!"); 

    for(const fn of this.module.functions!) {
      if(fn.id === reference.function)
        return fn;
    }

    if(reference.function === this.module.main!.id)
      return this.module.main!;

    throw new Error("Cannot reference function!");
  }


}