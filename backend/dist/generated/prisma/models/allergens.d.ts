import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type allergensModel = runtime.Types.Result.DefaultSelection<Prisma.$allergensPayload>;
export type AggregateAllergens = {
    _count: AllergensCountAggregateOutputType | null;
    _avg: AllergensAvgAggregateOutputType | null;
    _sum: AllergensSumAggregateOutputType | null;
    _min: AllergensMinAggregateOutputType | null;
    _max: AllergensMaxAggregateOutputType | null;
};
export type AllergensAvgAggregateOutputType = {
    id: number | null;
};
export type AllergensSumAggregateOutputType = {
    id: bigint | null;
};
export type AllergensMinAggregateOutputType = {
    id: bigint | null;
    name: string | null;
};
export type AllergensMaxAggregateOutputType = {
    id: bigint | null;
    name: string | null;
};
export type AllergensCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type AllergensAvgAggregateInputType = {
    id?: true;
};
export type AllergensSumAggregateInputType = {
    id?: true;
};
export type AllergensMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type AllergensMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type AllergensCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type AllergensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.allergensWhereInput;
    orderBy?: Prisma.allergensOrderByWithRelationInput | Prisma.allergensOrderByWithRelationInput[];
    cursor?: Prisma.allergensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AllergensCountAggregateInputType;
    _avg?: AllergensAvgAggregateInputType;
    _sum?: AllergensSumAggregateInputType;
    _min?: AllergensMinAggregateInputType;
    _max?: AllergensMaxAggregateInputType;
};
export type GetAllergensAggregateType<T extends AllergensAggregateArgs> = {
    [P in keyof T & keyof AggregateAllergens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAllergens[P]> : Prisma.GetScalarType<T[P], AggregateAllergens[P]>;
};
export type allergensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.allergensWhereInput;
    orderBy?: Prisma.allergensOrderByWithAggregationInput | Prisma.allergensOrderByWithAggregationInput[];
    by: Prisma.AllergensScalarFieldEnum[] | Prisma.AllergensScalarFieldEnum;
    having?: Prisma.allergensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AllergensCountAggregateInputType | true;
    _avg?: AllergensAvgAggregateInputType;
    _sum?: AllergensSumAggregateInputType;
    _min?: AllergensMinAggregateInputType;
    _max?: AllergensMaxAggregateInputType;
};
export type AllergensGroupByOutputType = {
    id: bigint;
    name: string;
    _count: AllergensCountAggregateOutputType | null;
    _avg: AllergensAvgAggregateOutputType | null;
    _sum: AllergensSumAggregateOutputType | null;
    _min: AllergensMinAggregateOutputType | null;
    _max: AllergensMaxAggregateOutputType | null;
};
export type GetAllergensGroupByPayload<T extends allergensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AllergensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AllergensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AllergensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AllergensGroupByOutputType[P]>;
}>>;
export type allergensWhereInput = {
    AND?: Prisma.allergensWhereInput | Prisma.allergensWhereInput[];
    OR?: Prisma.allergensWhereInput[];
    NOT?: Prisma.allergensWhereInput | Prisma.allergensWhereInput[];
    id?: Prisma.BigIntFilter<"allergens"> | bigint | number;
    name?: Prisma.StringFilter<"allergens"> | string;
    menu_item_allergens?: Prisma.Menu_item_allergensListRelationFilter;
};
export type allergensOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    menu_item_allergens?: Prisma.menu_item_allergensOrderByRelationAggregateInput;
};
export type allergensWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    name?: string;
    AND?: Prisma.allergensWhereInput | Prisma.allergensWhereInput[];
    OR?: Prisma.allergensWhereInput[];
    NOT?: Prisma.allergensWhereInput | Prisma.allergensWhereInput[];
    menu_item_allergens?: Prisma.Menu_item_allergensListRelationFilter;
}, "id" | "name">;
export type allergensOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.allergensCountOrderByAggregateInput;
    _avg?: Prisma.allergensAvgOrderByAggregateInput;
    _max?: Prisma.allergensMaxOrderByAggregateInput;
    _min?: Prisma.allergensMinOrderByAggregateInput;
    _sum?: Prisma.allergensSumOrderByAggregateInput;
};
export type allergensScalarWhereWithAggregatesInput = {
    AND?: Prisma.allergensScalarWhereWithAggregatesInput | Prisma.allergensScalarWhereWithAggregatesInput[];
    OR?: Prisma.allergensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.allergensScalarWhereWithAggregatesInput | Prisma.allergensScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"allergens"> | bigint | number;
    name?: Prisma.StringWithAggregatesFilter<"allergens"> | string;
};
export type allergensCreateInput = {
    id?: bigint | number;
    name: string;
    menu_item_allergens?: Prisma.menu_item_allergensCreateNestedManyWithoutAllergensInput;
};
export type allergensUncheckedCreateInput = {
    id?: bigint | number;
    name: string;
    menu_item_allergens?: Prisma.menu_item_allergensUncheckedCreateNestedManyWithoutAllergensInput;
};
export type allergensUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    menu_item_allergens?: Prisma.menu_item_allergensUpdateManyWithoutAllergensNestedInput;
};
export type allergensUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    menu_item_allergens?: Prisma.menu_item_allergensUncheckedUpdateManyWithoutAllergensNestedInput;
};
export type allergensCreateManyInput = {
    id?: bigint | number;
    name: string;
};
export type allergensUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type allergensUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type allergensCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type allergensAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type allergensMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type allergensMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type allergensSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AllergensScalarRelationFilter = {
    is?: Prisma.allergensWhereInput;
    isNot?: Prisma.allergensWhereInput;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type allergensCreateNestedOneWithoutMenu_item_allergensInput = {
    create?: Prisma.XOR<Prisma.allergensCreateWithoutMenu_item_allergensInput, Prisma.allergensUncheckedCreateWithoutMenu_item_allergensInput>;
    connectOrCreate?: Prisma.allergensCreateOrConnectWithoutMenu_item_allergensInput;
    connect?: Prisma.allergensWhereUniqueInput;
};
export type allergensUpdateOneRequiredWithoutMenu_item_allergensNestedInput = {
    create?: Prisma.XOR<Prisma.allergensCreateWithoutMenu_item_allergensInput, Prisma.allergensUncheckedCreateWithoutMenu_item_allergensInput>;
    connectOrCreate?: Prisma.allergensCreateOrConnectWithoutMenu_item_allergensInput;
    upsert?: Prisma.allergensUpsertWithoutMenu_item_allergensInput;
    connect?: Prisma.allergensWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.allergensUpdateToOneWithWhereWithoutMenu_item_allergensInput, Prisma.allergensUpdateWithoutMenu_item_allergensInput>, Prisma.allergensUncheckedUpdateWithoutMenu_item_allergensInput>;
};
export type allergensCreateWithoutMenu_item_allergensInput = {
    id?: bigint | number;
    name: string;
};
export type allergensUncheckedCreateWithoutMenu_item_allergensInput = {
    id?: bigint | number;
    name: string;
};
export type allergensCreateOrConnectWithoutMenu_item_allergensInput = {
    where: Prisma.allergensWhereUniqueInput;
    create: Prisma.XOR<Prisma.allergensCreateWithoutMenu_item_allergensInput, Prisma.allergensUncheckedCreateWithoutMenu_item_allergensInput>;
};
export type allergensUpsertWithoutMenu_item_allergensInput = {
    update: Prisma.XOR<Prisma.allergensUpdateWithoutMenu_item_allergensInput, Prisma.allergensUncheckedUpdateWithoutMenu_item_allergensInput>;
    create: Prisma.XOR<Prisma.allergensCreateWithoutMenu_item_allergensInput, Prisma.allergensUncheckedCreateWithoutMenu_item_allergensInput>;
    where?: Prisma.allergensWhereInput;
};
export type allergensUpdateToOneWithWhereWithoutMenu_item_allergensInput = {
    where?: Prisma.allergensWhereInput;
    data: Prisma.XOR<Prisma.allergensUpdateWithoutMenu_item_allergensInput, Prisma.allergensUncheckedUpdateWithoutMenu_item_allergensInput>;
};
export type allergensUpdateWithoutMenu_item_allergensInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type allergensUncheckedUpdateWithoutMenu_item_allergensInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AllergensCountOutputType = {
    menu_item_allergens: number;
};
export type AllergensCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu_item_allergens?: boolean | AllergensCountOutputTypeCountMenu_item_allergensArgs;
};
export type AllergensCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AllergensCountOutputTypeSelect<ExtArgs> | null;
};
export type AllergensCountOutputTypeCountMenu_item_allergensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.menu_item_allergensWhereInput;
};
export type allergensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    menu_item_allergens?: boolean | Prisma.allergens$menu_item_allergensArgs<ExtArgs>;
    _count?: boolean | Prisma.AllergensCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["allergens"]>;
export type allergensSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["allergens"]>;
export type allergensSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["allergens"]>;
export type allergensSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type allergensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["allergens"]>;
export type allergensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu_item_allergens?: boolean | Prisma.allergens$menu_item_allergensArgs<ExtArgs>;
    _count?: boolean | Prisma.AllergensCountOutputTypeDefaultArgs<ExtArgs>;
};
export type allergensIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type allergensIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $allergensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "allergens";
    objects: {
        menu_item_allergens: Prisma.$menu_item_allergensPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        name: string;
    }, ExtArgs["result"]["allergens"]>;
    composites: {};
};
export type allergensGetPayload<S extends boolean | null | undefined | allergensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$allergensPayload, S>;
export type allergensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<allergensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AllergensCountAggregateInputType | true;
};
export interface allergensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['allergens'];
        meta: {
            name: 'allergens';
        };
    };
    findUnique<T extends allergensFindUniqueArgs>(args: Prisma.SelectSubset<T, allergensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends allergensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, allergensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends allergensFindFirstArgs>(args?: Prisma.SelectSubset<T, allergensFindFirstArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends allergensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, allergensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends allergensFindManyArgs>(args?: Prisma.SelectSubset<T, allergensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends allergensCreateArgs>(args: Prisma.SelectSubset<T, allergensCreateArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends allergensCreateManyArgs>(args?: Prisma.SelectSubset<T, allergensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends allergensCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, allergensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends allergensDeleteArgs>(args: Prisma.SelectSubset<T, allergensDeleteArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends allergensUpdateArgs>(args: Prisma.SelectSubset<T, allergensUpdateArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends allergensDeleteManyArgs>(args?: Prisma.SelectSubset<T, allergensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends allergensUpdateManyArgs>(args: Prisma.SelectSubset<T, allergensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends allergensUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, allergensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends allergensUpsertArgs>(args: Prisma.SelectSubset<T, allergensUpsertArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends allergensCountArgs>(args?: Prisma.Subset<T, allergensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AllergensCountAggregateOutputType> : number>;
    aggregate<T extends AllergensAggregateArgs>(args: Prisma.Subset<T, AllergensAggregateArgs>): Prisma.PrismaPromise<GetAllergensAggregateType<T>>;
    groupBy<T extends allergensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: allergensGroupByArgs['orderBy'];
    } : {
        orderBy?: allergensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, allergensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: allergensFieldRefs;
}
export interface Prisma__allergensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menu_item_allergens<T extends Prisma.allergens$menu_item_allergensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.allergens$menu_item_allergensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface allergensFieldRefs {
    readonly id: Prisma.FieldRef<"allergens", 'BigInt'>;
    readonly name: Prisma.FieldRef<"allergens", 'String'>;
}
export type allergensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    where: Prisma.allergensWhereUniqueInput;
};
export type allergensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    where: Prisma.allergensWhereUniqueInput;
};
export type allergensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    where?: Prisma.allergensWhereInput;
    orderBy?: Prisma.allergensOrderByWithRelationInput | Prisma.allergensOrderByWithRelationInput[];
    cursor?: Prisma.allergensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AllergensScalarFieldEnum | Prisma.AllergensScalarFieldEnum[];
};
export type allergensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    where?: Prisma.allergensWhereInput;
    orderBy?: Prisma.allergensOrderByWithRelationInput | Prisma.allergensOrderByWithRelationInput[];
    cursor?: Prisma.allergensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AllergensScalarFieldEnum | Prisma.AllergensScalarFieldEnum[];
};
export type allergensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    where?: Prisma.allergensWhereInput;
    orderBy?: Prisma.allergensOrderByWithRelationInput | Prisma.allergensOrderByWithRelationInput[];
    cursor?: Prisma.allergensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AllergensScalarFieldEnum | Prisma.AllergensScalarFieldEnum[];
};
export type allergensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.allergensCreateInput, Prisma.allergensUncheckedCreateInput>;
};
export type allergensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.allergensCreateManyInput | Prisma.allergensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type allergensCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    data: Prisma.allergensCreateManyInput | Prisma.allergensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type allergensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.allergensUpdateInput, Prisma.allergensUncheckedUpdateInput>;
    where: Prisma.allergensWhereUniqueInput;
};
export type allergensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.allergensUpdateManyMutationInput, Prisma.allergensUncheckedUpdateManyInput>;
    where?: Prisma.allergensWhereInput;
    limit?: number;
};
export type allergensUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.allergensUpdateManyMutationInput, Prisma.allergensUncheckedUpdateManyInput>;
    where?: Prisma.allergensWhereInput;
    limit?: number;
};
export type allergensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    where: Prisma.allergensWhereUniqueInput;
    create: Prisma.XOR<Prisma.allergensCreateInput, Prisma.allergensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.allergensUpdateInput, Prisma.allergensUncheckedUpdateInput>;
};
export type allergensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
    where: Prisma.allergensWhereUniqueInput;
};
export type allergensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.allergensWhereInput;
    limit?: number;
};
export type allergens$menu_item_allergensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
    where?: Prisma.menu_item_allergensWhereInput;
    orderBy?: Prisma.menu_item_allergensOrderByWithRelationInput | Prisma.menu_item_allergensOrderByWithRelationInput[];
    cursor?: Prisma.menu_item_allergensWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Menu_item_allergensScalarFieldEnum | Prisma.Menu_item_allergensScalarFieldEnum[];
};
export type allergensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.allergensSelect<ExtArgs> | null;
    omit?: Prisma.allergensOmit<ExtArgs> | null;
    include?: Prisma.allergensInclude<ExtArgs> | null;
};
