import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type order_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$order_itemsPayload>;
export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null;
    _avg: Order_itemsAvgAggregateOutputType | null;
    _sum: Order_itemsSumAggregateOutputType | null;
    _min: Order_itemsMinAggregateOutputType | null;
    _max: Order_itemsMaxAggregateOutputType | null;
};
export type Order_itemsAvgAggregateOutputType = {
    id: number | null;
    order_id: number | null;
    menu_item_id: number | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Order_itemsSumAggregateOutputType = {
    id: bigint | null;
    order_id: bigint | null;
    menu_item_id: bigint | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Order_itemsMinAggregateOutputType = {
    id: bigint | null;
    order_id: bigint | null;
    menu_item_id: bigint | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
    special_request: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Order_itemsMaxAggregateOutputType = {
    id: bigint | null;
    order_id: bigint | null;
    menu_item_id: bigint | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
    special_request: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Order_itemsCountAggregateOutputType = {
    id: number;
    order_id: number;
    menu_item_id: number;
    quantity: number;
    unit_price: number;
    special_request: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Order_itemsAvgAggregateInputType = {
    id?: true;
    order_id?: true;
    menu_item_id?: true;
    quantity?: true;
    unit_price?: true;
};
export type Order_itemsSumAggregateInputType = {
    id?: true;
    order_id?: true;
    menu_item_id?: true;
    quantity?: true;
    unit_price?: true;
};
export type Order_itemsMinAggregateInputType = {
    id?: true;
    order_id?: true;
    menu_item_id?: true;
    quantity?: true;
    unit_price?: true;
    special_request?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Order_itemsMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    menu_item_id?: true;
    quantity?: true;
    unit_price?: true;
    special_request?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
};
export type Order_itemsCountAggregateInputType = {
    id?: true;
    order_id?: true;
    menu_item_id?: true;
    quantity?: true;
    unit_price?: true;
    special_request?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Order_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Order_itemsCountAggregateInputType;
    _avg?: Order_itemsAvgAggregateInputType;
    _sum?: Order_itemsSumAggregateInputType;
    _min?: Order_itemsMinAggregateInputType;
    _max?: Order_itemsMaxAggregateInputType;
};
export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder_items[P]> : Prisma.GetScalarType<T[P], AggregateOrder_items[P]>;
};
export type order_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithAggregationInput | Prisma.order_itemsOrderByWithAggregationInput[];
    by: Prisma.Order_itemsScalarFieldEnum[] | Prisma.Order_itemsScalarFieldEnum;
    having?: Prisma.order_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Order_itemsCountAggregateInputType | true;
    _avg?: Order_itemsAvgAggregateInputType;
    _sum?: Order_itemsSumAggregateInputType;
    _min?: Order_itemsMinAggregateInputType;
    _max?: Order_itemsMaxAggregateInputType;
};
export type Order_itemsGroupByOutputType = {
    id: bigint;
    order_id: bigint;
    menu_item_id: bigint;
    quantity: number;
    unit_price: runtime.Decimal;
    special_request: string | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: Order_itemsCountAggregateOutputType | null;
    _avg: Order_itemsAvgAggregateOutputType | null;
    _sum: Order_itemsSumAggregateOutputType | null;
    _min: Order_itemsMinAggregateOutputType | null;
    _max: Order_itemsMaxAggregateOutputType | null;
};
export type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Order_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Order_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Order_itemsGroupByOutputType[P]>;
}>>;
export type order_itemsWhereInput = {
    AND?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    OR?: Prisma.order_itemsWhereInput[];
    NOT?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    menu_item_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    quantity?: Prisma.IntFilter<"order_items"> | number;
    unit_price?: Prisma.DecimalFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.StringNullableFilter<"order_items"> | string | null;
    status?: Prisma.StringFilter<"order_items"> | string;
    created_at?: Prisma.DateTimeFilter<"order_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"order_items"> | Date | string;
    menu_items?: Prisma.XOR<Prisma.Menu_itemsScalarRelationFilter, Prisma.menu_itemsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
};
export type order_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    menu_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    special_request?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    menu_items?: Prisma.menu_itemsOrderByWithRelationInput;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    OR?: Prisma.order_itemsWhereInput[];
    NOT?: Prisma.order_itemsWhereInput | Prisma.order_itemsWhereInput[];
    order_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    menu_item_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    quantity?: Prisma.IntFilter<"order_items"> | number;
    unit_price?: Prisma.DecimalFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.StringNullableFilter<"order_items"> | string | null;
    status?: Prisma.StringFilter<"order_items"> | string;
    created_at?: Prisma.DateTimeFilter<"order_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"order_items"> | Date | string;
    menu_items?: Prisma.XOR<Prisma.Menu_itemsScalarRelationFilter, Prisma.menu_itemsWhereInput>;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
}, "id">;
export type order_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    menu_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    special_request?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.order_itemsCountOrderByAggregateInput;
    _avg?: Prisma.order_itemsAvgOrderByAggregateInput;
    _max?: Prisma.order_itemsMaxOrderByAggregateInput;
    _min?: Prisma.order_itemsMinOrderByAggregateInput;
    _sum?: Prisma.order_itemsSumOrderByAggregateInput;
};
export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.order_itemsScalarWhereWithAggregatesInput | Prisma.order_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.order_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.order_itemsScalarWhereWithAggregatesInput | Prisma.order_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"order_items"> | bigint | number;
    order_id?: Prisma.BigIntWithAggregatesFilter<"order_items"> | bigint | number;
    menu_item_id?: Prisma.BigIntWithAggregatesFilter<"order_items"> | bigint | number;
    quantity?: Prisma.IntWithAggregatesFilter<"order_items"> | number;
    unit_price?: Prisma.DecimalWithAggregatesFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.StringNullableWithAggregatesFilter<"order_items"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"order_items"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"order_items"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"order_items"> | Date | string;
};
export type order_itemsCreateInput = {
    id?: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    menu_items: Prisma.menu_itemsCreateNestedOneWithoutOrder_itemsInput;
    orders: Prisma.ordersCreateNestedOneWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateInput = {
    id?: bigint | number;
    order_id: bigint | number;
    menu_item_id: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type order_itemsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menu_items?: Prisma.menu_itemsUpdateOneRequiredWithoutOrder_itemsNestedInput;
    orders?: Prisma.ordersUpdateOneRequiredWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_itemsCreateManyInput = {
    id?: bigint | number;
    order_id: bigint | number;
    menu_item_id: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type order_itemsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_itemsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Order_itemsListRelationFilter = {
    every?: Prisma.order_itemsWhereInput;
    some?: Prisma.order_itemsWhereInput;
    none?: Prisma.order_itemsWhereInput;
};
export type order_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type order_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    menu_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    special_request?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type order_itemsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    menu_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type order_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    menu_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    special_request?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type order_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    menu_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    special_request?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type order_itemsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    menu_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type order_itemsCreateNestedManyWithoutMenu_itemsInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput> | Prisma.order_itemsCreateWithoutMenu_itemsInput[] | Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput | Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput[];
    createMany?: Prisma.order_itemsCreateManyMenu_itemsInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUncheckedCreateNestedManyWithoutMenu_itemsInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput> | Prisma.order_itemsCreateWithoutMenu_itemsInput[] | Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput | Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput[];
    createMany?: Prisma.order_itemsCreateManyMenu_itemsInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUpdateManyWithoutMenu_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput> | Prisma.order_itemsCreateWithoutMenu_itemsInput[] | Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput | Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput[];
    createMany?: Prisma.order_itemsCreateManyMenu_itemsInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutMenu_itemsInput | Prisma.order_itemsUpdateManyWithWhereWithoutMenu_itemsInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsUncheckedUpdateManyWithoutMenu_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput> | Prisma.order_itemsCreateWithoutMenu_itemsInput[] | Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput | Prisma.order_itemsCreateOrConnectWithoutMenu_itemsInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput[];
    createMany?: Prisma.order_itemsCreateManyMenu_itemsInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutMenu_itemsInput | Prisma.order_itemsUpdateManyWithWhereWithoutMenu_itemsInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
};
export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput> | Prisma.order_itemsCreateWithoutOrdersInput[] | Prisma.order_itemsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.order_itemsCreateOrConnectWithoutOrdersInput | Prisma.order_itemsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.order_itemsCreateManyOrdersInputEnvelope;
    set?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    disconnect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    delete?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    connect?: Prisma.order_itemsWhereUniqueInput | Prisma.order_itemsWhereUniqueInput[];
    update?: Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput | Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
};
export type order_itemsCreateWithoutMenu_itemsInput = {
    id?: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    orders: Prisma.ordersCreateNestedOneWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateWithoutMenu_itemsInput = {
    id?: bigint | number;
    order_id: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type order_itemsCreateOrConnectWithoutMenu_itemsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput>;
};
export type order_itemsCreateManyMenu_itemsInputEnvelope = {
    data: Prisma.order_itemsCreateManyMenu_itemsInput | Prisma.order_itemsCreateManyMenu_itemsInput[];
    skipDuplicates?: boolean;
};
export type order_itemsUpsertWithWhereUniqueWithoutMenu_itemsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_itemsUpdateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedUpdateWithoutMenu_itemsInput>;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedCreateWithoutMenu_itemsInput>;
};
export type order_itemsUpdateWithWhereUniqueWithoutMenu_itemsInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateWithoutMenu_itemsInput, Prisma.order_itemsUncheckedUpdateWithoutMenu_itemsInput>;
};
export type order_itemsUpdateManyWithWhereWithoutMenu_itemsInput = {
    where: Prisma.order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyWithoutMenu_itemsInput>;
};
export type order_itemsScalarWhereInput = {
    AND?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
    OR?: Prisma.order_itemsScalarWhereInput[];
    NOT?: Prisma.order_itemsScalarWhereInput | Prisma.order_itemsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    menu_item_id?: Prisma.BigIntFilter<"order_items"> | bigint | number;
    quantity?: Prisma.IntFilter<"order_items"> | number;
    unit_price?: Prisma.DecimalFilter<"order_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.StringNullableFilter<"order_items"> | string | null;
    status?: Prisma.StringFilter<"order_items"> | string;
    created_at?: Prisma.DateTimeFilter<"order_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"order_items"> | Date | string;
};
export type order_itemsCreateWithoutOrdersInput = {
    id?: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    menu_items: Prisma.menu_itemsCreateNestedOneWithoutOrder_itemsInput;
};
export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: bigint | number;
    menu_item_id: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput>;
};
export type order_itemsCreateManyOrdersInputEnvelope = {
    data: Prisma.order_itemsCreateManyOrdersInput | Prisma.order_itemsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.order_itemsUpdateWithoutOrdersInput, Prisma.order_itemsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.order_itemsCreateWithoutOrdersInput, Prisma.order_itemsUncheckedCreateWithoutOrdersInput>;
};
export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.order_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateWithoutOrdersInput, Prisma.order_itemsUncheckedUpdateWithoutOrdersInput>;
};
export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.order_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyWithoutOrdersInput>;
};
export type order_itemsCreateManyMenu_itemsInput = {
    id?: bigint | number;
    order_id: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type order_itemsUpdateWithoutMenu_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.ordersUpdateOneRequiredWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateWithoutMenu_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_itemsUncheckedUpdateManyWithoutMenu_itemsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_itemsCreateManyOrdersInput = {
    id?: bigint | number;
    menu_item_id: bigint | number;
    quantity: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type order_itemsUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    menu_items?: Prisma.menu_itemsUpdateOneRequiredWithoutOrder_itemsNestedInput;
};
export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    menu_item_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    special_request?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type order_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    menu_item_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    special_request?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_items"]>;
export type order_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    menu_item_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    special_request?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_items"]>;
export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    menu_item_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    special_request?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order_items"]>;
export type order_itemsSelectScalar = {
    id?: boolean;
    order_id?: boolean;
    menu_item_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    special_request?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type order_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_id" | "menu_item_id" | "quantity" | "unit_price" | "special_request" | "status" | "created_at" | "updated_at", ExtArgs["result"]["order_items"]>;
export type order_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    menu_items?: boolean | Prisma.menu_itemsDefaultArgs<ExtArgs>;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $order_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order_items";
    objects: {
        menu_items: Prisma.$menu_itemsPayload<ExtArgs>;
        orders: Prisma.$ordersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        order_id: bigint;
        menu_item_id: bigint;
        quantity: number;
        unit_price: runtime.Decimal;
        special_request: string | null;
        status: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["order_items"]>;
    composites: {};
};
export type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$order_itemsPayload, S>;
export type order_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Order_itemsCountAggregateInputType | true;
};
export interface order_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order_items'];
        meta: {
            name: 'order_items';
        };
    };
    findUnique<T extends order_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends order_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends order_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends order_itemsCreateArgs>(args: Prisma.SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends order_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends order_itemsDeleteArgs>(args: Prisma.SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends order_itemsUpdateArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends order_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends order_itemsUpsertArgs>(args: Prisma.SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__order_itemsClient<runtime.Types.Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends order_itemsCountArgs>(args?: Prisma.Subset<T, order_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Order_itemsCountAggregateOutputType> : number>;
    aggregate<T extends Order_itemsAggregateArgs>(args: Prisma.Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>;
    groupBy<T extends order_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: order_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: order_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: order_itemsFieldRefs;
}
export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menu_items<T extends Prisma.menu_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.menu_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__menu_itemsClient<runtime.Types.Result.GetResult<Prisma.$menu_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface order_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"order_items", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"order_items", 'BigInt'>;
    readonly menu_item_id: Prisma.FieldRef<"order_items", 'BigInt'>;
    readonly quantity: Prisma.FieldRef<"order_items", 'Int'>;
    readonly unit_price: Prisma.FieldRef<"order_items", 'Decimal'>;
    readonly special_request: Prisma.FieldRef<"order_items", 'String'>;
    readonly status: Prisma.FieldRef<"order_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"order_items", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"order_items", 'DateTime'>;
}
export type order_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type order_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type order_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where?: Prisma.order_itemsWhereInput;
    orderBy?: Prisma.order_itemsOrderByWithRelationInput | Prisma.order_itemsOrderByWithRelationInput[];
    cursor?: Prisma.order_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Order_itemsScalarFieldEnum | Prisma.Order_itemsScalarFieldEnum[];
};
export type order_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_itemsCreateInput, Prisma.order_itemsUncheckedCreateInput>;
};
export type order_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.order_itemsCreateManyInput | Prisma.order_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type order_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    data: Prisma.order_itemsCreateManyInput | Prisma.order_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.order_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type order_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_itemsUpdateInput, Prisma.order_itemsUncheckedUpdateInput>;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyInput>;
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
};
export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.order_itemsUpdateManyMutationInput, Prisma.order_itemsUncheckedUpdateManyInput>;
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
    include?: Prisma.order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type order_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.order_itemsCreateInput, Prisma.order_itemsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.order_itemsUpdateInput, Prisma.order_itemsUncheckedUpdateInput>;
};
export type order_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
    where: Prisma.order_itemsWhereUniqueInput;
};
export type order_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.order_itemsWhereInput;
    limit?: number;
};
export type order_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.order_itemsSelect<ExtArgs> | null;
    omit?: Prisma.order_itemsOmit<ExtArgs> | null;
    include?: Prisma.order_itemsInclude<ExtArgs> | null;
};
