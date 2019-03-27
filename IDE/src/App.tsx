import * as React from 'react';
import './App.css';

import Code from "./Code";
import Toolbar from "./Toolbar";

import * as AST from "./AST";

export let app: App;

import verify from "./verify";


interface Notification {
  level: "info" | "warning" | "error";
  title: string;
  message: string;
}

class NotificationUI extends React.Component<{ notification: Notification, onClick: () => void, }, {}> {
  render() {
    const { level, title, message} = this.props.notification;

    return <div className={"notification notification-" + level} onClick={(e) => { e.stopPropagation(); this.props.onClick(); }} >
     <div className="notification-title">{title}</div>
     {message}
     </div>;
  }
}

interface State {
  notifications: Notification[];
  module?: AST.Module;
}


class App extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    app = this;
  }
  state = {
    notifications: []
  } as State;

  componentDidMount() {
    this.notify(      {
        level: "info",
        title: "Hello world",
        message: "Welcome to the UNI IDE\nThe testcase can be imported using the IMPORT button"
    });
  }

  public render() {
    return <div>
      <Toolbar />,

      {this.state.module
        ? <Code module={this.state.module as AST.Module} />
        : this.start()}

      <div id="notification-area">
       {this.state.notifications.map(it => (<NotificationUI notification={it} onClick={() => this.removeNotification(it)} />))}
      </div>
    </div>;
  }

  start() {
    return <div className="function">
      <h3>UNI IDE</h3>
      <h4>Already implemented:</h4>
      - loading of .uni files<br />
      - Eexporting of .uni files<br />
      Visualization of:<br />
      - modules<br />
      - functions<br />
      - variables (get & set)<br />
      - function calls<br />
      - literals<br />
      - variable types<br />

      <h4>TODO</h4>
      - Editing of UNI code

    </div>;
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info);
    this.notify({ level: "error", title: "Unexpected Error occured", message: error.message });
  }

  public assert<T>(value: T | undefined, title: string, message: string): T {
    if(value === undefined) {
      this.notify({ level: "error", title, message });
      throw new Error("Type assertion error");
    }

    return value as T;
  }

  public loadNative(bytes: Uint8Array) {
    this.load(AST.Module.decode(bytes));
  }

  public load(module: AST.Module) {
    try {
      verify(module);
      this.setState({ module });


      app.notify({
        level: "info",
        title: "Datei Importiert!",
        message: ""
      });
    } catch(error) {
      this.notify({
        level: "error",
        title: "Invalid AST structure",
        message: (error || {}).message,
        error,
      } as any)
    }

  }

  public export() {
    if(!this.state.module) {
      this.notify({ level: "error", title: "Wie wärs wenn du erst importierst?", message: "" });
      return;
    }

    try {
      verify(this.state.module);

      const bytes = AST.Module.encode(this.state.module).finish();
      const name = "test.uni";

      const link = document.createElement("a");
      link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(new TextDecoder().decode(bytes)));
      link.setAttribute('download', name);
      link.style.display = 'none';

      document.body.appendChild(link);

      link.click();
    } catch(error) {
      this.notify({
        level: "error",
        title: "Unexpected Error: Cannot export module as it is in invalid state",
        message: (error || {}).message,
      });
    }

  }

  public notify(notification: Notification) {
    console.log("notification", notification);

    this.setState(({ notifications}) => ({ notifications: notifications.concat(notification) }));

    setTimeout(() => {
      this.removeNotification(notification);
    }, 5 * 1000);
  }

  private removeNotification(notification: Notification) {
    this.setState(({ notifications}) => ({ notifications: notifications.filter(it => it.title !== notification.title && it.message !== notification.message)}))
  }
}

export default App;
