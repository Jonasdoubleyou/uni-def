import runtime from "./runtime";
import Channel from "./channel";
import * as AST from "./../AST/";
import { Loader } from "./loader/interface";

export default class Interpreter {
  worker?: Worker;
  channel?:  Channel;

  moduleLoaders = [] as Loader[];

  async load() {
    // load worker from function, stolen from https://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file
    this.worker = new Worker(URL.createObjectURL( new Blob([ '(', runtime.toString(),')()' ], { type: 'application/javascript' } )));
    this.channel = new Channel(this.worker);

    if(!this.moduleLoaders.length) {
      throw new Error("ModuleLoaders must be provided to Interpreter");
    }

    this.channel!.implement("module-loader", async (reference: AST.ModuleReference) => {
      for(const loader of this.moduleLoaders) {
          try {
            if(await loader.has(reference)) continue;

            return await loader.load(reference);
          } catch(e) {
            console.error(`Module Loader ${loader.name} failed with`, e);
            // Ignore, let other loaders handle this
          }
      }

      throw new Error("Module not found");
    });

    return this.channel.once("startup");
  }

  loadModule(module: AST.IModule): Promise<string> {
    return this.channel!.call("load-module", module);
  }

  provideModuleLoader(loader: Loader) {
    this.moduleLoaders.push(loader);
  }

  runModule(reference: AST.IModuleReference): Promise<{}> {
    return this.channel!.call("run-module", reference);
  }
}




async function DefaultInterpreter() {
  const interpreter = new Interpreter();

  interpreter.loadModule()
  await interpreter.load()
  
  console.log("Interpreter loaded and ready");

  return interpreter;
}