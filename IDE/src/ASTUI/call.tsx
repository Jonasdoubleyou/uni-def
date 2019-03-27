import * as React from "react";
import * as AST from "./../AST";

import Scope from "./scope";
import FunctionReference from "./functionReference";

import ArgumentUI from "./argument";

export default class CallUI extends React.Component<{ call: AST.ICall, scope: Scope }, {}> {
  render() {
   const { call, scope } = this.props;

    console.log(call);

    return <span className="expression call">
        <FunctionReference scope={scope} reference={call.function!} />({
          ...call.arguments!.map(it => it && (<ArgumentUI argument={it!} reference={call.function!} scope={scope} />) || "what?")
        })
    </span>;
  }
}

