import * as AST from "../../AST";

const assert = (el: any, msg: string) => {
  if(!el) throw new Error(msg);
};


// set to false to only verify that this can be run in the interpreter
export let IDEMode = true;


export default function verify(module: AST.IModule): module is NonNullable<AST.IModule> {
  assert(module.id, "Missing Module ID");
  assert(module.id!.moduleID, "Missing ModulesID id");
  assert(module.id!.domain, "Missing Domain!");
  assert(module.id!.domain!.length, "Missing root domain!");
  assert(module.functions, "Missing Functions! Should be an empty array!");
  assert(module.types, "Missing Types! Should be an empty array!");

  for(const fn of module.functions!) {
    assert(fn, "Function is null");
    verifyFn(fn!);
  }

  return true;
}

export function verifyFn(fn: AST.IFunction): fn is NonNullable<AST.IFunction> {
  assert(typeof fn.id === "number", "Function needs ID!");
  assert(fn.parameters, "Function parameters must be empty array");
  assert(fn.variables, "Function variables must be an empty array");
  assert(fn.body, "Function without body");
  assert(fn.type, "Function must have a type");

  if(IDEMode) assert(fn.name, "Functions must have a name");

  for(const variable of fn.variables!.concat(fn.parameters!))
    verifyVariable(variable);

  

  return true;
}

export function verifyVariable(variable: AST.IVariable): variable is NonNullable<AST.IVariable> {
  assert(typeof variable.id === "number", "Variables must have an id!");
  assert(variable.type, "Variable must have type");
  if(IDEMode) assert(variable.name, "Variable must have a name");

  return true;
}

export function verifyExpression(expression: AST.IExpression): expression is NonNullable<AST.IExpression> {
  return true;
}
