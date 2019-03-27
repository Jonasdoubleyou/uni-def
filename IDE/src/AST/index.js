/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TypeReference = (function() {

    /**
     * Properties of a TypeReference.
     * @exports ITypeReference
     * @interface ITypeReference
     * @property {PrimitiveType|null} [primitive] TypeReference primitive
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

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * TypeReference primitiveOrComplex.
     * @member {"primitive"|undefined} primitiveOrComplex
     * @memberof TypeReference
     * @instance
     */
    Object.defineProperty(TypeReference.prototype, "primitiveOrComplex", {
        get: $util.oneOfGetter($oneOfFields = ["primitive"]),
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
                break;
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

$root.Type = (function() {

    /**
     * Properties of a Type.
     * @exports IType
     * @interface IType
     * @property {number|null} [id] Type id
     */

    /**
     * Constructs a new Type.
     * @exports Type
     * @classdesc Represents a Type.
     * @implements IType
     * @constructor
     * @param {IType=} [properties] Properties to set
     */
    function Type(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Type id.
     * @member {number} id
     * @memberof Type
     * @instance
     */
    Type.prototype.id = 0;

    /**
     * Creates a new Type instance using the specified properties.
     * @function create
     * @memberof Type
     * @static
     * @param {IType=} [properties] Properties to set
     * @returns {Type} Type instance
     */
    Type.create = function create(properties) {
        return new Type(properties);
    };

    /**
     * Encodes the specified Type message. Does not implicitly {@link Type.verify|verify} messages.
     * @function encode
     * @memberof Type
     * @static
     * @param {IType} message Type message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Type.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        return writer;
    };

    /**
     * Encodes the specified Type message, length delimited. Does not implicitly {@link Type.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Type
     * @static
     * @param {IType} message Type message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Type.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Type message from the specified reader or buffer.
     * @function decode
     * @memberof Type
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Type} Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Type.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Type();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Type message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Type
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Type} Type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Type.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Type message.
     * @function verify
     * @memberof Type
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Type.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        return null;
    };

    /**
     * Creates a Type message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Type
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Type} Type
     */
    Type.fromObject = function fromObject(object) {
        if (object instanceof $root.Type)
            return object;
        var message = new $root.Type();
        if (object.id != null)
            message.id = object.id | 0;
        return message;
    };

    /**
     * Creates a plain object from a Type message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Type
     * @static
     * @param {Type} message Type
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Type.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        return object;
    };

    /**
     * Converts this Type to JSON.
     * @function toJSON
     * @memberof Type
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Type.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Type;
})();

/**
 * PrimitiveType enum.
 * @exports PrimitiveType
 * @enum {string}
 * @property {number} String=0 String value
 * @property {number} Integer=1 Integer value
 * @property {number} Float=2 Float value
 * @property {number} Boolean=3 Boolean value
 * @property {number} Void=4 Void value
 */
$root.PrimitiveType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "String"] = 0;
    values[valuesById[1] = "Integer"] = 1;
    values[valuesById[2] = "Float"] = 2;
    values[valuesById[3] = "Boolean"] = 3;
    values[valuesById[4] = "Void"] = 4;
    return values;
})();

$root.Function = (function() {

    /**
     * Properties of a Function.
     * @exports IFunction
     * @interface IFunction
     * @property {number|null} [id] Function id
     * @property {string|null} [name] Function name
     * @property {Array.<IVariable>|null} [parameters] Function parameters
     * @property {ITypeReference|null} [returns] Function returns
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
     * Function name.
     * @member {string} name
     * @memberof Function
     * @instance
     */
    Function.prototype.name = "";

    /**
     * Function parameters.
     * @member {Array.<IVariable>} parameters
     * @memberof Function
     * @instance
     */
    Function.prototype.parameters = $util.emptyArray;

    /**
     * Function returns.
     * @member {ITypeReference|null|undefined} returns
     * @memberof Function
     * @instance
     */
    Function.prototype.returns = null;

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
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.parameters != null && message.parameters.length)
            for (var i = 0; i < message.parameters.length; ++i)
                $root.Variable.encode(message.parameters[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.returns != null && message.hasOwnProperty("returns"))
            $root.TypeReference.encode(message.returns, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
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
            case 1:
                message.id = reader.int32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                if (!(message.parameters && message.parameters.length))
                    message.parameters = [];
                message.parameters.push($root.Variable.decode(reader, reader.uint32()));
                break;
            case 6:
                message.returns = $root.TypeReference.decode(reader, reader.uint32());
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
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.parameters != null && message.hasOwnProperty("parameters")) {
            if (!Array.isArray(message.parameters))
                return "parameters: array expected";
            for (var i = 0; i < message.parameters.length; ++i) {
                var error = $root.Variable.verify(message.parameters[i]);
                if (error)
                    return "parameters." + error;
            }
        }
        if (message.returns != null && message.hasOwnProperty("returns")) {
            var error = $root.TypeReference.verify(message.returns);
            if (error)
                return "returns." + error;
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
        if (object.name != null)
            message.name = String(object.name);
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
        if (object.returns != null) {
            if (typeof object.returns !== "object")
                throw TypeError(".Function.returns: object expected");
            message.returns = $root.TypeReference.fromObject(object.returns);
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
            object.name = "";
            object.returns = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.parameters && message.parameters.length) {
            object.parameters = [];
            for (var j = 0; j < message.parameters.length; ++j)
                object.parameters[j] = $root.Variable.toObject(message.parameters[j], options);
        }
        if (message.returns != null && message.hasOwnProperty("returns"))
            object.returns = $root.TypeReference.toObject(message.returns, options);
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
        if (message.type != null && message.hasOwnProperty("type"))
            $root.TypeReference.encode(message.type, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
            object.type = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
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

$root.Expression = (function() {

    /**
     * Properties of an Expression.
     * @exports IExpression
     * @interface IExpression
     * @property {ITypeReference|null} [type] Expression type
     * @property {IGet|null} [get] Expression get
     * @property {ISet|null} [set] Expression set
     * @property {ICall|null} [call] Expression call
     * @property {ILiteral|null} [literal] Expression literal
     * @property {IReturn|null} ["return"] Expression return
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

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Expression expressionType.
     * @member {"get"|"set"|"call"|"literal"|"return"|undefined} expressionType
     * @memberof Expression
     * @instance
     */
    Object.defineProperty(Expression.prototype, "expressionType", {
        get: $util.oneOfGetter($oneOfFields = ["get", "set", "call", "literal", "return"]),
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
        if (message.literal != null && message.hasOwnProperty("literal"))
            $root.Literal.encode(message.literal, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message["return"] != null && message.hasOwnProperty("return"))
            $root.Return.encode(message["return"], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
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
            case 7:
                message.literal = $root.Literal.decode(reader, reader.uint32());
                break;
            case 8:
                message["return"] = $root.Return.decode(reader, reader.uint32());
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
     * @property {IFunctionReference|null} ["function"] Call function
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
     * @member {IFunctionReference|null|undefined} function
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
            $root.FunctionReference.encode(message["function"], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                message["function"] = $root.FunctionReference.decode(reader, reader.uint32());
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
            var error = $root.FunctionReference.verify(message["function"]);
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
            message["function"] = $root.FunctionReference.fromObject(object["function"]);
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
            object["function"] = $root.FunctionReference.toObject(message["function"], options);
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
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.value != null && message.hasOwnProperty("value"))
            $root.Expression.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
            case 1:
                message.id = reader.int32();
                break;
            case 2:
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
        if (options.defaults)
            object.value = null;
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

$root.Module = (function() {

    /**
     * Properties of a Module.
     * @exports IModule
     * @interface IModule
     * @property {IModuleReference|null} [id] Module id
     * @property {Array.<IModuleReference>|null} [dependencies] Module dependencies
     * @property {Array.<IFunction>|null} [functions] Module functions
     * @property {Array.<IType>|null} [types] Module types
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
     * @member {Array.<IType>} types
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
                $root.Type.encode(message.types[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                message.types.push($root.Type.decode(reader, reader.uint32()));
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
                var error = $root.Type.verify(message.types[i]);
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
                message.types[i] = $root.Type.fromObject(object.types[i]);
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
                object.types[j] = $root.Type.toObject(message.types[j], options);
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
