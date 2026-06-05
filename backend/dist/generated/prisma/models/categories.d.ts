import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$categoriesPayload>;
export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
export type CategoriesAvgAggregateOutputType = {
    id: number | null;
    sort_order: number | null;
    version: number | null;
};
export type CategoriesSumAggregateOutputType = {
    id: bigint | null;
    sort_order: number | null;
    version: bigint | null;
};
export type CategoriesMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    icon: string | null;
    sort_order: number | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    created_by: string | null;
    updated_by: string | null;
    version: bigint | null;
};
export type CategoriesMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
    icon: string | null;
    sort_order: number | null;
    active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    created_by: string | null;
    updated_by: string | null;
    version: bigint | null;
};
export type CategoriesCountAggregateOutputType = {
    id: number;
    name: number;
    icon: number;
    sort_order: number;
    active: number;
    created_at: number;
    updated_at: number;
    created_by: number;
    updated_by: number;
    version: number;
    _all: number;
};
export type CategoriesAvgAggregateInputType = {
    id?: true;
    sort_order?: true;
    version?: true;
};
export type CategoriesSumAggregateInputType = {
    id?: true;
    sort_order?: true;
    version?: true;
};
export type CategoriesMinAggregateInputType = {
    id?: true;
    name?: true;
    icon?: true;
    sort_order?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    created_by?: true;
    updated_by?: true;
    version?: true;
};
export type CategoriesMaxAggregateInputType = {
    id?: true;
    name?: true;
    icon?: true;
    sort_order?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    created_by?: true;
    updated_by?: true;
    version?: true;
};
export type CategoriesCountAggregateInputType = {
    id?: true;
    name?: true;
    icon?: true;
    sort_order?: true;
    active?: true;
    created_at?: true;
    updated_at?: true;
    created_by?: true;
    updated_by?: true;
    version?: true;
    _all?: true;
};
export type CategoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriesCountAggregateInputType;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategories[P]> : Prisma.GetScalarType<T[P], AggregateCategories[P]>;
};
export type categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithAggregationInput | Prisma.categoriesOrderByWithAggregationInput[];
    by: Prisma.CategoriesScalarFieldEnum[] | Prisma.CategoriesScalarFieldEnum;
    having?: Prisma.categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriesCountAggregateInputType | true;
    _avg?: CategoriesAvgAggregateInputType;
    _sum?: CategoriesSumAggregateInputType;
    _min?: CategoriesMinAggregateInputType;
    _max?: CategoriesMaxAggregateInputType;
};
export type CategoriesGroupByOutputType = {
    id: bigint;
    name: string;
    icon: string | null;
    sort_order: number;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    created_by: string | null;
    updated_by: string | null;
    version: bigint;
    _count: CategoriesCountAggregateOutputType | null;
    _avg: CategoriesAvgAggregateOutputType | null;
    _sum: CategoriesSumAggregateOutputType | null;
    _min: CategoriesMinAggregateOutputType | null;
    _max: CategoriesMaxAggregateOutputType | null;
};
export type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriesGroupByOutputType[P]>;
}>>;
export type categoriesWhereInput = {
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    id?: Prisma.BigIntFilter<"categories"> | bigint | number;
    name?: Prisma.StringFilter<"categories"> | string;
    icon?: Prisma.StringNullableFilter<"categories"> | string | null;
    sort_order?: Prisma.IntFilter<"categories"> | number;
    active?: Prisma.BoolFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    created_by?: Prisma.StringNullableFilter<"categories"> | string | null;
    updated_by?: Prisma.StringNullableFilter<"categories"> | string | null;
    version?: Prisma.BigIntFilter<"categories"> | bigint | number;
    menu_items?: Prisma.Menu_itemsListRelationFilter;
};
export type categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    menu_items?: Prisma.menu_itemsOrderByRelationAggregateInput;
};
export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    OR?: Prisma.categoriesWhereInput[];
    NOT?: Prisma.categoriesWhereInput | Prisma.categoriesWhereInput[];
    name?: Prisma.StringFilter<"categories"> | string;
    icon?: Prisma.StringNullableFilter<"categories"> | string | null;
    sort_order?: Prisma.IntFilter<"categories"> | number;
    active?: Prisma.BoolFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"categories"> | Date | string;
    created_by?: Prisma.StringNullableFilter<"categories"> | string | null;
    updated_by?: Prisma.StringNullableFilter<"categories"> | string | null;
    version?: Prisma.BigIntFilter<"categories"> | bigint | number;
    menu_items?: Prisma.Menu_itemsListRelationFilter;
}, "id">;
export type categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    _count?: Prisma.categoriesCountOrderByAggregateInput;
    _avg?: Prisma.categoriesAvgOrderByAggregateInput;
    _max?: Prisma.categoriesMaxOrderByAggregateInput;
    _min?: Prisma.categoriesMinOrderByAggregateInput;
    _sum?: Prisma.categoriesSumOrderByAggregateInput;
};
export type categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoriesScalarWhereWithAggregatesInput | Prisma.categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"categories"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"categories"> | string;
    icon?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    sort_order?: Prisma.IntWithAggregatesFilter<"categories"> | number;
    active?: Prisma.BoolWithAggregatesFilter<"categories"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"categories"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"categories"> | Date | string;
    created_by?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    updated_by?: Prisma.StringNullableWithAggregatesFilter<"categories"> | string | null;
    version?: Prisma.BigIntWithAggregatesFilter<"categories"> | bigint | number;
};
export type categoriesCreateInput = {
    id?: bigint | number;
    name: string;
    icon?: string | null;
    sort_order?: number;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    menu_items?: Prisma.menu_itemsCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    icon?: string | null;
    sort_order?: number;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
    menu_items?: Prisma.menu_itemsUncheckedCreateNestedManyWithoutCategoriesInput;
};
export type categoriesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    menu_items?: Prisma.menu_itemsUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    menu_items?: Prisma.menu_itemsUncheckedUpdateManyWithoutCategoriesNestedInput;
};
export type categoriesCreateManyInput = {
    id?: bigint | number;
    name: string;
    icon?: string | null;
    sort_order?: number;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
};
export type categoriesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type categoriesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type categoriesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type categoriesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type CategoriesScalarRelationFilter = {
    is?: Prisma.categoriesWhereInput;
    isNot?: Prisma.categoriesWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type categoriesCreateNestedOneWithoutMenu_itemsInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutMenu_itemsInput, Prisma.categoriesUncheckedCreateWithoutMenu_itemsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutMenu_itemsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateOneRequiredWithoutMenu_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.categoriesCreateWithoutMenu_itemsInput, Prisma.categoriesUncheckedCreateWithoutMenu_itemsInput>;
    connectOrCreate?: Prisma.categoriesCreateOrConnectWithoutMenu_itemsInput;
    upsert?: Prisma.categoriesUpsertWithoutMenu_itemsInput;
    connect?: Prisma.categoriesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoriesUpdateToOneWithWhereWithoutMenu_itemsInput, Prisma.categoriesUpdateWithoutMenu_itemsInput>, Prisma.categoriesUncheckedUpdateWithoutMenu_itemsInput>;
};
export type categoriesCreateWithoutMenu_itemsInput = {
    id?: bigint | number;
    name: string;
    icon?: string | null;
    sort_order?: number;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
};
export type categoriesUncheckedCreateWithoutMenu_itemsInput = {
    id?: bigint | number;
    name: string;
    icon?: string | null;
    sort_order?: number;
    active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    created_by?: string | null;
    updated_by?: string | null;
    version?: bigint | number;
};
export type categoriesCreateOrConnectWithoutMenu_itemsInput = {
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutMenu_itemsInput, Prisma.categoriesUncheckedCreateWithoutMenu_itemsInput>;
};
export type categoriesUpsertWithoutMenu_itemsInput = {
    update: Prisma.XOR<Prisma.categoriesUpdateWithoutMenu_itemsInput, Prisma.categoriesUncheckedUpdateWithoutMenu_itemsInput>;
    create: Prisma.XOR<Prisma.categoriesCreateWithoutMenu_itemsInput, Prisma.categoriesUncheckedCreateWithoutMenu_itemsInput>;
    where?: Prisma.categoriesWhereInput;
};
export type categoriesUpdateToOneWithWhereWithoutMenu_itemsInput = {
    where?: Prisma.categoriesWhereInput;
    data: Prisma.XOR<Prisma.categoriesUpdateWithoutMenu_itemsInput, Prisma.categoriesUncheckedUpdateWithoutMenu_itemsInput>;
};
export type categoriesUpdateWithoutMenu_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type categoriesUncheckedUpdateWithoutMenu_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type CategoriesCountOutputType = {
    menu_items: number;
};
export type CategoriesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu_items?: boolean | CategoriesCountOutputTypeCountMenu_itemsArgs;
};
export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriesCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriesCountOutputTypeCountMenu_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.menu_itemsWhereInput;
};
export type categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    icon?: boolean;
    sort_order?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
    menu_items?: boolean | Prisma.categories$menu_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    icon?: boolean;
    sort_order?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    icon?: boolean;
    sort_order?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
}, ExtArgs["result"]["categories"]>;
export type categoriesSelectScalar = {
    id?: boolean;
    name?: boolean;
    icon?: boolean;
    sort_order?: boolean;
    active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    created_by?: boolean;
    updated_by?: boolean;
    version?: boolean;
};
export type categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "icon" | "sort_order" | "active" | "created_at" | "updated_at" | "created_by" | "updated_by" | "version", ExtArgs["result"]["categories"]>;
export type categoriesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu_items?: boolean | Prisma.categories$menu_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type categoriesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "categories";
    objects: {
        menu_items: Prisma.$menu_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
        icon: string | null;
        sort_order: number;
        active: boolean;
        created_at: Date;
        updated_at: Date;
        created_by: string | null;
        updated_by: string | null;
        version: bigint;
    }, ExtArgs["result"]["categories"]>;
    composites: {};
};
export type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoriesPayload, S>;
export type categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriesCountAggregateInputType | true;
};
export interface categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['categories'];
        meta: {
            name: 'categories';
        };
    };
    findUnique<T extends categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoriesCreateArgs>(args: Prisma.SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends categoriesDeleteArgs>(args: Prisma.SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoriesUpdateArgs>(args: Prisma.SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends categoriesUpsertArgs>(args: Prisma.SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__categoriesClient<runtime.Types.Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoriesCountArgs>(args?: Prisma.Subset<T, categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriesCountAggregateOutputType> : number>;
    aggregate<T extends CategoriesAggregateArgs>(args: Prisma.Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>;
    groupBy<T extends categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoriesFieldRefs;
}
export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menu_items<T extends Prisma.categories$menu_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categories$menu_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"categories", 'BigInt'>;
    readonly name: Prisma.FieldRef<"categories", 'String'>;
    readonly icon: Prisma.FieldRef<"categories", 'String'>;
    readonly sort_order: Prisma.FieldRef<"categories", 'Int'>;
    readonly active: Prisma.FieldRef<"categories", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"categories", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"categories", 'DateTime'>;
    readonly created_by: Prisma.FieldRef<"categories", 'String'>;
    readonly updated_by: Prisma.FieldRef<"categories", 'String'>;
    readonly version: Prisma.FieldRef<"categories", 'BigInt'>;
}
export type categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where?: Prisma.categoriesWhereInput;
    orderBy?: Prisma.categoriesOrderByWithRelationInput | Prisma.categoriesOrderByWithRelationInput[];
    cursor?: Prisma.categoriesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriesScalarFieldEnum | Prisma.CategoriesScalarFieldEnum[];
};
export type categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
};
export type categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoriesCreateManyInput | Prisma.categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    data: Prisma.categoriesCreateManyInput | Prisma.categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyInput>;
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categoriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoriesUpdateManyMutationInput, Prisma.categoriesUncheckedUpdateManyInput>;
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoriesCreateInput, Prisma.categoriesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoriesUpdateInput, Prisma.categoriesUncheckedUpdateInput>;
};
export type categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
    where: Prisma.categoriesWhereUniqueInput;
};
export type categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoriesWhereInput;
    limit?: number;
};
export type categories$menu_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_itemsSelect<ExtArgs> | null;
    omit?: Prisma.menu_itemsOmit<ExtArgs> | null;
    include?: Prisma.menu_itemsInclude<ExtArgs> | null;
    where?: Prisma.menu_itemsWhereInput;
    orderBy?: Prisma.menu_itemsOrderByWithRelationInput | Prisma.menu_itemsOrderByWithRelationInput[];
    cursor?: Prisma.menu_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Menu_itemsScalarFieldEnum | Prisma.Menu_itemsScalarFieldEnum[];
};
export type categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoriesSelect<ExtArgs> | null;
    omit?: Prisma.categoriesOmit<ExtArgs> | null;
    include?: Prisma.categoriesInclude<ExtArgs> | null;
};
