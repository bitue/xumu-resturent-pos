import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type menu_item_allergensModel = runtime.Types.Result.DefaultSelection<Prisma.$menu_item_allergensPayload>;
export type AggregateMenu_item_allergens = {
    _count: Menu_item_allergensCountAggregateOutputType | null;
    _avg: Menu_item_allergensAvgAggregateOutputType | null;
    _sum: Menu_item_allergensSumAggregateOutputType | null;
    _min: Menu_item_allergensMinAggregateOutputType | null;
    _max: Menu_item_allergensMaxAggregateOutputType | null;
};
export type Menu_item_allergensAvgAggregateOutputType = {
    menu_item_id: number | null;
    allergen_id: number | null;
};
export type Menu_item_allergensSumAggregateOutputType = {
    menu_item_id: bigint | null;
    allergen_id: bigint | null;
};
export type Menu_item_allergensMinAggregateOutputType = {
    menu_item_id: bigint | null;
    allergen_id: bigint | null;
};
export type Menu_item_allergensMaxAggregateOutputType = {
    menu_item_id: bigint | null;
    allergen_id: bigint | null;
};
export type Menu_item_allergensCountAggregateOutputType = {
    menu_item_id: number;
    allergen_id: number;
    _all: number;
};
export type Menu_item_allergensAvgAggregateInputType = {
    menu_item_id?: true;
    allergen_id?: true;
};
export type Menu_item_allergensSumAggregateInputType = {
    menu_item_id?: true;
    allergen_id?: true;
};
export type Menu_item_allergensMinAggregateInputType = {
    menu_item_id?: true;
    allergen_id?: true;
};
export type Menu_item_allergensMaxAggregateInputType = {
    menu_item_id?: true;
    allergen_id?: true;
};
export type Menu_item_allergensCountAggregateInputType = {
    menu_item_id?: true;
    allergen_id?: true;
    _all?: true;
};
export type Menu_item_allergensAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.menu_item_allergensWhereInput;
    orderBy?: Prisma.menu_item_allergensOrderByWithRelationInput | Prisma.menu_item_allergensOrderByWithRelationInput[];
    cursor?: Prisma.menu_item_allergensWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Menu_item_allergensCountAggregateInputType;
    _avg?: Menu_item_allergensAvgAggregateInputType;
    _sum?: Menu_item_allergensSumAggregateInputType;
    _min?: Menu_item_allergensMinAggregateInputType;
    _max?: Menu_item_allergensMaxAggregateInputType;
};
export type GetMenu_item_allergensAggregateType<T extends Menu_item_allergensAggregateArgs> = {
    [P in keyof T & keyof AggregateMenu_item_allergens]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMenu_item_allergens[P]> : Prisma.GetScalarType<T[P], AggregateMenu_item_allergens[P]>;
};
export type menu_item_allergensGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.menu_item_allergensWhereInput;
    orderBy?: Prisma.menu_item_allergensOrderByWithAggregationInput | Prisma.menu_item_allergensOrderByWithAggregationInput[];
    by: Prisma.Menu_item_allergensScalarFieldEnum[] | Prisma.Menu_item_allergensScalarFieldEnum;
    having?: Prisma.menu_item_allergensScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Menu_item_allergensCountAggregateInputType | true;
    _avg?: Menu_item_allergensAvgAggregateInputType;
    _sum?: Menu_item_allergensSumAggregateInputType;
    _min?: Menu_item_allergensMinAggregateInputType;
    _max?: Menu_item_allergensMaxAggregateInputType;
};
export type Menu_item_allergensGroupByOutputType = {
    menu_item_id: bigint;
    allergen_id: bigint;
    _count: Menu_item_allergensCountAggregateOutputType | null;
    _avg: Menu_item_allergensAvgAggregateOutputType | null;
    _sum: Menu_item_allergensSumAggregateOutputType | null;
    _min: Menu_item_allergensMinAggregateOutputType | null;
    _max: Menu_item_allergensMaxAggregateOutputType | null;
};
export type GetMenu_item_allergensGroupByPayload<T extends menu_item_allergensGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Menu_item_allergensGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Menu_item_allergensGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Menu_item_allergensGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Menu_item_allergensGroupByOutputType[P]>;
}>>;
export type menu_item_allergensWhereInput = {
    AND?: Prisma.menu_item_allergensWhereInput | Prisma.menu_item_allergensWhereInput[];
    OR?: Prisma.menu_item_allergensWhereInput[];
    NOT?: Prisma.menu_item_allergensWhereInput | Prisma.menu_item_allergensWhereInput[];
    menu_item_id?: Prisma.BigIntFilter<"menu_item_allergens"> | bigint | number;
    allergen_id?: Prisma.BigIntFilter<"menu_item_allergens"> | bigint | number;
    allergens?: Prisma.XOR<Prisma.AllergensScalarRelationFilter, Prisma.allergensWhereInput>;
    menu_items?: Prisma.XOR<Prisma.Menu_itemsScalarRelationFilter, Prisma.menu_itemsWhereInput>;
};
export type menu_item_allergensOrderByWithRelationInput = {
    menu_item_id?: Prisma.SortOrder;
    allergen_id?: Prisma.SortOrder;
    allergens?: Prisma.allergensOrderByWithRelationInput;
    menu_items?: Prisma.menu_itemsOrderByWithRelationInput;
};
export type menu_item_allergensWhereUniqueInput = Prisma.AtLeast<{
    menu_item_id_allergen_id?: Prisma.menu_item_allergensMenu_item_idAllergen_idCompoundUniqueInput;
    AND?: Prisma.menu_item_allergensWhereInput | Prisma.menu_item_allergensWhereInput[];
    OR?: Prisma.menu_item_allergensWhereInput[];
    NOT?: Prisma.menu_item_allergensWhereInput | Prisma.menu_item_allergensWhereInput[];
    menu_item_id?: Prisma.BigIntFilter<"menu_item_allergens"> | bigint | number;
    allergen_id?: Prisma.BigIntFilter<"menu_item_allergens"> | bigint | number;
    allergens?: Prisma.XOR<Prisma.AllergensScalarRelationFilter, Prisma.allergensWhereInput>;
    menu_items?: Prisma.XOR<Prisma.Menu_itemsScalarRelationFilter, Prisma.menu_itemsWhereInput>;
}, "menu_item_id_allergen_id">;
export type menu_item_allergensOrderByWithAggregationInput = {
    menu_item_id?: Prisma.SortOrder;
    allergen_id?: Prisma.SortOrder;
    _count?: Prisma.menu_item_allergensCountOrderByAggregateInput;
    _avg?: Prisma.menu_item_allergensAvgOrderByAggregateInput;
    _max?: Prisma.menu_item_allergensMaxOrderByAggregateInput;
    _min?: Prisma.menu_item_allergensMinOrderByAggregateInput;
    _sum?: Prisma.menu_item_allergensSumOrderByAggregateInput;
};
export type menu_item_allergensScalarWhereWithAggregatesInput = {
    AND?: Prisma.menu_item_allergensScalarWhereWithAggregatesInput | Prisma.menu_item_allergensScalarWhereWithAggregatesInput[];
    OR?: Prisma.menu_item_allergensScalarWhereWithAggregatesInput[];
    NOT?: Prisma.menu_item_allergensScalarWhereWithAggregatesInput | Prisma.menu_item_allergensScalarWhereWithAggregatesInput[];
    menu_item_id?: Prisma.BigIntWithAggregatesFilter<"menu_item_allergens"> | bigint | number;
    allergen_id?: Prisma.BigIntWithAggregatesFilter<"menu_item_allergens"> | bigint | number;
};
export type menu_item_allergensCreateInput = {
    allergens: Prisma.allergensCreateNestedOneWithoutMenu_item_allergensInput;
    menu_items: Prisma.menu_itemsCreateNestedOneWithoutMenu_item_allergensInput;
};
export type menu_item_allergensUncheckedCreateInput = {
    menu_item_id: bigint | number;
    allergen_id: bigint | number;
};
export type menu_item_allergensUpdateInput = {
    allergens?: Prisma.allergensUpdateOneRequiredWithoutMenu_item_allergensNestedInput;
    menu_items?: Prisma.menu_itemsUpdateOneRequiredWithoutMenu_item_allergensNestedInput;
};
export type menu_item_allergensUncheckedUpdateInput = {
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    allergen_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type menu_item_allergensCreateManyInput = {
    menu_item_id: bigint | number;
    allergen_id: bigint | number;
};
export type menu_item_allergensUpdateManyMutationInput = {};
export type menu_item_allergensUncheckedUpdateManyInput = {
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    allergen_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type Menu_item_allergensListRelationFilter = {
    every?: Prisma.menu_item_allergensWhereInput;
    some?: Prisma.menu_item_allergensWhereInput;
    none?: Prisma.menu_item_allergensWhereInput;
};
export type menu_item_allergensOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type menu_item_allergensMenu_item_idAllergen_idCompoundUniqueInput = {
    menu_item_id: bigint | number;
    allergen_id: bigint | number;
};
export type menu_item_allergensCountOrderByAggregateInput = {
    menu_item_id?: Prisma.SortOrder;
    allergen_id?: Prisma.SortOrder;
};
export type menu_item_allergensAvgOrderByAggregateInput = {
    menu_item_id?: Prisma.SortOrder;
    allergen_id?: Prisma.SortOrder;
};
export type menu_item_allergensMaxOrderByAggregateInput = {
    menu_item_id?: Prisma.SortOrder;
    allergen_id?: Prisma.SortOrder;
};
export type menu_item_allergensMinOrderByAggregateInput = {
    menu_item_id?: Prisma.SortOrder;
    allergen_id?: Prisma.SortOrder;
};
export type menu_item_allergensSumOrderByAggregateInput = {
    menu_item_id?: Prisma.SortOrder;
    allergen_id?: Prisma.SortOrder;
};
export type menu_item_allergensCreateNestedManyWithoutAllergensInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput> | Prisma.menu_item_allergensCreateWithoutAllergensInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput | Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput[];
    createMany?: Prisma.menu_item_allergensCreateManyAllergensInputEnvelope;
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
};
export type menu_item_allergensUncheckedCreateNestedManyWithoutAllergensInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput> | Prisma.menu_item_allergensCreateWithoutAllergensInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput | Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput[];
    createMany?: Prisma.menu_item_allergensCreateManyAllergensInputEnvelope;
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
};
export type menu_item_allergensUpdateManyWithoutAllergensNestedInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput> | Prisma.menu_item_allergensCreateWithoutAllergensInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput | Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput[];
    upsert?: Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutAllergensInput | Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutAllergensInput[];
    createMany?: Prisma.menu_item_allergensCreateManyAllergensInputEnvelope;
    set?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    disconnect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    delete?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    update?: Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutAllergensInput | Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutAllergensInput[];
    updateMany?: Prisma.menu_item_allergensUpdateManyWithWhereWithoutAllergensInput | Prisma.menu_item_allergensUpdateManyWithWhereWithoutAllergensInput[];
    deleteMany?: Prisma.menu_item_allergensScalarWhereInput | Prisma.menu_item_allergensScalarWhereInput[];
};
export type menu_item_allergensUncheckedUpdateManyWithoutAllergensNestedInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput> | Prisma.menu_item_allergensCreateWithoutAllergensInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput | Prisma.menu_item_allergensCreateOrConnectWithoutAllergensInput[];
    upsert?: Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutAllergensInput | Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutAllergensInput[];
    createMany?: Prisma.menu_item_allergensCreateManyAllergensInputEnvelope;
    set?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    disconnect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    delete?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    update?: Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutAllergensInput | Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutAllergensInput[];
    updateMany?: Prisma.menu_item_allergensUpdateManyWithWhereWithoutAllergensInput | Prisma.menu_item_allergensUpdateManyWithWhereWithoutAllergensInput[];
    deleteMany?: Prisma.menu_item_allergensScalarWhereInput | Prisma.menu_item_allergensScalarWhereInput[];
};
export type menu_item_allergensCreateNestedManyWithoutMenu_itemsInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput> | Prisma.menu_item_allergensCreateWithoutMenu_itemsInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput | Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput[];
    createMany?: Prisma.menu_item_allergensCreateManyMenu_itemsInputEnvelope;
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
};
export type menu_item_allergensUncheckedCreateNestedManyWithoutMenu_itemsInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput> | Prisma.menu_item_allergensCreateWithoutMenu_itemsInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput | Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput[];
    createMany?: Prisma.menu_item_allergensCreateManyMenu_itemsInputEnvelope;
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
};
export type menu_item_allergensUpdateManyWithoutMenu_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput> | Prisma.menu_item_allergensCreateWithoutMenu_itemsInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput | Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput[];
    upsert?: Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutMenu_itemsInput | Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutMenu_itemsInput[];
    createMany?: Prisma.menu_item_allergensCreateManyMenu_itemsInputEnvelope;
    set?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    disconnect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    delete?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    update?: Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutMenu_itemsInput | Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutMenu_itemsInput[];
    updateMany?: Prisma.menu_item_allergensUpdateManyWithWhereWithoutMenu_itemsInput | Prisma.menu_item_allergensUpdateManyWithWhereWithoutMenu_itemsInput[];
    deleteMany?: Prisma.menu_item_allergensScalarWhereInput | Prisma.menu_item_allergensScalarWhereInput[];
};
export type menu_item_allergensUncheckedUpdateManyWithoutMenu_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput> | Prisma.menu_item_allergensCreateWithoutMenu_itemsInput[] | Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput | Prisma.menu_item_allergensCreateOrConnectWithoutMenu_itemsInput[];
    upsert?: Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutMenu_itemsInput | Prisma.menu_item_allergensUpsertWithWhereUniqueWithoutMenu_itemsInput[];
    createMany?: Prisma.menu_item_allergensCreateManyMenu_itemsInputEnvelope;
    set?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    disconnect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    delete?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    connect?: Prisma.menu_item_allergensWhereUniqueInput | Prisma.menu_item_allergensWhereUniqueInput[];
    update?: Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutMenu_itemsInput | Prisma.menu_item_allergensUpdateWithWhereUniqueWithoutMenu_itemsInput[];
    updateMany?: Prisma.menu_item_allergensUpdateManyWithWhereWithoutMenu_itemsInput | Prisma.menu_item_allergensUpdateManyWithWhereWithoutMenu_itemsInput[];
    deleteMany?: Prisma.menu_item_allergensScalarWhereInput | Prisma.menu_item_allergensScalarWhereInput[];
};
export type menu_item_allergensCreateWithoutAllergensInput = {
    menu_items: Prisma.menu_itemsCreateNestedOneWithoutMenu_item_allergensInput;
};
export type menu_item_allergensUncheckedCreateWithoutAllergensInput = {
    menu_item_id: bigint | number;
};
export type menu_item_allergensCreateOrConnectWithoutAllergensInput = {
    where: Prisma.menu_item_allergensWhereUniqueInput;
    create: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput>;
};
export type menu_item_allergensCreateManyAllergensInputEnvelope = {
    data: Prisma.menu_item_allergensCreateManyAllergensInput | Prisma.menu_item_allergensCreateManyAllergensInput[];
    skipDuplicates?: boolean;
};
export type menu_item_allergensUpsertWithWhereUniqueWithoutAllergensInput = {
    where: Prisma.menu_item_allergensWhereUniqueInput;
    update: Prisma.XOR<Prisma.menu_item_allergensUpdateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedUpdateWithoutAllergensInput>;
    create: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedCreateWithoutAllergensInput>;
};
export type menu_item_allergensUpdateWithWhereUniqueWithoutAllergensInput = {
    where: Prisma.menu_item_allergensWhereUniqueInput;
    data: Prisma.XOR<Prisma.menu_item_allergensUpdateWithoutAllergensInput, Prisma.menu_item_allergensUncheckedUpdateWithoutAllergensInput>;
};
export type menu_item_allergensUpdateManyWithWhereWithoutAllergensInput = {
    where: Prisma.menu_item_allergensScalarWhereInput;
    data: Prisma.XOR<Prisma.menu_item_allergensUpdateManyMutationInput, Prisma.menu_item_allergensUncheckedUpdateManyWithoutAllergensInput>;
};
export type menu_item_allergensScalarWhereInput = {
    AND?: Prisma.menu_item_allergensScalarWhereInput | Prisma.menu_item_allergensScalarWhereInput[];
    OR?: Prisma.menu_item_allergensScalarWhereInput[];
    NOT?: Prisma.menu_item_allergensScalarWhereInput | Prisma.menu_item_allergensScalarWhereInput[];
    menu_item_id?: Prisma.BigIntFilter<"menu_item_allergens"> | bigint | number;
    allergen_id?: Prisma.BigIntFilter<"menu_item_allergens"> | bigint | number;
};
export type menu_item_allergensCreateWithoutMenu_itemsInput = {
    allergens: Prisma.allergensCreateNestedOneWithoutMenu_item_allergensInput;
};
export type menu_item_allergensUncheckedCreateWithoutMenu_itemsInput = {
    allergen_id: bigint | number;
};
export type menu_item_allergensCreateOrConnectWithoutMenu_itemsInput = {
    where: Prisma.menu_item_allergensWhereUniqueInput;
    create: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput>;
};
export type menu_item_allergensCreateManyMenu_itemsInputEnvelope = {
    data: Prisma.menu_item_allergensCreateManyMenu_itemsInput | Prisma.menu_item_allergensCreateManyMenu_itemsInput[];
    skipDuplicates?: boolean;
};
export type menu_item_allergensUpsertWithWhereUniqueWithoutMenu_itemsInput = {
    where: Prisma.menu_item_allergensWhereUniqueInput;
    update: Prisma.XOR<Prisma.menu_item_allergensUpdateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedUpdateWithoutMenu_itemsInput>;
    create: Prisma.XOR<Prisma.menu_item_allergensCreateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedCreateWithoutMenu_itemsInput>;
};
export type menu_item_allergensUpdateWithWhereUniqueWithoutMenu_itemsInput = {
    where: Prisma.menu_item_allergensWhereUniqueInput;
    data: Prisma.XOR<Prisma.menu_item_allergensUpdateWithoutMenu_itemsInput, Prisma.menu_item_allergensUncheckedUpdateWithoutMenu_itemsInput>;
};
export type menu_item_allergensUpdateManyWithWhereWithoutMenu_itemsInput = {
    where: Prisma.menu_item_allergensScalarWhereInput;
    data: Prisma.XOR<Prisma.menu_item_allergensUpdateManyMutationInput, Prisma.menu_item_allergensUncheckedUpdateManyWithoutMenu_itemsInput>;
};
export type menu_item_allergensCreateManyAllergensInput = {
    menu_item_id: bigint | number;
};
export type menu_item_allergensUpdateWithoutAllergensInput = {
    menu_items?: Prisma.menu_itemsUpdateOneRequiredWithoutMenu_item_allergensNestedInput;
};
export type menu_item_allergensUncheckedUpdateWithoutAllergensInput = {
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type menu_item_allergensUncheckedUpdateManyWithoutAllergensInput = {
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type menu_item_allergensCreateManyMenu_itemsInput = {
    allergen_id: bigint | number;
};
export type menu_item_allergensUpdateWithoutMenu_itemsInput = {
    allergens?: Prisma.allergensUpdateOneRequiredWithoutMenu_item_allergensNestedInput;
};
export type menu_item_allergensUncheckedUpdateWithoutMenu_itemsInput = {
    allergen_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type menu_item_allergensUncheckedUpdateManyWithoutMenu_itemsInput = {
    allergen_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type menu_item_allergensSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menu_item_id?: boolean;
    allergen_id?: boolean;
    allergens?: boolean | Prisma.allergensDefaultArgs<ExtArgs>;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu_item_allergens"]>;
export type menu_item_allergensSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menu_item_id?: boolean;
    allergen_id?: boolean;
    allergens?: boolean | Prisma.allergensDefaultArgs<ExtArgs>;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu_item_allergens"]>;
export type menu_item_allergensSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    menu_item_id?: boolean;
    allergen_id?: boolean;
    allergens?: boolean | Prisma.allergensDefaultArgs<ExtArgs>;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["menu_item_allergens"]>;
export type menu_item_allergensSelectScalar = {
    menu_item_id?: boolean;
    allergen_id?: boolean;
};
export type menu_item_allergensOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"menu_item_id" | "allergen_id", ExtArgs["result"]["menu_item_allergens"]>;
export type menu_item_allergensInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allergens?: boolean | Prisma.allergensDefaultArgs<ExtArgs>;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
};
export type menu_item_allergensIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allergens?: boolean | Prisma.allergensDefaultArgs<ExtArgs>;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
};
export type menu_item_allergensIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    allergens?: boolean | Prisma.allergensDefaultArgs<ExtArgs>;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
};
export type $menu_item_allergensPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "menu_item_allergens";
    objects: {
        allergens: Prisma.$allergensPayload<ExtArgs>;
        menu_items: Prisma.$menu_itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        menu_item_id: bigint;
        allergen_id: bigint;
    }, ExtArgs["result"]["menu_item_allergens"]>;
    composites: {};
};
export type menu_item_allergensGetPayload<S extends boolean | null | undefined | menu_item_allergensDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload, S>;
export type menu_item_allergensCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<menu_item_allergensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Menu_item_allergensCountAggregateInputType | true;
};
export interface menu_item_allergensDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['menu_item_allergens'];
        meta: {
            name: 'menu_item_allergens';
        };
    };
    findUnique<T extends menu_item_allergensFindUniqueArgs>(args: Prisma.SelectSubset<T, menu_item_allergensFindUniqueArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends menu_item_allergensFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, menu_item_allergensFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends menu_item_allergensFindFirstArgs>(args?: Prisma.SelectSubset<T, menu_item_allergensFindFirstArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends menu_item_allergensFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, menu_item_allergensFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends menu_item_allergensFindManyArgs>(args?: Prisma.SelectSubset<T, menu_item_allergensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends menu_item_allergensCreateArgs>(args: Prisma.SelectSubset<T, menu_item_allergensCreateArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends menu_item_allergensCreateManyArgs>(args?: Prisma.SelectSubset<T, menu_item_allergensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends menu_item_allergensCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, menu_item_allergensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends menu_item_allergensDeleteArgs>(args: Prisma.SelectSubset<T, menu_item_allergensDeleteArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends menu_item_allergensUpdateArgs>(args: Prisma.SelectSubset<T, menu_item_allergensUpdateArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends menu_item_allergensDeleteManyArgs>(args?: Prisma.SelectSubset<T, menu_item_allergensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends menu_item_allergensUpdateManyArgs>(args: Prisma.SelectSubset<T, menu_item_allergensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends menu_item_allergensUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, menu_item_allergensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends menu_item_allergensUpsertArgs>(args: Prisma.SelectSubset<T, menu_item_allergensUpsertArgs<ExtArgs>>): Prisma.Prisma__menu_item_allergensClient<runtime.Types.Result.GetResult<Prisma.$menu_item_allergensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends menu_item_allergensCountArgs>(args?: Prisma.Subset<T, menu_item_allergensCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Menu_item_allergensCountAggregateOutputType> : number>;
    aggregate<T extends Menu_item_allergensAggregateArgs>(args: Prisma.Subset<T, Menu_item_allergensAggregateArgs>): Prisma.PrismaPromise<GetMenu_item_allergensAggregateType<T>>;
    groupBy<T extends menu_item_allergensGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: menu_item_allergensGroupByArgs['orderBy'];
    } : {
        orderBy?: menu_item_allergensGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, menu_item_allergensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_item_allergensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: menu_item_allergensFieldRefs;
}
export interface Prisma__menu_item_allergensClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    allergens<T extends Prisma.allergensDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.allergensDefaultArgs<ExtArgs>>): Prisma.Prisma__allergensClient<runtime.Types.Result.GetResult<Prisma.$allergensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    menu_items<T extends Prisma.menu_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.menu_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__menu_itemsClient<runtime.Types.Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface menu_item_allergensFieldRefs {
    readonly menu_item_id: Prisma.FieldRef<"menu_item_allergens", 'BigInt'>;
    readonly allergen_id: Prisma.FieldRef<"menu_item_allergens", 'BigInt'>;
}
export type menu_item_allergensFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
    where: Prisma.menu_item_allergensWhereUniqueInput;
};
export type menu_item_allergensFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
    where: Prisma.menu_item_allergensWhereUniqueInput;
};
export type menu_item_allergensFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type menu_item_allergensFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type menu_item_allergensFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type menu_item_allergensCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.menu_item_allergensCreateInput, Prisma.menu_item_allergensUncheckedCreateInput>;
};
export type menu_item_allergensCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.menu_item_allergensCreateManyInput | Prisma.menu_item_allergensCreateManyInput[];
    skipDuplicates?: boolean;
};
export type menu_item_allergensCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    data: Prisma.menu_item_allergensCreateManyInput | Prisma.menu_item_allergensCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.menu_item_allergensIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type menu_item_allergensUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.menu_item_allergensUpdateInput, Prisma.menu_item_allergensUncheckedUpdateInput>;
    where: Prisma.menu_item_allergensWhereUniqueInput;
};
export type menu_item_allergensUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.menu_item_allergensUpdateManyMutationInput, Prisma.menu_item_allergensUncheckedUpdateManyInput>;
    where?: Prisma.menu_item_allergensWhereInput;
    limit?: number;
};
export type menu_item_allergensUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.menu_item_allergensUpdateManyMutationInput, Prisma.menu_item_allergensUncheckedUpdateManyInput>;
    where?: Prisma.menu_item_allergensWhereInput;
    limit?: number;
    include?: Prisma.menu_item_allergensIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type menu_item_allergensUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
    where: Prisma.menu_item_allergensWhereUniqueInput;
    create: Prisma.XOR<Prisma.menu_item_allergensCreateInput, Prisma.menu_item_allergensUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.menu_item_allergensUpdateInput, Prisma.menu_item_allergensUncheckedUpdateInput>;
};
export type menu_item_allergensDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
    where: Prisma.menu_item_allergensWhereUniqueInput;
};
export type menu_item_allergensDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.menu_item_allergensWhereInput;
    limit?: number;
};
export type menu_item_allergensDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.menu_item_allergensSelect<ExtArgs> | null;
    omit?: Prisma.menu_item_allergensOmit<ExtArgs> | null;
    include?: Prisma.menu_item_allergensInclude<ExtArgs> | null;
};
