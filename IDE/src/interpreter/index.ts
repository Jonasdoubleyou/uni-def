import runtime from "./runtime";
import Channel from "./channel";
import * as AST from "./../AST/";

export default class Interpreter {
  worker?: Worker;
  channel?:  Channel;

  async load() {
    // load worker from function, stolen from https://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file
    this.worker = new Worker(URL.createObjectURL( new Blob([ '(', runtime.toString(),')()' ], { type: 'application/javascript' } )));
    this.channel = new Channel(this.worker);

    return this.channel.once("startup");
  }

  loadModule(module: AST.IModule): Promise<string> {
    return this.channel!.call("load-module", module);
  }

  runModule(reference: AST.IModuleReference): Promise<{}> {
    return this.channel!.call("run-module", reference);
  }
}
