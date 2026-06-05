import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    id: number | null;
    version: number | null;
};
export type UsersSumAggregateOutputType = {
    id: bigint | null;
    version: bigint | null;
};
export type UsersMinAggregateOutputType = {
    id: bigint | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    phone: string | null;
    enabled: boolean | null;
    provider: string | null;
    provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    created_by: string | null;
    updated_by: string | null;
    version: bigint | null;
};
export type UsersMaxAggregateOutputType = {
    id: bigint | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    phone: string | null;
    enabled: boolean | null;
    provider: string | null;
    provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    created_by: string | null;
    updated_by: string | null;
    version: bigint | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    email: number;
    password_hash: number;
    full_name: number;
    phone: number;
    enabled: number;
    provider: number;
    provider_id: number;
    created_at: number;
    updated_at: number;
    created_by: number;
    updated_by: number;
    version: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    id?: true;
    version?: true;
};
export type UsersSumAggregateInputType = {
    id?: true;
    version?: true;
};
export type UsersMinAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    enabled?: true;
    provider?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
    created_by?: true;
    updated_by?: true;
    version?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    enabled?: true;
    provider?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
    created_by?: true;
    updated_by?: true;
    version?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    phone?: true;
    enabled?: true;
    provider?: true;
    provider_id?: true;
    created_at?: true;
    updated_at?: true;
    created_by?: true;
    updated_by?: true;
    version?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: bigint;
    email: string;
    password_hash: string | null;
    full_name: string;
    phone: string | null;
    enabled: boolean;
    provider: string;
    provider_id: string | null;
    created_at: Date;
    updated_at: Date;
    created_by: string | null;
    updated_by: string | null;
    version: bigint;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    id?: Prisma.BigIntFilter<"users"> | bigint | number;
    email?: Prisma.StringFilter<"users"> | string;
    password_hash?: Prisma.StringNullableFilter<"users"> | string | null;
    full_name?: Prisma.StringFilter<"users"> | string;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    enabled?: Prisma.BoolFilter<"users"> | boolean;
    provider?: Prisma.StringFilter<"users"> | string;
    provider_id?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    created_by?: Prisma.StringNullableFilter<"users"> | string | null;
    updated_by?: Prisma.StringNullableFilter<"users"> | string | null;
    version?: Prisma.BigIntFilter<"users"> | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.OrdersListRelationFilter;
    orders_orders_customer_idTousers?: Prisma.OrdersListRelationFilter;
    refresh_tokens?: Prisma.Refresh_tokensListRelationFilter;
    user_roles?: Prisma.User_rolesListRelationFilter;
};
export type usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersOrderByRelationAggregateInput;
    orders_orders_customer_idTousers?: Prisma.ordersOrderByRelationAggregateInput;
    refresh_tokens?: Prisma.refresh_tokensOrderByRelationAggregateInput;
    user_roles?: Prisma.user_rolesOrderByRelationAggregateInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    email?: string;
    provider_provider_id?: Prisma.usersProviderProvider_idCompoundUniqueInput;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    password_hash?: Prisma.StringNullableFilter<"users"> | string | null;
    full_name?: Prisma.StringFilter<"users"> | string;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    enabled?: Prisma.BoolFilter<"users"> | boolean;
    provider?: Prisma.StringFilter<"users"> | string;
    provider_id?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    created_by?: Prisma.StringNullableFilter<"users"> | string | null;
    updated_by?: Prisma.StringNullableFilter<"users"> | string | null;
    version?: Prisma.BigIntFilter<"users"> | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.OrdersListRelationFilter;
    orders_orders_customer_idTousers?: Prisma.OrdersListRelationFilter;
    refresh_tokens?: Prisma.Refresh_tokensListRelationFilter;
    user_roles?: Prisma.User_rolesListRelationFilter;
}, "id" | "email" | "provider_provider_id">;
export type usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"users"> | bigint | number;
    email?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password_hash?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    full_name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    enabled?: Prisma.BoolWithAggregatesFilter<"users"> | boolean;
    provider?: Prisma.StringWithAggregatesFilter<"users"> | string;
    provider_id?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
    created_by?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    updated_by?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    version?: Prisma.BigIntWithAggregatesFilter<"users"> | bigint | number;
};
export type usersCreateInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    orders_orders_customer_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    orders_orders_customer_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
};
export type usersUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type usersUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type UsersNullableScalarRelationFilter = {
    is?: Prisma.usersWhereInput | null;
    isNot?: Prisma.usersWhereInput | null;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type usersProviderProvider_idCompoundUniqueInput = {
    provider: string;
    provider_id: string;
};
export type usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    enabled?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    provider_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutOrders_orders_assigned_waiter_idTousersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_assigned_waiter_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_assigned_waiter_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutOrders_orders_assigned_waiter_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersCreateNestedOneWithoutOrders_orders_customer_idTousersInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_customer_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_customer_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutOrders_orders_customer_idTousersInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneWithoutOrders_orders_assigned_waiter_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_assigned_waiter_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_assigned_waiter_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutOrders_orders_assigned_waiter_idTousersInput;
    upsert?: Prisma.usersUpsertWithoutOrders_orders_assigned_waiter_idTousersInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutOrders_orders_assigned_waiter_idTousersInput, Prisma.usersUpdateWithoutOrders_orders_assigned_waiter_idTousersInput>, Prisma.usersUncheckedUpdateWithoutOrders_orders_assigned_waiter_idTousersInput>;
};
export type usersUpdateOneWithoutOrders_orders_customer_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_customer_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_customer_idTousersInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutOrders_orders_customer_idTousersInput;
    upsert?: Prisma.usersUpsertWithoutOrders_orders_customer_idTousersInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutOrders_orders_customer_idTousersInput, Prisma.usersUpdateWithoutOrders_orders_customer_idTousersInput>, Prisma.usersUncheckedUpdateWithoutOrders_orders_customer_idTousersInput>;
};
export type usersCreateNestedOneWithoutRefresh_tokensInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutRefresh_tokensInput, Prisma.usersUncheckedCreateWithoutRefresh_tokensInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutRefresh_tokensInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutRefresh_tokensNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutRefresh_tokensInput, Prisma.usersUncheckedCreateWithoutRefresh_tokensInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutRefresh_tokensInput;
    upsert?: Prisma.usersUpsertWithoutRefresh_tokensInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutRefresh_tokensInput, Prisma.usersUpdateWithoutRefresh_tokensInput>, Prisma.usersUncheckedUpdateWithoutRefresh_tokensInput>;
};
export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_rolesInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_rolesInput;
    upsert?: Prisma.usersUpsertWithoutUser_rolesInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutUser_rolesInput, Prisma.usersUpdateWithoutUser_rolesInput>, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
};
export type usersCreateWithoutOrders_orders_assigned_waiter_idTousersInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_customer_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutOrders_orders_assigned_waiter_idTousersInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutOrders_orders_assigned_waiter_idTousersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_assigned_waiter_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_assigned_waiter_idTousersInput>;
};
export type usersCreateWithoutOrders_orders_customer_idTousersInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutOrders_orders_customer_idTousersInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedCreateNestedManyWithoutUsersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutOrders_orders_customer_idTousersInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_customer_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_customer_idTousersInput>;
};
export type usersUpsertWithoutOrders_orders_assigned_waiter_idTousersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutOrders_orders_assigned_waiter_idTousersInput, Prisma.usersUncheckedUpdateWithoutOrders_orders_assigned_waiter_idTousersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_assigned_waiter_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_assigned_waiter_idTousersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutOrders_orders_assigned_waiter_idTousersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutOrders_orders_assigned_waiter_idTousersInput, Prisma.usersUncheckedUpdateWithoutOrders_orders_assigned_waiter_idTousersInput>;
};
export type usersUpdateWithoutOrders_orders_assigned_waiter_idTousersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_customer_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutOrders_orders_assigned_waiter_idTousersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersUpsertWithoutOrders_orders_customer_idTousersInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutOrders_orders_customer_idTousersInput, Prisma.usersUncheckedUpdateWithoutOrders_orders_customer_idTousersInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutOrders_orders_customer_idTousersInput, Prisma.usersUncheckedCreateWithoutOrders_orders_customer_idTousersInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutOrders_orders_customer_idTousersInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutOrders_orders_customer_idTousersInput, Prisma.usersUncheckedUpdateWithoutOrders_orders_customer_idTousersInput>;
};
export type usersUpdateWithoutOrders_orders_customer_idTousersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutOrders_orders_customer_idTousersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutRefresh_tokensInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    orders_orders_customer_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    user_roles?: Prisma.user_rolesCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutRefresh_tokensInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    user_roles?: Prisma.user_rolesUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutRefresh_tokensInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutRefresh_tokensInput, Prisma.usersUncheckedCreateWithoutRefresh_tokensInput>;
};
export type usersUpsertWithoutRefresh_tokensInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutRefresh_tokensInput, Prisma.usersUncheckedUpdateWithoutRefresh_tokensInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutRefresh_tokensInput, Prisma.usersUncheckedCreateWithoutRefresh_tokensInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutRefresh_tokensInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutRefresh_tokensInput, Prisma.usersUncheckedUpdateWithoutRefresh_tokensInput>;
};
export type usersUpdateWithoutRefresh_tokensInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    orders_orders_customer_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    user_roles?: Prisma.user_rolesUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutRefresh_tokensInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    user_roles?: Prisma.user_rolesUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutUser_rolesInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    orders_orders_customer_idTousers?: Prisma.ordersCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutUser_rolesInput = {
    id?: bigint | number;
    email: string;
    password_hash?: string | null;
    full_name: string;
    phone?: string | null;
    enabled?: boolean;
    provider?: string;
    provider_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_assigned_waiter_idTousersInput;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedCreateNestedManyWithoutUsers_orders_customer_idTousersInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
};
export type usersUpsertWithoutUser_rolesInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutUser_rolesInput, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutUser_rolesInput, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
};
export type usersUpdateWithoutUser_rolesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    orders_orders_customer_idTousers?: Prisma.ordersUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    provider_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    orders_orders_assigned_waiter_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_assigned_waiter_idTousersNestedInput;
    orders_orders_customer_idTousers?: Prisma.ordersUncheckedUpdateManyWithoutUsers_orders_customer_idTousersNestedInput;
    refresh_tokens?: Prisma.refresh_tokensUncheckedUpdateManyWithoutUsersNestedInput;
};
export type UsersCountOutputType = {
    orders_orders_assigned_waiter_idTousers: number;
    orders_orders_customer_idTousers: number;
    refresh_tokens: number;
    user_roles: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders_orders_assigned_waiter_idTousers?: boolean | UsersCountOutputTypeCountOrders_orders_assigned_waiter_idTousersArgs;
    orders_orders_customer_idTousers?: boolean | UsersCountOutputTypeCountOrders_orders_customer_idTousersArgs;
    refresh_tokens?: boolean | UsersCountOutputTypeCountRefresh_tokensArgs;
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountOrders_orders_assigned_waiter_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type UsersCountOutputTypeCountOrders_orders_customer_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ordersWhereInput;
};
export type UsersCountOutputTypeCountRefresh_tokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.refresh_tokensWhereInput;
};
export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_rolesWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    enabled?: boolean;
    provider?: boolean;
    provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
    orders_orders_assigned_waiter_idTousers?: boolean | Prisma.users$orders_orders_assigned_waiter_idTousersArgs<ExtArgs>;
    orders_orders_customer_idTousers?: boolean | Prisma.users$orders_orders_customer_idTousersArgs<ExtArgs>;
    refresh_tokens?: boolean | Prisma.users$refresh_tokensArgs<ExtArgs>;
    user_roles?: boolean | Prisma.users$user_rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    enabled?: boolean;
    provider?: boolean;
    provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    enabled?: boolean;
    provider?: boolean;
    provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    phone?: boolean;
    enabled?: boolean;
    provider?: boolean;
    provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password_hash" | "full_name" | "phone" | "enabled" | "provider" | "provider_id" | "created_at" | "updated_at" | "created_by" | "updated_by" | "version", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders_orders_assigned_waiter_idTousers?: boolean | Prisma.users$orders_orders_assigned_waiter_idTousersArgs<ExtArgs>;
    orders_orders_customer_idTousers?: boolean | Prisma.users$orders_orders_customer_idTousersArgs<ExtArgs>;
    refresh_tokens?: boolean | Prisma.users$refresh_tokensArgs<ExtArgs>;
    user_roles?: boolean | Prisma.users$user_rolesArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        orders_orders_assigned_waiter_idTousers: Prisma.$ordersPayload<ExtArgs>[];
        orders_orders_customer_idTousers: Prisma.$ordersPayload<ExtArgs>[];
        refresh_tokens: Prisma.$refresh_tokensPayload<ExtArgs>[];
        user_roles: Prisma.$user_rolesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        email: string;
        password_hash: string | null;
        full_name: string;
        phone: string | null;
        enabled: boolean;
        provider: string;
        provider_id: string | null;
        created_at: Date;
        updated_at: Date;
        created_by: string | null;
        updated_by: string | null;
        version: bigint;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders_orders_assigned_waiter_idTousers<T extends Prisma.users$orders_orders_assigned_waiter_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$orders_orders_assigned_waiter_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders_orders_customer_idTousers<T extends Prisma.users$orders_orders_customer_idTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$orders_orders_customer_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refresh_tokens<T extends Prisma.users$refresh_tokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$refresh_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$refresh_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_roles<T extends Prisma.users$user_rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly id: Prisma.FieldRef<"users", 'BigInt'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly password_hash: Prisma.FieldRef<"users", 'String'>;
    readonly full_name: Prisma.FieldRef<"users", 'String'>;
    readonly phone: Prisma.FieldRef<"users", 'String'>;
    readonly enabled: Prisma.FieldRef<"users", 'Boolean'>;
    readonly provider: Prisma.FieldRef<"users", 'String'>;
    readonly provider_id: Prisma.FieldRef<"users", 'String'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly created_by: Prisma.FieldRef<"users", 'String'>;
    readonly updated_by: Prisma.FieldRef<"users", 'String'>;
    readonly version: Prisma.FieldRef<"users", 'BigInt'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type users$orders_orders_assigned_waiter_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type users$orders_orders_customer_idTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ordersSelect<ExtArgs> | null;
    omit?: Prisma.ordersOmit<ExtArgs> | null;
    include?: Prisma.ordersInclude<ExtArgs> | null;
    where?: Prisma.ordersWhereInput;
    orderBy?: Prisma.ordersOrderByWithRelationInput | Prisma.ordersOrderByWithRelationInput[];
    cursor?: Prisma.ordersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdersScalarFieldEnum | Prisma.OrdersScalarFieldEnum[];
};
export type users$refresh_tokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.refresh_tokensSelect<ExtArgs> | null;
    omit?: Prisma.refresh_tokensOmit<ExtArgs> | null;
    include?: Prisma.refresh_tokensInclude<ExtArgs> | null;
    where?: Prisma.refresh_tokensWhereInput;
    orderBy?: Prisma.refresh_tokensOrderByWithRelationInput | Prisma.refresh_tokensOrderByWithRelationInput[];
    cursor?: Prisma.refresh_tokensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Refresh_tokensScalarFieldEnum | Prisma.Refresh_tokensScalarFieldEnum[];
};
export type users$user_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_rolesWhereInput;
    orderBy?: Prisma.user_rolesOrderByWithRelationInput | Prisma.user_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_rolesScalarFieldEnum | Prisma.User_rolesScalarFieldEnum[];
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
};
