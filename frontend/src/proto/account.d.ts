import * as $protobuf from "protobufjs";
/** Namespace account. */
export namespace account {

    /** Properties of a FetchAccountRequest. */
    interface IFetchAccountRequest {
    }

    /** Represents a FetchAccountRequest. */
    class FetchAccountRequest implements IFetchAccountRequest {

        /**
         * Constructs a new FetchAccountRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IFetchAccountRequest);

        /**
         * Creates a new FetchAccountRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchAccountRequest instance
         */
        public static create(properties?: account.IFetchAccountRequest): account.FetchAccountRequest;

        /**
         * Encodes the specified FetchAccountRequest message. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @param message FetchAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IFetchAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchAccountRequest message, length delimited. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @param message FetchAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IFetchAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.FetchAccountRequest;

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.FetchAccountRequest;

        /**
         * Verifies a FetchAccountRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchAccountRequest
         */
        public static fromObject(object: { [k: string]: any }): account.FetchAccountRequest;

        /**
         * Creates a plain object from a FetchAccountRequest message. Also converts values to other types if specified.
         * @param message FetchAccountRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.FetchAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchAccountRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FetchAccountResponse. */
    interface IFetchAccountResponse {

        /** FetchAccountResponse error */
        error?: (common.Error|null);

        /** FetchAccountResponse accounts */
        accounts?: (common.IUser[]|null);
    }

    /** Represents a FetchAccountResponse. */
    class FetchAccountResponse implements IFetchAccountResponse {

        /**
         * Constructs a new FetchAccountResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IFetchAccountResponse);

        /** FetchAccountResponse error. */
        public error: common.Error;

        /** FetchAccountResponse accounts. */
        public accounts: common.IUser[];

        /**
         * Creates a new FetchAccountResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchAccountResponse instance
         */
        public static create(properties?: account.IFetchAccountResponse): account.FetchAccountResponse;

        /**
         * Encodes the specified FetchAccountResponse message. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @param message FetchAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IFetchAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchAccountResponse message, length delimited. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @param message FetchAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IFetchAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.FetchAccountResponse;

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.FetchAccountResponse;

        /**
         * Verifies a FetchAccountResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchAccountResponse
         */
        public static fromObject(object: { [k: string]: any }): account.FetchAccountResponse;

        /**
         * Creates a plain object from a FetchAccountResponse message. Also converts values to other types if specified.
         * @param message FetchAccountResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.FetchAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchAccountResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Error enum. */
    enum Error {
        NO_ERROR = 0,
        UNKNOWN_ERROR = 1,
        INTERNAL_ERROR = 2,
        INVALID_USERNAME_OR_PASSWORD = 3
    }

    /** UserRole enum. */
    enum UserRole {
        UNKNOWN_USER_ROLE = 0,
        ROLE_ADMIN = 1,
        ROLE_USER = 2
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User role */
        role?: (common.UserRole|null);

        /** User nickname */
        nickname?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUser);

        /** User id. */
        public id: string;

        /** User role. */
        public role: common.UserRole;

        /** User nickname. */
        public nickname: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: common.IUser): common.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link common.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link common.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): common.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
