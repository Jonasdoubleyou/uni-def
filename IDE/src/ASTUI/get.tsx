import * as React from "react";
import * as AST from "./../AST";

import Scope from "./scope";

import VariableUI from "./variable";

export default class GetUI extends React.Component<{ get: AST.IGet, scope: Scope }, {}> {
  render() {
    const { get, scope } = this.props;

   const variable = scope.lookupVariable(get.get!);

    return <span className="expression get">
      <VariableUI variable={variable} scope={scope} />
    </span>;
  }
}