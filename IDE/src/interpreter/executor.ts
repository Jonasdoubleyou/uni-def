import * as AST from "./../AST";

import { Dictionary } from "./dictionary";
import { Memory, Value } from "./memory";
import { Literal } from "./literal";

type Operation = string;

export class Executor {
    private dictionary: Dictionary;
    private memory = new Memory();

    constructor(dictionary: Dictionary) {
        this.dictionary = dictionary;
    }

    initialize() {
        for(const call of this.dictionary.initializationTasks) {
            this.evaluate(`init`, call).runTillCompletion();
        }

        console.log(`[EXEC] Initialized!`);
    }

    evaluate(name: string, call: AST.ICall): Runner {
      const iterator = this.call(call);
      return new Runner(name, iterator);
    }

    private *expression(expression: AST.IExpression): Generator<Operation, Value> {
        if(expression.access) {
            return yield* this.access(expression.access!);
        } else if(expression.call) {
            return yield* this.call(expression.call!);
        } else if(expression.comment) {
            // ignoring comments
        } else if(expression.fun) {
            return yield* this.fun(expression.fun);
        } else if(expression.get) {
            return yield* this.get(expression.get);
        } else if(expression.literal) {
            return yield* this.literal(expression.literal);
        } else if(expression.raw) {
            throw new Error(`Cannot handle unparsed modules`);
        } else if(expression.return) {
            return yield* this.return(expression.return);
        } else if(expression.set) {
            return yield* this.set(expression.set);
        } else if(expression.type) {
            return yield* this.type(expression.type);
        } 
        
        throw new Error(`[EXEC] Unknown Expression`);
    }

    private *access(expression: AST.IAccess): Generator<Operation, Value> {
        yield `ACCESS type lookup`;
        const type = this.dictionary.getExpressionType(expression.object!);
        const id = Dictionary.uniqueID(type.complex?.moduleID!, type.complex?.type!);
        const objDic = this.dictionary.getObjectDictionary(id);

        yield `ACCESS object`;
        const value = yield* this.expression(expression.object!);

        return objDic?.lookup(expression, value)!;
    }

    private *call(expression: AST.ICall): Generator<Operation, Value> {
        yield `CALL evaluate function`;

        const reference = yield* this.expression(expression.function!);
  
        if(reference.type !== "function")
          throw new Error(`Called expression must be function`);
  
        const { value: fn, moduleID, functionID } = reference;
  
        yield `CALL allocate on stack (${fn.name})`;
  
        this.memory.push(fn, Dictionary.uniqueID(functionID, moduleID));

      yield `CALL evaluate arguments`;

      for(const argument of expression.arguments!) {
          const value = yield* this.expression(argument.value!);
          this.memory.set({ functionID, moduleID, id: argument.id }, value);
      }

      yield `CALL run function`;

      for(const statement of fn.body!) {
        const result = yield* this.expression(statement);
        if(result.type === "return") {
            yield `CALL unwind stack`;
            this.memory.pop();

            if(result.from !== fn) {
                yield `CALL unwind passthrough`;
                return result;
            } else if(result.up === 0) {
                yield `CALL unwind reached target`;
                return { type: "value", value: result.value } as const;
            } else {
                yield `CALL unwind lexical passthrough`;
                return { type: "return", up: result.up - 1, value: result.value, from: this.dictionary.getFunction(result.from.lexicalParent!).fn } as const;
            }
        
        }
      }

      yield `CALL end without return`;
      return { type: "value", value: Literal.VOID } as const;
    }

    private *fun(expression: AST.IFunctionReference): Generator<Operation, Value> {
        yield `FUN ${expression.function!} at module ${expression.moduleID}`;
        
        const { fn, module } = this.dictionary.getFunction(expression);
    
        return { type: "function", value: fn, functionID: fn.id!, moduleID: module?.id?.moduleID!  } as const;
    }

    private *get(expression: AST.IGet): Generator<Operation, Value> {
        yield `GET ${expression.get?.id} at function ${expression.get?.functionID} at module ${expression.get?.moduleID}`;
        const value = this.memory.get(expression.get!);
        yield `  value: ${value?.value}`;

        if(!value)
            throw new Error(`Cannot GET - Variable not initialized!`);

        return value;
    }

    private *literal(expression: AST.ILiteral): Generator<Operation, Value> {
        yield `LITERAL ${expression.data}`;

        const literal = Literal.parse(expression, this.dictionary);
        
        const value: Value = { type: "value", value: literal };

        return value;
    }

    private *set(expression: AST.ISet): Generator<Operation, Value> {
        yield `SET evaluate`;
        const value = yield* this.expression(expression.value!);
        yield `SET ${expression.set?.id} at function ${expression.set?.functionID} at module ${expression.set?.moduleID}`;
        this.memory.set(expression.set!, value);
        return value;
    }

    private *type(expression: AST.ITypeReference): Generator<Operation, Value> {
        yield `TYPE ${expression.complex?.type} at module ${expression.complex?.moduleID}`;

        // TODO: Generic type references
        const { type, module } = this.dictionary.getType(expression.complex!);

        return { type: "type", value: type, typeID: type.id!, moduleID: module?.id?.moduleID! } as const;
    }

    private *return(expression: AST.IReturn): Generator<Operation, Value>  {
        yield `RETURN up by ${expression.up}`;
        const result = yield* this.expression(expression.value!);
        if(result.type !== "value")
            throw new Error(`return expression must be value`);

        return { type: "return", value: result.value, up: expression.up!, from: this.memory.top().fn } as const;
    }
}

class Runner {
    constructor(private name: string, private iterator: Iterator<Operation, Value>) {}

    runTillCompletion(): Value {  
        console.log(`[RUNNER] ${this.name} - Run till completion`);
        while(true) {
            const result = this.iterator.next();
            if(result.done) {
                return result.value;
            } else {
                console.log(`${this.name} ${result.value}`);
            }
        }
    }
}