import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type permissionsModel = runtime.Types.Result.DefaultSelection<Prisma.$permissionsPayload>;
export type AggregatePermissions = {
    _count: PermissionsCountAggregateOutputType | null;
    _avg: PermissionsAvgAggregateOutputType | null;
    _sum: PermissionsSumAggregateOutputType | null;
    _min: PermissionsMinAggregateOutputType | null;
    _max: PermissionsMaxAggregateOutputType | null;
};
export type PermissionsAvgAggregateOutputType = {
    id: number | null;
};
export type PermissionsSumAggregateOutputType = {
    id: bigint | null;
};
export type PermissionsMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    description: string | null;
};
export type PermissionsMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    description: string | null;
};
export type PermissionsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    _all: number;
};
export type PermissionsAvgAggregateInputType = {
    id?: true;
};
export type PermissionsSumAggregateInputType = {
    id?: true;
};
export type PermissionsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
};
export type PermissionsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
};
export type PermissionsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    _all?: true;
};
export type PermissionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.permissionsWhereInput;
    orderBy?: Prisma.permissionsOrderByWithRelationInput | Prisma.permissionsOrderByWithRelationInput[];
    cursor?: Prisma.permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PermissionsCountAggregateInputType;
    _avg?: PermissionsAvgAggregateInputType;
    _sum?: PermissionsSumAggregateInputType;
    _min?: PermissionsMinAggregateInputType;
    _max?: PermissionsMaxAggregateInputType;
};
export type GetPermissionsAggregateType<T extends PermissionsAggregateArgs> = {
    [P in keyof T & keyof AggregatePermissions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePermissions[P]> : Prisma.GetScalarType<T[P], AggregatePermissions[P]>;
};
export type permissionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.permissionsWhereInput;
    orderBy?: Prisma.permissionsOrderByWithAggregationInput | Prisma.permissionsOrderByWithAggregationInput[];
    by: Prisma.PermissionsScalarFieldEnum[] | Prisma.PermissionsScalarFieldEnum;
    having?: Prisma.permissionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PermissionsCountAggregateInputType | true;
    _avg?: PermissionsAvgAggregateInputType;
    _sum?: PermissionsSumAggregateInputType;
    _min?: PermissionsMinAggregateInputType;
    _max?: PermissionsMaxAggregateInputType;
};
export type PermissionsGroupByOutputType = {
    id: bigint;
    name: string;
    description: string | null;
    _count: PermissionsCountAggregateOutputType | null;
    _avg: PermissionsAvgAggregateOutputType | null;
    _sum: PermissionsSumAggregateOutputType | null;
    _min: PermissionsMinAggregateOutputType | null;
    _max: PermissionsMaxAggregateOutputType | null;
};
export type GetPermissionsGroupByPayload<T extends permissionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PermissionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PermissionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PermissionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PermissionsGroupByOutputType[P]>;
}>>;
export type permissionsWhereInput = {
    AND?: Prisma.permissionsWhereInput | Prisma.permissionsWhereInput[];
    OR?: Prisma.permissionsWhereInput[];
    NOT?: Prisma.permissionsWhereInput | Prisma.permissionsWhereInput[];
    id?: Prisma.BigIntFilter<"permissions"> | bigint | number;
    name?: Prisma.StringFilter<"permissions"> | string;
    description?: Prisma.StringNullableFilter<"permissions"> | string | null;
    role_permissions?: Prisma.Role_permissionsListRelationFilter;
};
export type permissionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    role_permissions?: Prisma.role_permissionsOrderByRelationAggregateInput;
};
export type permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    name?: string;
    AND?: Prisma.permissionsWhereInput | Prisma.permissionsWhereInput[];
    OR?: Prisma.permissionsWhereInput[];
    NOT?: Prisma.permissionsWhereInput | Prisma.permissionsWhereInput[];
    description?: Prisma.StringNullableFilter<"permissions"> | string | null;
    role_permissions?: Prisma.Role_permissionsListRelationFilter;
}, "id" | "name">;
export type permissionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.permissionsCountOrderByAggregateInput;
    _avg?: Prisma.permissionsAvgOrderByAggregateInput;
    _max?: Prisma.permissionsMaxOrderByAggregateInput;
    _min?: Prisma.permissionsMinOrderByAggregateInput;
    _sum?: Prisma.permissionsSumOrderByAggregateInput;
};
export type permissionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.permissionsScalarWhereWithAggregatesInput | Prisma.permissionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.permissionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.permissionsScalarWhereWithAggregatesInput | Prisma.permissionsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"permissions"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"permissions"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"permissions"> | string | null;
};
export type permissionsCreateInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    role_permissions?: Prisma.role_permissionsCreateNestedManyWithoutPermissionsInput;
};
export type permissionsUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
    role_permissions?: Prisma.role_permissionsUncheckedCreateNestedManyWithoutPermissionsInput;
};
export type permissionsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role_permissions?: Prisma.role_permissionsUpdateManyWithoutPermissionsNestedInput;
};
export type permissionsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role_permissions?: Prisma.role_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput;
};
export type permissionsCreateManyInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
};
export type permissionsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type permissionsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type permissionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type permissionsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type permissionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type permissionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type permissionsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PermissionsScalarRelationFilter = {
    is?: Prisma.permissionsWhereInput;
    isNot?: Prisma.permissionsWhereInput;
};
export type permissionsCreateNestedOneWithoutRole_permissionsInput = {
    create?: Prisma.XOR<Prisma.permissionsCreateWithoutRole_permissionsInput, Prisma.permissionsUncheckedCreateWithoutRole_permissionsInput>;
    connectOrCreate?: Prisma.permissionsCreateOrConnectWithoutRole_permissionsInput;
    connect?: Prisma.permissionsWhereUniqueInput;
};
export type permissionsUpdateOneRequiredWithoutRole_permissionsNestedInput = {
    create?: Prisma.XOR<Prisma.permissionsCreateWithoutRole_permissionsInput, Prisma.permissionsUncheckedCreateWithoutRole_permissionsInput>;
    connectOrCreate?: Prisma.permissionsCreateOrConnectWithoutRole_permissionsInput;
    upsert?: Prisma.permissionsUpsertWithoutRole_permissionsInput;
    connect?: Prisma.permissionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.permissionsUpdateToOneWithWhereWithoutRole_permissionsInput, Prisma.permissionsUpdateWithoutRole_permissionsInput>, Prisma.permissionsUncheckedUpdateWithoutRole_permissionsInput>;
};
export type permissionsCreateWithoutRole_permissionsInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
};
export type permissionsUncheckedCreateWithoutRole_permissionsInput = {
    id?: bigint | number;
    name: string;
    description?: string | null;
};
export type permissionsCreateOrConnectWithoutRole_permissionsInput = {
    where: Prisma.permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.permissionsCreateWithoutRole_permissionsInput, Prisma.permissionsUncheckedCreateWithoutRole_permissionsInput>;
};
export type permissionsUpsertWithoutRole_permissionsInput = {
    update: Prisma.XOR<Prisma.permissionsUpdateWithoutRole_permissionsInput, Prisma.permissionsUncheckedUpdateWithoutRole_permissionsInput>;
    create: Prisma.XOR<Prisma.permissionsCreateWithoutRole_permissionsInput, Prisma.permissionsUncheckedCreateWithoutRole_permissionsInput>;
    where?: Prisma.permissionsWhereInput;
};
export type permissionsUpdateToOneWithWhereWithoutRole_permissionsInput = {
    where?: Prisma.permissionsWhereInput;
    data: Prisma.XOR<Prisma.permissionsUpdateWithoutRole_permissionsInput, Prisma.permissionsUncheckedUpdateWithoutRole_permissionsInput>;
};
export type permissionsUpdateWithoutRole_permissionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type permissionsUncheckedUpdateWithoutRole_permissionsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PermissionsCountOutputType = {
    role_permissions: number;
};
export type PermissionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permissions?: boolean | PermissionsCountOutputTypeCountRole_permissionsArgs;
};
export type PermissionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionsCountOutputTypeSelect<ExtArgs> | null;
};
export type PermissionsCountOutputTypeCountRole_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionsWhereInput;
};
export type permissionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    role_permissions?: boolean | Prisma.permissions$role_permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PermissionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["permissions"]>;
export type permissionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
}, ExtArgs["result"]["permissions"]>;
export type permissionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
}, ExtArgs["result"]["permissions"]>;
export type permissionsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
};
export type permissionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["permissions"]>;
export type permissionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permissions?: boolean | Prisma.permissions$role_permissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PermissionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type permissionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type permissionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $permissionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "permissions";
    objects: {
        role_permissions: Prisma.$role_permissionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        description: string | null;
    }, ExtArgs["result"]["permissions"]>;
    composites: {};
};
export type permissionsGetPayload<S extends boolean | null | undefined | permissionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$permissionsPayload, S>;
export type permissionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PermissionsCountAggregateInputType | true;
};
export interface permissionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['permissions'];
        meta: {
            name: 'permissions';
        };
    };
    findUnique<T extends permissionsFindUniqueArgs>(args: Prisma.SelectSubset<T, permissionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends permissionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends permissionsFindFirstArgs>(args?: Prisma.SelectSubset<T, permissionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends permissionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends permissionsFindManyArgs>(args?: Prisma.SelectSubset<T, permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends permissionsCreateArgs>(args: Prisma.SelectSubset<T, permissionsCreateArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends permissionsCreateManyArgs>(args?: Prisma.SelectSubset<T, permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends permissionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, permissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends permissionsDeleteArgs>(args: Prisma.SelectSubset<T, permissionsDeleteArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends permissionsUpdateArgs>(args: Prisma.SelectSubset<T, permissionsUpdateArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends permissionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends permissionsUpdateManyArgs>(args: Prisma.SelectSubset<T, permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends permissionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, permissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends permissionsUpsertArgs>(args: Prisma.SelectSubset<T, permissionsUpsertArgs<ExtArgs>>): Prisma.Prisma__permissionsClient<runtime.Types.Result.GetResult<Prisma.$permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends permissionsCountArgs>(args?: Prisma.Subset<T, permissionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PermissionsCountAggregateOutputType> : number>;
    aggregate<T extends PermissionsAggregateArgs>(args: Prisma.Subset<T, PermissionsAggregateArgs>): Prisma.PrismaPromise<GetPermissionsAggregateType<T>>;
    groupBy<T extends permissionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: permissionsGroupByArgs['orderBy'];
    } : {
        orderBy?: permissionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: permissionsFieldRefs;
}
export interface Prisma__permissionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role_permissions<T extends Prisma.permissions$role_permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.permissions$role_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface permissionsFieldRefs {
    readonly id: Prisma.FieldRef<"permissions", 'BigInt'>;
    readonly name: Prisma.FieldRef<"permissions", 'String'>;
    readonly description: Prisma.FieldRef<"permissions", 'String'>;
}
export type permissionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    where: Prisma.permissionsWhereUniqueInput;
};
export type permissionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    where: Prisma.permissionsWhereUniqueInput;
};
export type permissionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    where?: Prisma.permissionsWhereInput;
    orderBy?: Prisma.permissionsOrderByWithRelationInput | Prisma.permissionsOrderByWithRelationInput[];
    cursor?: Prisma.permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionsScalarFieldEnum | Prisma.PermissionsScalarFieldEnum[];
};
export type permissionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    where?: Prisma.permissionsWhereInput;
    orderBy?: Prisma.permissionsOrderByWithRelationInput | Prisma.permissionsOrderByWithRelationInput[];
    cursor?: Prisma.permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionsScalarFieldEnum | Prisma.PermissionsScalarFieldEnum[];
};
export type permissionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    where?: Prisma.permissionsWhereInput;
    orderBy?: Prisma.permissionsOrderByWithRelationInput | Prisma.permissionsOrderByWithRelationInput[];
    cursor?: Prisma.permissionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionsScalarFieldEnum | Prisma.PermissionsScalarFieldEnum[];
};
export type permissionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.permissionsCreateInput, Prisma.permissionsUncheckedCreateInput>;
};
export type permissionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.permissionsCreateManyInput | Prisma.permissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type permissionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    data: Prisma.permissionsCreateManyInput | Prisma.permissionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type permissionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.permissionsUpdateInput, Prisma.permissionsUncheckedUpdateInput>;
    where: Prisma.permissionsWhereUniqueInput;
};
export type permissionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.permissionsUpdateManyMutationInput, Prisma.permissionsUncheckedUpdateManyInput>;
    where?: Prisma.permissionsWhereInput;
    limit?: number;
};
export type permissionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.permissionsUpdateManyMutationInput, Prisma.permissionsUncheckedUpdateManyInput>;
    where?: Prisma.permissionsWhereInput;
    limit?: number;
};
export type permissionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    where: Prisma.permissionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.permissionsCreateInput, Prisma.permissionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.permissionsUpdateInput, Prisma.permissionsUncheckedUpdateInput>;
};
export type permissionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
    where: Prisma.permissionsWhereUniqueInput;
};
export type permissionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.permissionsWhereInput;
    limit?: number;
};
export type permissions$role_permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type permissionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionsSelect<ExtArgs> | null;
    omit?: Prisma.permissionsOmit<ExtArgs> | null;
    include?: Prisma.permissionsInclude<ExtArgs> | null;
};
