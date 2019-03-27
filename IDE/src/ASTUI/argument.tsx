import * as React from "react";
import * as AST from "./../AST";

import Scope from "./scope";
import ExpressionUI from "./expression";

export default class ArgumentUI extends React.Component<{ argument: AST.IArgument, reference: AST.IFunctionReference, scope: Scope }, {}> {
  render() {
    const { argument, reference, scope } = this.props;

    const fn = scope.lookupFunction(reference);

    const variable = fn.parameters!.find(it => it!.id === argument.id);

    if(!variable) throw new Error("Argument / Parameter missmatch!");

    return <span className="argument"><span  className="argument-name">{variable.name || "unnamed"}</span> = <ExpressionUI expression={argument.value!} scope={scope} /></span>;
  }
}