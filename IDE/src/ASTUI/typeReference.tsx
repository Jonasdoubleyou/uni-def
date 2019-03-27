import * as React from "react";
import * as AST from "./../AST";

import Scope from "./scope";

export default class TypeReferenceUI extends React.Component<{ reference: AST.ITypeReference, scope: Scope }, {}> {
  render() {
    const { reference } = this.props;

    return <span className="typereference">
      {primitiveToString(reference.primitive as number)}
    </span>
  }



}

function primitiveToString(id: number): string {
  return {
    0: "String",
    1: "Integer",
    2: "Float",
    3: "Boolean",
    4: "Void",
  }[id];

}