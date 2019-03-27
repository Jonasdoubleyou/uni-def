import * as React from "react";
import * as AST from "./AST";
import ModuleUI from "./ASTUI/module";

interface Props {
 module: AST.Module;
}

interface State {
}

export default class Code extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

  }

  render() {
    return <div id="code">
      <ModuleUI module={this.props.module} />
    </div>;
  }
}