import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get allergens(): Prisma.allergensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get categories(): Prisma.categoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get customers(): Prisma.customersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get flyway_schema_history(): Prisma.flyway_schema_historyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get menu_item_allergens(): Prisma.menu_item_allergensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get menu_items(): Prisma.menu_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get order_items(): Prisma.order_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orders(): Prisma.ordersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payments(): Prisma.paymentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get permissions(): Prisma.permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refresh_tokens(): Prisma.refresh_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reservations(): Prisma.reservationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get restaurant_tables(): Prisma.restaurant_tablesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get role_permissions(): Prisma.role_permissionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get roles(): Prisma.rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_roles(): Prisma.user_rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
