import * as $protobuf from "protobufjs";
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
        id?: (number|Long|null);

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
        public id: (number|Long);

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

    /** Properties of a StockDaily. */
    interface IStockDaily {

        /** StockDaily ts_code */
        ts_code?: (string|null);

        /** StockDaily trade_date */
        trade_date?: (string|null);

        /** StockDaily open */
        open?: (number|null);

        /** StockDaily high */
        high?: (number|null);

        /** StockDaily low */
        low?: (number|null);

        /** StockDaily close */
        close?: (number|null);

        /** StockDaily pre_close */
        pre_close?: (number|null);

        /** StockDaily change */
        change?: (number|null);

        /** StockDaily pct_chg */
        pct_chg?: (number|null);

        /** StockDaily vol */
        vol?: (number|null);

        /** StockDaily amount */
        amount?: (number|null);
    }

    /** Represents a StockDaily. */
    class StockDaily implements IStockDaily {

        /**
         * Constructs a new StockDaily.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IStockDaily);

        /** StockDaily ts_code. */
        public ts_code: string;

        /** StockDaily trade_date. */
        public trade_date: string;

        /** StockDaily open. */
        public open: number;

        /** StockDaily high. */
        public high: number;

        /** StockDaily low. */
        public low: number;

        /** StockDaily close. */
        public close: number;

        /** StockDaily pre_close. */
        public pre_close: number;

        /** StockDaily change. */
        public change: number;

        /** StockDaily pct_chg. */
        public pct_chg: number;

        /** StockDaily vol. */
        public vol: number;

        /** StockDaily amount. */
        public amount: number;

        /**
         * Creates a new StockDaily instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StockDaily instance
         */
        public static create(properties?: common.IStockDaily): common.StockDaily;

        /**
         * Encodes the specified StockDaily message. Does not implicitly {@link common.StockDaily.verify|verify} messages.
         * @param message StockDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IStockDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StockDaily message, length delimited. Does not implicitly {@link common.StockDaily.verify|verify} messages.
         * @param message StockDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IStockDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StockDaily message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StockDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.StockDaily;

        /**
         * Decodes a StockDaily message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StockDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.StockDaily;

        /**
         * Verifies a StockDaily message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StockDaily message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StockDaily
         */
        public static fromObject(object: { [k: string]: any }): common.StockDaily;

        /**
         * Creates a plain object from a StockDaily message. Also converts values to other types if specified.
         * @param message StockDaily
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.StockDaily, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StockDaily to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
