import * as AST from "../AST/index";
import { Loader } from "./loader/interface";
import { NativeLoader } from "./loader/uni-native";
import { ObjectDictionary } from "./Object";
import { NativeBinding, getNativeBinding } from "./nativebindings";


/* A Dictionary contains all types and code 
   necessary to execute UNI */
export class Dictionary {
    private types = new Map<number, AST.IComplexType>();
    private functions = new Map<number, AST.IFunction>();
    private modules = new Map<number, AST.IModule>();

    private objectDictionary = new Map<number, ObjectDictionary>();
    private nativeBindings = new Map<number, NativeBinding>();

    readonly initializationTasks = [] as AST.ICall[];

    private static loaders: Loader[] = [
        NativeLoader
    ];

    private inLoad = new Set<number>();

    async loadModule(reference: AST.IModuleReference) {
      if(this.modules.has(reference.moduleID!))
        return;

      if(this.inLoad.has(reference.moduleID!))
        throw new Error(`[DIC] Circular Module Reference to ${reference.domain}`);

      let module: AST.IModule;

      if(!Dictionary.loaders.length)
        throw new Error(`[DIC] No module loaders defined`);
        
      for(const loader of Dictionary.loaders)
        if(await loader.has(reference))
            module = await loader.load(reference);
    
      if(!module)
        throw new Error(`[DIC] No loader could provide a Module for ${reference.domain}`);
    
      // TODO: Correctly generate moduleIDs and replace them with unique ones
      for(const dependency of module.dependencies!)
        await this.loadModule(dependency);

      for(const nativeBinding of module.nativeBindings!) {
        const bindings = getNativeBinding(nativeBinding);
        for(const binding of bindings) {
          const id = Dictionary.uniqueID(binding.function.function, binding.function.moduleID);
          this.nativeBindings.set(id, binding);
      }

      for(const type of module.types!)
        this.setType(module, type);

      // TODO: Verify types

      for(const fn of module.functions!)
        this.setFunction(module, fn);

      // TODO: Verify functions

      for(const fn of module.functions!)
        for(const decorator of fn.decorators!) {
          const reference = decorator.function!.fun!;
          if(!reference)
            throw new Error(`[DIC] Unknown Function Reference`);

          this.initializationTasks.push({
              function: { fun: reference },
              arguments: [
                  { id: 0, value: { fun: { function: fn.id, moduleID: module.id?.moduleID } } },
                  ...decorator.arguments!
              ]
          })
        }
      }
    }

    static uniqueID(moduleID: number, typeID: number): number {
        return moduleID << 16 + typeID;
    }

    setType(module: AST.IModule, type: AST.IComplexType) {
        const id = Dictionary.uniqueID(module.id!.moduleID!, type.id!);

        this.types.set(
            id,
            type!
        );

        if(type.object) {
            const objectDic = new ObjectDictionary(type.object!, this);
            this.objectDictionary.set(id, objectDic);
        }
    }

    getObjectDictionary(id: number) {
        if(!this.objectDictionary.has(id))
            throw new Error(`[DIC] No Object Dictionary ${id} exists`);

        return this.objectDictionary.get(id);
    }

    getType(reference: AST.IComplexTypeReference) {
        const id = Dictionary.uniqueID(reference.moduleID!, reference.type!);

        const module = this.modules.get(reference.moduleID!);
        const type = this.types.get(id);

        if (!type)
            throw new Error(`Cannot resolve type ${reference.moduleID}/${reference.type}`);

        return { type, module };
    }

    getFunction(reference: AST.IFunctionReference) {
        const module = this.modules.get(reference.moduleID!);
        const fn = this.functions.get(
            Dictionary.uniqueID(reference.moduleID!, reference.function!)
        );

        if (!fn)
            throw new Error(`Cannot resolve function ${reference.moduleID}/${reference.function}`);

        return { module, fn };
    }

    setFunction(module: AST.IModule, fn: AST.IFunction) {
        this.functions.set(
            Dictionary.uniqueID(module.id!.moduleID!, fn.id!),
            fn
        );
    }

    getExpressionType(expression: AST.IExpression): AST.ITypeReference {
        // TODO While verifying, generate inline types that can then be retrieved
    }
}

