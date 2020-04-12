import * as AST from "../AST/";
import { Dictionary } from "./dictionary";

export type Value = 
  | { type: "type", value: AST.IComplexType, typeID: number, moduleID: number }
  | { type: "function", value: AST.IFunction, functionID: number, moduleID: number }
  | { type: "value", value: Uint8Array }
  | { type: "return", value: Uint8Array, up: number, from: AST.IFunction };

class FunctionRecord {
   constructor(public readonly fn: AST.IFunction, public readonly fnID: number) {}

  private variables = new Map<number, Value>();

  get(id: number) {
    return this.variables.get(id);
  }

  set(id: number, value: Value) {
    this.variables.set(id, value);
  }

  toString() {
    let result = `function ${this.fn.name ?? ""}(${this.fnID})\n`;
    for(const [id, value] of this.variables)
      result += `  ${id} - ${value.type} - ${value.value}\n`;
    return result;
  }

}


export class Memory {
  private stack = [] as FunctionRecord[];
  
  push(fn: AST.IFunction, fnID: number) {
    const record = new FunctionRecord(fn, fnID);
    this.stack.push(record);

    if(this.stack.length > 100)
      throw new Error(`[MEM] Stack Overflow - Stack size is larger than 100`);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  *reverse() {
    for(let i = this.stack.length - 1; i >= 0; i--)
      yield this.stack[i];
  }

  private getRecord(variable: AST.IVariableReference): FunctionRecord {
    const fnID = Dictionary.uniqueID(variable.moduleID!, variable.functionID!);

    for(const record of this.reverse()) {
      if(record.fnID === fnID)
        return record;
    }

    throw new Error(`Cannot find Record for function ${variable.moduleID}/${variable.functionID}`);
  }

  get(variable: AST.IVariableReference) {
    return this.getRecord(variable).get(variable.id!);
  }

  set(variable: AST.IVariableReference, value: Value) {
    this.getRecord(variable).set(variable.id!, value);
  }

  print() {
    let result = `Stack (${Date.now()}ms)\n`;
    for(const record of this.reverse())
      result += record.toString();
    console.log(result);
  }
}
