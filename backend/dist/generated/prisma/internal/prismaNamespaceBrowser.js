"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.UsersScalarFieldEnum = exports.User_rolesScalarFieldEnum = exports.RolesScalarFieldEnum = exports.Role_permissionsScalarFieldEnum = exports.Restaurant_tablesScalarFieldEnum = exports.ReservationsScalarFieldEnum = exports.Refresh_tokensScalarFieldEnum = exports.PermissionsScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.OrdersScalarFieldEnum = exports.Order_itemsScalarFieldEnum = exports.Menu_itemsScalarFieldEnum = exports.Menu_item_allergensScalarFieldEnum = exports.Flyway_schema_historyScalarFieldEnum = exports.CustomersScalarFieldEnum = exports.CategoriesScalarFieldEnum = exports.AllergensScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    allergens: 'allergens',
    categories: 'categories',
    customers: 'customers',
    flyway_schema_history: 'flyway_schema_history',
    menu_item_allergens: 'menu_item_allergens',
    menu_items: 'menu_items',
    order_items: 'order_items',
    orders: 'orders',
    payments: 'payments',
    permissions: 'permissions',
    refresh_tokens: 'refresh_tokens',
    reservations: 'reservations',
    restaurant_tables: 'restaurant_tables',
    role_permissions: 'role_permissions',
    roles: 'roles',
    user_roles: 'user_roles',
    users: 'users'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AllergensScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.CategoriesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    icon: 'icon',
    sort_order: 'sort_order',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    version: 'version'
};
exports.CustomersScalarFieldEnum = {
    id: 'id',
    name: 'name',
    phone_number: 'phone_number',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    version: 'version'
};
exports.Flyway_schema_historyScalarFieldEnum = {
    installed_rank: 'installed_rank',
    version: 'version',
    description: 'description',
    type: 'type',
    script: 'script',
    checksum: 'checksum',
    installed_by: 'installed_by',
    installed_on: 'installed_on',
    execution_time: 'execution_time',
    success: 'success'
};
exports.Menu_item_allergensScalarFieldEnum = {
    menu_item_id: 'menu_item_id',
    allergen_id: 'allergen_id'
};
exports.Menu_itemsScalarFieldEnum = {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    price: 'price',
    image_url: 'image_url',
    available: 'available',
    featured: 'featured',
    prep_time_minutes: 'prep_time_minutes',
    calories: 'calories',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    version: 'version'
};
exports.Order_itemsScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    menu_item_id: 'menu_item_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    special_request: 'special_request',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.OrdersScalarFieldEnum = {
    id: 'id',
    order_number: 'order_number',
    type: 'type',
    status: 'status',
    subtotal: 'subtotal',
    tax: 'tax',
    discount: 'discount',
    total: 'total',
    customer_note: 'customer_note',
    table_id: 'table_id',
    assigned_waiter_id: 'assigned_waiter_id',
    customer_id: 'customer_id',
    idempotency_key: 'idempotency_key',
    deleted_at: 'deleted_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    version: 'version'
};
exports.PaymentsScalarFieldEnum = {
    id: 'id',
    order_id: 'order_id',
    amount: 'amount',
    payment_method: 'payment_method',
    status: 'status',
    transaction_id: 'transaction_id',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    version: 'version'
};
exports.PermissionsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description'
};
exports.Refresh_tokensScalarFieldEnum = {
    id: 'id',
    token_hash: 'token_hash',
    user_id: 'user_id',
    family_id: 'family_id',
    issued_at: 'issued_at',
    expires_at: 'expires_at',
    revoked: 'revoked',
    user_agent: 'user_agent',
    ip: 'ip'
};
exports.ReservationsScalarFieldEnum = {
    id: 'id',
    customer_name: 'customer_name',
    customer_phone: 'customer_phone',
    table_id: 'table_id',
    reservation_time: 'reservation_time',
    party_size: 'party_size',
    status: 'status',
    special_requests: 'special_requests',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    version: 'version'
};
exports.Restaurant_tablesScalarFieldEnum = {
    id: 'id',
    table_number: 'table_number',
    capacity: 'capacity',
    status: 'status',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at',
    version: 'version'
};
exports.Role_permissionsScalarFieldEnum = {
    role_id: 'role_id',
    permission_id: 'permission_id'
};
exports.RolesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description'
};
exports.User_rolesScalarFieldEnum = {
    user_id: 'user_id',
    role_id: 'role_id'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    full_name: 'full_name',
    phone: 'phone',
    enabled: 'enabled',
    provider: 'provider',
    provider_id: 'provider_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    created_by: 'created_by',
    updated_by: 'updated_by',
    version: 'version'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map