import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type role_permissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$role_permissionsPayload>;
export type AggregateRole_permissions = {
    _count: Role_permissionsCountAggregateOutputType | null;
    _avg: Role_permissionsAvgAggregateOutputType | null;
    _sum: Role_permissionsSumAggregateOutputType | null;
    _min: Role_permissionsMinAggregateOutputType | null;
    _max: Role_permissionsMaxAggregateOutputType | null;
};
export type Role_permissionsAvgAggregateOutputType = {
    role_id: number | null;
    permission_id: number | null;
};
export type Role_permissionsSumAggregateOutputType = {
    role_id: bigint | null;
    permission_id: bigint | null;
};
export type Role_permissionsMinAggregateOutputType = {
    role_id: bigint | null;
    permission_id: bigint | null;
};
export type Role_permissionsMaxAggregateOutputType = {
    role_id: bigint | null;
    permission_id: bigint | null;
};
export type Role_permissionsCountAggregateOutputType = {
    role_id: number;
    permission_id: number;
    _all: number;
};
export type Role_permissionsAvgAggregateInputType = {
    role_id?: true;
    permission_id?: true;
};
export type Role_permissionsSumAggregateInputType = {
    role_id?: true;
    permission_id?: true;
};
export type Role_permissionsMinAggregateInputType = {
    role_id?: true;
    permission_id?: true;
};
export type Role_permissionsMaxAggregateInputType = {
    role_id?: true;
    permission_id?: true;
};
export type Role_permissionsCountAggregateInputType = {
    role_id?: true;
    permission_id?: true;
    _all?: true;
};
export type Role_permissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionsWhereInput;
    orderBy?: Prisma.role_permissionsOrderByWithRelationInput | Prisma.role_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Role_permissionsCountAggregateInputType;
    _avg?: Role_permissionsAvgAggregateInputType;
    _sum?: Role_permissionsSumAggregateInputType;
    _min?: Role_permissionsMinAggregateInputType;
    _max?: Role_permissionsMaxAggregateInputType;
};
export type GetRole_permissionsAggregateType<T extends Role_permissionsAggregateArgs> = {
    [P in keyof T & keyof AggregateRole_permissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole_permissions[P]> : Prisma.GetScalarType<T[P], AggregateRole_permissions[P]>;
};
export type role_permissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionsWhereInput;
    orderBy?: Prisma.role_permissionsOrderByWithAggregationInput | Prisma.role_permissionsOrderByWithAggregationInput[];
    by: Prisma.Role_permissionsScalarFieldEnum[] | Prisma.Role_permissionsScalarFieldEnum;
    having?: Prisma.role_permissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Role_permissionsCountAggregateInputType | true;
    _avg?: Role_permissionsAvgAggregateInputType;
    _sum?: Role_permissionsSumAggregateInputType;
    _min?: Role_permissionsMinAggregateInputType;
    _max?: Role_permissionsMaxAggregateInputType;
};
export type Role_permissionsGroupByOutputType = {
    role_id: bigint;
    permission_id: bigint;
    _count: Role_permissionsCountAggregateOutputType | null;
    _avg: Role_permissionsAvgAggregateOutputType | null;
    _sum: Role_permissionsSumAggregateOutputType | null;
    _min: Role_permissionsMinAggregateOutputType | null;
    _max: Role_permissionsMaxAggregateOutputType | null;
};
export type GetRole_permissionsGroupByPayload<T extends role_permissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Role_permissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Role_permissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Role_permissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Role_permissionsGroupByOutputType[P]>;
}>>;
export type role_permissionsWhereInput = {
    AND?: Prisma.role_permissionsWhereInput | Prisma.role_permissionsWhereInput[];
    OR?: Prisma.role_permissionsWhereInput[];
    NOT?: Prisma.role_permissionsWhereInput | Prisma.role_permissionsWhereInput[];
    role_id?: Prisma.BigIntFilter<"role_permissions"> | bigint | number;
    permission_id?: Prisma.BigIntFilter<"role_permissions"> | bigint | number;
    permissions?: Prisma.XOR<Prisma.PermissionsScalarRelationFilter, Prisma.permissionsWhereInput>;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
};
export type role_permissionsOrderByWithRelationInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    permissions?: Prisma.permissionsOrderByWithRelationInput;
    roles?: Prisma.rolesOrderByWithRelationInput;
};
export type role_permissionsWhereUniqueInput = Prisma.AtLeast<{
    role_id_permission_id?: Prisma.role_permissionsRole_idPermission_idCompoundUniqueInput;
    AND?: Prisma.role_permissionsWhereInput | Prisma.role_permissionsWhereInput[];
    OR?: Prisma.role_permissionsWhereInput[];
    NOT?: Prisma.role_permissionsWhereInput | Prisma.role_permissionsWhereInput[];
    role_id?: Prisma.BigIntFilter<"role_permissions"> | bigint | number;
    permission_id?: Prisma.BigIntFilter<"role_permissions"> | bigint | number;
    permissions?: Prisma.XOR<Prisma.PermissionsScalarRelationFilter, Prisma.permissionsWhereInput>;
    roles?: Prisma.XOR<Prisma.RolesScalarRelationFilter, Prisma.rolesWhereInput>;
}, "role_id_permission_id">;
export type role_permissionsOrderByWithAggregationInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    _count?: Prisma.role_permissionsCountOrderByAggregateInput;
    _avg?: Prisma.role_permissionsAvgOrderByAggregateInput;
    _max?: Prisma.role_permissionsMaxOrderByAggregateInput;
    _min?: Prisma.role_permissionsMinOrderByAggregateInput;
    _sum?: Prisma.role_permissionsSumOrderByAggregateInput;
};
export type role_permissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.role_permissionsScalarWhereWithAggregatesInput | Prisma.role_permissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.role_permissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.role_permissionsScalarWhereWithAggregatesInput | Prisma.role_permissionsScalarWhereWithAggregatesInput[];
    role_id?: Prisma.BigIntWithAggregatesFilter<"role_permissions"> | bigint | number;
    permission_id?: Prisma.BigIntWithAggregatesFilter<"role_permissions"> | bigint | number;
};
export type role_permissionsCreateInput = {
    permissions: Prisma.permissionsCreateNestedOneWithoutRole_permissionsInput;
    roles: Prisma.rolesCreateNestedOneWithoutRole_permissionsInput;
};
export type role_permissionsUncheckedCreateInput = {
    role_id: bigint | number;
    permission_id: bigint | number;
};
export type role_permissionsUpdateInput = {
    permissions?: Prisma.permissionsUpdateOneRequiredWithoutRole_permissionsNestedInput;
    roles?: Prisma.rolesUpdateOneRequiredWithoutRole_permissionsNestedInput;
};
export type role_permissionsUncheckedUpdateInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_permissionsCreateManyInput = {
    role_id: bigint | number;
    permission_id: bigint | number;
};
export type role_permissionsUpdateManyMutationInput = {};
export type role_permissionsUncheckedUpdateManyInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type Role_permissionsListRelationFilter = {
    every?: Prisma.role_permissionsWhereInput;
    some?: Prisma.role_permissionsWhereInput;
    none?: Prisma.role_permissionsWhereInput;
};
export type role_permissionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type role_permissionsRole_idPermission_idCompoundUniqueInput = {
    role_id: bigint | number;
    permission_id: bigint | number;
};
export type role_permissionsCountOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type role_permissionsAvgOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type role_permissionsMaxOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type role_permissionsMinOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type role_permissionsSumOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type role_permissionsCreateNestedManyWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutPermissionsInput, Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_permissionsCreateWithoutPermissionsInput[] | Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput[];
    createMany?: Prisma.role_permissionsCreateManyPermissionsInputEnvelope;
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
};
export type role_permissionsUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutPermissionsInput, Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_permissionsCreateWithoutPermissionsInput[] | Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput[];
    createMany?: Prisma.role_permissionsCreateManyPermissionsInputEnvelope;
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
};
export type role_permissionsUpdateManyWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutPermissionsInput, Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_permissionsCreateWithoutPermissionsInput[] | Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput[];
    upsert?: Prisma.role_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | Prisma.role_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[];
    createMany?: Prisma.role_permissionsCreateManyPermissionsInputEnvelope;
    set?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    delete?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    update?: Prisma.role_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | Prisma.role_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[];
    updateMany?: Prisma.role_permissionsUpdateManyWithWhereWithoutPermissionsInput | Prisma.role_permissionsUpdateManyWithWhereWithoutPermissionsInput[];
    deleteMany?: Prisma.role_permissionsScalarWhereInput | Prisma.role_permissionsScalarWhereInput[];
};
export type role_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutPermissionsInput, Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput> | Prisma.role_permissionsCreateWithoutPermissionsInput[] | Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput | Prisma.role_permissionsCreateOrConnectWithoutPermissionsInput[];
    upsert?: Prisma.role_permissionsUpsertWithWhereUniqueWithoutPermissionsInput | Prisma.role_permissionsUpsertWithWhereUniqueWithoutPermissionsInput[];
    createMany?: Prisma.role_permissionsCreateManyPermissionsInputEnvelope;
    set?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    delete?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    update?: Prisma.role_permissionsUpdateWithWhereUniqueWithoutPermissionsInput | Prisma.role_permissionsUpdateWithWhereUniqueWithoutPermissionsInput[];
    updateMany?: Prisma.role_permissionsUpdateManyWithWhereWithoutPermissionsInput | Prisma.role_permissionsUpdateManyWithWhereWithoutPermissionsInput[];
    deleteMany?: Prisma.role_permissionsScalarWhereInput | Prisma.role_permissionsScalarWhereInput[];
};
export type role_permissionsCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutRolesInput, Prisma.role_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_permissionsCreateWithoutRolesInput[] | Prisma.role_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_permissionsCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.role_permissionsCreateManyRolesInputEnvelope;
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
};
export type role_permissionsUncheckedCreateNestedManyWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutRolesInput, Prisma.role_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_permissionsCreateWithoutRolesInput[] | Prisma.role_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_permissionsCreateOrConnectWithoutRolesInput[];
    createMany?: Prisma.role_permissionsCreateManyRolesInputEnvelope;
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
};
export type role_permissionsUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutRolesInput, Prisma.role_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_permissionsCreateWithoutRolesInput[] | Prisma.role_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_permissionsCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.role_permissionsUpsertWithWhereUniqueWithoutRolesInput | Prisma.role_permissionsUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.role_permissionsCreateManyRolesInputEnvelope;
    set?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    delete?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    update?: Prisma.role_permissionsUpdateWithWhereUniqueWithoutRolesInput | Prisma.role_permissionsUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.role_permissionsUpdateManyWithWhereWithoutRolesInput | Prisma.role_permissionsUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.role_permissionsScalarWhereInput | Prisma.role_permissionsScalarWhereInput[];
};
export type role_permissionsUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionsCreateWithoutRolesInput, Prisma.role_permissionsUncheckedCreateWithoutRolesInput> | Prisma.role_permissionsCreateWithoutRolesInput[] | Prisma.role_permissionsUncheckedCreateWithoutRolesInput[];
    connectOrCreate?: Prisma.role_permissionsCreateOrConnectWithoutRolesInput | Prisma.role_permissionsCreateOrConnectWithoutRolesInput[];
    upsert?: Prisma.role_permissionsUpsertWithWhereUniqueWithoutRolesInput | Prisma.role_permissionsUpsertWithWhereUniqueWithoutRolesInput[];
    createMany?: Prisma.role_permissionsCreateManyRolesInputEnvelope;
    set?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    disconnect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    delete?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    connect?: Prisma.role_permissionsWhereUniqueInput | Prisma.role_permissionsWhereUniqueInput[];
    update?: Prisma.role_permissionsUpdateWithWhereUniqueWithoutRolesInput | Prisma.role_permissionsUpdateWithWhereUniqueWithoutRolesInput[];
    updateMany?: Prisma.role_permissionsUpdateManyWithWhereWithoutRolesInput | Prisma.role_permissionsUpdateManyWithWhereWithoutRolesInput[];
    deleteMany?: Prisma.role_permissionsScalarWhereInput | Prisma.role_permissionsScalarWhereInput[];
};
export type role_permissionsCreateWithoutPermissionsInput = {
    roles: Prisma.rolesCreateNestedOneWithoutRole_permissionsInput;
};
export type role_permissionsUncheckedCreateWithoutPermissionsInput = {
    role_id: bigint | number;
};
export type role_permissionsCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.role_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_permissionsCreateWithoutPermissionsInput, Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput>;
};
export type role_permissionsCreateManyPermissionsInputEnvelope = {
    data: Prisma.role_permissionsCreateManyPermissionsInput | Prisma.role_permissionsCreateManyPermissionsInput[];
    skipDuplicates?: boolean;
};
export type role_permissionsUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: Prisma.role_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.role_permissionsUpdateWithoutPermissionsInput, Prisma.role_permissionsUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.role_permissionsCreateWithoutPermissionsInput, Prisma.role_permissionsUncheckedCreateWithoutPermissionsInput>;
};
export type role_permissionsUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: Prisma.role_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.role_permissionsUpdateWithoutPermissionsInput, Prisma.role_permissionsUncheckedUpdateWithoutPermissionsInput>;
};
export type role_permissionsUpdateManyWithWhereWithoutPermissionsInput = {
    where: Prisma.role_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.role_permissionsUpdateManyMutationInput, Prisma.role_permissionsUncheckedUpdateManyWithoutPermissionsInput>;
};
export type role_permissionsScalarWhereInput = {
    AND?: Prisma.role_permissionsScalarWhereInput | Prisma.role_permissionsScalarWhereInput[];
    OR?: Prisma.role_permissionsScalarWhereInput[];
    NOT?: Prisma.role_permissionsScalarWhereInput | Prisma.role_permissionsScalarWhereInput[];
    role_id?: Prisma.BigIntFilter<"role_permissions"> | bigint | number;
    permission_id?: Prisma.BigIntFilter<"role_permissions"> | bigint | number;
};
export type role_permissionsCreateWithoutRolesInput = {
    permissions: Prisma.permissionsCreateNestedOneWithoutRole_permissionsInput;
};
export type role_permissionsUncheckedCreateWithoutRolesInput = {
    permission_id: bigint | number;
};
export type role_permissionsCreateOrConnectWithoutRolesInput = {
    where: Prisma.role_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_permissionsCreateWithoutRolesInput, Prisma.role_permissionsUncheckedCreateWithoutRolesInput>;
};
export type role_permissionsCreateManyRolesInputEnvelope = {
    data: Prisma.role_permissionsCreateManyRolesInput | Prisma.role_permissionsCreateManyRolesInput[];
    skipDuplicates?: boolean;
};
export type role_permissionsUpsertWithWhereUniqueWithoutRolesInput = {
    where: Prisma.role_permissionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.role_permissionsUpdateWithoutRolesInput, Prisma.role_permissionsUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.role_permissionsCreateWithoutRolesInput, Prisma.role_permissionsUncheckedCreateWithoutRolesInput>;
};
export type role_permissionsUpdateWithWhereUniqueWithoutRolesInput = {
    where: Prisma.role_permissionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.role_permissionsUpdateWithoutRolesInput, Prisma.role_permissionsUncheckedUpdateWithoutRolesInput>;
};
export type role_permissionsUpdateManyWithWhereWithoutRolesInput = {
    where: Prisma.role_permissionsScalarWhereInput;
    data: Prisma.XOR<Prisma.role_permissionsUpdateManyMutationInput, Prisma.role_permissionsUncheckedUpdateManyWithoutRolesInput>;
};
export type role_permissionsCreateManyPermissionsInput = {
    role_id: bigint | number;
};
export type role_permissionsUpdateWithoutPermissionsInput = {
    roles?: Prisma.rolesUpdateOneRequiredWithoutRole_permissionsNestedInput;
};
export type role_permissionsUncheckedUpdateWithoutPermissionsInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_permissionsUncheckedUpdateManyWithoutPermissionsInput = {
    role_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_permissionsCreateManyRolesInput = {
    permission_id: bigint | number;
};
export type role_permissionsUpdateWithoutRolesInput = {
    permissions?: Prisma.permissionsUpdateOneRequiredWithoutRole_permissionsNestedInput;
};
export type role_permissionsUncheckedUpdateWithoutRolesInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_permissionsUncheckedUpdateManyWithoutRolesInput = {
    permission_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type role_permissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    permission_id?: boolean;
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_permissions"]>;
export type role_permissionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    permission_id?: boolean;
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_permissions"]>;
export type role_permissionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    permission_id?: boolean;
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_permissions"]>;
export type role_permissionsSelectScalar = {
    role_id?: boolean;
    permission_id?: boolean;
};
export type role_permissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"role_id" | "permission_id", ExtArgs["result"]["role_permissions"]>;
export type role_permissionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
};
export type role_permissionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
};
export type role_permissionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | Prisma.permissionsDefaultArgs<ExtArgs>;
    roles?: boolean | Prisma.rolesDefaultArgs<ExtArgs>;
};
export type $role_permissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "role_permissions";
    objects: {
        permissions: Prisma.$permissionsPayload<ExtArgs>;
        roles: Prisma.$rolesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        role_id: bigint;
        permission_id: bigint;
    }, ExtArgs["result"]["role_permissions"]>;
    composites: {};
};
export type role_permissionsGetPayload<S extends boolean | null | undefined | role_permissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload, S>;
export type role_permissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<role_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Role_permissionsCountAggregateInputType | true;
};
export interface role_permissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['role_permissions'];
        meta: {
            name: 'role_permissions';
        };
    };
    findUnique<T extends role_permissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, role_permissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends role_permissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, role_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends role_permissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, role_permissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends role_permissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, role_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends role_permissionsFindManyArgs>(args?: Prisma.SelectSubset<T, role_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends role_permissionsCreateArgs>(args: Prisma.SelectSubset<T, role_permissionsCreateArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends role_permissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, role_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends role_permissionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, role_permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends role_permissionsDeleteArgs>(args: Prisma.SelectSubset<T, role_permissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends role_permissionsUpdateArgs>(args: Prisma.SelectSubset<T, role_permissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends role_permissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, role_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends role_permissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, role_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends role_permissionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, role_permissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends role_permissionsUpsertArgs>(args: Prisma.SelectSubset<T, role_permissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__role_permissionsClient<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends role_permissionsCountArgs>(args?: Prisma.Subset<T, role_permissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Role_permissionsCountAggregateOutputType> : number>;
    aggregate<T extends Role_permissionsAggregateArgs>(args: Prisma.Subset<T, Role_permissionsAggregateArgs>): Prisma.PrismaPromise<GetRole_permissionsAggregateType<T>>;
    groupBy<T extends role_permissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: role_permissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: role_permissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, role_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: role_permissionsFieldRefs;
}
export interface Prisma__role_permissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    permissions<T extends Prisma.permissionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.permissionsDefaultArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    roles<T extends Prisma.rolesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolesDefaultArgs<ExtArgs>>): Prisma.Prisma__rolesClient<runtime.Types.Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface role_permissionsFieldRefs {
    readonly role_id: Prisma.FieldRef<"role_permissions", 'BigInt'>;
    readonly permission_id: Prisma.FieldRef<"role_permissions", 'BigInt'>;
}
export type role_permissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_permissionsWhereUniqueInput;
};
export type role_permissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_permissionsWhereUniqueInput;
};
export type role_permissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where?: Prisma.role_permissionsWhereInput;
    orderBy?: Prisma.role_permissionsOrderByWithRelationInput | Prisma.role_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_permissionsScalarFieldEnum | Prisma.Role_permissionsScalarFieldEnum[];
};
export type role_permissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where?: Prisma.role_permissionsWhereInput;
    orderBy?: Prisma.role_permissionsOrderByWithRelationInput | Prisma.role_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_permissionsScalarFieldEnum | Prisma.Role_permissionsScalarFieldEnum[];
};
export type role_permissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where?: Prisma.role_permissionsWhereInput;
    orderBy?: Prisma.role_permissionsOrderByWithRelationInput | Prisma.role_permissionsOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_permissionsScalarFieldEnum | Prisma.Role_permissionsScalarFieldEnum[];
};
export type role_permissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_permissionsCreateInput, Prisma.role_permissionsUncheckedCreateInput>;
};
export type role_permissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.role_permissionsCreateManyInput | Prisma.role_permissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type role_permissionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    data: Prisma.role_permissionsCreateManyInput | Prisma.role_permissionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.role_permissionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type role_permissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_permissionsUpdateInput, Prisma.role_permissionsUncheckedUpdateInput>;
    where: Prisma.role_permissionsWhereUniqueInput;
};
export type role_permissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.role_permissionsUpdateManyMutationInput, Prisma.role_permissionsUncheckedUpdateManyInput>;
    where?: Prisma.role_permissionsWhereInput;
    limit?: number;
};
export type role_permissionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_permissionsUpdateManyMutationInput, Prisma.role_permissionsUncheckedUpdateManyInput>;
    where?: Prisma.role_permissionsWhereInput;
    limit?: number;
    include?: Prisma.role_permissionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type role_permissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_permissionsCreateInput, Prisma.role_permissionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.role_permissionsUpdateInput, Prisma.role_permissionsUncheckedUpdateInput>;
};
export type role_permissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
    where: Prisma.role_permissionsWhereUniqueInput;
};
export type role_permissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionsWhereInput;
    limit?: number;
};
export type role_permissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionsSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionsOmit<ExtArgs> | null;
    include?: Prisma.role_permissionsInclude<ExtArgs> | null;
};
