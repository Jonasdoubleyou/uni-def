import * as React from "react";

interface Props {
  keywords: string[];

}

interface State {
  possible: string[];
}

export default class Input extends React.Component<Props, State> {
  input: HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.state = { possible: [] };
  }

  render() {
    return (
      <div className="code-input">
        <input ref={it => this.input = it as HTMLInputElement} onChange={() => this.onChange()} />
        <div className="hints">
          {this.state.possible.map(keyword => {
            return (<div>{keyword}</div>)
          })}
        </div>
      </div>
    );
  }

  onChange() {
    const { value } = this.input;

    this.setState({
      possible: this.props.keywords.filter(keyword => keyword.slice(0, value.length))
    });
  }
}