import * as React from "react";
import * as AST from "./../AST";

import CallUI from "./call";
import GetUI from "./get";
import SetUI from "./set";
import LiteralUI from "./literal";

import Scope from "./scope";

export default class ExpressionUI extends React.Component<{ expression: AST.IExpression, scope: Scope }, {}> {
  render() {
    const { expression, scope } = this.props;

    console.log(expression);

    return ( 
      (expression.call && <CallUI call={expression.call} scope={scope} />) ||
      (expression.get && <GetUI get={expression.get} scope={scope} />) ||
      (expression.set && <SetUI set={expression.set} scope={scope} />) ||
      (expression.literal && <LiteralUI literal={expression.literal} scope={scope} />) ||
      <div className="expression">NOT SUPPORTED </div>
    );
  }
}