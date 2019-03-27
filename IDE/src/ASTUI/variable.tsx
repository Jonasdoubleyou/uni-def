import * as React from "react";
import * as AST from "./../AST";

import Scope from "./scope";

export default class VariableUI extends React.Component<{ variable: AST.IVariable, scope: Scope }, {}> {
  render() {
    const { variable } = this.props;

    return <span className="variable">
      <span className="variable-name">{variable.name || "unnamed"}</span>
      <span className="variable-id">{variable.id}</span>
    </span>;
  }
}