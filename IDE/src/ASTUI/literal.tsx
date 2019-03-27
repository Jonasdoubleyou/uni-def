import * as React from "react";
import * as AST from "./../AST";


import Scope from "./scope";
import Editable from "./../Editable";

export default class LiteralUI extends React.Component<{ literal: AST.ILiteral, scope: Scope }, {}> {
  render() {
    const { literal } = this.props;

    if(literal.str) {
      return <span className="literal str">"<Editable value={literal.str} onChange={v => literal.str = v} validate={it => it.includes('"') && `Don't use " as it is missleading!`} />"</span>;
    }

    if(literal.integer) {
      return <span className="literal integer">{literal.integer}</span>
    }

    if(literal.floating) {
      return <span className="literal floating">{literal.floating}</span>;
    }

    if(literal.bool) {
      return <span className="literal bool">{literal.bool}</span>;
    }

    return <span className="literal">Unsupported Primitive</span>;
  }
}
