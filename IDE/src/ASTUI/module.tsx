import * as React from "react";
import * as AST from "./../AST";

import FunctionUI from "./function";

export default class ModuleUI extends React.Component<{ module: AST.IModule }, {}> {
  render() {
    const { module } = this.props;

    return <div className="module">
      <h2>MODULE {(module as any).id.domain.join(".")} # {(module.id || { moduleID: "?"}).moduleID}</h2>
      <FunctionUI fn={module.main!} module={module} />
      {module.functions!.map(fn => <FunctionUI fn={fn} module={module} />)}
    </div>;
  }
}