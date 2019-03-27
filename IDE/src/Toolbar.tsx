import * as React from "react";

import { app } from "./App";

interface Props {

}

export default class Toolbar extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="toolbar" >
        <div className="btn" onClick={() => this.run()}>RUN</div>
        <label htmlFor="file-upload" className="custom-file-upload">
          <div className="btn">IMPORT</div>
        </label>
        <input className="btn" autoComplete="off" id="file-upload" type="file" onChange={(e: any) => this.import(e.target.files[0])} />
        <div className="btn" onClick={() => app.export()} >EXPORT</div>
      </div>

    );
  }

  run() {
    app.notify({ 
      level: "warning", 
      title: "Ausführen noch nicht unterstützt",
      message: "Zum ausführen mit dem python interpreter:\n1) EXPORT\n2) mit dem Interpreter ausführen",
    });
  }

  import(file: File) {
    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
          const bytes = new Uint8Array(reader.result as ArrayBuffer);
          app.loadNative(bytes);
    });

    reader.addEventListener("error", function() {
      app.notify({
        level: "error",
        title: "File could not be loaded",
        message: JSON.stringify(reader.error)
      })
    })

    reader.readAsArrayBuffer(file);

  }
}