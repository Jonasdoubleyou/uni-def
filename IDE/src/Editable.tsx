import * as React from "react";

interface Props {
  value: string;
  validate?: (value: string) => string | undefined | false;

  onChange(value: string): void;
}

interface State {
  error?: string;
}

export default class Editable extends React.Component<Props, State> {
  state = {} as State;

  render() {
    const { error } = this.state;

    return [
      <span contentEditable onInput={e => this.handleChange((e as any).target.textContent)} onKeyDown={e => this.acceptKeyPress(e) || e.preventDefault() }>{this.props.value}</span>,
      error && <span className="editable-error">{"<--"} {error}</span>
    ];
  }

  acceptKeyPress(event: React.KeyboardEvent): boolean {
    console.log("acceptKeyPress", event.key);

    if(event.key === "Enter") {
      return false;
    }

    return true;
  }

  handleChange(value: string) {
    console.log("handleChange", value);

    if(this.props.validate) {
      const error = this.props.validate(value);
      this.setState({ error: error || undefined });
      if(error) return;
    }

    this.props.onChange(value);
  }
}
