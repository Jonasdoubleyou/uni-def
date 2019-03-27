import * as React from "react";
import * as AST from "./../AST";

import ExpressionUI from "./expression";
import VariableUI from "./variable";
import TypeReference from "./typeReference";

import Scope from "./scope";

export default class SetUI extends React.Component<{ set: AST.ISet, scope: Scope }, {}> {
  render() {
   const { set, scope } = this.props;

   const variable = scope.lookupVariable(set.set!);

    const prefix = set.initialization ? (set.constant ? "const" : "let") : "";

    return <span className="expression set">
      <span className="keyword">{prefix}</span> <VariableUI variable={variable} scope={scope} />{
        prefix ?
        [": ", <TypeReference reference={variable.type!} scope={scope} />]
        : ""
       } = {(set.value && <ExpressionUI expression={set.value} scope={scope} />)}
    </span>;
  }
}