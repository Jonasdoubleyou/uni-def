import * as $protobuf from "protobufjs";
/** Properties of a TypeReference. */
export interface ITypeReference {

    /** TypeReference primitive */
    primitive?: (PrimitiveType|null);
}

/** Represents a TypeReference. */
export class TypeReference implements ITypeReference {

    /**
     * Constructs a new TypeReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITypeReference);

    /** TypeReference primitive. */
    public primitive: PrimitiveType;

    /** TypeReference primitiveOrComplex. */
    public primitiveOrComplex?: "primitive";

    /**
     * Creates a new TypeReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TypeReference instance
     */
    public static create(properties?: ITypeReference): TypeReference;

    /**
     * Encodes the specified TypeReference message. Does not implicitly {@link TypeReference.verify|verify} messages.
     * @param message TypeReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TypeReference message, length delimited. Does not implicitly {@link TypeReference.verify|verify} messages.
     * @param message TypeReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TypeReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TypeReference;

    /**
     * Decodes a TypeReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TypeReference;

    /**
     * Verifies a TypeReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TypeReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TypeReference
     */
    public static fromObject(object: { [k: string]: any }): TypeReference;

    /**
     * Creates a plain object from a TypeReference message. Also converts values to other types if specified.
     * @param message TypeReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TypeReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TypeReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Type. */
export interface IType {

    /** Type id */
    id?: (number|null);
}

/** Represents a Type. */
export class Type implements IType {

    /**
     * Constructs a new Type.
     * @param [properties] Properties to set
     */
    constructor(properties?: IType);

    /** Type id. */
    public id: number;

    /**
     * Creates a new Type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Type instance
     */
    public static create(properties?: IType): Type;

    /**
     * Encodes the specified Type message. Does not implicitly {@link Type.verify|verify} messages.
     * @param message Type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Type message, length delimited. Does not implicitly {@link Type.verify|verify} messages.
     * @param message Type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Type;

    /**
     * Decodes a Type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Type;

    /**
     * Verifies a Type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Type
     */
    public static fromObject(object: { [k: string]: any }): Type;

    /**
     * Creates a plain object from a Type message. Also converts values to other types if specified.
     * @param message Type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** PrimitiveType enum. */
export enum PrimitiveType {
    String = 0,
    Integer = 1,
    Float = 2,
    Boolean = 3,
    Void = 4
}

/** Properties of a Function. */
export interface IFunction {

    /** Function id */
    id?: (number|null);

    /** Function name */
    name?: (string|null);

    /** Function parameters */
    parameters?: (IVariable[]|null);

    /** Function returns */
    returns?: (ITypeReference|null);

    /** Function variables */
    variables?: (IVariable[]|null);

    /** Function body */
    body?: (IExpression[]|null);
}

/** Represents a Function. */
export class Function implements IFunction {

    /**
     * Constructs a new Function.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFunction);

    /** Function id. */
    public id: number;

    /** Function name. */
    public name: string;

    /** Function parameters. */
    public parameters: IVariable[];

    /** Function returns. */
    public returns?: (ITypeReference|null);

    /** Function variables. */
    public variables: IVariable[];

    /** Function body. */
    public body: IExpression[];

    /**
     * Creates a new Function instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Function instance
     */
    public static create(properties?: IFunction): Function;

    /**
     * Encodes the specified Function message. Does not implicitly {@link Function.verify|verify} messages.
     * @param message Function message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Function message, length delimited. Does not implicitly {@link Function.verify|verify} messages.
     * @param message Function message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Function message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Function
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Function;

    /**
     * Decodes a Function message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Function
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Function;

    /**
     * Verifies a Function message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Function message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Function
     */
    public static fromObject(object: { [k: string]: any }): Function;

    /**
     * Creates a plain object from a Function message. Also converts values to other types if specified.
     * @param message Function
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Function, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Function to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FunctionReference. */
export interface IFunctionReference {

    /** FunctionReference moduleID */
    moduleID?: (number|null);

    /** FunctionReference function */
    "function"?: (number|null);
}

/** Represents a FunctionReference. */
export class FunctionReference implements IFunctionReference {

    /**
     * Constructs a new FunctionReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFunctionReference);

    /** FunctionReference moduleID. */
    public moduleID: number;

    /** FunctionReference function. */
    public function: number;

    /**
     * Creates a new FunctionReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FunctionReference instance
     */
    public static create(properties?: IFunctionReference): FunctionReference;

    /**
     * Encodes the specified FunctionReference message. Does not implicitly {@link FunctionReference.verify|verify} messages.
     * @param message FunctionReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFunctionReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FunctionReference message, length delimited. Does not implicitly {@link FunctionReference.verify|verify} messages.
     * @param message FunctionReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFunctionReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FunctionReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FunctionReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FunctionReference;

    /**
     * Decodes a FunctionReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FunctionReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FunctionReference;

    /**
     * Verifies a FunctionReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FunctionReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FunctionReference
     */
    public static fromObject(object: { [k: string]: any }): FunctionReference;

    /**
     * Creates a plain object from a FunctionReference message. Also converts values to other types if specified.
     * @param message FunctionReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FunctionReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FunctionReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a VariableReference. */
export interface IVariableReference {

    /** VariableReference id */
    id?: (number|null);

    /** VariableReference functionID */
    functionID?: (number|null);

    /** VariableReference moduleID */
    moduleID?: (number|null);
}

/** Represents a VariableReference. */
export class VariableReference implements IVariableReference {

    /**
     * Constructs a new VariableReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVariableReference);

    /** VariableReference id. */
    public id: number;

    /** VariableReference functionID. */
    public functionID: number;

    /** VariableReference moduleID. */
    public moduleID: number;

    /**
     * Creates a new VariableReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VariableReference instance
     */
    public static create(properties?: IVariableReference): VariableReference;

    /**
     * Encodes the specified VariableReference message. Does not implicitly {@link VariableReference.verify|verify} messages.
     * @param message VariableReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVariableReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VariableReference message, length delimited. Does not implicitly {@link VariableReference.verify|verify} messages.
     * @param message VariableReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVariableReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VariableReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VariableReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VariableReference;

    /**
     * Decodes a VariableReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VariableReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VariableReference;

    /**
     * Verifies a VariableReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VariableReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VariableReference
     */
    public static fromObject(object: { [k: string]: any }): VariableReference;

    /**
     * Creates a plain object from a VariableReference message. Also converts values to other types if specified.
     * @param message VariableReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VariableReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VariableReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Variable. */
export interface IVariable {

    /** Variable id */
    id?: (number|null);

    /** Variable name */
    name?: (string|null);

    /** Variable type */
    type?: (ITypeReference|null);
}

/** Represents a Variable. */
export class Variable implements IVariable {

    /**
     * Constructs a new Variable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVariable);

    /** Variable id. */
    public id: number;

    /** Variable name. */
    public name: string;

    /** Variable type. */
    public type?: (ITypeReference|null);

    /**
     * Creates a new Variable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Variable instance
     */
    public static create(properties?: IVariable): Variable;

    /**
     * Encodes the specified Variable message. Does not implicitly {@link Variable.verify|verify} messages.
     * @param message Variable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Variable message, length delimited. Does not implicitly {@link Variable.verify|verify} messages.
     * @param message Variable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Variable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Variable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Variable;

    /**
     * Decodes a Variable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Variable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Variable;

    /**
     * Verifies a Variable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Variable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Variable
     */
    public static fromObject(object: { [k: string]: any }): Variable;

    /**
     * Creates a plain object from a Variable message. Also converts values to other types if specified.
     * @param message Variable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Variable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Variable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Get. */
export interface IGet {

    /** Get get */
    get?: (IVariableReference|null);
}

/** Represents a Get. */
export class Get implements IGet {

    /**
     * Constructs a new Get.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGet);

    /** Get get. */
    public get?: (IVariableReference|null);

    /**
     * Creates a new Get instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Get instance
     */
    public static create(properties?: IGet): Get;

    /**
     * Encodes the specified Get message. Does not implicitly {@link Get.verify|verify} messages.
     * @param message Get message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Get message, length delimited. Does not implicitly {@link Get.verify|verify} messages.
     * @param message Get message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Get message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Get
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Get;

    /**
     * Decodes a Get message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Get
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Get;

    /**
     * Verifies a Get message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Get message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Get
     */
    public static fromObject(object: { [k: string]: any }): Get;

    /**
     * Creates a plain object from a Get message. Also converts values to other types if specified.
     * @param message Get
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Get, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Get to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Set. */
export interface ISet {

    /** Set set */
    set?: (IVariableReference|null);

    /** Set value */
    value?: (IExpression|null);

    /** Set initialization */
    initialization?: (boolean|null);

    /** Set constant */
    constant?: (boolean|null);
}

/** Represents a Set. */
export class Set implements ISet {

    /**
     * Constructs a new Set.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISet);

    /** Set set. */
    public set?: (IVariableReference|null);

    /** Set value. */
    public value?: (IExpression|null);

    /** Set initialization. */
    public initialization: boolean;

    /** Set constant. */
    public constant: boolean;

    /**
     * Creates a new Set instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Set instance
     */
    public static create(properties?: ISet): Set;

    /**
     * Encodes the specified Set message. Does not implicitly {@link Set.verify|verify} messages.
     * @param message Set message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Set message, length delimited. Does not implicitly {@link Set.verify|verify} messages.
     * @param message Set message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Set message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Set
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Set;

    /**
     * Decodes a Set message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Set
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Set;

    /**
     * Verifies a Set message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Set message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Set
     */
    public static fromObject(object: { [k: string]: any }): Set;

    /**
     * Creates a plain object from a Set message. Also converts values to other types if specified.
     * @param message Set
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Set, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Set to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Expression. */
export interface IExpression {

    /** Expression type */
    type?: (ITypeReference|null);

    /** Expression get */
    get?: (IGet|null);

    /** Expression set */
    set?: (ISet|null);

    /** Expression call */
    call?: (ICall|null);

    /** Expression literal */
    literal?: (ILiteral|null);

    /** Expression return */
    "return"?: (IReturn|null);
}

/** Represents an Expression. */
export class Expression implements IExpression {

    /**
     * Constructs a new Expression.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExpression);

    /** Expression type. */
    public type?: (ITypeReference|null);

    /** Expression get. */
    public get?: (IGet|null);

    /** Expression set. */
    public set?: (ISet|null);

    /** Expression call. */
    public call?: (ICall|null);

    /** Expression literal. */
    public literal?: (ILiteral|null);

    /** Expression return. */
    public return?: (IReturn|null);

    /** Expression expressionType. */
    public expressionType?: ("get"|"set"|"call"|"literal"|"return");

    /**
     * Creates a new Expression instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Expression instance
     */
    public static create(properties?: IExpression): Expression;

    /**
     * Encodes the specified Expression message. Does not implicitly {@link Expression.verify|verify} messages.
     * @param message Expression message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Expression message, length delimited. Does not implicitly {@link Expression.verify|verify} messages.
     * @param message Expression message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Expression message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Expression;

    /**
     * Decodes an Expression message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Expression;

    /**
     * Verifies an Expression message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Expression message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Expression
     */
    public static fromObject(object: { [k: string]: any }): Expression;

    /**
     * Creates a plain object from an Expression message. Also converts values to other types if specified.
     * @param message Expression
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Expression, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Expression to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Call. */
export interface ICall {

    /** Call function */
    "function"?: (IFunctionReference|null);

    /** Call arguments */
    "arguments"?: (IArgument[]|null);
}

/** Represents a Call. */
export class Call implements ICall {

    /**
     * Constructs a new Call.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICall);

    /** Call function. */
    public function?: (IFunctionReference|null);

    /** Call arguments. */
    public arguments: IArgument[];

    /**
     * Creates a new Call instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Call instance
     */
    public static create(properties?: ICall): Call;

    /**
     * Encodes the specified Call message. Does not implicitly {@link Call.verify|verify} messages.
     * @param message Call message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Call message, length delimited. Does not implicitly {@link Call.verify|verify} messages.
     * @param message Call message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICall, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Call message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Call
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Call;

    /**
     * Decodes a Call message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Call
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Call;

    /**
     * Verifies a Call message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Call message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Call
     */
    public static fromObject(object: { [k: string]: any }): Call;

    /**
     * Creates a plain object from a Call message. Also converts values to other types if specified.
     * @param message Call
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Call to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Argument. */
export interface IArgument {

    /** Argument id */
    id?: (number|null);

    /** Argument value */
    value?: (IExpression|null);
}

/** Represents an Argument. */
export class Argument implements IArgument {

    /**
     * Constructs a new Argument.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArgument);

    /** Argument id. */
    public id: number;

    /** Argument value. */
    public value?: (IExpression|null);

    /**
     * Creates a new Argument instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Argument instance
     */
    public static create(properties?: IArgument): Argument;

    /**
     * Encodes the specified Argument message. Does not implicitly {@link Argument.verify|verify} messages.
     * @param message Argument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Argument message, length delimited. Does not implicitly {@link Argument.verify|verify} messages.
     * @param message Argument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Argument message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Argument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Argument;

    /**
     * Decodes an Argument message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Argument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Argument;

    /**
     * Verifies an Argument message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Argument message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Argument
     */
    public static fromObject(object: { [k: string]: any }): Argument;

    /**
     * Creates a plain object from an Argument message. Also converts values to other types if specified.
     * @param message Argument
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Argument, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Argument to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Literal. */
export interface ILiteral {

    /** Literal integer */
    integer?: (number|null);

    /** Literal floating */
    floating?: (number|null);

    /** Literal bool */
    bool?: (boolean|null);

    /** Literal str */
    str?: (string|null);

    /** Literal void */
    "void"?: (boolean|null);
}

/** Represents a Literal. */
export class Literal implements ILiteral {

    /**
     * Constructs a new Literal.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILiteral);

    /** Literal integer. */
    public integer: number;

    /** Literal floating. */
    public floating: number;

    /** Literal bool. */
    public bool: boolean;

    /** Literal str. */
    public str: string;

    /** Literal void. */
    public void: boolean;

    /** Literal type. */
    public type?: ("integer"|"floating"|"bool"|"str"|"void");

    /**
     * Creates a new Literal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Literal instance
     */
    public static create(properties?: ILiteral): Literal;

    /**
     * Encodes the specified Literal message. Does not implicitly {@link Literal.verify|verify} messages.
     * @param message Literal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILiteral, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Literal message, length delimited. Does not implicitly {@link Literal.verify|verify} messages.
     * @param message Literal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILiteral, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Literal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Literal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Literal;

    /**
     * Decodes a Literal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Literal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Literal;

    /**
     * Verifies a Literal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Literal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Literal
     */
    public static fromObject(object: { [k: string]: any }): Literal;

    /**
     * Creates a plain object from a Literal message. Also converts values to other types if specified.
     * @param message Literal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Literal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Literal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Return. */
export interface IReturn {

    /** Return value */
    value?: (IExpression|null);
}

/** Represents a Return. */
export class Return implements IReturn {

    /**
     * Constructs a new Return.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReturn);

    /** Return value. */
    public value?: (IExpression|null);

    /**
     * Creates a new Return instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Return instance
     */
    public static create(properties?: IReturn): Return;

    /**
     * Encodes the specified Return message. Does not implicitly {@link Return.verify|verify} messages.
     * @param message Return message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReturn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Return message, length delimited. Does not implicitly {@link Return.verify|verify} messages.
     * @param message Return message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReturn, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Return message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Return
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Return;

    /**
     * Decodes a Return message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Return
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Return;

    /**
     * Verifies a Return message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Return message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Return
     */
    public static fromObject(object: { [k: string]: any }): Return;

    /**
     * Creates a plain object from a Return message. Also converts values to other types if specified.
     * @param message Return
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Return, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Return to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Module. */
export interface IModule {

    /** Module id */
    id?: (IModuleReference|null);

    /** Module dependencies */
    dependencies?: (IModuleReference[]|null);

    /** Module functions */
    functions?: (IFunction[]|null);

    /** Module types */
    types?: (IType[]|null);

    /** Module main */
    main?: (IFunction|null);
}

/** Represents a Module. */
export class Module implements IModule {

    /**
     * Constructs a new Module.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModule);

    /** Module id. */
    public id?: (IModuleReference|null);

    /** Module dependencies. */
    public dependencies: IModuleReference[];

    /** Module functions. */
    public functions: IFunction[];

    /** Module types. */
    public types: IType[];

    /** Module main. */
    public main?: (IFunction|null);

    /**
     * Creates a new Module instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Module instance
     */
    public static create(properties?: IModule): Module;

    /**
     * Encodes the specified Module message. Does not implicitly {@link Module.verify|verify} messages.
     * @param message Module message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Module message, length delimited. Does not implicitly {@link Module.verify|verify} messages.
     * @param message Module message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Module message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Module
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Module;

    /**
     * Decodes a Module message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Module
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Module;

    /**
     * Verifies a Module message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Module message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Module
     */
    public static fromObject(object: { [k: string]: any }): Module;

    /**
     * Creates a plain object from a Module message. Also converts values to other types if specified.
     * @param message Module
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Module, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Module to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModuleReference. */
export interface IModuleReference {

    /** ModuleReference domain */
    domain?: (string[]|null);

    /** ModuleReference moduleID */
    moduleID?: (number|null);

    /** ModuleReference version */
    version?: (number|null);
}

/** Represents a ModuleReference. */
export class ModuleReference implements IModuleReference {

    /**
     * Constructs a new ModuleReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModuleReference);

    /** ModuleReference domain. */
    public domain: string[];

    /** ModuleReference moduleID. */
    public moduleID: number;

    /** ModuleReference version. */
    public version: number;

    /**
     * Creates a new ModuleReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModuleReference instance
     */
    public static create(properties?: IModuleReference): ModuleReference;

    /**
     * Encodes the specified ModuleReference message. Does not implicitly {@link ModuleReference.verify|verify} messages.
     * @param message ModuleReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModuleReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModuleReference message, length delimited. Does not implicitly {@link ModuleReference.verify|verify} messages.
     * @param message ModuleReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModuleReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModuleReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModuleReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModuleReference;

    /**
     * Decodes a ModuleReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModuleReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModuleReference;

    /**
     * Verifies a ModuleReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModuleReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModuleReference
     */
    public static fromObject(object: { [k: string]: any }): ModuleReference;

    /**
     * Creates a plain object from a ModuleReference message. Also converts values to other types if specified.
     * @param message ModuleReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModuleReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModuleReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
