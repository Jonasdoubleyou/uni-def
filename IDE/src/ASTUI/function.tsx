import * as React from "react";
import * as AST from "./../AST";

import VariableUI from "./variable";
import ExpressionUI from "./expression";

import Scope from "./scope";

export default class FunctionUI extends React.Component<{ fn: AST.IFunction, module: AST.IModule, scope?: Scope }, {}> {
  render() {
    const { fn, module, scope: parent } = this.props;

    const scope = parent ? parent.innerFunction(fn) : new Scope(module, fn);

    return <div className="function">
    <h3 className="function-head">{fn.name}(<span className="arguments">{(fn.parameters || []).map(it => <span className="argument"><VariableUI variable={it} scope={scope} />, </span>)}</span>) </h3>

    <div className="block">
      {(fn.body || []).map(it => <div className="statement"><ExpressionUI expression={it} scope={scope} /></div>)}
    </div>
    
    </div>;
  }
}