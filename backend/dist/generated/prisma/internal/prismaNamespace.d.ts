import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly allergens: "allergens";
    readonly categories: "categories";
    readonly customers: "customers";
    readonly flyway_schema_history: "flyway_schema_history";
    readonly menu_item_allergens: "menu_item_allergens";
    readonly menu_items: "menu_items";
    readonly order_items: "order_items";
    readonly orders: "orders";
    readonly payments: "payments";
    readonly permissions: "permissions";
    readonly refresh_tokens: "refresh_tokens";
    readonly reservations: "reservations";
    readonly restaurant_tables: "restaurant_tables";
    readonly role_permissions: "role_permissions";
    readonly roles: "roles";
    readonly user_roles: "user_roles";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "allergens" | "categories" | "customers" | "flyway_schema_history" | "menu_item_allergens" | "menu_items" | "order_items" | "orders" | "payments" | "permissions" | "refresh_tokens" | "reservations" | "restaurant_tables" | "role_permissions" | "roles" | "user_roles" | "users";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        allergens: {
            payload: Prisma.$allergensPayload<ExtArgs>;
            fields: Prisma.allergensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.allergensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.allergensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>;
                };
                findFirst: {
                    args: Prisma.allergensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.allergensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>;
                };
                findMany: {
                    args: Prisma.allergensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>[];
                };
                create: {
                    args: Prisma.allergensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>;
                };
                createMany: {
                    args: Prisma.allergensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.allergensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>[];
                };
                delete: {
                    args: Prisma.allergensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>;
                };
                update: {
                    args: Prisma.allergensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>;
                };
                deleteMany: {
                    args: Prisma.allergensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.allergensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.allergensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>[];
                };
                upsert: {
                    args: Prisma.allergensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$allergensPayload>;
                };
                aggregate: {
                    args: Prisma.AllergensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAllergens>;
                };
                groupBy: {
                    args: Prisma.allergensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AllergensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.allergensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AllergensCountAggregateOutputType> | number;
                };
            };
        };
        categories: {
            payload: Prisma.$categoriesPayload<ExtArgs>;
            fields: Prisma.categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                findMany: {
                    args: Prisma.categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                create: {
                    args: Prisma.categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                createMany: {
                    args: Prisma.categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                delete: {
                    args: Prisma.categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                update: {
                    args: Prisma.categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>[];
                };
                upsert: {
                    args: Prisma.categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategories>;
                };
                groupBy: {
                    args: Prisma.categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriesCountAggregateOutputType> | number;
                };
            };
        };
        customers: {
            payload: Prisma.$customersPayload<ExtArgs>;
            fields: Prisma.customersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.customersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findFirst: {
                    args: Prisma.customersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                findMany: {
                    args: Prisma.customersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                create: {
                    args: Prisma.customersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                createMany: {
                    args: Prisma.customersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                delete: {
                    args: Prisma.customersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                update: {
                    args: Prisma.customersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                deleteMany: {
                    args: Prisma.customersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.customersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>[];
                };
                upsert: {
                    args: Prisma.customersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$customersPayload>;
                };
                aggregate: {
                    args: Prisma.CustomersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomers>;
                };
                groupBy: {
                    args: Prisma.customersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.customersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomersCountAggregateOutputType> | number;
                };
            };
        };
        flyway_schema_history: {
            payload: Prisma.$flyway_schema_historyPayload<ExtArgs>;
            fields: Prisma.flyway_schema_historyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.flyway_schema_historyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.flyway_schema_historyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>;
                };
                findFirst: {
                    args: Prisma.flyway_schema_historyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.flyway_schema_historyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>;
                };
                findMany: {
                    args: Prisma.flyway_schema_historyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>[];
                };
                create: {
                    args: Prisma.flyway_schema_historyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>;
                };
                createMany: {
                    args: Prisma.flyway_schema_historyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.flyway_schema_historyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>[];
                };
                delete: {
                    args: Prisma.flyway_schema_historyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>;
                };
                update: {
                    args: Prisma.flyway_schema_historyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>;
                };
                deleteMany: {
                    args: Prisma.flyway_schema_historyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.flyway_schema_historyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.flyway_schema_historyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>[];
                };
                upsert: {
                    args: Prisma.flyway_schema_historyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$flyway_schema_historyPayload>;
                };
                aggregate: {
                    args: Prisma.Flyway_schema_historyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFlyway_schema_history>;
                };
                groupBy: {
                    args: Prisma.flyway_schema_historyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Flyway_schema_historyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.flyway_schema_historyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Flyway_schema_historyCountAggregateOutputType> | number;
                };
            };
        };
        menu_item_allergens: {
            payload: Prisma.$menu_item_allergensPayload<ExtArgs>;
            fields: Prisma.menu_item_allergensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.menu_item_allergensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.menu_item_allergensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>;
                };
                findFirst: {
                    args: Prisma.menu_item_allergensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.menu_item_allergensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>;
                };
                findMany: {
                    args: Prisma.menu_item_allergensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>[];
                };
                create: {
                    args: Prisma.menu_item_allergensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>;
                };
                createMany: {
                    args: Prisma.menu_item_allergensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.menu_item_allergensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>[];
                };
                delete: {
                    args: Prisma.menu_item_allergensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>;
                };
                update: {
                    args: Prisma.menu_item_allergensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>;
                };
                deleteMany: {
                    args: Prisma.menu_item_allergensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.menu_item_allergensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.menu_item_allergensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>[];
                };
                upsert: {
                    args: Prisma.menu_item_allergensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_item_allergensPayload>;
                };
                aggregate: {
                    args: Prisma.Menu_item_allergensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMenu_item_allergens>;
                };
                groupBy: {
                    args: Prisma.menu_item_allergensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Menu_item_allergensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.menu_item_allergensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Menu_item_allergensCountAggregateOutputType> | number;
                };
            };
        };
        menu_items: {
            payload: Prisma.$menu_itemsPayload<ExtArgs>;
            fields: Prisma.menu_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.menu_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.menu_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.menu_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.menu_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>;
                };
                findMany: {
                    args: Prisma.menu_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>[];
                };
                create: {
                    args: Prisma.menu_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>;
                };
                createMany: {
                    args: Prisma.menu_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.menu_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>[];
                };
                delete: {
                    args: Prisma.menu_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>;
                };
                update: {
                    args: Prisma.menu_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.menu_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.menu_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.menu_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.menu_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$menu_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Menu_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMenu_items>;
                };
                groupBy: {
                    args: Prisma.menu_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Menu_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.menu_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Menu_itemsCountAggregateOutputType> | number;
                };
            };
        };
        order_items: {
            payload: Prisma.$order_itemsPayload<ExtArgs>;
            fields: Prisma.order_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.order_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.order_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                findMany: {
                    args: Prisma.order_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                create: {
                    args: Prisma.order_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                createMany: {
                    args: Prisma.order_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                delete: {
                    args: Prisma.order_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                update: {
                    args: Prisma.order_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.order_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.order_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.order_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$order_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Order_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder_items>;
                };
                groupBy: {
                    args: Prisma.order_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.order_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Order_itemsCountAggregateOutputType> | number;
                };
            };
        };
        orders: {
            payload: Prisma.$ordersPayload<ExtArgs>;
            fields: Prisma.ordersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ordersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findFirst: {
                    args: Prisma.ordersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                findMany: {
                    args: Prisma.ordersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                create: {
                    args: Prisma.ordersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                createMany: {
                    args: Prisma.ordersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                delete: {
                    args: Prisma.ordersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                update: {
                    args: Prisma.ordersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                deleteMany: {
                    args: Prisma.ordersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ordersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>[];
                };
                upsert: {
                    args: Prisma.ordersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ordersPayload>;
                };
                aggregate: {
                    args: Prisma.OrdersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrders>;
                };
                groupBy: {
                    args: Prisma.ordersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ordersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdersCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        permissions: {
            payload: Prisma.$permissionsPayload<ExtArgs>;
            fields: Prisma.permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                findMany: {
                    args: Prisma.permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                create: {
                    args: Prisma.permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                createMany: {
                    args: Prisma.permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.permissionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                delete: {
                    args: Prisma.permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                update: {
                    args: Prisma.permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.permissionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>[];
                };
                upsert: {
                    args: Prisma.permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermissions>;
                };
                groupBy: {
                    args: Prisma.permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionsCountAggregateOutputType> | number;
                };
            };
        };
        refresh_tokens: {
            payload: Prisma.$refresh_tokensPayload<ExtArgs>;
            fields: Prisma.refresh_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.refresh_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.refresh_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.refresh_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.refresh_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                findMany: {
                    args: Prisma.refresh_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                create: {
                    args: Prisma.refresh_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                createMany: {
                    args: Prisma.refresh_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.refresh_tokensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                delete: {
                    args: Prisma.refresh_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                update: {
                    args: Prisma.refresh_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.refresh_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.refresh_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.refresh_tokensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                upsert: {
                    args: Prisma.refresh_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Refresh_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefresh_tokens>;
                };
                groupBy: {
                    args: Prisma.refresh_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Refresh_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.refresh_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Refresh_tokensCountAggregateOutputType> | number;
                };
            };
        };
        reservations: {
            payload: Prisma.$reservationsPayload<ExtArgs>;
            fields: Prisma.reservationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.reservationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.reservationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>;
                };
                findFirst: {
                    args: Prisma.reservationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.reservationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>;
                };
                findMany: {
                    args: Prisma.reservationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>[];
                };
                create: {
                    args: Prisma.reservationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>;
                };
                createMany: {
                    args: Prisma.reservationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.reservationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>[];
                };
                delete: {
                    args: Prisma.reservationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>;
                };
                update: {
                    args: Prisma.reservationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>;
                };
                deleteMany: {
                    args: Prisma.reservationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.reservationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.reservationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>[];
                };
                upsert: {
                    args: Prisma.reservationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$reservationsPayload>;
                };
                aggregate: {
                    args: Prisma.ReservationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReservations>;
                };
                groupBy: {
                    args: Prisma.reservationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.reservationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationsCountAggregateOutputType> | number;
                };
            };
        };
        restaurant_tables: {
            payload: Prisma.$restaurant_tablesPayload<ExtArgs>;
            fields: Prisma.restaurant_tablesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.restaurant_tablesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.restaurant_tablesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>;
                };
                findFirst: {
                    args: Prisma.restaurant_tablesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.restaurant_tablesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>;
                };
                findMany: {
                    args: Prisma.restaurant_tablesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>[];
                };
                create: {
                    args: Prisma.restaurant_tablesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>;
                };
                createMany: {
                    args: Prisma.restaurant_tablesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.restaurant_tablesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>[];
                };
                delete: {
                    args: Prisma.restaurant_tablesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>;
                };
                update: {
                    args: Prisma.restaurant_tablesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>;
                };
                deleteMany: {
                    args: Prisma.restaurant_tablesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.restaurant_tablesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.restaurant_tablesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>[];
                };
                upsert: {
                    args: Prisma.restaurant_tablesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$restaurant_tablesPayload>;
                };
                aggregate: {
                    args: Prisma.Restaurant_tablesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRestaurant_tables>;
                };
                groupBy: {
                    args: Prisma.restaurant_tablesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Restaurant_tablesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.restaurant_tablesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Restaurant_tablesCountAggregateOutputType> | number;
                };
            };
        };
        role_permissions: {
            payload: Prisma.$role_permissionsPayload<ExtArgs>;
            fields: Prisma.role_permissionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.role_permissionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.role_permissionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                findFirst: {
                    args: Prisma.role_permissionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.role_permissionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                findMany: {
                    args: Prisma.role_permissionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                create: {
                    args: Prisma.role_permissionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                createMany: {
                    args: Prisma.role_permissionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.role_permissionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                delete: {
                    args: Prisma.role_permissionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                update: {
                    args: Prisma.role_permissionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                deleteMany: {
                    args: Prisma.role_permissionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.role_permissionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.role_permissionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>[];
                };
                upsert: {
                    args: Prisma.role_permissionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$role_permissionsPayload>;
                };
                aggregate: {
                    args: Prisma.Role_permissionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole_permissions>;
                };
                groupBy: {
                    args: Prisma.role_permissionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_permissionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.role_permissionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Role_permissionsCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        user_roles: {
            payload: Prisma.$user_rolesPayload<ExtArgs>;
            fields: Prisma.user_rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findFirst: {
                    args: Prisma.user_rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                findMany: {
                    args: Prisma.user_rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                create: {
                    args: Prisma.user_rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                createMany: {
                    args: Prisma.user_rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                delete: {
                    args: Prisma.user_rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                update: {
                    args: Prisma.user_rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>[];
                };
                upsert: {
                    args: Prisma.user_rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolesPayload>;
                };
                aggregate: {
                    args: Prisma.User_rolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_roles>;
                };
                groupBy: {
                    args: Prisma.user_rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_rolesCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AllergensScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type AllergensScalarFieldEnum = (typeof AllergensScalarFieldEnum)[keyof typeof AllergensScalarFieldEnum];
export declare const CategoriesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly icon: "icon";
    readonly sort_order: "sort_order";
    readonly active: "active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly created_by: "created_by";
    readonly updated_by: "updated_by";
    readonly version: "version";
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const CustomersScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly phone_number: "phone_number";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_by: "updated_by";
    readonly updated_at: "updated_at";
    readonly version: "version";
};
export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum];
export declare const Flyway_schema_historyScalarFieldEnum: {
    readonly installed_rank: "installed_rank";
    readonly version: "version";
    readonly description: "description";
    readonly type: "type";
    readonly script: "script";
    readonly checksum: "checksum";
    readonly installed_by: "installed_by";
    readonly installed_on: "installed_on";
    readonly execution_time: "execution_time";
    readonly success: "success";
};
export type Flyway_schema_historyScalarFieldEnum = (typeof Flyway_schema_historyScalarFieldEnum)[keyof typeof Flyway_schema_historyScalarFieldEnum];
export declare const Menu_item_allergensScalarFieldEnum: {
    readonly menu_item_id: "menu_item_id";
    readonly allergen_id: "allergen_id";
};
export type Menu_item_allergensScalarFieldEnum = (typeof Menu_item_allergensScalarFieldEnum)[keyof typeof Menu_item_allergensScalarFieldEnum];
export declare const Menu_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly category_id: "category_id";
    readonly name: "name";
    readonly description: "description";
    readonly price: "price";
    readonly image_url: "image_url";
    readonly available: "available";
    readonly featured: "featured";
    readonly prep_time_minutes: "prep_time_minutes";
    readonly calories: "calories";
    readonly deleted_at: "deleted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly created_by: "created_by";
    readonly updated_by: "updated_by";
    readonly version: "version";
};
export type Menu_itemsScalarFieldEnum = (typeof Menu_itemsScalarFieldEnum)[keyof typeof Menu_itemsScalarFieldEnum];
export declare const Order_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly menu_item_id: "menu_item_id";
    readonly quantity: "quantity";
    readonly unit_price: "unit_price";
    readonly special_request: "special_request";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum];
export declare const OrdersScalarFieldEnum: {
    readonly id: "id";
    readonly order_number: "order_number";
    readonly type: "type";
    readonly status: "status";
    readonly subtotal: "subtotal";
    readonly tax: "tax";
    readonly discount: "discount";
    readonly total: "total";
    readonly customer_note: "customer_note";
    readonly table_id: "table_id";
    readonly assigned_waiter_id: "assigned_waiter_id";
    readonly customer_id: "customer_id";
    readonly idempotency_key: "idempotency_key";
    readonly deleted_at: "deleted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly created_by: "created_by";
    readonly updated_by: "updated_by";
    readonly version: "version";
};
export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly amount: "amount";
    readonly payment_method: "payment_method";
    readonly status: "status";
    readonly transaction_id: "transaction_id";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_by: "updated_by";
    readonly updated_at: "updated_at";
    readonly version: "version";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PermissionsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum];
export declare const Refresh_tokensScalarFieldEnum: {
    readonly id: "id";
    readonly token_hash: "token_hash";
    readonly user_id: "user_id";
    readonly family_id: "family_id";
    readonly issued_at: "issued_at";
    readonly expires_at: "expires_at";
    readonly revoked: "revoked";
    readonly user_agent: "user_agent";
    readonly ip: "ip";
};
export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum];
export declare const ReservationsScalarFieldEnum: {
    readonly id: "id";
    readonly customer_name: "customer_name";
    readonly customer_phone: "customer_phone";
    readonly table_id: "table_id";
    readonly reservation_time: "reservation_time";
    readonly party_size: "party_size";
    readonly status: "status";
    readonly special_requests: "special_requests";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_by: "updated_by";
    readonly updated_at: "updated_at";
    readonly version: "version";
};
export type ReservationsScalarFieldEnum = (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum];
export declare const Restaurant_tablesScalarFieldEnum: {
    readonly id: "id";
    readonly table_number: "table_number";
    readonly capacity: "capacity";
    readonly status: "status";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_by: "updated_by";
    readonly updated_at: "updated_at";
    readonly version: "version";
};
export type Restaurant_tablesScalarFieldEnum = (typeof Restaurant_tablesScalarFieldEnum)[keyof typeof Restaurant_tablesScalarFieldEnum];
export declare const Role_permissionsScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly permission_id: "permission_id";
};
export type Role_permissionsScalarFieldEnum = (typeof Role_permissionsScalarFieldEnum)[keyof typeof Role_permissionsScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const User_rolesScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly role_id: "role_id";
};
export type User_rolesScalarFieldEnum = (typeof User_rolesScalarFieldEnum)[keyof typeof User_rolesScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly full_name: "full_name";
    readonly phone: "phone";
    readonly enabled: "enabled";
    readonly provider: "provider";
    readonly provider_id: "provider_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly created_by: "created_by";
    readonly updated_by: "updated_by";
    readonly version: "version";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    allergens?: Prisma.allergensOmit;
    categories?: Prisma.categoriesOmit;
    customers?: Prisma.customersOmit;
    flyway_schema_history?: Prisma.flyway_schema_historyOmit;
    menu_item_allergens?: Prisma.menu_item_allergensOmit;
    menu_items?: Prisma.menu_itemsOmit;
    order_items?: Prisma.order_itemsOmit;
    orders?: Prisma.ordersOmit;
    payments?: Prisma.paymentsOmit;
    permissions?: Prisma.permissionsOmit;
    refresh_tokens?: Prisma.refresh_tokensOmit;
    reservations?: Prisma.reservationsOmit;
    restaurant_tables?: Prisma.restaurant_tablesOmit;
    role_permissions?: Prisma.role_permissionsOmit;
    roles?: Prisma.rolesOmit;
    user_roles?: Prisma.user_rolesOmit;
    users?: Prisma.usersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
