import * as React from "react";
import * as AST from "./../AST";

import Scope from "./scope";

export default class FunctionReferenceUI extends React.Component<{ reference: AST.IFunctionReference, scope: Scope }, {}> {
  render() {
    const { reference, scope } = this.props;

    const fn = scope.lookupFunction(reference);

    return <span className="function-reference">
      <span className="function-reference-name">{fn.name || "unnamed"}</span>
    </span>;
  }
}