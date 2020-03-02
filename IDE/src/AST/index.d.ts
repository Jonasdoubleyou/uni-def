import * as $protobuf from "protobufjs";
/** PrimitiveType enum. */
export enum PrimitiveType {
    String = 0,
    Integer = 1,
    Float = 2,
    Boolean = 3,
    Void = 4,
    Any = 5
}

/** Properties of a ComplexTypeReference. */
export interface IComplexTypeReference {

    /** ComplexTypeReference type */
    type?: (number|null);

    /** ComplexTypeReference moduleID */
    moduleID?: (number|null);
}

/** Represents a ComplexTypeReference. */
export class ComplexTypeReference implements IComplexTypeReference {

    /**
     * Constructs a new ComplexTypeReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComplexTypeReference);

    /** ComplexTypeReference type. */
    public type: number;

    /** ComplexTypeReference moduleID. */
    public moduleID: number;

    /**
     * Creates a new ComplexTypeReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComplexTypeReference instance
     */
    public static create(properties?: IComplexTypeReference): ComplexTypeReference;

    /**
     * Encodes the specified ComplexTypeReference message. Does not implicitly {@link ComplexTypeReference.verify|verify} messages.
     * @param message ComplexTypeReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComplexTypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComplexTypeReference message, length delimited. Does not implicitly {@link ComplexTypeReference.verify|verify} messages.
     * @param message ComplexTypeReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComplexTypeReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComplexTypeReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComplexTypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComplexTypeReference;

    /**
     * Decodes a ComplexTypeReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComplexTypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComplexTypeReference;

    /**
     * Verifies a ComplexTypeReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a ComplexTypeReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComplexTypeReference
     */
    public static fromObject(object: Record<string, any>): ComplexTypeReference;

    /**
     * Creates a plain object from a ComplexTypeReference message. Also converts values to other types if specified.
     * @param message ComplexTypeReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComplexTypeReference, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this ComplexTypeReference to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a TypeReference. */
export interface ITypeReference {

    /** TypeReference primitive */
    primitive?: (PrimitiveType|null);

    /** TypeReference complex */
    complex?: (IComplexTypeReference|null);
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

    /** TypeReference complex. */
    public complex?: (IComplexTypeReference|null);

    /** TypeReference primitiveOrComplex. */
    public primitiveOrComplex?: ("primitive"|"complex");

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a TypeReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TypeReference
     */
    public static fromObject(object: Record<string, any>): TypeReference;

    /**
     * Creates a plain object from a TypeReference message. Also converts values to other types if specified.
     * @param message TypeReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TypeReference, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this TypeReference to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a Property. */
export interface IProperty {

    /** Property id */
    id?: (number|null);

    /** Property type */
    type?: (ITypeReference|null);

    /** Property name */
    name?: (string|null);

    /** Property description */
    description?: (string|null);
}

/** Represents a Property. */
export class Property implements IProperty {

    /**
     * Constructs a new Property.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProperty);

    /** Property id. */
    public id: number;

    /** Property type. */
    public type?: (ITypeReference|null);

    /** Property name. */
    public name: string;

    /** Property description. */
    public description: string;

    /**
     * Creates a new Property instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Property instance
     */
    public static create(properties?: IProperty): Property;

    /**
     * Encodes the specified Property message. Does not implicitly {@link Property.verify|verify} messages.
     * @param message Property message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Property message, length delimited. Does not implicitly {@link Property.verify|verify} messages.
     * @param message Property message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProperty, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Property message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Property
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Property;

    /**
     * Decodes a Property message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Property
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Property;

    /**
     * Verifies a Property message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Property message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Property
     */
    public static fromObject(object: Record<string, any>): Property;

    /**
     * Creates a plain object from a Property message. Also converts values to other types if specified.
     * @param message Property
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Property, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Property to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of an ObjectType. */
export interface IObjectType {

    /** ObjectType id */
    id?: (number|null);

    /** ObjectType name */
    name?: (string|null);

    /** ObjectType description */
    description?: (string|null);

    /** ObjectType properties */
    properties?: (IProperty[]|null);
}

/** Represents an ObjectType. */
export class ObjectType implements IObjectType {

    /**
     * Constructs a new ObjectType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObjectType);

    /** ObjectType id. */
    public id: number;

    /** ObjectType name. */
    public name: string;

    /** ObjectType description. */
    public description: string;

    /** ObjectType properties. */
    public properties: Array<IProperty>;

    /**
     * Creates a new ObjectType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObjectType instance
     */
    public static create(properties?: IObjectType): ObjectType;

    /**
     * Encodes the specified ObjectType message. Does not implicitly {@link ObjectType.verify|verify} messages.
     * @param message ObjectType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObjectType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObjectType message, length delimited. Does not implicitly {@link ObjectType.verify|verify} messages.
     * @param message ObjectType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObjectType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObjectType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObjectType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObjectType;

    /**
     * Decodes an ObjectType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObjectType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObjectType;

    /**
     * Verifies an ObjectType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates an ObjectType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObjectType
     */
    public static fromObject(object: Record<string, any>): ObjectType;

    /**
     * Creates a plain object from an ObjectType message. Also converts values to other types if specified.
     * @param message ObjectType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObjectType, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this ObjectType to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a FunctionType. */
export interface IFunctionType {

    /** FunctionType parameters */
    parameters?: (IFunctionTypeParameter[]|null);

    /** FunctionType typeParameters */
    typeParameters?: (IFunctionGenericParameter[]|null);

    /** FunctionType returns */
    returns?: (ITypeReference|null);
}

/** Represents a FunctionType. */
export class FunctionType implements IFunctionType {

    /**
     * Constructs a new FunctionType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFunctionType);

    /** FunctionType parameters. */
    public parameters: Array<IFunctionTypeParameter>;

    /** FunctionType typeParameters. */
    public typeParameters: Array<IFunctionGenericParameter>;

    /** FunctionType returns. */
    public returns?: (ITypeReference|null);

    /**
     * Creates a new FunctionType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FunctionType instance
     */
    public static create(properties?: IFunctionType): FunctionType;

    /**
     * Encodes the specified FunctionType message. Does not implicitly {@link FunctionType.verify|verify} messages.
     * @param message FunctionType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFunctionType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FunctionType message, length delimited. Does not implicitly {@link FunctionType.verify|verify} messages.
     * @param message FunctionType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFunctionType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FunctionType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FunctionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FunctionType;

    /**
     * Decodes a FunctionType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FunctionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FunctionType;

    /**
     * Verifies a FunctionType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a FunctionType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FunctionType
     */
    public static fromObject(object: Record<string, any>): FunctionType;

    /**
     * Creates a plain object from a FunctionType message. Also converts values to other types if specified.
     * @param message FunctionType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FunctionType, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this FunctionType to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a FunctionTypeParameter. */
export interface IFunctionTypeParameter {

    /** FunctionTypeParameter id */
    id?: (number|null);

    /** FunctionTypeParameter type */
    type?: (ITypeReference|null);

    /** FunctionTypeParameter name */
    name?: (string|null);

    /** FunctionTypeParameter description */
    description?: (string|null);
}

/** Represents a FunctionTypeParameter. */
export class FunctionTypeParameter implements IFunctionTypeParameter {

    /**
     * Constructs a new FunctionTypeParameter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFunctionTypeParameter);

    /** FunctionTypeParameter id. */
    public id: number;

    /** FunctionTypeParameter type. */
    public type?: (ITypeReference|null);

    /** FunctionTypeParameter name. */
    public name: string;

    /** FunctionTypeParameter description. */
    public description: string;

    /**
     * Creates a new FunctionTypeParameter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FunctionTypeParameter instance
     */
    public static create(properties?: IFunctionTypeParameter): FunctionTypeParameter;

    /**
     * Encodes the specified FunctionTypeParameter message. Does not implicitly {@link FunctionTypeParameter.verify|verify} messages.
     * @param message FunctionTypeParameter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFunctionTypeParameter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FunctionTypeParameter message, length delimited. Does not implicitly {@link FunctionTypeParameter.verify|verify} messages.
     * @param message FunctionTypeParameter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFunctionTypeParameter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FunctionTypeParameter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FunctionTypeParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FunctionTypeParameter;

    /**
     * Decodes a FunctionTypeParameter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FunctionTypeParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FunctionTypeParameter;

    /**
     * Verifies a FunctionTypeParameter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a FunctionTypeParameter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FunctionTypeParameter
     */
    public static fromObject(object: Record<string, any>): FunctionTypeParameter;

    /**
     * Creates a plain object from a FunctionTypeParameter message. Also converts values to other types if specified.
     * @param message FunctionTypeParameter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FunctionTypeParameter, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this FunctionTypeParameter to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a FunctionGenericParameter. */
export interface IFunctionGenericParameter {

    /** FunctionGenericParameter id */
    id?: (number|null);

    /** FunctionGenericParameter typeBoundary */
    typeBoundary?: (ITypeReference|null);

    /** FunctionGenericParameter name */
    name?: (string|null);

    /** FunctionGenericParameter description */
    description?: (string|null);
}

/** Represents a FunctionGenericParameter. */
export class FunctionGenericParameter implements IFunctionGenericParameter {

    /**
     * Constructs a new FunctionGenericParameter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFunctionGenericParameter);

    /** FunctionGenericParameter id. */
    public id: number;

    /** FunctionGenericParameter typeBoundary. */
    public typeBoundary?: (ITypeReference|null);

    /** FunctionGenericParameter name. */
    public name: string;

    /** FunctionGenericParameter description. */
    public description: string;

    /**
     * Creates a new FunctionGenericParameter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FunctionGenericParameter instance
     */
    public static create(properties?: IFunctionGenericParameter): FunctionGenericParameter;

    /**
     * Encodes the specified FunctionGenericParameter message. Does not implicitly {@link FunctionGenericParameter.verify|verify} messages.
     * @param message FunctionGenericParameter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFunctionGenericParameter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FunctionGenericParameter message, length delimited. Does not implicitly {@link FunctionGenericParameter.verify|verify} messages.
     * @param message FunctionGenericParameter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFunctionGenericParameter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FunctionGenericParameter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FunctionGenericParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FunctionGenericParameter;

    /**
     * Decodes a FunctionGenericParameter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FunctionGenericParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FunctionGenericParameter;

    /**
     * Verifies a FunctionGenericParameter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a FunctionGenericParameter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FunctionGenericParameter
     */
    public static fromObject(object: Record<string, any>): FunctionGenericParameter;

    /**
     * Creates a plain object from a FunctionGenericParameter message. Also converts values to other types if specified.
     * @param message FunctionGenericParameter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FunctionGenericParameter, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this FunctionGenericParameter to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of an UnionType. */
export interface IUnionType {

    /** UnionType members */
    members?: (ITypeReference[]|null);

    /** UnionType name */
    name?: (string|null);

    /** UnionType description */
    description?: (string|null);
}

/** Represents an UnionType. */
export class UnionType implements IUnionType {

    /**
     * Constructs a new UnionType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnionType);

    /** UnionType members. */
    public members: Array<ITypeReference>;

    /** UnionType name. */
    public name: string;

    /** UnionType description. */
    public description: string;

    /**
     * Creates a new UnionType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnionType instance
     */
    public static create(properties?: IUnionType): UnionType;

    /**
     * Encodes the specified UnionType message. Does not implicitly {@link UnionType.verify|verify} messages.
     * @param message UnionType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnionType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnionType message, length delimited. Does not implicitly {@link UnionType.verify|verify} messages.
     * @param message UnionType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnionType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnionType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnionType;

    /**
     * Decodes an UnionType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnionType;

    /**
     * Verifies an UnionType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates an UnionType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnionType
     */
    public static fromObject(object: Record<string, any>): UnionType;

    /**
     * Creates a plain object from an UnionType message. Also converts values to other types if specified.
     * @param message UnionType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnionType, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this UnionType to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a ComplexType. */
export interface IComplexType {

    /** ComplexType id */
    id?: (number|null);

    /** ComplexType object */
    object?: (IObjectType|null);

    /** ComplexType function */
    "function"?: (IFunctionType|null);

    /** ComplexType union */
    union?: (IUnionType|null);
}

/** Represents a ComplexType. */
export class ComplexType implements IComplexType {

    /**
     * Constructs a new ComplexType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComplexType);

    /** ComplexType id. */
    public id: number;

    /** ComplexType object. */
    public object?: (IObjectType|null);

    /** ComplexType function. */
    public function?: (IFunctionType|null);

    /** ComplexType union. */
    public union?: (IUnionType|null);

    /** ComplexType typeType. */
    public typeType?: ("object"|"Function"|"union");

    /**
     * Creates a new ComplexType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComplexType instance
     */
    public static create(properties?: IComplexType): ComplexType;

    /**
     * Encodes the specified ComplexType message. Does not implicitly {@link ComplexType.verify|verify} messages.
     * @param message ComplexType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComplexType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ComplexType message, length delimited. Does not implicitly {@link ComplexType.verify|verify} messages.
     * @param message ComplexType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComplexType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ComplexType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComplexType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ComplexType;

    /**
     * Decodes a ComplexType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComplexType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ComplexType;

    /**
     * Verifies a ComplexType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a ComplexType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComplexType
     */
    public static fromObject(object: Record<string, any>): ComplexType;

    /**
     * Creates a plain object from a ComplexType message. Also converts values to other types if specified.
     * @param message ComplexType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ComplexType, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this ComplexType to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a FunctionReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FunctionReference
     */
    public static fromObject(object: Record<string, any>): FunctionReference;

    /**
     * Creates a plain object from a FunctionReference message. Also converts values to other types if specified.
     * @param message FunctionReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FunctionReference, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this FunctionReference to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a VariableReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VariableReference
     */
    public static fromObject(object: Record<string, any>): VariableReference;

    /**
     * Creates a plain object from a VariableReference message. Also converts values to other types if specified.
     * @param message VariableReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VariableReference, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this VariableReference to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a Variable. */
export interface IVariable {

    /** Variable id */
    id?: (number|null);

    /** Variable name */
    name?: (string|null);

    /** Variable description */
    description?: (string|null);

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

    /** Variable description. */
    public description: string;

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Variable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Variable
     */
    public static fromObject(object: Record<string, any>): Variable;

    /**
     * Creates a plain object from a Variable message. Also converts values to other types if specified.
     * @param message Variable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Variable, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Variable to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Get message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Get
     */
    public static fromObject(object: Record<string, any>): Get;

    /**
     * Creates a plain object from a Get message. Also converts values to other types if specified.
     * @param message Get
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Get, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Get to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Set message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Set
     */
    public static fromObject(object: Record<string, any>): Set;

    /**
     * Creates a plain object from a Set message. Also converts values to other types if specified.
     * @param message Set
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Set, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Set to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a Comment. */
export interface IComment {

    /** Comment preExpression */
    preExpression?: (string|null);

    /** Comment expression */
    expression?: (IExpression|null);

    /** Comment postExpression */
    postExpression?: (string|null);
}

/** Represents a Comment. */
export class Comment implements IComment {

    /**
     * Constructs a new Comment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComment);

    /** Comment preExpression. */
    public preExpression: string;

    /** Comment expression. */
    public expression?: (IExpression|null);

    /** Comment postExpression. */
    public postExpression: string;

    /**
     * Creates a new Comment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Comment instance
     */
    public static create(properties?: IComment): Comment;

    /**
     * Encodes the specified Comment message. Does not implicitly {@link Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Comment message, length delimited. Does not implicitly {@link Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Comment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Comment;

    /**
     * Decodes a Comment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Comment;

    /**
     * Verifies a Comment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Comment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Comment
     */
    public static fromObject(object: Record<string, any>): Comment;

    /**
     * Creates a plain object from a Comment message. Also converts values to other types if specified.
     * @param message Comment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Comment, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Comment to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a Raw. */
export interface IRaw {

    /** Raw content */
    content?: (string|null);
}

/** Represents a Raw. */
export class Raw implements IRaw {

    /**
     * Constructs a new Raw.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRaw);

    /** Raw content. */
    public content: string;

    /**
     * Creates a new Raw instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Raw instance
     */
    public static create(properties?: IRaw): Raw;

    /**
     * Encodes the specified Raw message. Does not implicitly {@link Raw.verify|verify} messages.
     * @param message Raw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRaw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Raw message, length delimited. Does not implicitly {@link Raw.verify|verify} messages.
     * @param message Raw message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRaw, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Raw message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Raw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Raw;

    /**
     * Decodes a Raw message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Raw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Raw;

    /**
     * Verifies a Raw message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Raw message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Raw
     */
    public static fromObject(object: Record<string, any>): Raw;

    /**
     * Creates a plain object from a Raw message. Also converts values to other types if specified.
     * @param message Raw
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Raw, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Raw to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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

    /** Expression access */
    access?: (IAccess|null);

    /** Expression fun */
    fun?: (IFunctionReference|null);

    /** Expression literal */
    literal?: (ILiteral|null);

    /** Expression return */
    "return"?: (IReturn|null);

    /** Expression comment */
    comment?: (IComment|null);

    /** Expression raw */
    raw?: (IRaw|null);
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

    /** Expression access. */
    public access?: (IAccess|null);

    /** Expression fun. */
    public fun?: (IFunctionReference|null);

    /** Expression literal. */
    public literal?: (ILiteral|null);

    /** Expression return. */
    public return?: (IReturn|null);

    /** Expression comment. */
    public comment?: (IComment|null);

    /** Expression raw. */
    public raw?: (IRaw|null);

    /** Expression expressionType. */
    public expressionType?: ("get"|"set"|"call"|"access"|"fun"|"literal"|"return"|"comment"|"raw");

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates an Expression message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Expression
     */
    public static fromObject(object: Record<string, any>): Expression;

    /**
     * Creates a plain object from an Expression message. Also converts values to other types if specified.
     * @param message Expression
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Expression, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Expression to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a Call. */
export interface ICall {

    /** Call function */
    "function"?: (IExpression|null);

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
    public function?: (IExpression|null);

    /** Call arguments. */
    public arguments: Array<IArgument>;

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Call message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Call
     */
    public static fromObject(object: Record<string, any>): Call;

    /**
     * Creates a plain object from a Call message. Also converts values to other types if specified.
     * @param message Call
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Call, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Call to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates an Argument message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Argument
     */
    public static fromObject(object: Record<string, any>): Argument;

    /**
     * Creates a plain object from an Argument message. Also converts values to other types if specified.
     * @param message Argument
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Argument, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Argument to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a GenericArgument. */
export interface IGenericArgument {

    /** GenericArgument id */
    id?: (number|null);

    /** GenericArgument value */
    value?: (ITypeReference|null);
}

/** Represents a GenericArgument. */
export class GenericArgument implements IGenericArgument {

    /**
     * Constructs a new GenericArgument.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenericArgument);

    /** GenericArgument id. */
    public id: number;

    /** GenericArgument value. */
    public value?: (ITypeReference|null);

    /**
     * Creates a new GenericArgument instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenericArgument instance
     */
    public static create(properties?: IGenericArgument): GenericArgument;

    /**
     * Encodes the specified GenericArgument message. Does not implicitly {@link GenericArgument.verify|verify} messages.
     * @param message GenericArgument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenericArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenericArgument message, length delimited. Does not implicitly {@link GenericArgument.verify|verify} messages.
     * @param message GenericArgument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenericArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenericArgument message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenericArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenericArgument;

    /**
     * Decodes a GenericArgument message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenericArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenericArgument;

    /**
     * Verifies a GenericArgument message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a GenericArgument message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenericArgument
     */
    public static fromObject(object: Record<string, any>): GenericArgument;

    /**
     * Creates a plain object from a GenericArgument message. Also converts values to other types if specified.
     * @param message GenericArgument
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenericArgument, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this GenericArgument to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of an Access. */
export interface IAccess {

    /** Access object */
    object?: (IExpression|null);

    /** Access property */
    property?: (number|null);
}

/** Represents an Access. */
export class Access implements IAccess {

    /**
     * Constructs a new Access.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccess);

    /** Access object. */
    public object?: (IExpression|null);

    /** Access property. */
    public property: number;

    /**
     * Creates a new Access instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Access instance
     */
    public static create(properties?: IAccess): Access;

    /**
     * Encodes the specified Access message. Does not implicitly {@link Access.verify|verify} messages.
     * @param message Access message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Access message, length delimited. Does not implicitly {@link Access.verify|verify} messages.
     * @param message Access message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccess, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Access message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Access
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Access;

    /**
     * Decodes an Access message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Access
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Access;

    /**
     * Verifies an Access message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates an Access message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Access
     */
    public static fromObject(object: Record<string, any>): Access;

    /**
     * Creates a plain object from an Access message. Also converts values to other types if specified.
     * @param message Access
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Access, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Access to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Literal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Literal
     */
    public static fromObject(object: Record<string, any>): Literal;

    /**
     * Creates a plain object from a Literal message. Also converts values to other types if specified.
     * @param message Literal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Literal, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Literal to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a Return. */
export interface IReturn {

    /** Return up */
    up?: (number|null);

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

    /** Return up. */
    public up: number;

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Return message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Return
     */
    public static fromObject(object: Record<string, any>): Return;

    /**
     * Creates a plain object from a Return message. Also converts values to other types if specified.
     * @param message Return
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Return, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Return to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}

/** Properties of a Function. */
export interface IFunction {

    /** Function id */
    id?: (number|null);

    /** Function type */
    type?: (IComplexTypeReference|null);

    /** Function name */
    name?: (string|null);

    /** Function description */
    description?: (string|null);

    /** Function lexicalParent */
    lexicalParent?: (IFunctionReference|null);

    /** Function pure */
    pure?: (boolean|null);

    /** Function parameters */
    parameters?: (IVariable[]|null);

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

    /** Function type. */
    public type?: (IComplexTypeReference|null);

    /** Function name. */
    public name: string;

    /** Function description. */
    public description: string;

    /** Function lexicalParent. */
    public lexicalParent?: (IFunctionReference|null);

    /** Function pure. */
    public pure: boolean;

    /** Function parameters. */
    public parameters: Array<IVariable>;

    /** Function variables. */
    public variables: Array<IVariable>;

    /** Function body. */
    public body: Array<IExpression>;

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Function message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Function
     */
    public static fromObject(object: Record<string, any>): Function;

    /**
     * Creates a plain object from a Function message. Also converts values to other types if specified.
     * @param message Function
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Function, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Function to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    types?: (IComplexType[]|null);

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
    public dependencies: Array<IModuleReference>;

    /** Module functions. */
    public functions: Array<IFunction>;

    /** Module types. */
    public types: Array<IComplexType>;

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a Module message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Module
     */
    public static fromObject(object: Record<string, any>): Module;

    /**
     * Creates a plain object from a Module message. Also converts values to other types if specified.
     * @param message Module
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Module, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this Module to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
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
    public domain: Array<string>;

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
    public static verify(message: Record<string, any>): (string|null);

    /**
     * Creates a ModuleReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModuleReference
     */
    public static fromObject(object: Record<string, any>): ModuleReference;

    /**
     * Creates a plain object from a ModuleReference message. Also converts values to other types if specified.
     * @param message ModuleReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModuleReference, options?: $protobuf.IConversionOptions): Record<string, any>;

    /**
     * Converts this ModuleReference to JSON.
     * @returns JSON object
     */
    public toJSON(): Record<string, any>;
}
