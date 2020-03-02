/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * PrimitiveType enum.
 * @exports PrimitiveType
 * @enum {string}
 * @property {number} String=0 String value
 * @property {number} Integer=1 Integer value
 * @property {number} Float=2 Float value
 * @property {number} Boolean=3 Boolean value
 * @property {number} Void=4 Void value
 * @property {number} Any=5 Any value
 */
$root.PrimitiveType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "String"] = 0;
    values[valuesById[1] = "Integer"] = 1;
    values[valuesById[2] = "Float"] = 2;
    values[valuesById[3] = "Boolean"] = 3;
    values[valuesById[4] = "Void"] = 4;
    values[valuesById[5] = "Any"] = 5;
    return values;
})();

$root.ComplexTypeReference = (function() {

    /**
     * Properties of a ComplexTypeReference.
     * @exports IComplexTypeReference
     * @interface IComplexTypeReference
     * @property {number|null} [type] ComplexTypeReference type
     * @property {number|null} [moduleID] ComplexTypeReference moduleID
     */

    /**
     * Constructs a new ComplexTypeReference.
     * @exports ComplexTypeReference
     * @classdesc Represents a ComplexTypeReference.
     * @implements IComplexTypeReference
     * @constructor
     * @param {IComplexTypeReference=} [properties] Properties to set
     */
    function ComplexTypeReference(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ComplexTypeReference type.
     * @member {number} type
     * @memberof ComplexTypeReference
     * @instance
     */
    ComplexTypeReference.prototype.type = 0;

    /**
     * ComplexTypeReference moduleID.
     * @member {number} moduleID
     * @memberof ComplexTypeReference
     * @instance
     */
    ComplexTypeReference.prototype.moduleID = 0;

    /**
     * Creates a new ComplexTypeReference instance using the specified properties.
     * @function create
     * @memberof ComplexTypeReference
     * @static
     * @param {IComplexTypeReference=} [properties] Properties to set
     * @returns {ComplexTypeReference} ComplexTypeReference instance
     */
    ComplexTypeReference.create = function create(properties) {
        return new ComplexTypeReference(properties);
    };

    /**
     * Encodes the specified ComplexTypeReference message. Does not implicitly {@link ComplexTypeReference.verify|verify} messages.
     * @function encode
     * @memberof ComplexTypeReference
     * @static
     * @param {IComplexTypeReference} message ComplexTypeReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComplexTypeReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.moduleID);
        return writer;
    };

    /**
     * Encodes the specified ComplexTypeReference message, length delimited. Does not implicitly {@link ComplexTypeReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ComplexTypeReference
     * @static
     * @param {IComplexTypeReference} message ComplexTypeReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComplexTypeReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ComplexTypeReference message from the specified reader or buffer.
     * @function decode
     * @memberof ComplexTypeReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ComplexTypeReference} ComplexTypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComplexTypeReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ComplexTypeReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.moduleID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ComplexTypeReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ComplexTypeReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ComplexTypeReference} ComplexTypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComplexTypeReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ComplexTypeReference message.
     * @function verify
     * @memberof ComplexTypeReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ComplexTypeReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            if (!$util.isInteger(message.moduleID))
                return "moduleID: integer expected";
        return null;
    };

    /**
     * Creates a ComplexTypeReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ComplexTypeReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ComplexTypeReference} ComplexTypeReference
     */
    ComplexTypeReference.fromObject = function fromObject(object) {
        if (object instanceof $root.ComplexTypeReference)
            return object;
        var message = new $root.ComplexTypeReference();
        if (object.type != null)
            message.type = object.type | 0;
        if (object.moduleID != null)
            message.moduleID = object.moduleID | 0;
        return message;
    };

    /**
     * Creates a plain object from a ComplexTypeReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ComplexTypeReference
     * @static
     * @param {ComplexTypeReference} message ComplexTypeReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ComplexTypeReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = 0;
            object.moduleID = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            object.moduleID = message.moduleID;
        return object;
    };

    /**
     * Converts this ComplexTypeReference to JSON.
     * @function toJSON
     * @memberof ComplexTypeReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ComplexTypeReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ComplexTypeReference;
})();

$root.TypeReference = (function() {

    /**
     * Properties of a TypeReference.
     * @exports ITypeReference
     * @interface ITypeReference
     * @property {PrimitiveType|null} [primitive] TypeReference primitive
     * @property {IComplexTypeReference|null} [complex] TypeReference complex
     */

    /**
     * Constructs a new TypeReference.
     * @exports TypeReference
     * @classdesc Represents a TypeReference.
     * @implements ITypeReference
     * @constructor
     * @param {ITypeReference=} [properties] Properties to set
     */
    function TypeReference(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TypeReference primitive.
     * @member {PrimitiveType} primitive
     * @memberof TypeReference
     * @instance
     */
    TypeReference.prototype.primitive = 0;

    /**
     * TypeReference complex.
     * @member {IComplexTypeReference|null|undefined} complex
     * @memberof TypeReference
     * @instance
     */
    TypeReference.prototype.complex = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * TypeReference primitiveOrComplex.
     * @member {"primitive"|"complex"|undefined} primitiveOrComplex
     * @memberof TypeReference
     * @instance
     */
    Object.defineProperty(TypeReference.prototype, "primitiveOrComplex", {
        get: $util.oneOfGetter($oneOfFields = ["primitive", "complex"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new TypeReference instance using the specified properties.
     * @function create
     * @memberof TypeReference
     * @static
     * @param {ITypeReference=} [properties] Properties to set
     * @returns {TypeReference} TypeReference instance
     */
    TypeReference.create = function create(properties) {
        return new TypeReference(properties);
    };

    /**
     * Encodes the specified TypeReference message. Does not implicitly {@link TypeReference.verify|verify} messages.
     * @function encode
     * @memberof TypeReference
     * @static
     * @param {ITypeReference} message TypeReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.primitive != null && message.hasOwnProperty("primitive"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.primitive);
        if (message.complex != null && message.hasOwnProperty("complex"))
            $root.ComplexTypeReference.encode(message.complex, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TypeReference message, length delimited. Does not implicitly {@link TypeReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TypeReference
     * @static
     * @param {ITypeReference} message TypeReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TypeReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TypeReference message from the specified reader or buffer.
     * @function decode
     * @memberof TypeReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TypeReference} TypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TypeReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.primitive = reader.int32();
                break;
            case 2:
                message.complex = $root.ComplexTypeReference.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TypeReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TypeReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TypeReference} TypeReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TypeReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TypeReference message.
     * @function verify
     * @memberof TypeReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TypeReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.primitive != null && message.hasOwnProperty("primitive")) {
            properties.primitiveOrComplex = 1;
            switch (message.primitive) {
            default:
                return "primitive: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        }
        if (message.complex != null && message.hasOwnProperty("complex")) {
            if (properties.primitiveOrComplex === 1)
                return "primitiveOrComplex: multiple values";
            properties.primitiveOrComplex = 1;
            {
                var error = $root.ComplexTypeReference.verify(message.complex);
                if (error)
                    return "complex." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TypeReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TypeReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TypeReference} TypeReference
     */
    TypeReference.fromObject = function fromObject(object) {
        if (object instanceof $root.TypeReference)
            return object;
        var message = new $root.TypeReference();
        switch (object.primitive) {
        case "String":
        case 0:
            message.primitive = 0;
            break;
        case "Integer":
        case 1:
            message.primitive = 1;
            break;
        case "Float":
        case 2:
            message.primitive = 2;
            break;
        case "Boolean":
        case 3:
            message.primitive = 3;
            break;
        case "Void":
        case 4:
            message.primitive = 4;
            break;
        case "Any":
        case 5:
            message.primitive = 5;
            break;
        }
        if (object.complex != null) {
            if (typeof object.complex !== "object")
                throw TypeError(".TypeReference.complex: object expected");
            message.complex = $root.ComplexTypeReference.fromObject(object.complex);
        }
        return message;
    };

    /**
     * Creates a plain object from a TypeReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TypeReference
     * @static
     * @param {TypeReference} message TypeReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TypeReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.primitive != null && message.hasOwnProperty("primitive")) {
            object.primitive = options.enums === String ? $root.PrimitiveType[message.primitive] : message.primitive;
            if (options.oneofs)
                object.primitiveOrComplex = "primitive";
        }
        if (message.complex != null && message.hasOwnProperty("complex")) {
            object.complex = $root.ComplexTypeReference.toObject(message.complex, options);
            if (options.oneofs)
                object.primitiveOrComplex = "complex";
        }
        return object;
    };

    /**
     * Converts this TypeReference to JSON.
     * @function toJSON
     * @memberof TypeReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TypeReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TypeReference;
})();

$root.Property = (function() {

    /**
     * Properties of a Property.
     * @exports IProperty
     * @interface IProperty
     * @property {number|null} [id] Property id
     * @property {ITypeReference|null} [type] Property type
     * @property {string|null} [name] Property name
     * @property {string|null} [description] Property description
     */

    /**
     * Constructs a new Property.
     * @exports Property
     * @classdesc Represents a Property.
     * @implements IProperty
     * @constructor
     * @param {IProperty=} [properties] Properties to set
     */
    function Property(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Property id.
     * @member {number} id
     * @memberof Property
     * @instance
     */
    Property.prototype.id = 0;

    /**
     * Property type.
     * @member {ITypeReference|null|undefined} type
     * @memberof Property
     * @instance
     */
    Property.prototype.type = null;

    /**
     * Property name.
     * @member {string} name
     * @memberof Property
     * @instance
     */
    Property.prototype.name = "";

    /**
     * Property description.
     * @member {string} description
     * @memberof Property
     * @instance
     */
    Property.prototype.description = "";

    /**
     * Creates a new Property instance using the specified properties.
     * @function create
     * @memberof Property
     * @static
     * @param {IProperty=} [properties] Properties to set
     * @returns {Property} Property instance
     */
    Property.create = function create(properties) {
        return new Property(properties);
    };

    /**
     * Encodes the specified Property message. Does not implicitly {@link Property.verify|verify} messages.
     * @function encode
     * @memberof Property
     * @static
     * @param {IProperty} message Property message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Property.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            $root.TypeReference.encode(message.type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        return writer;
    };

    /**
     * Encodes the specified Property message, length delimited. Does not implicitly {@link Property.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Property
     * @static
     * @param {IProperty} message Property message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Property.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Property message from the specified reader or buffer.
     * @function decode
     * @memberof Property
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Property} Property
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Property.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Property();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.int32();
                break;
            case 1:
                message.type = $root.TypeReference.decode(reader, reader.uint32());
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Property message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Property
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Property} Property
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Property.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Property message.
     * @function verify
     * @memberof Property
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Property.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type")) {
            var error = $root.TypeReference.verify(message.type);
            if (error)
                return "type." + error;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        return null;
    };

    /**
     * Creates a Property message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Property
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Property} Property
     */
    Property.fromObject = function fromObject(object) {
        if (object instanceof $root.Property)
            return object;
        var message = new $root.Property();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null) {
            if (typeof object.type !== "object")
                throw TypeError(".Property.type: object expected");
            message.type = $root.TypeReference.fromObject(object.type);
        }
        if (object.name != null)
            message.name = String(object.name);
        if (object.description != null)
            message.description = String(object.description);
        return message;
    };

    /**
     * Creates a plain object from a Property message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Property
     * @static
     * @param {Property} message Property
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Property.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = null;
            object.name = "";
            object.description = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = $root.TypeReference.toObject(message.type, options);
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        return object;
    };

    /**
     * Converts this Property to JSON.
     * @function toJSON
     * @memberof Property
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Property.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Property;
})();

$root.ObjectType = (function() {

    /**
     * Properties of an ObjectType.
     * @exports IObjectType
     * @interface IObjectType
     * @property {number|null} [id] ObjectType id
     * @property {string|null} [name] ObjectType name
     * @property {string|null} [description] ObjectType description
     * @property {Array.<IProperty>|null} [properties] ObjectType properties
     */

    /**
     * Constructs a new ObjectType.
     * @exports ObjectType
     * @classdesc Represents an ObjectType.
     * @implements IObjectType
     * @constructor
     * @param {IObjectType=} [properties] Properties to set
     */
    function ObjectType(properties) {
        this.properties = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ObjectType id.
     * @member {number} id
     * @memberof ObjectType
     * @instance
     */
    ObjectType.prototype.id = 0;

    /**
     * ObjectType name.
     * @member {string} name
     * @memberof ObjectType
     * @instance
     */
    ObjectType.prototype.name = "";

    /**
     * ObjectType description.
     * @member {string} description
     * @memberof ObjectType
     * @instance
     */
    ObjectType.prototype.description = "";

    /**
     * ObjectType properties.
     * @member {Array.<IProperty>} properties
     * @memberof ObjectType
     * @instance
     */
    ObjectType.prototype.properties = $util.emptyArray;

    /**
     * Creates a new ObjectType instance using the specified properties.
     * @function create
     * @memberof ObjectType
     * @static
     * @param {IObjectType=} [properties] Properties to set
     * @returns {ObjectType} ObjectType instance
     */
    ObjectType.create = function create(properties) {
        return new ObjectType(properties);
    };

    /**
     * Encodes the specified ObjectType message. Does not implicitly {@link ObjectType.verify|verify} messages.
     * @function encode
     * @memberof ObjectType
     * @static
     * @param {IObjectType} message ObjectType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
        if (message.properties != null && message.properties.length)
            for (var i = 0; i < message.properties.length; ++i)
                $root.Property.encode(message.properties[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ObjectType message, length delimited. Does not implicitly {@link ObjectType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObjectType
     * @static
     * @param {IObjectType} message ObjectType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObjectType message from the specified reader or buffer.
     * @function decode
     * @memberof ObjectType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObjectType} ObjectType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObjectType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.int32();
                break;
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.description = reader.string();
                break;
            case 3:
                if (!(message.properties && message.properties.length))
                    message.properties = [];
                message.properties.push($root.Property.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObjectType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObjectType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObjectType} ObjectType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObjectType message.
     * @function verify
     * @memberof ObjectType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObjectType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.properties != null && message.hasOwnProperty("properties")) {
            if (!Array.isArray(message.properties))
                return "properties: array expected";
            for (var i = 0; i < message.properties.length; ++i) {
                var error = $root.Property.verify(message.properties[i]);
                if (error)
                    return "properties." + error;
            }
        }
        return null;
    };

    /**
     * Creates an ObjectType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObjectType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObjectType} ObjectType
     */
    ObjectType.fromObject = function fromObject(object) {
        if (object instanceof $root.ObjectType)
            return object;
        var message = new $root.ObjectType();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.description != null)
            message.description = String(object.description);
        if (object.properties) {
            if (!Array.isArray(object.properties))
                throw TypeError(".ObjectType.properties: array expected");
            message.properties = [];
            for (var i = 0; i < object.properties.length; ++i) {
                if (typeof object.properties[i] !== "object")
                    throw TypeError(".ObjectType.properties: object expected");
                message.properties[i] = $root.Property.fromObject(object.properties[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an ObjectType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObjectType
     * @static
     * @param {ObjectType} message ObjectType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObjectType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.properties = [];
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.description = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.properties && message.properties.length) {
            object.properties = [];
            for (var j = 0; j < message.properties.length; ++j)
                object.properties[j] = $root.Property.toObject(message.properties[j], options);
        }
        return object;
    };

    /**
     * Converts this ObjectType to JSON.
     * @function toJSON
     * @memberof ObjectType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObjectType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ObjectType;
})();

$root.FunctionType = (function() {

    /**
     * Properties of a FunctionType.
     * @exports IFunctionType
     * @interface IFunctionType
     * @property {Array.<IFunctionTypeParameter>|null} [parameters] FunctionType parameters
     * @property {Array.<IFunctionGenericParameter>|null} [typeParameters] FunctionType typeParameters
     * @property {ITypeReference|null} [returns] FunctionType returns
     */

    /**
     * Constructs a new FunctionType.
     * @exports FunctionType
     * @classdesc Represents a FunctionType.
     * @implements IFunctionType
     * @constructor
     * @param {IFunctionType=} [properties] Properties to set
     */
    function FunctionType(properties) {
        this.parameters = [];
        this.typeParameters = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FunctionType parameters.
     * @member {Array.<IFunctionTypeParameter>} parameters
     * @memberof FunctionType
     * @instance
     */
    FunctionType.prototype.parameters = $util.emptyArray;

    /**
     * FunctionType typeParameters.
     * @member {Array.<IFunctionGenericParameter>} typeParameters
     * @memberof FunctionType
     * @instance
     */
    FunctionType.prototype.typeParameters = $util.emptyArray;

    /**
     * FunctionType returns.
     * @member {ITypeReference|null|undefined} returns
     * @memberof FunctionType
     * @instance
     */
    FunctionType.prototype.returns = null;

    /**
     * Creates a new FunctionType instance using the specified properties.
     * @function create
     * @memberof FunctionType
     * @static
     * @param {IFunctionType=} [properties] Properties to set
     * @returns {FunctionType} FunctionType instance
     */
    FunctionType.create = function create(properties) {
        return new FunctionType(properties);
    };

    /**
     * Encodes the specified FunctionType message. Does not implicitly {@link FunctionType.verify|verify} messages.
     * @function encode
     * @memberof FunctionType
     * @static
     * @param {IFunctionType} message FunctionType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.parameters != null && message.parameters.length)
            for (var i = 0; i < message.parameters.length; ++i)
                $root.FunctionTypeParameter.encode(message.parameters[i], writer.uint32(/* id 0, wireType 2 =*/2).fork()).ldelim();
        if (message.typeParameters != null && message.typeParameters.length)
            for (var i = 0; i < message.typeParameters.length; ++i)
                $root.FunctionGenericParameter.encode(message.typeParameters[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.returns != null && message.hasOwnProperty("returns"))
            $root.TypeReference.encode(message.returns, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified FunctionType message, length delimited. Does not implicitly {@link FunctionType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FunctionType
     * @static
     * @param {IFunctionType} message FunctionType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FunctionType message from the specified reader or buffer.
     * @function decode
     * @memberof FunctionType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FunctionType} FunctionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FunctionType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                if (!(message.parameters && message.parameters.length))
                    message.parameters = [];
                message.parameters.push($root.FunctionTypeParameter.decode(reader, reader.uint32()));
                break;
            case 1:
                if (!(message.typeParameters && message.typeParameters.length))
                    message.typeParameters = [];
                message.typeParameters.push($root.FunctionGenericParameter.decode(reader, reader.uint32()));
                break;
            case 2:
                message.returns = $root.TypeReference.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FunctionType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FunctionType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FunctionType} FunctionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FunctionType message.
     * @function verify
     * @memberof FunctionType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FunctionType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.parameters != null && message.hasOwnProperty("parameters")) {
            if (!Array.isArray(message.parameters))
                return "parameters: array expected";
            for (var i = 0; i < message.parameters.length; ++i) {
                var error = $root.FunctionTypeParameter.verify(message.parameters[i]);
                if (error)
                    return "parameters." + error;
            }
        }
        if (message.typeParameters != null && message.hasOwnProperty("typeParameters")) {
            if (!Array.isArray(message.typeParameters))
                return "typeParameters: array expected";
            for (var i = 0; i < message.typeParameters.length; ++i) {
                var error = $root.FunctionGenericParameter.verify(message.typeParameters[i]);
                if (error)
                    return "typeParameters." + error;
            }
        }
        if (message.returns != null && message.hasOwnProperty("returns")) {
            var error = $root.TypeReference.verify(message.returns);
            if (error)
                return "returns." + error;
        }
        return null;
    };

    /**
     * Creates a FunctionType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FunctionType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FunctionType} FunctionType
     */
    FunctionType.fromObject = function fromObject(object) {
        if (object instanceof $root.FunctionType)
            return object;
        var message = new $root.FunctionType();
        if (object.parameters) {
            if (!Array.isArray(object.parameters))
                throw TypeError(".FunctionType.parameters: array expected");
            message.parameters = [];
            for (var i = 0; i < object.parameters.length; ++i) {
                if (typeof object.parameters[i] !== "object")
                    throw TypeError(".FunctionType.parameters: object expected");
                message.parameters[i] = $root.FunctionTypeParameter.fromObject(object.parameters[i]);
            }
        }
        if (object.typeParameters) {
            if (!Array.isArray(object.typeParameters))
                throw TypeError(".FunctionType.typeParameters: array expected");
            message.typeParameters = [];
            for (var i = 0; i < object.typeParameters.length; ++i) {
                if (typeof object.typeParameters[i] !== "object")
                    throw TypeError(".FunctionType.typeParameters: object expected");
                message.typeParameters[i] = $root.FunctionGenericParameter.fromObject(object.typeParameters[i]);
            }
        }
        if (object.returns != null) {
            if (typeof object.returns !== "object")
                throw TypeError(".FunctionType.returns: object expected");
            message.returns = $root.TypeReference.fromObject(object.returns);
        }
        return message;
    };

    /**
     * Creates a plain object from a FunctionType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FunctionType
     * @static
     * @param {FunctionType} message FunctionType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FunctionType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.parameters = [];
            object.typeParameters = [];
        }
        if (options.defaults)
            object.returns = null;
        if (message.parameters && message.parameters.length) {
            object.parameters = [];
            for (var j = 0; j < message.parameters.length; ++j)
                object.parameters[j] = $root.FunctionTypeParameter.toObject(message.parameters[j], options);
        }
        if (message.typeParameters && message.typeParameters.length) {
            object.typeParameters = [];
            for (var j = 0; j < message.typeParameters.length; ++j)
                object.typeParameters[j] = $root.FunctionGenericParameter.toObject(message.typeParameters[j], options);
        }
        if (message.returns != null && message.hasOwnProperty("returns"))
            object.returns = $root.TypeReference.toObject(message.returns, options);
        return object;
    };

    /**
     * Converts this FunctionType to JSON.
     * @function toJSON
     * @memberof FunctionType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FunctionType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FunctionType;
})();

$root.FunctionTypeParameter = (function() {

    /**
     * Properties of a FunctionTypeParameter.
     * @exports IFunctionTypeParameter
     * @interface IFunctionTypeParameter
     * @property {number|null} [id] FunctionTypeParameter id
     * @property {ITypeReference|null} [type] FunctionTypeParameter type
     * @property {string|null} [name] FunctionTypeParameter name
     * @property {string|null} [description] FunctionTypeParameter description
     */

    /**
     * Constructs a new FunctionTypeParameter.
     * @exports FunctionTypeParameter
     * @classdesc Represents a FunctionTypeParameter.
     * @implements IFunctionTypeParameter
     * @constructor
     * @param {IFunctionTypeParameter=} [properties] Properties to set
     */
    function FunctionTypeParameter(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FunctionTypeParameter id.
     * @member {number} id
     * @memberof FunctionTypeParameter
     * @instance
     */
    FunctionTypeParameter.prototype.id = 0;

    /**
     * FunctionTypeParameter type.
     * @member {ITypeReference|null|undefined} type
     * @memberof FunctionTypeParameter
     * @instance
     */
    FunctionTypeParameter.prototype.type = null;

    /**
     * FunctionTypeParameter name.
     * @member {string} name
     * @memberof FunctionTypeParameter
     * @instance
     */
    FunctionTypeParameter.prototype.name = "";

    /**
     * FunctionTypeParameter description.
     * @member {string} description
     * @memberof FunctionTypeParameter
     * @instance
     */
    FunctionTypeParameter.prototype.description = "";

    /**
     * Creates a new FunctionTypeParameter instance using the specified properties.
     * @function create
     * @memberof FunctionTypeParameter
     * @static
     * @param {IFunctionTypeParameter=} [properties] Properties to set
     * @returns {FunctionTypeParameter} FunctionTypeParameter instance
     */
    FunctionTypeParameter.create = function create(properties) {
        return new FunctionTypeParameter(properties);
    };

    /**
     * Encodes the specified FunctionTypeParameter message. Does not implicitly {@link FunctionTypeParameter.verify|verify} messages.
     * @function encode
     * @memberof FunctionTypeParameter
     * @static
     * @param {IFunctionTypeParameter} message FunctionTypeParameter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionTypeParameter.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            $root.TypeReference.encode(message.type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        return writer;
    };

    /**
     * Encodes the specified FunctionTypeParameter message, length delimited. Does not implicitly {@link FunctionTypeParameter.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FunctionTypeParameter
     * @static
     * @param {IFunctionTypeParameter} message FunctionTypeParameter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionTypeParameter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FunctionTypeParameter message from the specified reader or buffer.
     * @function decode
     * @memberof FunctionTypeParameter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FunctionTypeParameter} FunctionTypeParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionTypeParameter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FunctionTypeParameter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.int32();
                break;
            case 1:
                message.type = $root.TypeReference.decode(reader, reader.uint32());
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FunctionTypeParameter message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FunctionTypeParameter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FunctionTypeParameter} FunctionTypeParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionTypeParameter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FunctionTypeParameter message.
     * @function verify
     * @memberof FunctionTypeParameter
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FunctionTypeParameter.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type")) {
            var error = $root.TypeReference.verify(message.type);
            if (error)
                return "type." + error;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        return null;
    };

    /**
     * Creates a FunctionTypeParameter message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FunctionTypeParameter
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FunctionTypeParameter} FunctionTypeParameter
     */
    FunctionTypeParameter.fromObject = function fromObject(object) {
        if (object instanceof $root.FunctionTypeParameter)
            return object;
        var message = new $root.FunctionTypeParameter();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null) {
            if (typeof object.type !== "object")
                throw TypeError(".FunctionTypeParameter.type: object expected");
            message.type = $root.TypeReference.fromObject(object.type);
        }
        if (object.name != null)
            message.name = String(object.name);
        if (object.description != null)
            message.description = String(object.description);
        return message;
    };

    /**
     * Creates a plain object from a FunctionTypeParameter message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FunctionTypeParameter
     * @static
     * @param {FunctionTypeParameter} message FunctionTypeParameter
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FunctionTypeParameter.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.type = null;
            object.name = "";
            object.description = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = $root.TypeReference.toObject(message.type, options);
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        return object;
    };

    /**
     * Converts this FunctionTypeParameter to JSON.
     * @function toJSON
     * @memberof FunctionTypeParameter
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FunctionTypeParameter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FunctionTypeParameter;
})();

$root.FunctionGenericParameter = (function() {

    /**
     * Properties of a FunctionGenericParameter.
     * @exports IFunctionGenericParameter
     * @interface IFunctionGenericParameter
     * @property {number|null} [id] FunctionGenericParameter id
     * @property {ITypeReference|null} [typeBoundary] FunctionGenericParameter typeBoundary
     * @property {string|null} [name] FunctionGenericParameter name
     * @property {string|null} [description] FunctionGenericParameter description
     */

    /**
     * Constructs a new FunctionGenericParameter.
     * @exports FunctionGenericParameter
     * @classdesc Represents a FunctionGenericParameter.
     * @implements IFunctionGenericParameter
     * @constructor
     * @param {IFunctionGenericParameter=} [properties] Properties to set
     */
    function FunctionGenericParameter(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FunctionGenericParameter id.
     * @member {number} id
     * @memberof FunctionGenericParameter
     * @instance
     */
    FunctionGenericParameter.prototype.id = 0;

    /**
     * FunctionGenericParameter typeBoundary.
     * @member {ITypeReference|null|undefined} typeBoundary
     * @memberof FunctionGenericParameter
     * @instance
     */
    FunctionGenericParameter.prototype.typeBoundary = null;

    /**
     * FunctionGenericParameter name.
     * @member {string} name
     * @memberof FunctionGenericParameter
     * @instance
     */
    FunctionGenericParameter.prototype.name = "";

    /**
     * FunctionGenericParameter description.
     * @member {string} description
     * @memberof FunctionGenericParameter
     * @instance
     */
    FunctionGenericParameter.prototype.description = "";

    /**
     * Creates a new FunctionGenericParameter instance using the specified properties.
     * @function create
     * @memberof FunctionGenericParameter
     * @static
     * @param {IFunctionGenericParameter=} [properties] Properties to set
     * @returns {FunctionGenericParameter} FunctionGenericParameter instance
     */
    FunctionGenericParameter.create = function create(properties) {
        return new FunctionGenericParameter(properties);
    };

    /**
     * Encodes the specified FunctionGenericParameter message. Does not implicitly {@link FunctionGenericParameter.verify|verify} messages.
     * @function encode
     * @memberof FunctionGenericParameter
     * @static
     * @param {IFunctionGenericParameter} message FunctionGenericParameter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionGenericParameter.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
        if (message.typeBoundary != null && message.hasOwnProperty("typeBoundary"))
            $root.TypeReference.encode(message.typeBoundary, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        return writer;
    };

    /**
     * Encodes the specified FunctionGenericParameter message, length delimited. Does not implicitly {@link FunctionGenericParameter.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FunctionGenericParameter
     * @static
     * @param {IFunctionGenericParameter} message FunctionGenericParameter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionGenericParameter.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FunctionGenericParameter message from the specified reader or buffer.
     * @function decode
     * @memberof FunctionGenericParameter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FunctionGenericParameter} FunctionGenericParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionGenericParameter.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FunctionGenericParameter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.int32();
                break;
            case 1:
                message.typeBoundary = $root.TypeReference.decode(reader, reader.uint32());
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FunctionGenericParameter message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FunctionGenericParameter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FunctionGenericParameter} FunctionGenericParameter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionGenericParameter.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FunctionGenericParameter message.
     * @function verify
     * @memberof FunctionGenericParameter
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FunctionGenericParameter.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.typeBoundary != null && message.hasOwnProperty("typeBoundary")) {
            var error = $root.TypeReference.verify(message.typeBoundary);
            if (error)
                return "typeBoundary." + error;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        return null;
    };

    /**
     * Creates a FunctionGenericParameter message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FunctionGenericParameter
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FunctionGenericParameter} FunctionGenericParameter
     */
    FunctionGenericParameter.fromObject = function fromObject(object) {
        if (object instanceof $root.FunctionGenericParameter)
            return object;
        var message = new $root.FunctionGenericParameter();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.typeBoundary != null) {
            if (typeof object.typeBoundary !== "object")
                throw TypeError(".FunctionGenericParameter.typeBoundary: object expected");
            message.typeBoundary = $root.TypeReference.fromObject(object.typeBoundary);
        }
        if (object.name != null)
            message.name = String(object.name);
        if (object.description != null)
            message.description = String(object.description);
        return message;
    };

    /**
     * Creates a plain object from a FunctionGenericParameter message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FunctionGenericParameter
     * @static
     * @param {FunctionGenericParameter} message FunctionGenericParameter
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FunctionGenericParameter.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.typeBoundary = null;
            object.name = "";
            object.description = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.typeBoundary != null && message.hasOwnProperty("typeBoundary"))
            object.typeBoundary = $root.TypeReference.toObject(message.typeBoundary, options);
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        return object;
    };

    /**
     * Converts this FunctionGenericParameter to JSON.
     * @function toJSON
     * @memberof FunctionGenericParameter
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FunctionGenericParameter.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FunctionGenericParameter;
})();

$root.UnionType = (function() {

    /**
     * Properties of an UnionType.
     * @exports IUnionType
     * @interface IUnionType
     * @property {Array.<ITypeReference>|null} [members] UnionType members
     * @property {string|null} [name] UnionType name
     * @property {string|null} [description] UnionType description
     */

    /**
     * Constructs a new UnionType.
     * @exports UnionType
     * @classdesc Represents an UnionType.
     * @implements IUnionType
     * @constructor
     * @param {IUnionType=} [properties] Properties to set
     */
    function UnionType(properties) {
        this.members = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UnionType members.
     * @member {Array.<ITypeReference>} members
     * @memberof UnionType
     * @instance
     */
    UnionType.prototype.members = $util.emptyArray;

    /**
     * UnionType name.
     * @member {string} name
     * @memberof UnionType
     * @instance
     */
    UnionType.prototype.name = "";

    /**
     * UnionType description.
     * @member {string} description
     * @memberof UnionType
     * @instance
     */
    UnionType.prototype.description = "";

    /**
     * Creates a new UnionType instance using the specified properties.
     * @function create
     * @memberof UnionType
     * @static
     * @param {IUnionType=} [properties] Properties to set
     * @returns {UnionType} UnionType instance
     */
    UnionType.create = function create(properties) {
        return new UnionType(properties);
    };

    /**
     * Encodes the specified UnionType message. Does not implicitly {@link UnionType.verify|verify} messages.
     * @function encode
     * @memberof UnionType
     * @static
     * @param {IUnionType} message UnionType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnionType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.members != null && message.members.length)
            for (var i = 0; i < message.members.length; ++i)
                $root.TypeReference.encode(message.members[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        return writer;
    };

    /**
     * Encodes the specified UnionType message, length delimited. Does not implicitly {@link UnionType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnionType
     * @static
     * @param {IUnionType} message UnionType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UnionType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UnionType message from the specified reader or buffer.
     * @function decode
     * @memberof UnionType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnionType} UnionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnionType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UnionType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.members && message.members.length))
                    message.members = [];
                message.members.push($root.TypeReference.decode(reader, reader.uint32()));
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UnionType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UnionType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnionType} UnionType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UnionType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UnionType message.
     * @function verify
     * @memberof UnionType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UnionType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.members != null && message.hasOwnProperty("members")) {
            if (!Array.isArray(message.members))
                return "members: array expected";
            for (var i = 0; i < message.members.length; ++i) {
                var error = $root.TypeReference.verify(message.members[i]);
                if (error)
                    return "members." + error;
            }
        }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        return null;
    };

    /**
     * Creates an UnionType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UnionType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnionType} UnionType
     */
    UnionType.fromObject = function fromObject(object) {
        if (object instanceof $root.UnionType)
            return object;
        var message = new $root.UnionType();
        if (object.members) {
            if (!Array.isArray(object.members))
                throw TypeError(".UnionType.members: array expected");
            message.members = [];
            for (var i = 0; i < object.members.length; ++i) {
                if (typeof object.members[i] !== "object")
                    throw TypeError(".UnionType.members: object expected");
                message.members[i] = $root.TypeReference.fromObject(object.members[i]);
            }
        }
        if (object.name != null)
            message.name = String(object.name);
        if (object.description != null)
            message.description = String(object.description);
        return message;
    };

    /**
     * Creates a plain object from an UnionType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnionType
     * @static
     * @param {UnionType} message UnionType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UnionType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.members = [];
        if (options.defaults) {
            object.name = "";
            object.description = "";
        }
        if (message.members && message.members.length) {
            object.members = [];
            for (var j = 0; j < message.members.length; ++j)
                object.members[j] = $root.TypeReference.toObject(message.members[j], options);
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        return object;
    };

    /**
     * Converts this UnionType to JSON.
     * @function toJSON
     * @memberof UnionType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UnionType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UnionType;
})();

$root.ComplexType = (function() {

    /**
     * Properties of a ComplexType.
     * @exports IComplexType
     * @interface IComplexType
     * @property {number|null} [id] ComplexType id
     * @property {IObjectType|null} [object] ComplexType object
     * @property {IFunctionType|null} ["function"] ComplexType function
     * @property {IUnionType|null} [union] ComplexType union
     */

    /**
     * Constructs a new ComplexType.
     * @exports ComplexType
     * @classdesc Represents a ComplexType.
     * @implements IComplexType
     * @constructor
     * @param {IComplexType=} [properties] Properties to set
     */
    function ComplexType(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ComplexType id.
     * @member {number} id
     * @memberof ComplexType
     * @instance
     */
    ComplexType.prototype.id = 0;

    /**
     * ComplexType object.
     * @member {IObjectType|null|undefined} object
     * @memberof ComplexType
     * @instance
     */
    ComplexType.prototype.object = null;

    /**
     * ComplexType function.
     * @member {IFunctionType|null|undefined} function
     * @memberof ComplexType
     * @instance
     */
    ComplexType.prototype["function"] = null;

    /**
     * ComplexType union.
     * @member {IUnionType|null|undefined} union
     * @memberof ComplexType
     * @instance
     */
    ComplexType.prototype.union = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ComplexType typeType.
     * @member {"object"|"function"|"union"|undefined} typeType
     * @memberof ComplexType
     * @instance
     */
    Object.defineProperty(ComplexType.prototype, "typeType", {
        get: $util.oneOfGetter($oneOfFields = ["object", "function", "union"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ComplexType instance using the specified properties.
     * @function create
     * @memberof ComplexType
     * @static
     * @param {IComplexType=} [properties] Properties to set
     * @returns {ComplexType} ComplexType instance
     */
    ComplexType.create = function create(properties) {
        return new ComplexType(properties);
    };

    /**
     * Encodes the specified ComplexType message. Does not implicitly {@link ComplexType.verify|verify} messages.
     * @function encode
     * @memberof ComplexType
     * @static
     * @param {IComplexType} message ComplexType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComplexType.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.object != null && message.hasOwnProperty("object"))
            $root.ObjectType.encode(message.object, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message["function"] != null && message.hasOwnProperty("function"))
            $root.FunctionType.encode(message["function"], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.union != null && message.hasOwnProperty("union"))
            $root.UnionType.encode(message.union, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ComplexType message, length delimited. Does not implicitly {@link ComplexType.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ComplexType
     * @static
     * @param {IComplexType} message ComplexType message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ComplexType.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ComplexType message from the specified reader or buffer.
     * @function decode
     * @memberof ComplexType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ComplexType} ComplexType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComplexType.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ComplexType();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.object = $root.ObjectType.decode(reader, reader.uint32());
                break;
            case 3:
                message["function"] = $root.FunctionType.decode(reader, reader.uint32());
                break;
            case 4:
                message.union = $root.UnionType.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ComplexType message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ComplexType
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ComplexType} ComplexType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ComplexType.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ComplexType message.
     * @function verify
     * @memberof ComplexType
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ComplexType.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.object != null && message.hasOwnProperty("object")) {
            properties.typeType = 1;
            {
                var error = $root.ObjectType.verify(message.object);
                if (error)
                    return "object." + error;
            }
        }
        if (message["function"] != null && message.hasOwnProperty("function")) {
            if (properties.typeType === 1)
                return "typeType: multiple values";
            properties.typeType = 1;
            {
                var error = $root.FunctionType.verify(message["function"]);
                if (error)
                    return "function." + error;
            }
        }
        if (message.union != null && message.hasOwnProperty("union")) {
            if (properties.typeType === 1)
                return "typeType: multiple values";
            properties.typeType = 1;
            {
                var error = $root.UnionType.verify(message.union);
                if (error)
                    return "union." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ComplexType message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ComplexType
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ComplexType} ComplexType
     */
    ComplexType.fromObject = function fromObject(object) {
        if (object instanceof $root.ComplexType)
            return object;
        var message = new $root.ComplexType();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.object != null) {
            if (typeof object.object !== "object")
                throw TypeError(".ComplexType.object: object expected");
            message.object = $root.ObjectType.fromObject(object.object);
        }
        if (object["function"] != null) {
            if (typeof object["function"] !== "object")
                throw TypeError(".ComplexType.function: object expected");
            message["function"] = $root.FunctionType.fromObject(object["function"]);
        }
        if (object.union != null) {
            if (typeof object.union !== "object")
                throw TypeError(".ComplexType.union: object expected");
            message.union = $root.UnionType.fromObject(object.union);
        }
        return message;
    };

    /**
     * Creates a plain object from a ComplexType message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ComplexType
     * @static
     * @param {ComplexType} message ComplexType
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ComplexType.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.object != null && message.hasOwnProperty("object")) {
            object.object = $root.ObjectType.toObject(message.object, options);
            if (options.oneofs)
                object.typeType = "object";
        }
        if (message["function"] != null && message.hasOwnProperty("function")) {
            object["function"] = $root.FunctionType.toObject(message["function"], options);
            if (options.oneofs)
                object.typeType = "function";
        }
        if (message.union != null && message.hasOwnProperty("union")) {
            object.union = $root.UnionType.toObject(message.union, options);
            if (options.oneofs)
                object.typeType = "union";
        }
        return object;
    };

    /**
     * Converts this ComplexType to JSON.
     * @function toJSON
     * @memberof ComplexType
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ComplexType.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ComplexType;
})();

$root.FunctionReference = (function() {

    /**
     * Properties of a FunctionReference.
     * @exports IFunctionReference
     * @interface IFunctionReference
     * @property {number|null} [moduleID] FunctionReference moduleID
     * @property {number|null} ["function"] FunctionReference function
     */

    /**
     * Constructs a new FunctionReference.
     * @exports FunctionReference
     * @classdesc Represents a FunctionReference.
     * @implements IFunctionReference
     * @constructor
     * @param {IFunctionReference=} [properties] Properties to set
     */
    function FunctionReference(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FunctionReference moduleID.
     * @member {number} moduleID
     * @memberof FunctionReference
     * @instance
     */
    FunctionReference.prototype.moduleID = 0;

    /**
     * FunctionReference function.
     * @member {number} function
     * @memberof FunctionReference
     * @instance
     */
    FunctionReference.prototype["function"] = 0;

    /**
     * Creates a new FunctionReference instance using the specified properties.
     * @function create
     * @memberof FunctionReference
     * @static
     * @param {IFunctionReference=} [properties] Properties to set
     * @returns {FunctionReference} FunctionReference instance
     */
    FunctionReference.create = function create(properties) {
        return new FunctionReference(properties);
    };

    /**
     * Encodes the specified FunctionReference message. Does not implicitly {@link FunctionReference.verify|verify} messages.
     * @function encode
     * @memberof FunctionReference
     * @static
     * @param {IFunctionReference} message FunctionReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.moduleID);
        if (message["function"] != null && message.hasOwnProperty("function"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message["function"]);
        return writer;
    };

    /**
     * Encodes the specified FunctionReference message, length delimited. Does not implicitly {@link FunctionReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FunctionReference
     * @static
     * @param {IFunctionReference} message FunctionReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FunctionReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FunctionReference message from the specified reader or buffer.
     * @function decode
     * @memberof FunctionReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FunctionReference} FunctionReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FunctionReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.moduleID = reader.int32();
                break;
            case 2:
                message["function"] = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FunctionReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FunctionReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FunctionReference} FunctionReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FunctionReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FunctionReference message.
     * @function verify
     * @memberof FunctionReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FunctionReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            if (!$util.isInteger(message.moduleID))
                return "moduleID: integer expected";
        if (message["function"] != null && message.hasOwnProperty("function"))
            if (!$util.isInteger(message["function"]))
                return "function: integer expected";
        return null;
    };

    /**
     * Creates a FunctionReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FunctionReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FunctionReference} FunctionReference
     */
    FunctionReference.fromObject = function fromObject(object) {
        if (object instanceof $root.FunctionReference)
            return object;
        var message = new $root.FunctionReference();
        if (object.moduleID != null)
            message.moduleID = object.moduleID | 0;
        if (object["function"] != null)
            message["function"] = object["function"] | 0;
        return message;
    };

    /**
     * Creates a plain object from a FunctionReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FunctionReference
     * @static
     * @param {FunctionReference} message FunctionReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FunctionReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.moduleID = 0;
            object["function"] = 0;
        }
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            object.moduleID = message.moduleID;
        if (message["function"] != null && message.hasOwnProperty("function"))
            object["function"] = message["function"];
        return object;
    };

    /**
     * Converts this FunctionReference to JSON.
     * @function toJSON
     * @memberof FunctionReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FunctionReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FunctionReference;
})();

$root.VariableReference = (function() {

    /**
     * Properties of a VariableReference.
     * @exports IVariableReference
     * @interface IVariableReference
     * @property {number|null} [id] VariableReference id
     * @property {number|null} [functionID] VariableReference functionID
     * @property {number|null} [moduleID] VariableReference moduleID
     */

    /**
     * Constructs a new VariableReference.
     * @exports VariableReference
     * @classdesc Represents a VariableReference.
     * @implements IVariableReference
     * @constructor
     * @param {IVariableReference=} [properties] Properties to set
     */
    function VariableReference(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VariableReference id.
     * @member {number} id
     * @memberof VariableReference
     * @instance
     */
    VariableReference.prototype.id = 0;

    /**
     * VariableReference functionID.
     * @member {number} functionID
     * @memberof VariableReference
     * @instance
     */
    VariableReference.prototype.functionID = 0;

    /**
     * VariableReference moduleID.
     * @member {number} moduleID
     * @memberof VariableReference
     * @instance
     */
    VariableReference.prototype.moduleID = 0;

    /**
     * Creates a new VariableReference instance using the specified properties.
     * @function create
     * @memberof VariableReference
     * @static
     * @param {IVariableReference=} [properties] Properties to set
     * @returns {VariableReference} VariableReference instance
     */
    VariableReference.create = function create(properties) {
        return new VariableReference(properties);
    };

    /**
     * Encodes the specified VariableReference message. Does not implicitly {@link VariableReference.verify|verify} messages.
     * @function encode
     * @memberof VariableReference
     * @static
     * @param {IVariableReference} message VariableReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VariableReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.functionID != null && message.hasOwnProperty("functionID"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.functionID);
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.moduleID);
        return writer;
    };

    /**
     * Encodes the specified VariableReference message, length delimited. Does not implicitly {@link VariableReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VariableReference
     * @static
     * @param {IVariableReference} message VariableReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VariableReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VariableReference message from the specified reader or buffer.
     * @function decode
     * @memberof VariableReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VariableReference} VariableReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VariableReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VariableReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.functionID = reader.int32();
                break;
            case 3:
                message.moduleID = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VariableReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VariableReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VariableReference} VariableReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VariableReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VariableReference message.
     * @function verify
     * @memberof VariableReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VariableReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.functionID != null && message.hasOwnProperty("functionID"))
            if (!$util.isInteger(message.functionID))
                return "functionID: integer expected";
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            if (!$util.isInteger(message.moduleID))
                return "moduleID: integer expected";
        return null;
    };

    /**
     * Creates a VariableReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VariableReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VariableReference} VariableReference
     */
    VariableReference.fromObject = function fromObject(object) {
        if (object instanceof $root.VariableReference)
            return object;
        var message = new $root.VariableReference();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.functionID != null)
            message.functionID = object.functionID | 0;
        if (object.moduleID != null)
            message.moduleID = object.moduleID | 0;
        return message;
    };

    /**
     * Creates a plain object from a VariableReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VariableReference
     * @static
     * @param {VariableReference} message VariableReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VariableReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.functionID = 0;
            object.moduleID = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.functionID != null && message.hasOwnProperty("functionID"))
            object.functionID = message.functionID;
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            object.moduleID = message.moduleID;
        return object;
    };

    /**
     * Converts this VariableReference to JSON.
     * @function toJSON
     * @memberof VariableReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VariableReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VariableReference;
})();

$root.Variable = (function() {

    /**
     * Properties of a Variable.
     * @exports IVariable
     * @interface IVariable
     * @property {number|null} [id] Variable id
     * @property {string|null} [name] Variable name
     * @property {string|null} [description] Variable description
     * @property {ITypeReference|null} [type] Variable type
     */

    /**
     * Constructs a new Variable.
     * @exports Variable
     * @classdesc Represents a Variable.
     * @implements IVariable
     * @constructor
     * @param {IVariable=} [properties] Properties to set
     */
    function Variable(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Variable id.
     * @member {number} id
     * @memberof Variable
     * @instance
     */
    Variable.prototype.id = 0;

    /**
     * Variable name.
     * @member {string} name
     * @memberof Variable
     * @instance
     */
    Variable.prototype.name = "";

    /**
     * Variable description.
     * @member {string} description
     * @memberof Variable
     * @instance
     */
    Variable.prototype.description = "";

    /**
     * Variable type.
     * @member {ITypeReference|null|undefined} type
     * @memberof Variable
     * @instance
     */
    Variable.prototype.type = null;

    /**
     * Creates a new Variable instance using the specified properties.
     * @function create
     * @memberof Variable
     * @static
     * @param {IVariable=} [properties] Properties to set
     * @returns {Variable} Variable instance
     */
    Variable.create = function create(properties) {
        return new Variable(properties);
    };

    /**
     * Encodes the specified Variable message. Does not implicitly {@link Variable.verify|verify} messages.
     * @function encode
     * @memberof Variable
     * @static
     * @param {IVariable} message Variable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Variable.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        if (message.type != null && message.hasOwnProperty("type"))
            $root.TypeReference.encode(message.type, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Variable message, length delimited. Does not implicitly {@link Variable.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Variable
     * @static
     * @param {IVariable} message Variable message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Variable.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Variable message from the specified reader or buffer.
     * @function decode
     * @memberof Variable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Variable} Variable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Variable.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Variable();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            case 4:
                message.type = $root.TypeReference.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Variable message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Variable
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Variable} Variable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Variable.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Variable message.
     * @function verify
     * @memberof Variable
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Variable.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.type != null && message.hasOwnProperty("type")) {
            var error = $root.TypeReference.verify(message.type);
            if (error)
                return "type." + error;
        }
        return null;
    };

    /**
     * Creates a Variable message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Variable
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Variable} Variable
     */
    Variable.fromObject = function fromObject(object) {
        if (object instanceof $root.Variable)
            return object;
        var message = new $root.Variable();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.description != null)
            message.description = String(object.description);
        if (object.type != null) {
            if (typeof object.type !== "object")
                throw TypeError(".Variable.type: object expected");
            message.type = $root.TypeReference.fromObject(object.type);
        }
        return message;
    };

    /**
     * Creates a plain object from a Variable message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Variable
     * @static
     * @param {Variable} message Variable
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Variable.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.description = "";
            object.type = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = $root.TypeReference.toObject(message.type, options);
        return object;
    };

    /**
     * Converts this Variable to JSON.
     * @function toJSON
     * @memberof Variable
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Variable.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Variable;
})();

$root.Get = (function() {

    /**
     * Properties of a Get.
     * @exports IGet
     * @interface IGet
     * @property {IVariableReference|null} [get] Get get
     */

    /**
     * Constructs a new Get.
     * @exports Get
     * @classdesc Represents a Get.
     * @implements IGet
     * @constructor
     * @param {IGet=} [properties] Properties to set
     */
    function Get(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Get get.
     * @member {IVariableReference|null|undefined} get
     * @memberof Get
     * @instance
     */
    Get.prototype.get = null;

    /**
     * Creates a new Get instance using the specified properties.
     * @function create
     * @memberof Get
     * @static
     * @param {IGet=} [properties] Properties to set
     * @returns {Get} Get instance
     */
    Get.create = function create(properties) {
        return new Get(properties);
    };

    /**
     * Encodes the specified Get message. Does not implicitly {@link Get.verify|verify} messages.
     * @function encode
     * @memberof Get
     * @static
     * @param {IGet} message Get message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Get.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.get != null && message.hasOwnProperty("get"))
            $root.VariableReference.encode(message.get, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Get message, length delimited. Does not implicitly {@link Get.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Get
     * @static
     * @param {IGet} message Get message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Get.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Get message from the specified reader or buffer.
     * @function decode
     * @memberof Get
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Get} Get
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Get.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Get();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.get = $root.VariableReference.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Get message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Get
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Get} Get
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Get.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Get message.
     * @function verify
     * @memberof Get
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Get.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.get != null && message.hasOwnProperty("get")) {
            var error = $root.VariableReference.verify(message.get);
            if (error)
                return "get." + error;
        }
        return null;
    };

    /**
     * Creates a Get message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Get
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Get} Get
     */
    Get.fromObject = function fromObject(object) {
        if (object instanceof $root.Get)
            return object;
        var message = new $root.Get();
        if (object.get != null) {
            if (typeof object.get !== "object")
                throw TypeError(".Get.get: object expected");
            message.get = $root.VariableReference.fromObject(object.get);
        }
        return message;
    };

    /**
     * Creates a plain object from a Get message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Get
     * @static
     * @param {Get} message Get
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Get.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.get = null;
        if (message.get != null && message.hasOwnProperty("get"))
            object.get = $root.VariableReference.toObject(message.get, options);
        return object;
    };

    /**
     * Converts this Get to JSON.
     * @function toJSON
     * @memberof Get
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Get.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Get;
})();

$root.Set = (function() {

    /**
     * Properties of a Set.
     * @exports ISet
     * @interface ISet
     * @property {IVariableReference|null} [set] Set set
     * @property {IExpression|null} [value] Set value
     * @property {boolean|null} [initialization] Set initialization
     * @property {boolean|null} [constant] Set constant
     */

    /**
     * Constructs a new Set.
     * @exports Set
     * @classdesc Represents a Set.
     * @implements ISet
     * @constructor
     * @param {ISet=} [properties] Properties to set
     */
    function Set(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Set set.
     * @member {IVariableReference|null|undefined} set
     * @memberof Set
     * @instance
     */
    Set.prototype.set = null;

    /**
     * Set value.
     * @member {IExpression|null|undefined} value
     * @memberof Set
     * @instance
     */
    Set.prototype.value = null;

    /**
     * Set initialization.
     * @member {boolean} initialization
     * @memberof Set
     * @instance
     */
    Set.prototype.initialization = false;

    /**
     * Set constant.
     * @member {boolean} constant
     * @memberof Set
     * @instance
     */
    Set.prototype.constant = false;

    /**
     * Creates a new Set instance using the specified properties.
     * @function create
     * @memberof Set
     * @static
     * @param {ISet=} [properties] Properties to set
     * @returns {Set} Set instance
     */
    Set.create = function create(properties) {
        return new Set(properties);
    };

    /**
     * Encodes the specified Set message. Does not implicitly {@link Set.verify|verify} messages.
     * @function encode
     * @memberof Set
     * @static
     * @param {ISet} message Set message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Set.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.set != null && message.hasOwnProperty("set"))
            $root.VariableReference.encode(message.set, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.value != null && message.hasOwnProperty("value"))
            $root.Expression.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.initialization != null && message.hasOwnProperty("initialization"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.initialization);
        if (message.constant != null && message.hasOwnProperty("constant"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.constant);
        return writer;
    };

    /**
     * Encodes the specified Set message, length delimited. Does not implicitly {@link Set.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Set
     * @static
     * @param {ISet} message Set message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Set.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Set message from the specified reader or buffer.
     * @function decode
     * @memberof Set
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Set} Set
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Set.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Set();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.set = $root.VariableReference.decode(reader, reader.uint32());
                break;
            case 2:
                message.value = $root.Expression.decode(reader, reader.uint32());
                break;
            case 3:
                message.initialization = reader.bool();
                break;
            case 4:
                message.constant = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Set message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Set
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Set} Set
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Set.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Set message.
     * @function verify
     * @memberof Set
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Set.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.set != null && message.hasOwnProperty("set")) {
            var error = $root.VariableReference.verify(message.set);
            if (error)
                return "set." + error;
        }
        if (message.value != null && message.hasOwnProperty("value")) {
            var error = $root.Expression.verify(message.value);
            if (error)
                return "value." + error;
        }
        if (message.initialization != null && message.hasOwnProperty("initialization"))
            if (typeof message.initialization !== "boolean")
                return "initialization: boolean expected";
        if (message.constant != null && message.hasOwnProperty("constant"))
            if (typeof message.constant !== "boolean")
                return "constant: boolean expected";
        return null;
    };

    /**
     * Creates a Set message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Set
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Set} Set
     */
    Set.fromObject = function fromObject(object) {
        if (object instanceof $root.Set)
            return object;
        var message = new $root.Set();
        if (object.set != null) {
            if (typeof object.set !== "object")
                throw TypeError(".Set.set: object expected");
            message.set = $root.VariableReference.fromObject(object.set);
        }
        if (object.value != null) {
            if (typeof object.value !== "object")
                throw TypeError(".Set.value: object expected");
            message.value = $root.Expression.fromObject(object.value);
        }
        if (object.initialization != null)
            message.initialization = Boolean(object.initialization);
        if (object.constant != null)
            message.constant = Boolean(object.constant);
        return message;
    };

    /**
     * Creates a plain object from a Set message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Set
     * @static
     * @param {Set} message Set
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Set.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.set = null;
            object.value = null;
            object.initialization = false;
            object.constant = false;
        }
        if (message.set != null && message.hasOwnProperty("set"))
            object.set = $root.VariableReference.toObject(message.set, options);
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = $root.Expression.toObject(message.value, options);
        if (message.initialization != null && message.hasOwnProperty("initialization"))
            object.initialization = message.initialization;
        if (message.constant != null && message.hasOwnProperty("constant"))
            object.constant = message.constant;
        return object;
    };

    /**
     * Converts this Set to JSON.
     * @function toJSON
     * @memberof Set
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Set.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Set;
})();

$root.Comment = (function() {

    /**
     * Properties of a Comment.
     * @exports IComment
     * @interface IComment
     * @property {string|null} [preExpression] Comment preExpression
     * @property {IExpression|null} [expression] Comment expression
     * @property {string|null} [postExpression] Comment postExpression
     */

    /**
     * Constructs a new Comment.
     * @exports Comment
     * @classdesc Represents a Comment.
     * @implements IComment
     * @constructor
     * @param {IComment=} [properties] Properties to set
     */
    function Comment(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Comment preExpression.
     * @member {string} preExpression
     * @memberof Comment
     * @instance
     */
    Comment.prototype.preExpression = "";

    /**
     * Comment expression.
     * @member {IExpression|null|undefined} expression
     * @memberof Comment
     * @instance
     */
    Comment.prototype.expression = null;

    /**
     * Comment postExpression.
     * @member {string} postExpression
     * @memberof Comment
     * @instance
     */
    Comment.prototype.postExpression = "";

    /**
     * Creates a new Comment instance using the specified properties.
     * @function create
     * @memberof Comment
     * @static
     * @param {IComment=} [properties] Properties to set
     * @returns {Comment} Comment instance
     */
    Comment.create = function create(properties) {
        return new Comment(properties);
    };

    /**
     * Encodes the specified Comment message. Does not implicitly {@link Comment.verify|verify} messages.
     * @function encode
     * @memberof Comment
     * @static
     * @param {IComment} message Comment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Comment.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.preExpression != null && message.hasOwnProperty("preExpression"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.preExpression);
        if (message.expression != null && message.hasOwnProperty("expression"))
            $root.Expression.encode(message.expression, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.postExpression != null && message.hasOwnProperty("postExpression"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.postExpression);
        return writer;
    };

    /**
     * Encodes the specified Comment message, length delimited. Does not implicitly {@link Comment.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Comment
     * @static
     * @param {IComment} message Comment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Comment.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Comment message from the specified reader or buffer.
     * @function decode
     * @memberof Comment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Comment} Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Comment.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Comment();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.preExpression = reader.string();
                break;
            case 1:
                message.expression = $root.Expression.decode(reader, reader.uint32());
                break;
            case 2:
                message.postExpression = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Comment message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Comment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Comment} Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Comment.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Comment message.
     * @function verify
     * @memberof Comment
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Comment.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.preExpression != null && message.hasOwnProperty("preExpression"))
            if (!$util.isString(message.preExpression))
                return "preExpression: string expected";
        if (message.expression != null && message.hasOwnProperty("expression")) {
            var error = $root.Expression.verify(message.expression);
            if (error)
                return "expression." + error;
        }
        if (message.postExpression != null && message.hasOwnProperty("postExpression"))
            if (!$util.isString(message.postExpression))
                return "postExpression: string expected";
        return null;
    };

    /**
     * Creates a Comment message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Comment
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Comment} Comment
     */
    Comment.fromObject = function fromObject(object) {
        if (object instanceof $root.Comment)
            return object;
        var message = new $root.Comment();
        if (object.preExpression != null)
            message.preExpression = String(object.preExpression);
        if (object.expression != null) {
            if (typeof object.expression !== "object")
                throw TypeError(".Comment.expression: object expected");
            message.expression = $root.Expression.fromObject(object.expression);
        }
        if (object.postExpression != null)
            message.postExpression = String(object.postExpression);
        return message;
    };

    /**
     * Creates a plain object from a Comment message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Comment
     * @static
     * @param {Comment} message Comment
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Comment.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.preExpression = "";
            object.expression = null;
            object.postExpression = "";
        }
        if (message.preExpression != null && message.hasOwnProperty("preExpression"))
            object.preExpression = message.preExpression;
        if (message.expression != null && message.hasOwnProperty("expression"))
            object.expression = $root.Expression.toObject(message.expression, options);
        if (message.postExpression != null && message.hasOwnProperty("postExpression"))
            object.postExpression = message.postExpression;
        return object;
    };

    /**
     * Converts this Comment to JSON.
     * @function toJSON
     * @memberof Comment
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Comment.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Comment;
})();

$root.Raw = (function() {

    /**
     * Properties of a Raw.
     * @exports IRaw
     * @interface IRaw
     * @property {string|null} [content] Raw content
     */

    /**
     * Constructs a new Raw.
     * @exports Raw
     * @classdesc Represents a Raw.
     * @implements IRaw
     * @constructor
     * @param {IRaw=} [properties] Properties to set
     */
    function Raw(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Raw content.
     * @member {string} content
     * @memberof Raw
     * @instance
     */
    Raw.prototype.content = "";

    /**
     * Creates a new Raw instance using the specified properties.
     * @function create
     * @memberof Raw
     * @static
     * @param {IRaw=} [properties] Properties to set
     * @returns {Raw} Raw instance
     */
    Raw.create = function create(properties) {
        return new Raw(properties);
    };

    /**
     * Encodes the specified Raw message. Does not implicitly {@link Raw.verify|verify} messages.
     * @function encode
     * @memberof Raw
     * @static
     * @param {IRaw} message Raw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Raw.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && message.hasOwnProperty("content"))
            writer.uint32(/* id 0, wireType 2 =*/2).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified Raw message, length delimited. Does not implicitly {@link Raw.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Raw
     * @static
     * @param {IRaw} message Raw message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Raw.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Raw message from the specified reader or buffer.
     * @function decode
     * @memberof Raw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Raw} Raw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Raw.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Raw();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.content = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Raw message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Raw
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Raw} Raw
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Raw.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Raw message.
     * @function verify
     * @memberof Raw
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Raw.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a Raw message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Raw
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Raw} Raw
     */
    Raw.fromObject = function fromObject(object) {
        if (object instanceof $root.Raw)
            return object;
        var message = new $root.Raw();
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a Raw message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Raw
     * @static
     * @param {Raw} message Raw
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Raw.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = "";
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this Raw to JSON.
     * @function toJSON
     * @memberof Raw
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Raw.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Raw;
})();

$root.Expression = (function() {

    /**
     * Properties of an Expression.
     * @exports IExpression
     * @interface IExpression
     * @property {ITypeReference|null} [type] Expression type
     * @property {IGet|null} [get] Expression get
     * @property {ISet|null} [set] Expression set
     * @property {ICall|null} [call] Expression call
     * @property {IAccess|null} [access] Expression access
     * @property {IFunctionReference|null} [fun] Expression fun
     * @property {ILiteral|null} [literal] Expression literal
     * @property {IReturn|null} ["return"] Expression return
     * @property {IComment|null} [comment] Expression comment
     * @property {IRaw|null} [raw] Expression raw
     */

    /**
     * Constructs a new Expression.
     * @exports Expression
     * @classdesc Represents an Expression.
     * @implements IExpression
     * @constructor
     * @param {IExpression=} [properties] Properties to set
     */
    function Expression(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Expression type.
     * @member {ITypeReference|null|undefined} type
     * @memberof Expression
     * @instance
     */
    Expression.prototype.type = null;

    /**
     * Expression get.
     * @member {IGet|null|undefined} get
     * @memberof Expression
     * @instance
     */
    Expression.prototype.get = null;

    /**
     * Expression set.
     * @member {ISet|null|undefined} set
     * @memberof Expression
     * @instance
     */
    Expression.prototype.set = null;

    /**
     * Expression call.
     * @member {ICall|null|undefined} call
     * @memberof Expression
     * @instance
     */
    Expression.prototype.call = null;

    /**
     * Expression access.
     * @member {IAccess|null|undefined} access
     * @memberof Expression
     * @instance
     */
    Expression.prototype.access = null;

    /**
     * Expression fun.
     * @member {IFunctionReference|null|undefined} fun
     * @memberof Expression
     * @instance
     */
    Expression.prototype.fun = null;

    /**
     * Expression literal.
     * @member {ILiteral|null|undefined} literal
     * @memberof Expression
     * @instance
     */
    Expression.prototype.literal = null;

    /**
     * Expression return.
     * @member {IReturn|null|undefined} return
     * @memberof Expression
     * @instance
     */
    Expression.prototype["return"] = null;

    /**
     * Expression comment.
     * @member {IComment|null|undefined} comment
     * @memberof Expression
     * @instance
     */
    Expression.prototype.comment = null;

    /**
     * Expression raw.
     * @member {IRaw|null|undefined} raw
     * @memberof Expression
     * @instance
     */
    Expression.prototype.raw = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Expression expressionType.
     * @member {"get"|"set"|"call"|"access"|"fun"|"literal"|"return"|"comment"|"raw"|undefined} expressionType
     * @memberof Expression
     * @instance
     */
    Object.defineProperty(Expression.prototype, "expressionType", {
        get: $util.oneOfGetter($oneOfFields = ["get", "set", "call", "access", "fun", "literal", "return", "comment", "raw"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Expression instance using the specified properties.
     * @function create
     * @memberof Expression
     * @static
     * @param {IExpression=} [properties] Properties to set
     * @returns {Expression} Expression instance
     */
    Expression.create = function create(properties) {
        return new Expression(properties);
    };

    /**
     * Encodes the specified Expression message. Does not implicitly {@link Expression.verify|verify} messages.
     * @function encode
     * @memberof Expression
     * @static
     * @param {IExpression} message Expression message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expression.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            $root.TypeReference.encode(message.type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.get != null && message.hasOwnProperty("get"))
            $root.Get.encode(message.get, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.set != null && message.hasOwnProperty("set"))
            $root.Set.encode(message.set, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.call != null && message.hasOwnProperty("call"))
            $root.Call.encode(message.call, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.access != null && message.hasOwnProperty("access"))
            $root.Access.encode(message.access, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.fun != null && message.hasOwnProperty("fun"))
            $root.FunctionReference.encode(message.fun, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.literal != null && message.hasOwnProperty("literal"))
            $root.Literal.encode(message.literal, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message["return"] != null && message.hasOwnProperty("return"))
            $root.Return.encode(message["return"], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.comment != null && message.hasOwnProperty("comment"))
            $root.Comment.encode(message.comment, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.raw != null && message.hasOwnProperty("raw"))
            $root.Raw.encode(message.raw, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Expression message, length delimited. Does not implicitly {@link Expression.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Expression
     * @static
     * @param {IExpression} message Expression message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Expression.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Expression message from the specified reader or buffer.
     * @function decode
     * @memberof Expression
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Expression} Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Expression.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Expression();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = $root.TypeReference.decode(reader, reader.uint32());
                break;
            case 2:
                message.get = $root.Get.decode(reader, reader.uint32());
                break;
            case 3:
                message.set = $root.Set.decode(reader, reader.uint32());
                break;
            case 4:
                message.call = $root.Call.decode(reader, reader.uint32());
                break;
            case 5:
                message.access = $root.Access.decode(reader, reader.uint32());
                break;
            case 6:
                message.fun = $root.FunctionReference.decode(reader, reader.uint32());
                break;
            case 7:
                message.literal = $root.Literal.decode(reader, reader.uint32());
                break;
            case 8:
                message["return"] = $root.Return.decode(reader, reader.uint32());
                break;
            case 9:
                message.comment = $root.Comment.decode(reader, reader.uint32());
                break;
            case 10:
                message.raw = $root.Raw.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Expression message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Expression
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Expression} Expression
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Expression.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Expression message.
     * @function verify
     * @memberof Expression
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Expression.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.type != null && message.hasOwnProperty("type")) {
            var error = $root.TypeReference.verify(message.type);
            if (error)
                return "type." + error;
        }
        if (message.get != null && message.hasOwnProperty("get")) {
            properties.expressionType = 1;
            {
                var error = $root.Get.verify(message.get);
                if (error)
                    return "get." + error;
            }
        }
        if (message.set != null && message.hasOwnProperty("set")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.Set.verify(message.set);
                if (error)
                    return "set." + error;
            }
        }
        if (message.call != null && message.hasOwnProperty("call")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.Call.verify(message.call);
                if (error)
                    return "call." + error;
            }
        }
        if (message.access != null && message.hasOwnProperty("access")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.Access.verify(message.access);
                if (error)
                    return "access." + error;
            }
        }
        if (message.fun != null && message.hasOwnProperty("fun")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.FunctionReference.verify(message.fun);
                if (error)
                    return "fun." + error;
            }
        }
        if (message.literal != null && message.hasOwnProperty("literal")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.Literal.verify(message.literal);
                if (error)
                    return "literal." + error;
            }
        }
        if (message["return"] != null && message.hasOwnProperty("return")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.Return.verify(message["return"]);
                if (error)
                    return "return." + error;
            }
        }
        if (message.comment != null && message.hasOwnProperty("comment")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.Comment.verify(message.comment);
                if (error)
                    return "comment." + error;
            }
        }
        if (message.raw != null && message.hasOwnProperty("raw")) {
            if (properties.expressionType === 1)
                return "expressionType: multiple values";
            properties.expressionType = 1;
            {
                var error = $root.Raw.verify(message.raw);
                if (error)
                    return "raw." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Expression message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Expression
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Expression} Expression
     */
    Expression.fromObject = function fromObject(object) {
        if (object instanceof $root.Expression)
            return object;
        var message = new $root.Expression();
        if (object.type != null) {
            if (typeof object.type !== "object")
                throw TypeError(".Expression.type: object expected");
            message.type = $root.TypeReference.fromObject(object.type);
        }
        if (object.get != null) {
            if (typeof object.get !== "object")
                throw TypeError(".Expression.get: object expected");
            message.get = $root.Get.fromObject(object.get);
        }
        if (object.set != null) {
            if (typeof object.set !== "object")
                throw TypeError(".Expression.set: object expected");
            message.set = $root.Set.fromObject(object.set);
        }
        if (object.call != null) {
            if (typeof object.call !== "object")
                throw TypeError(".Expression.call: object expected");
            message.call = $root.Call.fromObject(object.call);
        }
        if (object.access != null) {
            if (typeof object.access !== "object")
                throw TypeError(".Expression.access: object expected");
            message.access = $root.Access.fromObject(object.access);
        }
        if (object.fun != null) {
            if (typeof object.fun !== "object")
                throw TypeError(".Expression.fun: object expected");
            message.fun = $root.FunctionReference.fromObject(object.fun);
        }
        if (object.literal != null) {
            if (typeof object.literal !== "object")
                throw TypeError(".Expression.literal: object expected");
            message.literal = $root.Literal.fromObject(object.literal);
        }
        if (object["return"] != null) {
            if (typeof object["return"] !== "object")
                throw TypeError(".Expression.return: object expected");
            message["return"] = $root.Return.fromObject(object["return"]);
        }
        if (object.comment != null) {
            if (typeof object.comment !== "object")
                throw TypeError(".Expression.comment: object expected");
            message.comment = $root.Comment.fromObject(object.comment);
        }
        if (object.raw != null) {
            if (typeof object.raw !== "object")
                throw TypeError(".Expression.raw: object expected");
            message.raw = $root.Raw.fromObject(object.raw);
        }
        return message;
    };

    /**
     * Creates a plain object from an Expression message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Expression
     * @static
     * @param {Expression} message Expression
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Expression.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.type = null;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = $root.TypeReference.toObject(message.type, options);
        if (message.get != null && message.hasOwnProperty("get")) {
            object.get = $root.Get.toObject(message.get, options);
            if (options.oneofs)
                object.expressionType = "get";
        }
        if (message.set != null && message.hasOwnProperty("set")) {
            object.set = $root.Set.toObject(message.set, options);
            if (options.oneofs)
                object.expressionType = "set";
        }
        if (message.call != null && message.hasOwnProperty("call")) {
            object.call = $root.Call.toObject(message.call, options);
            if (options.oneofs)
                object.expressionType = "call";
        }
        if (message.access != null && message.hasOwnProperty("access")) {
            object.access = $root.Access.toObject(message.access, options);
            if (options.oneofs)
                object.expressionType = "access";
        }
        if (message.fun != null && message.hasOwnProperty("fun")) {
            object.fun = $root.FunctionReference.toObject(message.fun, options);
            if (options.oneofs)
                object.expressionType = "fun";
        }
        if (message.literal != null && message.hasOwnProperty("literal")) {
            object.literal = $root.Literal.toObject(message.literal, options);
            if (options.oneofs)
                object.expressionType = "literal";
        }
        if (message["return"] != null && message.hasOwnProperty("return")) {
            object["return"] = $root.Return.toObject(message["return"], options);
            if (options.oneofs)
                object.expressionType = "return";
        }
        if (message.comment != null && message.hasOwnProperty("comment")) {
            object.comment = $root.Comment.toObject(message.comment, options);
            if (options.oneofs)
                object.expressionType = "comment";
        }
        if (message.raw != null && message.hasOwnProperty("raw")) {
            object.raw = $root.Raw.toObject(message.raw, options);
            if (options.oneofs)
                object.expressionType = "raw";
        }
        return object;
    };

    /**
     * Converts this Expression to JSON.
     * @function toJSON
     * @memberof Expression
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Expression.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Expression;
})();

$root.Call = (function() {

    /**
     * Properties of a Call.
     * @exports ICall
     * @interface ICall
     * @property {IExpression|null} ["function"] Call function
     * @property {Array.<IArgument>|null} ["arguments"] Call arguments
     */

    /**
     * Constructs a new Call.
     * @exports Call
     * @classdesc Represents a Call.
     * @implements ICall
     * @constructor
     * @param {ICall=} [properties] Properties to set
     */
    function Call(properties) {
        this["arguments"] = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Call function.
     * @member {IExpression|null|undefined} function
     * @memberof Call
     * @instance
     */
    Call.prototype["function"] = null;

    /**
     * Call arguments.
     * @member {Array.<IArgument>} arguments
     * @memberof Call
     * @instance
     */
    Call.prototype["arguments"] = $util.emptyArray;

    /**
     * Creates a new Call instance using the specified properties.
     * @function create
     * @memberof Call
     * @static
     * @param {ICall=} [properties] Properties to set
     * @returns {Call} Call instance
     */
    Call.create = function create(properties) {
        return new Call(properties);
    };

    /**
     * Encodes the specified Call message. Does not implicitly {@link Call.verify|verify} messages.
     * @function encode
     * @memberof Call
     * @static
     * @param {ICall} message Call message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Call.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message["function"] != null && message.hasOwnProperty("function"))
            $root.Expression.encode(message["function"], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message["arguments"] != null && message["arguments"].length)
            for (var i = 0; i < message["arguments"].length; ++i)
                $root.Argument.encode(message["arguments"][i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Call message, length delimited. Does not implicitly {@link Call.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Call
     * @static
     * @param {ICall} message Call message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Call.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Call message from the specified reader or buffer.
     * @function decode
     * @memberof Call
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Call} Call
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Call.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Call();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message["function"] = $root.Expression.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message["arguments"] && message["arguments"].length))
                    message["arguments"] = [];
                message["arguments"].push($root.Argument.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Call message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Call
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Call} Call
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Call.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Call message.
     * @function verify
     * @memberof Call
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Call.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message["function"] != null && message.hasOwnProperty("function")) {
            var error = $root.Expression.verify(message["function"]);
            if (error)
                return "function." + error;
        }
        if (message["arguments"] != null && message.hasOwnProperty("arguments")) {
            if (!Array.isArray(message["arguments"]))
                return "arguments: array expected";
            for (var i = 0; i < message["arguments"].length; ++i) {
                var error = $root.Argument.verify(message["arguments"][i]);
                if (error)
                    return "arguments." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Call message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Call
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Call} Call
     */
    Call.fromObject = function fromObject(object) {
        if (object instanceof $root.Call)
            return object;
        var message = new $root.Call();
        if (object["function"] != null) {
            if (typeof object["function"] !== "object")
                throw TypeError(".Call.function: object expected");
            message["function"] = $root.Expression.fromObject(object["function"]);
        }
        if (object["arguments"]) {
            if (!Array.isArray(object["arguments"]))
                throw TypeError(".Call.arguments: array expected");
            message["arguments"] = [];
            for (var i = 0; i < object["arguments"].length; ++i) {
                if (typeof object["arguments"][i] !== "object")
                    throw TypeError(".Call.arguments: object expected");
                message["arguments"][i] = $root.Argument.fromObject(object["arguments"][i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Call message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Call
     * @static
     * @param {Call} message Call
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Call.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object["arguments"] = [];
        if (options.defaults)
            object["function"] = null;
        if (message["function"] != null && message.hasOwnProperty("function"))
            object["function"] = $root.Expression.toObject(message["function"], options);
        if (message["arguments"] && message["arguments"].length) {
            object["arguments"] = [];
            for (var j = 0; j < message["arguments"].length; ++j)
                object["arguments"][j] = $root.Argument.toObject(message["arguments"][j], options);
        }
        return object;
    };

    /**
     * Converts this Call to JSON.
     * @function toJSON
     * @memberof Call
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Call.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Call;
})();

$root.Argument = (function() {

    /**
     * Properties of an Argument.
     * @exports IArgument
     * @interface IArgument
     * @property {number|null} [id] Argument id
     * @property {IExpression|null} [value] Argument value
     */

    /**
     * Constructs a new Argument.
     * @exports Argument
     * @classdesc Represents an Argument.
     * @implements IArgument
     * @constructor
     * @param {IArgument=} [properties] Properties to set
     */
    function Argument(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Argument id.
     * @member {number} id
     * @memberof Argument
     * @instance
     */
    Argument.prototype.id = 0;

    /**
     * Argument value.
     * @member {IExpression|null|undefined} value
     * @memberof Argument
     * @instance
     */
    Argument.prototype.value = null;

    /**
     * Creates a new Argument instance using the specified properties.
     * @function create
     * @memberof Argument
     * @static
     * @param {IArgument=} [properties] Properties to set
     * @returns {Argument} Argument instance
     */
    Argument.create = function create(properties) {
        return new Argument(properties);
    };

    /**
     * Encodes the specified Argument message. Does not implicitly {@link Argument.verify|verify} messages.
     * @function encode
     * @memberof Argument
     * @static
     * @param {IArgument} message Argument message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Argument.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
        if (message.value != null && message.hasOwnProperty("value"))
            $root.Expression.encode(message.value, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Argument message, length delimited. Does not implicitly {@link Argument.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Argument
     * @static
     * @param {IArgument} message Argument message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Argument.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Argument message from the specified reader or buffer.
     * @function decode
     * @memberof Argument
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Argument} Argument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Argument.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Argument();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.int32();
                break;
            case 1:
                message.value = $root.Expression.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Argument message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Argument
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Argument} Argument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Argument.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Argument message.
     * @function verify
     * @memberof Argument
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Argument.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.value != null && message.hasOwnProperty("value")) {
            var error = $root.Expression.verify(message.value);
            if (error)
                return "value." + error;
        }
        return null;
    };

    /**
     * Creates an Argument message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Argument
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Argument} Argument
     */
    Argument.fromObject = function fromObject(object) {
        if (object instanceof $root.Argument)
            return object;
        var message = new $root.Argument();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.value != null) {
            if (typeof object.value !== "object")
                throw TypeError(".Argument.value: object expected");
            message.value = $root.Expression.fromObject(object.value);
        }
        return message;
    };

    /**
     * Creates a plain object from an Argument message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Argument
     * @static
     * @param {Argument} message Argument
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Argument.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.value = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = $root.Expression.toObject(message.value, options);
        return object;
    };

    /**
     * Converts this Argument to JSON.
     * @function toJSON
     * @memberof Argument
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Argument.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Argument;
})();

$root.GenericArgument = (function() {

    /**
     * Properties of a GenericArgument.
     * @exports IGenericArgument
     * @interface IGenericArgument
     * @property {number|null} [id] GenericArgument id
     * @property {ITypeReference|null} [value] GenericArgument value
     */

    /**
     * Constructs a new GenericArgument.
     * @exports GenericArgument
     * @classdesc Represents a GenericArgument.
     * @implements IGenericArgument
     * @constructor
     * @param {IGenericArgument=} [properties] Properties to set
     */
    function GenericArgument(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenericArgument id.
     * @member {number} id
     * @memberof GenericArgument
     * @instance
     */
    GenericArgument.prototype.id = 0;

    /**
     * GenericArgument value.
     * @member {ITypeReference|null|undefined} value
     * @memberof GenericArgument
     * @instance
     */
    GenericArgument.prototype.value = null;

    /**
     * Creates a new GenericArgument instance using the specified properties.
     * @function create
     * @memberof GenericArgument
     * @static
     * @param {IGenericArgument=} [properties] Properties to set
     * @returns {GenericArgument} GenericArgument instance
     */
    GenericArgument.create = function create(properties) {
        return new GenericArgument(properties);
    };

    /**
     * Encodes the specified GenericArgument message. Does not implicitly {@link GenericArgument.verify|verify} messages.
     * @function encode
     * @memberof GenericArgument
     * @static
     * @param {IGenericArgument} message GenericArgument message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenericArgument.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
        if (message.value != null && message.hasOwnProperty("value"))
            $root.TypeReference.encode(message.value, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GenericArgument message, length delimited. Does not implicitly {@link GenericArgument.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenericArgument
     * @static
     * @param {IGenericArgument} message GenericArgument message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenericArgument.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenericArgument message from the specified reader or buffer.
     * @function decode
     * @memberof GenericArgument
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenericArgument} GenericArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenericArgument.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenericArgument();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.int32();
                break;
            case 1:
                message.value = $root.TypeReference.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenericArgument message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenericArgument
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenericArgument} GenericArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenericArgument.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenericArgument message.
     * @function verify
     * @memberof GenericArgument
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenericArgument.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.value != null && message.hasOwnProperty("value")) {
            var error = $root.TypeReference.verify(message.value);
            if (error)
                return "value." + error;
        }
        return null;
    };

    /**
     * Creates a GenericArgument message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenericArgument
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenericArgument} GenericArgument
     */
    GenericArgument.fromObject = function fromObject(object) {
        if (object instanceof $root.GenericArgument)
            return object;
        var message = new $root.GenericArgument();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.value != null) {
            if (typeof object.value !== "object")
                throw TypeError(".GenericArgument.value: object expected");
            message.value = $root.TypeReference.fromObject(object.value);
        }
        return message;
    };

    /**
     * Creates a plain object from a GenericArgument message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenericArgument
     * @static
     * @param {GenericArgument} message GenericArgument
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenericArgument.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.value = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = $root.TypeReference.toObject(message.value, options);
        return object;
    };

    /**
     * Converts this GenericArgument to JSON.
     * @function toJSON
     * @memberof GenericArgument
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenericArgument.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GenericArgument;
})();

$root.Access = (function() {

    /**
     * Properties of an Access.
     * @exports IAccess
     * @interface IAccess
     * @property {IExpression|null} [object] Access object
     * @property {number|null} [property] Access property
     */

    /**
     * Constructs a new Access.
     * @exports Access
     * @classdesc Represents an Access.
     * @implements IAccess
     * @constructor
     * @param {IAccess=} [properties] Properties to set
     */
    function Access(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Access object.
     * @member {IExpression|null|undefined} object
     * @memberof Access
     * @instance
     */
    Access.prototype.object = null;

    /**
     * Access property.
     * @member {number} property
     * @memberof Access
     * @instance
     */
    Access.prototype.property = 0;

    /**
     * Creates a new Access instance using the specified properties.
     * @function create
     * @memberof Access
     * @static
     * @param {IAccess=} [properties] Properties to set
     * @returns {Access} Access instance
     */
    Access.create = function create(properties) {
        return new Access(properties);
    };

    /**
     * Encodes the specified Access message. Does not implicitly {@link Access.verify|verify} messages.
     * @function encode
     * @memberof Access
     * @static
     * @param {IAccess} message Access message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Access.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.object != null && message.hasOwnProperty("object"))
            $root.Expression.encode(message.object, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.property != null && message.hasOwnProperty("property"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.property);
        return writer;
    };

    /**
     * Encodes the specified Access message, length delimited. Does not implicitly {@link Access.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Access
     * @static
     * @param {IAccess} message Access message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Access.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Access message from the specified reader or buffer.
     * @function decode
     * @memberof Access
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Access} Access
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Access.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Access();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.object = $root.Expression.decode(reader, reader.uint32());
                break;
            case 2:
                message.property = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Access message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Access
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Access} Access
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Access.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Access message.
     * @function verify
     * @memberof Access
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Access.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.object != null && message.hasOwnProperty("object")) {
            var error = $root.Expression.verify(message.object);
            if (error)
                return "object." + error;
        }
        if (message.property != null && message.hasOwnProperty("property"))
            if (!$util.isInteger(message.property))
                return "property: integer expected";
        return null;
    };

    /**
     * Creates an Access message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Access
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Access} Access
     */
    Access.fromObject = function fromObject(object) {
        if (object instanceof $root.Access)
            return object;
        var message = new $root.Access();
        if (object.object != null) {
            if (typeof object.object !== "object")
                throw TypeError(".Access.object: object expected");
            message.object = $root.Expression.fromObject(object.object);
        }
        if (object.property != null)
            message.property = object.property | 0;
        return message;
    };

    /**
     * Creates a plain object from an Access message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Access
     * @static
     * @param {Access} message Access
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Access.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.object = null;
            object.property = 0;
        }
        if (message.object != null && message.hasOwnProperty("object"))
            object.object = $root.Expression.toObject(message.object, options);
        if (message.property != null && message.hasOwnProperty("property"))
            object.property = message.property;
        return object;
    };

    /**
     * Converts this Access to JSON.
     * @function toJSON
     * @memberof Access
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Access.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Access;
})();

$root.Literal = (function() {

    /**
     * Properties of a Literal.
     * @exports ILiteral
     * @interface ILiteral
     * @property {number|null} [integer] Literal integer
     * @property {number|null} [floating] Literal floating
     * @property {boolean|null} [bool] Literal bool
     * @property {string|null} [str] Literal str
     * @property {boolean|null} ["void"] Literal void
     */

    /**
     * Constructs a new Literal.
     * @exports Literal
     * @classdesc Represents a Literal.
     * @implements ILiteral
     * @constructor
     * @param {ILiteral=} [properties] Properties to set
     */
    function Literal(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Literal integer.
     * @member {number} integer
     * @memberof Literal
     * @instance
     */
    Literal.prototype.integer = 0;

    /**
     * Literal floating.
     * @member {number} floating
     * @memberof Literal
     * @instance
     */
    Literal.prototype.floating = 0;

    /**
     * Literal bool.
     * @member {boolean} bool
     * @memberof Literal
     * @instance
     */
    Literal.prototype.bool = false;

    /**
     * Literal str.
     * @member {string} str
     * @memberof Literal
     * @instance
     */
    Literal.prototype.str = "";

    /**
     * Literal void.
     * @member {boolean} void
     * @memberof Literal
     * @instance
     */
    Literal.prototype["void"] = false;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Literal type.
     * @member {"integer"|"floating"|"bool"|"str"|"void"|undefined} type
     * @memberof Literal
     * @instance
     */
    Object.defineProperty(Literal.prototype, "type", {
        get: $util.oneOfGetter($oneOfFields = ["integer", "floating", "bool", "str", "void"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Literal instance using the specified properties.
     * @function create
     * @memberof Literal
     * @static
     * @param {ILiteral=} [properties] Properties to set
     * @returns {Literal} Literal instance
     */
    Literal.create = function create(properties) {
        return new Literal(properties);
    };

    /**
     * Encodes the specified Literal message. Does not implicitly {@link Literal.verify|verify} messages.
     * @function encode
     * @memberof Literal
     * @static
     * @param {ILiteral} message Literal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Literal.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.integer != null && message.hasOwnProperty("integer"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.integer);
        if (message.floating != null && message.hasOwnProperty("floating"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.floating);
        if (message.bool != null && message.hasOwnProperty("bool"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bool);
        if (message.str != null && message.hasOwnProperty("str"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.str);
        if (message["void"] != null && message.hasOwnProperty("void"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message["void"]);
        return writer;
    };

    /**
     * Encodes the specified Literal message, length delimited. Does not implicitly {@link Literal.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Literal
     * @static
     * @param {ILiteral} message Literal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Literal.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Literal message from the specified reader or buffer.
     * @function decode
     * @memberof Literal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Literal} Literal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Literal.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Literal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.integer = reader.int32();
                break;
            case 2:
                message.floating = reader.float();
                break;
            case 3:
                message.bool = reader.bool();
                break;
            case 4:
                message.str = reader.string();
                break;
            case 5:
                message["void"] = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Literal message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Literal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Literal} Literal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Literal.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Literal message.
     * @function verify
     * @memberof Literal
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Literal.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.integer != null && message.hasOwnProperty("integer")) {
            properties.type = 1;
            if (!$util.isInteger(message.integer))
                return "integer: integer expected";
        }
        if (message.floating != null && message.hasOwnProperty("floating")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            if (typeof message.floating !== "number")
                return "floating: number expected";
        }
        if (message.bool != null && message.hasOwnProperty("bool")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            if (typeof message.bool !== "boolean")
                return "bool: boolean expected";
        }
        if (message.str != null && message.hasOwnProperty("str")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            if (!$util.isString(message.str))
                return "str: string expected";
        }
        if (message["void"] != null && message.hasOwnProperty("void")) {
            if (properties.type === 1)
                return "type: multiple values";
            properties.type = 1;
            if (typeof message["void"] !== "boolean")
                return "void: boolean expected";
        }
        return null;
    };

    /**
     * Creates a Literal message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Literal
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Literal} Literal
     */
    Literal.fromObject = function fromObject(object) {
        if (object instanceof $root.Literal)
            return object;
        var message = new $root.Literal();
        if (object.integer != null)
            message.integer = object.integer | 0;
        if (object.floating != null)
            message.floating = Number(object.floating);
        if (object.bool != null)
            message.bool = Boolean(object.bool);
        if (object.str != null)
            message.str = String(object.str);
        if (object["void"] != null)
            message["void"] = Boolean(object["void"]);
        return message;
    };

    /**
     * Creates a plain object from a Literal message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Literal
     * @static
     * @param {Literal} message Literal
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Literal.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.integer != null && message.hasOwnProperty("integer")) {
            object.integer = message.integer;
            if (options.oneofs)
                object.type = "integer";
        }
        if (message.floating != null && message.hasOwnProperty("floating")) {
            object.floating = options.json && !isFinite(message.floating) ? String(message.floating) : message.floating;
            if (options.oneofs)
                object.type = "floating";
        }
        if (message.bool != null && message.hasOwnProperty("bool")) {
            object.bool = message.bool;
            if (options.oneofs)
                object.type = "bool";
        }
        if (message.str != null && message.hasOwnProperty("str")) {
            object.str = message.str;
            if (options.oneofs)
                object.type = "str";
        }
        if (message["void"] != null && message.hasOwnProperty("void")) {
            object["void"] = message["void"];
            if (options.oneofs)
                object.type = "void";
        }
        return object;
    };

    /**
     * Converts this Literal to JSON.
     * @function toJSON
     * @memberof Literal
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Literal.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Literal;
})();

$root.Return = (function() {

    /**
     * Properties of a Return.
     * @exports IReturn
     * @interface IReturn
     * @property {number|null} [up] Return up
     * @property {IExpression|null} [value] Return value
     */

    /**
     * Constructs a new Return.
     * @exports Return
     * @classdesc Represents a Return.
     * @implements IReturn
     * @constructor
     * @param {IReturn=} [properties] Properties to set
     */
    function Return(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Return up.
     * @member {number} up
     * @memberof Return
     * @instance
     */
    Return.prototype.up = 0;

    /**
     * Return value.
     * @member {IExpression|null|undefined} value
     * @memberof Return
     * @instance
     */
    Return.prototype.value = null;

    /**
     * Creates a new Return instance using the specified properties.
     * @function create
     * @memberof Return
     * @static
     * @param {IReturn=} [properties] Properties to set
     * @returns {Return} Return instance
     */
    Return.create = function create(properties) {
        return new Return(properties);
    };

    /**
     * Encodes the specified Return message. Does not implicitly {@link Return.verify|verify} messages.
     * @function encode
     * @memberof Return
     * @static
     * @param {IReturn} message Return message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Return.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.up != null && message.hasOwnProperty("up"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.up);
        if (message.value != null && message.hasOwnProperty("value"))
            $root.Expression.encode(message.value, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Return message, length delimited. Does not implicitly {@link Return.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Return
     * @static
     * @param {IReturn} message Return message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Return.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Return message from the specified reader or buffer.
     * @function decode
     * @memberof Return
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Return} Return
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Return.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Return();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.up = reader.int32();
                break;
            case 1:
                message.value = $root.Expression.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Return message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Return
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Return} Return
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Return.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Return message.
     * @function verify
     * @memberof Return
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Return.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.up != null && message.hasOwnProperty("up"))
            if (!$util.isInteger(message.up))
                return "up: integer expected";
        if (message.value != null && message.hasOwnProperty("value")) {
            var error = $root.Expression.verify(message.value);
            if (error)
                return "value." + error;
        }
        return null;
    };

    /**
     * Creates a Return message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Return
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Return} Return
     */
    Return.fromObject = function fromObject(object) {
        if (object instanceof $root.Return)
            return object;
        var message = new $root.Return();
        if (object.up != null)
            message.up = object.up | 0;
        if (object.value != null) {
            if (typeof object.value !== "object")
                throw TypeError(".Return.value: object expected");
            message.value = $root.Expression.fromObject(object.value);
        }
        return message;
    };

    /**
     * Creates a plain object from a Return message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Return
     * @static
     * @param {Return} message Return
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Return.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.up = 0;
            object.value = null;
        }
        if (message.up != null && message.hasOwnProperty("up"))
            object.up = message.up;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = $root.Expression.toObject(message.value, options);
        return object;
    };

    /**
     * Converts this Return to JSON.
     * @function toJSON
     * @memberof Return
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Return.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Return;
})();

$root.Function = (function() {

    /**
     * Properties of a Function.
     * @exports IFunction
     * @interface IFunction
     * @property {number|null} [id] Function id
     * @property {IComplexTypeReference|null} [type] Function type
     * @property {string|null} [name] Function name
     * @property {string|null} [description] Function description
     * @property {IFunctionReference|null} [lexicalParent] Function lexicalParent
     * @property {boolean|null} [pure] Function pure
     * @property {Array.<IVariable>|null} [parameters] Function parameters
     * @property {Array.<IVariable>|null} [variables] Function variables
     * @property {Array.<IExpression>|null} [body] Function body
     */

    /**
     * Constructs a new Function.
     * @exports Function
     * @classdesc Represents a Function.
     * @implements IFunction
     * @constructor
     * @param {IFunction=} [properties] Properties to set
     */
    function Function(properties) {
        this.parameters = [];
        this.variables = [];
        this.body = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Function id.
     * @member {number} id
     * @memberof Function
     * @instance
     */
    Function.prototype.id = 0;

    /**
     * Function type.
     * @member {IComplexTypeReference|null|undefined} type
     * @memberof Function
     * @instance
     */
    Function.prototype.type = null;

    /**
     * Function name.
     * @member {string} name
     * @memberof Function
     * @instance
     */
    Function.prototype.name = "";

    /**
     * Function description.
     * @member {string} description
     * @memberof Function
     * @instance
     */
    Function.prototype.description = "";

    /**
     * Function lexicalParent.
     * @member {IFunctionReference|null|undefined} lexicalParent
     * @memberof Function
     * @instance
     */
    Function.prototype.lexicalParent = null;

    /**
     * Function pure.
     * @member {boolean} pure
     * @memberof Function
     * @instance
     */
    Function.prototype.pure = false;

    /**
     * Function parameters.
     * @member {Array.<IVariable>} parameters
     * @memberof Function
     * @instance
     */
    Function.prototype.parameters = $util.emptyArray;

    /**
     * Function variables.
     * @member {Array.<IVariable>} variables
     * @memberof Function
     * @instance
     */
    Function.prototype.variables = $util.emptyArray;

    /**
     * Function body.
     * @member {Array.<IExpression>} body
     * @memberof Function
     * @instance
     */
    Function.prototype.body = $util.emptyArray;

    /**
     * Creates a new Function instance using the specified properties.
     * @function create
     * @memberof Function
     * @static
     * @param {IFunction=} [properties] Properties to set
     * @returns {Function} Function instance
     */
    Function.create = function create(properties) {
        return new Function(properties);
    };

    /**
     * Encodes the specified Function message. Does not implicitly {@link Function.verify|verify} messages.
     * @function encode
     * @memberof Function
     * @static
     * @param {IFunction} message Function message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Function.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 0, wireType 0 =*/0).int32(message.id);
        if (message.type != null && message.hasOwnProperty("type"))
            $root.ComplexTypeReference.encode(message.type, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        if (message.lexicalParent != null && message.hasOwnProperty("lexicalParent"))
            $root.FunctionReference.encode(message.lexicalParent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.pure != null && message.hasOwnProperty("pure"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.pure);
        if (message.parameters != null && message.parameters.length)
            for (var i = 0; i < message.parameters.length; ++i)
                $root.Variable.encode(message.parameters[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.variables != null && message.variables.length)
            for (var i = 0; i < message.variables.length; ++i)
                $root.Variable.encode(message.variables[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.body != null && message.body.length)
            for (var i = 0; i < message.body.length; ++i)
                $root.Expression.encode(message.body[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Function message, length delimited. Does not implicitly {@link Function.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Function
     * @static
     * @param {IFunction} message Function message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Function.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Function message from the specified reader or buffer.
     * @function decode
     * @memberof Function
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Function} Function
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Function.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Function();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 0:
                message.id = reader.int32();
                break;
            case 1:
                message.type = $root.ComplexTypeReference.decode(reader, reader.uint32());
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            case 4:
                message.lexicalParent = $root.FunctionReference.decode(reader, reader.uint32());
                break;
            case 5:
                message.pure = reader.bool();
                break;
            case 6:
                if (!(message.parameters && message.parameters.length))
                    message.parameters = [];
                message.parameters.push($root.Variable.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.variables && message.variables.length))
                    message.variables = [];
                message.variables.push($root.Variable.decode(reader, reader.uint32()));
                break;
            case 8:
                if (!(message.body && message.body.length))
                    message.body = [];
                message.body.push($root.Expression.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Function message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Function
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Function} Function
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Function.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Function message.
     * @function verify
     * @memberof Function
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Function.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.type != null && message.hasOwnProperty("type")) {
            var error = $root.ComplexTypeReference.verify(message.type);
            if (error)
                return "type." + error;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.lexicalParent != null && message.hasOwnProperty("lexicalParent")) {
            var error = $root.FunctionReference.verify(message.lexicalParent);
            if (error)
                return "lexicalParent." + error;
        }
        if (message.pure != null && message.hasOwnProperty("pure"))
            if (typeof message.pure !== "boolean")
                return "pure: boolean expected";
        if (message.parameters != null && message.hasOwnProperty("parameters")) {
            if (!Array.isArray(message.parameters))
                return "parameters: array expected";
            for (var i = 0; i < message.parameters.length; ++i) {
                var error = $root.Variable.verify(message.parameters[i]);
                if (error)
                    return "parameters." + error;
            }
        }
        if (message.variables != null && message.hasOwnProperty("variables")) {
            if (!Array.isArray(message.variables))
                return "variables: array expected";
            for (var i = 0; i < message.variables.length; ++i) {
                var error = $root.Variable.verify(message.variables[i]);
                if (error)
                    return "variables." + error;
            }
        }
        if (message.body != null && message.hasOwnProperty("body")) {
            if (!Array.isArray(message.body))
                return "body: array expected";
            for (var i = 0; i < message.body.length; ++i) {
                var error = $root.Expression.verify(message.body[i]);
                if (error)
                    return "body." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Function message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Function
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Function} Function
     */
    Function.fromObject = function fromObject(object) {
        if (object instanceof $root.Function)
            return object;
        var message = new $root.Function();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.type != null) {
            if (typeof object.type !== "object")
                throw TypeError(".Function.type: object expected");
            message.type = $root.ComplexTypeReference.fromObject(object.type);
        }
        if (object.name != null)
            message.name = String(object.name);
        if (object.description != null)
            message.description = String(object.description);
        if (object.lexicalParent != null) {
            if (typeof object.lexicalParent !== "object")
                throw TypeError(".Function.lexicalParent: object expected");
            message.lexicalParent = $root.FunctionReference.fromObject(object.lexicalParent);
        }
        if (object.pure != null)
            message.pure = Boolean(object.pure);
        if (object.parameters) {
            if (!Array.isArray(object.parameters))
                throw TypeError(".Function.parameters: array expected");
            message.parameters = [];
            for (var i = 0; i < object.parameters.length; ++i) {
                if (typeof object.parameters[i] !== "object")
                    throw TypeError(".Function.parameters: object expected");
                message.parameters[i] = $root.Variable.fromObject(object.parameters[i]);
            }
        }
        if (object.variables) {
            if (!Array.isArray(object.variables))
                throw TypeError(".Function.variables: array expected");
            message.variables = [];
            for (var i = 0; i < object.variables.length; ++i) {
                if (typeof object.variables[i] !== "object")
                    throw TypeError(".Function.variables: object expected");
                message.variables[i] = $root.Variable.fromObject(object.variables[i]);
            }
        }
        if (object.body) {
            if (!Array.isArray(object.body))
                throw TypeError(".Function.body: array expected");
            message.body = [];
            for (var i = 0; i < object.body.length; ++i) {
                if (typeof object.body[i] !== "object")
                    throw TypeError(".Function.body: object expected");
                message.body[i] = $root.Expression.fromObject(object.body[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Function message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Function
     * @static
     * @param {Function} message Function
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Function.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.parameters = [];
            object.variables = [];
            object.body = [];
        }
        if (options.defaults) {
            object.id = 0;
            object.type = null;
            object.name = "";
            object.description = "";
            object.lexicalParent = null;
            object.pure = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = $root.ComplexTypeReference.toObject(message.type, options);
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.lexicalParent != null && message.hasOwnProperty("lexicalParent"))
            object.lexicalParent = $root.FunctionReference.toObject(message.lexicalParent, options);
        if (message.pure != null && message.hasOwnProperty("pure"))
            object.pure = message.pure;
        if (message.parameters && message.parameters.length) {
            object.parameters = [];
            for (var j = 0; j < message.parameters.length; ++j)
                object.parameters[j] = $root.Variable.toObject(message.parameters[j], options);
        }
        if (message.variables && message.variables.length) {
            object.variables = [];
            for (var j = 0; j < message.variables.length; ++j)
                object.variables[j] = $root.Variable.toObject(message.variables[j], options);
        }
        if (message.body && message.body.length) {
            object.body = [];
            for (var j = 0; j < message.body.length; ++j)
                object.body[j] = $root.Expression.toObject(message.body[j], options);
        }
        return object;
    };

    /**
     * Converts this Function to JSON.
     * @function toJSON
     * @memberof Function
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Function.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Function;
})();

$root.Module = (function() {

    /**
     * Properties of a Module.
     * @exports IModule
     * @interface IModule
     * @property {IModuleReference|null} [id] Module id
     * @property {Array.<IModuleReference>|null} [dependencies] Module dependencies
     * @property {Array.<IFunction>|null} [functions] Module functions
     * @property {Array.<IComplexType>|null} [types] Module types
     * @property {IFunction|null} [main] Module main
     */

    /**
     * Constructs a new Module.
     * @exports Module
     * @classdesc Represents a Module.
     * @implements IModule
     * @constructor
     * @param {IModule=} [properties] Properties to set
     */
    function Module(properties) {
        this.dependencies = [];
        this.functions = [];
        this.types = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Module id.
     * @member {IModuleReference|null|undefined} id
     * @memberof Module
     * @instance
     */
    Module.prototype.id = null;

    /**
     * Module dependencies.
     * @member {Array.<IModuleReference>} dependencies
     * @memberof Module
     * @instance
     */
    Module.prototype.dependencies = $util.emptyArray;

    /**
     * Module functions.
     * @member {Array.<IFunction>} functions
     * @memberof Module
     * @instance
     */
    Module.prototype.functions = $util.emptyArray;

    /**
     * Module types.
     * @member {Array.<IComplexType>} types
     * @memberof Module
     * @instance
     */
    Module.prototype.types = $util.emptyArray;

    /**
     * Module main.
     * @member {IFunction|null|undefined} main
     * @memberof Module
     * @instance
     */
    Module.prototype.main = null;

    /**
     * Creates a new Module instance using the specified properties.
     * @function create
     * @memberof Module
     * @static
     * @param {IModule=} [properties] Properties to set
     * @returns {Module} Module instance
     */
    Module.create = function create(properties) {
        return new Module(properties);
    };

    /**
     * Encodes the specified Module message. Does not implicitly {@link Module.verify|verify} messages.
     * @function encode
     * @memberof Module
     * @static
     * @param {IModule} message Module message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Module.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            $root.ModuleReference.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.dependencies != null && message.dependencies.length)
            for (var i = 0; i < message.dependencies.length; ++i)
                $root.ModuleReference.encode(message.dependencies[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.functions != null && message.functions.length)
            for (var i = 0; i < message.functions.length; ++i)
                $root.Function.encode(message.functions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.types != null && message.types.length)
            for (var i = 0; i < message.types.length; ++i)
                $root.ComplexType.encode(message.types[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.main != null && message.hasOwnProperty("main"))
            $root.Function.encode(message.main, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Module message, length delimited. Does not implicitly {@link Module.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Module
     * @static
     * @param {IModule} message Module message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Module.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Module message from the specified reader or buffer.
     * @function decode
     * @memberof Module
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Module} Module
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Module.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Module();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = $root.ModuleReference.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.dependencies && message.dependencies.length))
                    message.dependencies = [];
                message.dependencies.push($root.ModuleReference.decode(reader, reader.uint32()));
                break;
            case 3:
                if (!(message.functions && message.functions.length))
                    message.functions = [];
                message.functions.push($root.Function.decode(reader, reader.uint32()));
                break;
            case 4:
                if (!(message.types && message.types.length))
                    message.types = [];
                message.types.push($root.ComplexType.decode(reader, reader.uint32()));
                break;
            case 5:
                message.main = $root.Function.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Module message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Module
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Module} Module
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Module.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Module message.
     * @function verify
     * @memberof Module
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Module.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id")) {
            var error = $root.ModuleReference.verify(message.id);
            if (error)
                return "id." + error;
        }
        if (message.dependencies != null && message.hasOwnProperty("dependencies")) {
            if (!Array.isArray(message.dependencies))
                return "dependencies: array expected";
            for (var i = 0; i < message.dependencies.length; ++i) {
                var error = $root.ModuleReference.verify(message.dependencies[i]);
                if (error)
                    return "dependencies." + error;
            }
        }
        if (message.functions != null && message.hasOwnProperty("functions")) {
            if (!Array.isArray(message.functions))
                return "functions: array expected";
            for (var i = 0; i < message.functions.length; ++i) {
                var error = $root.Function.verify(message.functions[i]);
                if (error)
                    return "functions." + error;
            }
        }
        if (message.types != null && message.hasOwnProperty("types")) {
            if (!Array.isArray(message.types))
                return "types: array expected";
            for (var i = 0; i < message.types.length; ++i) {
                var error = $root.ComplexType.verify(message.types[i]);
                if (error)
                    return "types." + error;
            }
        }
        if (message.main != null && message.hasOwnProperty("main")) {
            var error = $root.Function.verify(message.main);
            if (error)
                return "main." + error;
        }
        return null;
    };

    /**
     * Creates a Module message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Module
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Module} Module
     */
    Module.fromObject = function fromObject(object) {
        if (object instanceof $root.Module)
            return object;
        var message = new $root.Module();
        if (object.id != null) {
            if (typeof object.id !== "object")
                throw TypeError(".Module.id: object expected");
            message.id = $root.ModuleReference.fromObject(object.id);
        }
        if (object.dependencies) {
            if (!Array.isArray(object.dependencies))
                throw TypeError(".Module.dependencies: array expected");
            message.dependencies = [];
            for (var i = 0; i < object.dependencies.length; ++i) {
                if (typeof object.dependencies[i] !== "object")
                    throw TypeError(".Module.dependencies: object expected");
                message.dependencies[i] = $root.ModuleReference.fromObject(object.dependencies[i]);
            }
        }
        if (object.functions) {
            if (!Array.isArray(object.functions))
                throw TypeError(".Module.functions: array expected");
            message.functions = [];
            for (var i = 0; i < object.functions.length; ++i) {
                if (typeof object.functions[i] !== "object")
                    throw TypeError(".Module.functions: object expected");
                message.functions[i] = $root.Function.fromObject(object.functions[i]);
            }
        }
        if (object.types) {
            if (!Array.isArray(object.types))
                throw TypeError(".Module.types: array expected");
            message.types = [];
            for (var i = 0; i < object.types.length; ++i) {
                if (typeof object.types[i] !== "object")
                    throw TypeError(".Module.types: object expected");
                message.types[i] = $root.ComplexType.fromObject(object.types[i]);
            }
        }
        if (object.main != null) {
            if (typeof object.main !== "object")
                throw TypeError(".Module.main: object expected");
            message.main = $root.Function.fromObject(object.main);
        }
        return message;
    };

    /**
     * Creates a plain object from a Module message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Module
     * @static
     * @param {Module} message Module
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Module.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.dependencies = [];
            object.functions = [];
            object.types = [];
        }
        if (options.defaults) {
            object.id = null;
            object.main = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = $root.ModuleReference.toObject(message.id, options);
        if (message.dependencies && message.dependencies.length) {
            object.dependencies = [];
            for (var j = 0; j < message.dependencies.length; ++j)
                object.dependencies[j] = $root.ModuleReference.toObject(message.dependencies[j], options);
        }
        if (message.functions && message.functions.length) {
            object.functions = [];
            for (var j = 0; j < message.functions.length; ++j)
                object.functions[j] = $root.Function.toObject(message.functions[j], options);
        }
        if (message.types && message.types.length) {
            object.types = [];
            for (var j = 0; j < message.types.length; ++j)
                object.types[j] = $root.ComplexType.toObject(message.types[j], options);
        }
        if (message.main != null && message.hasOwnProperty("main"))
            object.main = $root.Function.toObject(message.main, options);
        return object;
    };

    /**
     * Converts this Module to JSON.
     * @function toJSON
     * @memberof Module
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Module.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Module;
})();

$root.ModuleReference = (function() {

    /**
     * Properties of a ModuleReference.
     * @exports IModuleReference
     * @interface IModuleReference
     * @property {Array.<string>|null} [domain] ModuleReference domain
     * @property {number|null} [moduleID] ModuleReference moduleID
     * @property {number|null} [version] ModuleReference version
     */

    /**
     * Constructs a new ModuleReference.
     * @exports ModuleReference
     * @classdesc Represents a ModuleReference.
     * @implements IModuleReference
     * @constructor
     * @param {IModuleReference=} [properties] Properties to set
     */
    function ModuleReference(properties) {
        this.domain = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModuleReference domain.
     * @member {Array.<string>} domain
     * @memberof ModuleReference
     * @instance
     */
    ModuleReference.prototype.domain = $util.emptyArray;

    /**
     * ModuleReference moduleID.
     * @member {number} moduleID
     * @memberof ModuleReference
     * @instance
     */
    ModuleReference.prototype.moduleID = 0;

    /**
     * ModuleReference version.
     * @member {number} version
     * @memberof ModuleReference
     * @instance
     */
    ModuleReference.prototype.version = 0;

    /**
     * Creates a new ModuleReference instance using the specified properties.
     * @function create
     * @memberof ModuleReference
     * @static
     * @param {IModuleReference=} [properties] Properties to set
     * @returns {ModuleReference} ModuleReference instance
     */
    ModuleReference.create = function create(properties) {
        return new ModuleReference(properties);
    };

    /**
     * Encodes the specified ModuleReference message. Does not implicitly {@link ModuleReference.verify|verify} messages.
     * @function encode
     * @memberof ModuleReference
     * @static
     * @param {IModuleReference} message ModuleReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModuleReference.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.domain != null && message.domain.length)
            for (var i = 0; i < message.domain.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.domain[i]);
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.moduleID);
        if (message.version != null && message.hasOwnProperty("version"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.version);
        return writer;
    };

    /**
     * Encodes the specified ModuleReference message, length delimited. Does not implicitly {@link ModuleReference.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModuleReference
     * @static
     * @param {IModuleReference} message ModuleReference message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModuleReference.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModuleReference message from the specified reader or buffer.
     * @function decode
     * @memberof ModuleReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModuleReference} ModuleReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModuleReference.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModuleReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.domain && message.domain.length))
                    message.domain = [];
                message.domain.push(reader.string());
                break;
            case 2:
                message.moduleID = reader.int32();
                break;
            case 3:
                message.version = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ModuleReference message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModuleReference
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModuleReference} ModuleReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModuleReference.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModuleReference message.
     * @function verify
     * @memberof ModuleReference
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModuleReference.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.domain != null && message.hasOwnProperty("domain")) {
            if (!Array.isArray(message.domain))
                return "domain: array expected";
            for (var i = 0; i < message.domain.length; ++i)
                if (!$util.isString(message.domain[i]))
                    return "domain: string[] expected";
        }
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            if (!$util.isInteger(message.moduleID))
                return "moduleID: integer expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        return null;
    };

    /**
     * Creates a ModuleReference message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModuleReference
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModuleReference} ModuleReference
     */
    ModuleReference.fromObject = function fromObject(object) {
        if (object instanceof $root.ModuleReference)
            return object;
        var message = new $root.ModuleReference();
        if (object.domain) {
            if (!Array.isArray(object.domain))
                throw TypeError(".ModuleReference.domain: array expected");
            message.domain = [];
            for (var i = 0; i < object.domain.length; ++i)
                message.domain[i] = String(object.domain[i]);
        }
        if (object.moduleID != null)
            message.moduleID = object.moduleID | 0;
        if (object.version != null)
            message.version = object.version | 0;
        return message;
    };

    /**
     * Creates a plain object from a ModuleReference message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModuleReference
     * @static
     * @param {ModuleReference} message ModuleReference
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModuleReference.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.domain = [];
        if (options.defaults) {
            object.moduleID = 0;
            object.version = 0;
        }
        if (message.domain && message.domain.length) {
            object.domain = [];
            for (var j = 0; j < message.domain.length; ++j)
                object.domain[j] = message.domain[j];
        }
        if (message.moduleID != null && message.hasOwnProperty("moduleID"))
            object.moduleID = message.moduleID;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this ModuleReference to JSON.
     * @function toJSON
     * @memberof ModuleReference
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModuleReference.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModuleReference;
})();

module.exports = $root;
