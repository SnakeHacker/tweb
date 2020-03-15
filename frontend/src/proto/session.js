/*eslint-disable default-case, block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const session = $root.session = (() => {

    /**
     * Namespace session.
     * @exports session
     * @namespace
     */
    const session = {};

    session.Session = (function() {

        /**
         * Properties of a Session.
         * @memberof session
         * @interface ISession
         * @property {string|null} [token] Session token
         * @property {common.IUser|null} [user] Session user
         */

        /**
         * Constructs a new Session.
         * @memberof session
         * @classdesc Represents a Session.
         * @implements ISession
         * @constructor
         * @param {session.ISession=} [properties] Properties to set
         */
        function Session(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Session token.
         * @member {string} token
         * @memberof session.Session
         * @instance
         */
        Session.prototype.token = "";

        /**
         * Session user.
         * @member {common.IUser|null|undefined} user
         * @memberof session.Session
         * @instance
         */
        Session.prototype.user = null;

        /**
         * Creates a new Session instance using the specified properties.
         * @function create
         * @memberof session.Session
         * @static
         * @param {session.ISession=} [properties] Properties to set
         * @returns {session.Session} Session instance
         */
        Session.create = function create(properties) {
            return new Session(properties);
        };

        /**
         * Encodes the specified Session message. Does not implicitly {@link session.Session.verify|verify} messages.
         * @function encode
         * @memberof session.Session
         * @static
         * @param {session.ISession} message Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.common.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Session message, length delimited. Does not implicitly {@link session.Session.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.Session
         * @static
         * @param {session.ISession} message Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Session message from the specified reader or buffer.
         * @function decode
         * @memberof session.Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.Session} Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.Session();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.user = $root.common.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Session message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.Session} Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Session message.
         * @function verify
         * @memberof session.Session
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Session.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.common.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a Session message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.Session
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.Session} Session
         */
        Session.fromObject = function fromObject(object) {
            if (object instanceof $root.session.Session)
                return object;
            let message = new $root.session.Session();
            if (object.token != null)
                message.token = String(object.token);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".session.Session.user: object expected");
                message.user = $root.common.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a Session message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.Session
         * @static
         * @param {session.Session} message Session
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Session.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.token = "";
                object.user = null;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.common.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this Session to JSON.
         * @function toJSON
         * @memberof session.Session
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Session.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Session;
    })();

    session.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof session
         * @interface ILoginRequest
         * @property {string|null} [username] LoginRequest username
         * @property {string|null} [password] LoginRequest password
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof session
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {session.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest username.
         * @member {string} username
         * @memberof session.LoginRequest
         * @instance
         */
        LoginRequest.prototype.username = "";

        /**
         * LoginRequest password.
         * @member {string} password
         * @memberof session.LoginRequest
         * @instance
         */
        LoginRequest.prototype.password = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof session.LoginRequest
         * @static
         * @param {session.ILoginRequest=} [properties] Properties to set
         * @returns {session.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link session.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof session.LoginRequest
         * @static
         * @param {session.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link session.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.LoginRequest
         * @static
         * @param {session.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof session.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.LoginRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof session.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.session.LoginRequest)
                return object;
            let message = new $root.session.LoginRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.LoginRequest
         * @static
         * @param {session.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof session.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    session.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof session
         * @interface ILoginResponse
         * @property {common.Error|null} [error] LoginResponse error
         * @property {session.ISession|null} [session] LoginResponse session
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof session
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {session.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse error.
         * @member {common.Error} error
         * @memberof session.LoginResponse
         * @instance
         */
        LoginResponse.prototype.error = 0;

        /**
         * LoginResponse session.
         * @member {session.ISession|null|undefined} session
         * @memberof session.LoginResponse
         * @instance
         */
        LoginResponse.prototype.session = null;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof session.LoginResponse
         * @static
         * @param {session.ILoginResponse=} [properties] Properties to set
         * @returns {session.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link session.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof session.LoginResponse
         * @static
         * @param {session.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.session != null && message.hasOwnProperty("session"))
                $root.session.Session.encode(message.session, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link session.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.LoginResponse
         * @static
         * @param {session.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof session.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.LoginResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.session = $root.session.Session.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof session.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
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
            if (message.session != null && message.hasOwnProperty("session")) {
                let error = $root.session.Session.verify(message.session);
                if (error)
                    return "session." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.session.LoginResponse)
                return object;
            let message = new $root.session.LoginResponse();
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
            if (object.session != null) {
                if (typeof object.session !== "object")
                    throw TypeError(".session.LoginResponse.session: object expected");
                message.session = $root.session.Session.fromObject(object.session);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.LoginResponse
         * @static
         * @param {session.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "NO_ERROR" : 0;
                object.session = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            if (message.session != null && message.hasOwnProperty("session"))
                object.session = $root.session.Session.toObject(message.session, options);
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof session.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    session.LogoutRequest = (function() {

        /**
         * Properties of a LogoutRequest.
         * @memberof session
         * @interface ILogoutRequest
         */

        /**
         * Constructs a new LogoutRequest.
         * @memberof session
         * @classdesc Represents a LogoutRequest.
         * @implements ILogoutRequest
         * @constructor
         * @param {session.ILogoutRequest=} [properties] Properties to set
         */
        function LogoutRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LogoutRequest instance using the specified properties.
         * @function create
         * @memberof session.LogoutRequest
         * @static
         * @param {session.ILogoutRequest=} [properties] Properties to set
         * @returns {session.LogoutRequest} LogoutRequest instance
         */
        LogoutRequest.create = function create(properties) {
            return new LogoutRequest(properties);
        };

        /**
         * Encodes the specified LogoutRequest message. Does not implicitly {@link session.LogoutRequest.verify|verify} messages.
         * @function encode
         * @memberof session.LogoutRequest
         * @static
         * @param {session.ILogoutRequest} message LogoutRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LogoutRequest message, length delimited. Does not implicitly {@link session.LogoutRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.LogoutRequest
         * @static
         * @param {session.ILogoutRequest} message LogoutRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutRequest message from the specified reader or buffer.
         * @function decode
         * @memberof session.LogoutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.LogoutRequest} LogoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.LogoutRequest();
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
         * Decodes a LogoutRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.LogoutRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.LogoutRequest} LogoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutRequest message.
         * @function verify
         * @memberof session.LogoutRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LogoutRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.LogoutRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.LogoutRequest} LogoutRequest
         */
        LogoutRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.session.LogoutRequest)
                return object;
            return new $root.session.LogoutRequest();
        };

        /**
         * Creates a plain object from a LogoutRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.LogoutRequest
         * @static
         * @param {session.LogoutRequest} message LogoutRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogoutRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LogoutRequest to JSON.
         * @function toJSON
         * @memberof session.LogoutRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogoutRequest;
    })();

    session.LogoutResponse = (function() {

        /**
         * Properties of a LogoutResponse.
         * @memberof session
         * @interface ILogoutResponse
         * @property {common.Error|null} [error] LogoutResponse error
         */

        /**
         * Constructs a new LogoutResponse.
         * @memberof session
         * @classdesc Represents a LogoutResponse.
         * @implements ILogoutResponse
         * @constructor
         * @param {session.ILogoutResponse=} [properties] Properties to set
         */
        function LogoutResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogoutResponse error.
         * @member {common.Error} error
         * @memberof session.LogoutResponse
         * @instance
         */
        LogoutResponse.prototype.error = 0;

        /**
         * Creates a new LogoutResponse instance using the specified properties.
         * @function create
         * @memberof session.LogoutResponse
         * @static
         * @param {session.ILogoutResponse=} [properties] Properties to set
         * @returns {session.LogoutResponse} LogoutResponse instance
         */
        LogoutResponse.create = function create(properties) {
            return new LogoutResponse(properties);
        };

        /**
         * Encodes the specified LogoutResponse message. Does not implicitly {@link session.LogoutResponse.verify|verify} messages.
         * @function encode
         * @memberof session.LogoutResponse
         * @static
         * @param {session.ILogoutResponse} message LogoutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified LogoutResponse message, length delimited. Does not implicitly {@link session.LogoutResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof session.LogoutResponse
         * @static
         * @param {session.ILogoutResponse} message LogoutResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogoutResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer.
         * @function decode
         * @memberof session.LogoutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {session.LogoutResponse} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.session.LogoutResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof session.LogoutResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {session.LogoutResponse} LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogoutResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogoutResponse message.
         * @function verify
         * @memberof session.LogoutResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogoutResponse.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a LogoutResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof session.LogoutResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {session.LogoutResponse} LogoutResponse
         */
        LogoutResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.session.LogoutResponse)
                return object;
            let message = new $root.session.LogoutResponse();
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
            return message;
        };

        /**
         * Creates a plain object from a LogoutResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof session.LogoutResponse
         * @static
         * @param {session.LogoutResponse} message LogoutResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogoutResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.error = options.enums === String ? "NO_ERROR" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            return object;
        };

        /**
         * Converts this LogoutResponse to JSON.
         * @function toJSON
         * @memberof session.LogoutResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogoutResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogoutResponse;
    })();

    return session;
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
         * @property {number|Long|null} [id] User id
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
         * @member {number|Long} id
         * @memberof common.User
         * @instance
         */
        User.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
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
                    message.id = reader.int64();
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
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
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
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
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
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.role = options.enums === String ? "UNKNOWN_USER_ROLE" : 0;
                object.nickname = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
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
