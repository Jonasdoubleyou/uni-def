import * as AST from "../AST/index";
import { Dictionary } from "./dictionary";
import { Value } from "./memory";

interface Handle {
  pos: number, 
  size: number;
}

/* The object dictionary provides means to represent an object as a
   single Uint8Array, whereas all fields are certain slices in that array */
   
export class ObjectDictionary {
  dictionary: Map<number, Handle>;

  constructor(public readonly type: AST.IObjectType, dictionary: Dictionary) {

  }

  lookup(access: AST.IAccess, value: Value): Value {
    
  }
}