import Channel from "./channel";
import * as AST from "./../AST/index";

export default function runtime() {
  const channel = new Channel(self as any);

  channel.implement("load-module", (module: AST.IModule) => {

    return `Module ${module.id} loaded!`;
  });

  channel.implement("run-module", (reference: AST.IModuleReference) => {

  });

  channel.trigger("startup", Date.now());
}
