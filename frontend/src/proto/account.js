/*eslint-disable default-case, block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const account = $root.account = (() => {

    /**
     * Namespace account.
     * @exports account
     * @namespace
     */
    const account = {};

    account.FetchAccountRequest = (function() {

        /**
         * Properties of a FetchAccountRequest.
         * @memberof account
         * @interface IFetchAccountRequest
         */

        /**
         * Constructs a new FetchAccountRequest.
         * @memberof account
         * @classdesc Represents a FetchAccountRequest.
         * @implements IFetchAccountRequest
         * @constructor
         * @param {account.IFetchAccountRequest=} [properties] Properties to set
         */
        function FetchAccountRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FetchAccountRequest instance using the specified properties.
         * @function create
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.IFetchAccountRequest=} [properties] Properties to set
         * @returns {account.FetchAccountRequest} FetchAccountRequest instance
         */
        FetchAccountRequest.create = function create(properties) {
            return new FetchAccountRequest(properties);
        };

        /**
         * Encodes the specified FetchAccountRequest message. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @function encode
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.IFetchAccountRequest} message FetchAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FetchAccountRequest message, length delimited. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.IFetchAccountRequest} message FetchAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer.
         * @function decode
         * @memberof account.FetchAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.FetchAccountRequest} FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.FetchAccountRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.FetchAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.FetchAccountRequest} FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchAccountRequest message.
         * @function verify
         * @memberof account.FetchAccountRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchAccountRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FetchAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.FetchAccountRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.FetchAccountRequest} FetchAccountRequest
         */
        FetchAccountRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.account.FetchAccountRequest)
                return object;
            return new $root.account.FetchAccountRequest();
        };

        /**
         * Creates a plain object from a FetchAccountRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.FetchAccountRequest} message FetchAccountRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchAccountRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FetchAccountRequest to JSON.
         * @function toJSON
         * @memberof account.FetchAccountRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchAccountRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchAccountRequest;
    })();

    account.FetchAccountResponse = (function() {

        /**
         * Properties of a FetchAccountResponse.
         * @memberof account
         * @interface IFetchAccountResponse
         * @property {common.Error|null} [error] FetchAccountResponse error
         * @property {Array.<common.IUser>|null} [accounts] FetchAccountResponse accounts
         */

        /**
         * Constructs a new FetchAccountResponse.
         * @memberof account
         * @classdesc Represents a FetchAccountResponse.
         * @implements IFetchAccountResponse
         * @constructor
         * @param {account.IFetchAccountResponse=} [properties] Properties to set
         */
        function FetchAccountResponse(properties) {
            this.accounts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchAccountResponse error.
         * @member {common.Error} error
         * @memberof account.FetchAccountResponse
         * @instance
         */
        FetchAccountResponse.prototype.error = 0;

        /**
         * FetchAccountResponse accounts.
         * @member {Array.<common.IUser>} accounts
         * @memberof account.FetchAccountResponse
         * @instance
         */
        FetchAccountResponse.prototype.accounts = $util.emptyArray;

        /**
         * Creates a new FetchAccountResponse instance using the specified properties.
         * @function create
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.IFetchAccountResponse=} [properties] Properties to set
         * @returns {account.FetchAccountResponse} FetchAccountResponse instance
         */
        FetchAccountResponse.create = function create(properties) {
            return new FetchAccountResponse(properties);
        };

        /**
         * Encodes the specified FetchAccountResponse message. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @function encode
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.IFetchAccountResponse} message FetchAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.accounts != null && message.accounts.length)
                for (let i = 0; i < message.accounts.length; ++i)
                    $root.common.User.encode(message.accounts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FetchAccountResponse message, length delimited. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.IFetchAccountResponse} message FetchAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer.
         * @function decode
         * @memberof account.FetchAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.FetchAccountResponse} FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.FetchAccountResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    if (!(message.accounts && message.accounts.length))
                        message.accounts = [];
                    message.accounts.push($root.common.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.FetchAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.FetchAccountResponse} FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchAccountResponse message.
         * @function verify
         * @memberof account.FetchAccountResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchAccountResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.accounts != null && message.hasOwnProperty("accounts")) {
                if (!Array.isArray(message.accounts))
                    return "accounts: array expected";
                for (let i = 0; i < message.accounts.length; ++i) {
                    let error = $root.common.User.verify(message.accounts[i]);
                    if (error)
                        return "accounts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FetchAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.FetchAccountResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.FetchAccountResponse} FetchAccountResponse
         */
        FetchAccountResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.account.FetchAccountResponse)
                return object;
            let message = new $root.account.FetchAccountResponse();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "UNKNOWN_ERROR":
            case 1:
                message.error = 1;
                break;
            case "INTERNAL_ERROR":
            case 2:
                message.error = 2;
                break;
            case "INVALID_USERNAME_OR_PASSWORD":
            case 3:
                message.error = 3;
                break;
            }
            if (object.accounts) {
                if (!Array.isArray(object.accounts))
                    throw TypeError(".account.FetchAccountResponse.accounts: array expected");
                message.accounts = [];
                for (let i = 0; i < object.accounts.length; ++i) {
                    if (typeof object.accounts[i] !== "object")
                        throw TypeError(".account.FetchAccountResponse.accounts: object expected");
                    message.accounts[i] = $root.common.User.fromObject(object.accounts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FetchAccountResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.FetchAccountResponse} message FetchAccountResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchAccountResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accounts = [];
            if (options.defaults)
                object.error = options.enums === String ? "NO_ERROR" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            if (message.accounts && message.accounts.length) {
                object.accounts = [];
                for (let j = 0; j < message.accounts.length; ++j)
                    object.accounts[j] = $root.common.User.toObject(message.accounts[j], options);
            }
            return object;
        };

        /**
         * Converts this FetchAccountResponse to JSON.
         * @function toJSON
         * @memberof account.FetchAccountResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchAccountResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchAccountResponse;
    })();

    return account;
})();

export const common = $root.common = (() => {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    const common = {};

    /**
     * Error enum.
     * @name common.Error
     * @enum {string}
     * @property {number} NO_ERROR=0 NO_ERROR value
     * @property {number} UNKNOWN_ERROR=1 UNKNOWN_ERROR value
     * @property {number} INTERNAL_ERROR=2 INTERNAL_ERROR value
     * @property {number} INVALID_USERNAME_OR_PASSWORD=3 INVALID_USERNAME_OR_PASSWORD value
     */
    common.Error = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NO_ERROR"] = 0;
        values[valuesById[1] = "UNKNOWN_ERROR"] = 1;
        values[valuesById[2] = "INTERNAL_ERROR"] = 2;
        values[valuesById[3] = "INVALID_USERNAME_OR_PASSWORD"] = 3;
        return values;
    })();

    /**
     * UserRole enum.
     * @name common.UserRole
     * @enum {string}
     * @property {number} UNKNOWN_USER_ROLE=0 UNKNOWN_USER_ROLE value
     * @property {number} ROLE_ADMIN=1 ROLE_ADMIN value
     * @property {number} ROLE_USER=2 ROLE_USER value
     */
    common.UserRole = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_USER_ROLE"] = 0;
        values[valuesById[1] = "ROLE_ADMIN"] = 1;
        values[valuesById[2] = "ROLE_USER"] = 2;
        return values;
    })();

    common.User = (function() {

        /**
         * Properties of a User.
         * @memberof common
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {common.UserRole|null} [role] User role
         * @property {string|null} [nickname] User nickname
         */

        /**
         * Constructs a new User.
         * @memberof common
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {common.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof common.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User role.
         * @member {common.UserRole} role
         * @memberof common.User
         * @instance
         */
        User.prototype.role = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof common.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof common.User
         * @static
         * @param {common.IUser=} [properties] Properties to set
         * @returns {common.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link common.User.verify|verify} messages.
         * @function encode
         * @memberof common.User
         * @static
         * @param {common.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.role != null && message.hasOwnProperty("role"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link common.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.User
         * @static
         * @param {common.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof common.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.role = reader.int32();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof common.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.common.User)
                return object;
            let message = new $root.common.User();
            if (object.id != null)
                message.id = String(object.id);
            switch (object.role) {
            case "UNKNOWN_USER_ROLE":
            case 0:
                message.role = 0;
                break;
            case "ROLE_ADMIN":
            case 1:
                message.role = 1;
                break;
            case "ROLE_USER":
            case 2:
                message.role = 2;
                break;
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.User
         * @static
         * @param {common.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.role = options.enums === String ? "UNKNOWN_USER_ROLE" : 0;
                object.nickname = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.common.UserRole[message.role] : message.role;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof common.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return common;
})();

export { $root as default };
