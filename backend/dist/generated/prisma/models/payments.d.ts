import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type paymentsModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentsPayload>;
export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type PaymentsAvgAggregateOutputType = {
    id: number | null;
    order_id: number | null;
    amount: runtime.Decimal | null;
    version: number | null;
};
export type PaymentsSumAggregateOutputType = {
    id: bigint | null;
    order_id: bigint | null;
    amount: runtime.Decimal | null;
    version: bigint | null;
};
export type PaymentsMinAggregateOutputType = {
    id: bigint | null;
    order_id: bigint | null;
    amount: runtime.Decimal | null;
    payment_method: string | null;
    status: string | null;
    transaction_id: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
};
export type PaymentsMaxAggregateOutputType = {
    id: bigint | null;
    order_id: bigint | null;
    amount: runtime.Decimal | null;
    payment_method: string | null;
    status: string | null;
    transaction_id: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
};
export type PaymentsCountAggregateOutputType = {
    id: number;
    order_id: number;
    amount: number;
    payment_method: number;
    status: number;
    transaction_id: number;
    created_by: number;
    created_at: number;
    updated_by: number;
    updated_at: number;
    version: number;
    _all: number;
};
export type PaymentsAvgAggregateInputType = {
    id?: true;
    order_id?: true;
    amount?: true;
    version?: true;
};
export type PaymentsSumAggregateInputType = {
    id?: true;
    order_id?: true;
    amount?: true;
    version?: true;
};
export type PaymentsMinAggregateInputType = {
    id?: true;
    order_id?: true;
    amount?: true;
    payment_method?: true;
    status?: true;
    transaction_id?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
};
export type PaymentsMaxAggregateInputType = {
    id?: true;
    order_id?: true;
    amount?: true;
    payment_method?: true;
    status?: true;
    transaction_id?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
};
export type PaymentsCountAggregateInputType = {
    id?: true;
    order_id?: true;
    amount?: true;
    payment_method?: true;
    status?: true;
    transaction_id?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
    _all?: true;
};
export type PaymentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentsCountAggregateInputType;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayments[P]> : Prisma.GetScalarType<T[P], AggregatePayments[P]>;
};
export type paymentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithAggregationInput | Prisma.paymentsOrderByWithAggregationInput[];
    by: Prisma.PaymentsScalarFieldEnum[] | Prisma.PaymentsScalarFieldEnum;
    having?: Prisma.paymentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentsCountAggregateInputType | true;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type PaymentsGroupByOutputType = {
    id: bigint;
    order_id: bigint;
    amount: runtime.Decimal;
    payment_method: string;
    status: string;
    transaction_id: string | null;
    created_by: string | null;
    created_at: Date;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]>;
}>>;
export type paymentsWhereInput = {
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFilter<"payments"> | string;
    status?: Prisma.StringFilter<"payments"> | string;
    transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    created_by?: Prisma.StringNullableFilter<"payments"> | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"payments"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"payments"> | bigint | number | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
};
export type paymentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    orders?: Prisma.ordersOrderByWithRelationInput;
};
export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    order_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFilter<"payments"> | string;
    status?: Prisma.StringFilter<"payments"> | string;
    transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    created_by?: Prisma.StringNullableFilter<"payments"> | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"payments"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"payments"> | bigint | number | null;
    orders?: Prisma.XOR<Prisma.OrdersScalarRelationFilter, Prisma.ordersWhereInput>;
}, "id">;
export type paymentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.paymentsCountOrderByAggregateInput;
    _avg?: Prisma.paymentsAvgOrderByAggregateInput;
    _max?: Prisma.paymentsMaxOrderByAggregateInput;
    _min?: Prisma.paymentsMinOrderByAggregateInput;
    _sum?: Prisma.paymentsSumOrderByAggregateInput;
};
export type paymentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"payments"> | bigint | number;
    order_id?: Prisma.BigIntWithAggregatesFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalWithAggregatesFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringWithAggregatesFilter<"payments"> | string;
    status?: Prisma.StringWithAggregatesFilter<"payments"> | string;
    transaction_id?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    created_by?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
    updated_by?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null;
    version?: Prisma.BigIntNullableWithAggregatesFilter<"payments"> | bigint | number | null;
};
export type paymentsCreateInput = {
    id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: string;
    status: string;
    transaction_id?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
    orders: Prisma.ordersCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateInput = {
    id?: bigint | number;
    order_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: string;
    status: string;
    transaction_id?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type paymentsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    orders?: Prisma.ordersUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type paymentsCreateManyInput = {
    id?: bigint | number;
    order_id: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: string;
    status: string;
    transaction_id?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type paymentsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type paymentsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    order_id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type PaymentsListRelationFilter = {
    every?: Prisma.paymentsWhereInput;
    some?: Prisma.paymentsWhereInput;
    none?: Prisma.paymentsWhereInput;
};
export type paymentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type paymentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type paymentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type paymentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type paymentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type paymentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type paymentsCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput | Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput> | Prisma.paymentsCreateWithoutOrdersInput[] | Prisma.paymentsUncheckedCreateWithoutOrdersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrdersInput | Prisma.paymentsCreateOrConnectWithoutOrdersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrdersInput[];
    createMany?: Prisma.paymentsCreateManyOrdersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrdersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput | Prisma.paymentsUpdateManyWithWhereWithoutOrdersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateWithoutOrdersInput = {
    id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: string;
    status: string;
    transaction_id?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type paymentsUncheckedCreateWithoutOrdersInput = {
    id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: string;
    status: string;
    transaction_id?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type paymentsCreateOrConnectWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput>;
};
export type paymentsCreateManyOrdersInputEnvelope = {
    data: Prisma.paymentsCreateManyOrdersInput | Prisma.paymentsCreateManyOrdersInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutOrdersInput, Prisma.paymentsUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrdersInput, Prisma.paymentsUncheckedCreateWithoutOrdersInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutOrdersInput, Prisma.paymentsUncheckedUpdateWithoutOrdersInput>;
};
export type paymentsUpdateManyWithWhereWithoutOrdersInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutOrdersInput>;
};
export type paymentsScalarWhereInput = {
    AND?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    OR?: Prisma.paymentsScalarWhereInput[];
    NOT?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    order_id?: Prisma.BigIntFilter<"payments"> | bigint | number;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFilter<"payments"> | string;
    status?: Prisma.StringFilter<"payments"> | string;
    transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    created_by?: Prisma.StringNullableFilter<"payments"> | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"payments"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"payments"> | bigint | number | null;
};
export type paymentsCreateManyOrdersInput = {
    id?: bigint | number;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: string;
    status: string;
    transaction_id?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type paymentsUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type paymentsUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type paymentsUncheckedUpdateManyWithoutOrdersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type paymentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    status?: boolean;
    transaction_id?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    status?: boolean;
    transaction_id?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    status?: boolean;
    transaction_id?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectScalar = {
    id?: boolean;
    order_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    status?: boolean;
    transaction_id?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
};
export type paymentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order_id" | "amount" | "payment_method" | "status" | "transaction_id" | "created_by" | "created_at" | "updated_by" | "updated_at" | "version", ExtArgs["result"]["payments"]>;
export type paymentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type paymentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.ordersDefaultArgs<ExtArgs>;
};
export type $paymentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payments";
    objects: {
        orders: Prisma.$ordersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        order_id: bigint;
        amount: runtime.Decimal;
        payment_method: string;
        status: string;
        transaction_id: string | null;
        created_by: string | null;
        created_at: Date;
        updated_by: string | null;
        updated_at: Date | null;
        version: bigint | null;
    }, ExtArgs["result"]["payments"]>;
    composites: {};
};
export type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentsPayload, S>;
export type paymentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentsCountAggregateInputType | true;
};
export interface paymentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payments'];
        meta: {
            name: 'payments';
        };
    };
    findUnique<T extends paymentsFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends paymentsFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends paymentsFindManyArgs>(args?: Prisma.SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends paymentsCreateArgs>(args: Prisma.SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends paymentsCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends paymentsDeleteArgs>(args: Prisma.SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends paymentsUpdateArgs>(args: Prisma.SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends paymentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends paymentsUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends paymentsUpsertArgs>(args: Prisma.SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends paymentsCountArgs>(args?: Prisma.Subset<T, paymentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentsCountAggregateOutputType> : number>;
    aggregate<T extends PaymentsAggregateArgs>(args: Prisma.Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>;
    groupBy<T extends paymentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentsGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: paymentsFieldRefs;
}
export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.ordersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ordersDefaultArgs<ExtArgs>>): Prisma.Prisma__ordersClient<runtime.Types.Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface paymentsFieldRefs {
    readonly id: Prisma.FieldRef<"payments", 'BigInt'>;
    readonly order_id: Prisma.FieldRef<"payments", 'BigInt'>;
    readonly amount: Prisma.FieldRef<"payments", 'Decimal'>;
    readonly payment_method: Prisma.FieldRef<"payments", 'String'>;
    readonly status: Prisma.FieldRef<"payments", 'String'>;
    readonly transaction_id: Prisma.FieldRef<"payments", 'String'>;
    readonly created_by: Prisma.FieldRef<"payments", 'String'>;
    readonly created_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly updated_by: Prisma.FieldRef<"payments", 'String'>;
    readonly updated_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly version: Prisma.FieldRef<"payments", 'BigInt'>;
}
export type paymentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type paymentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
};
export type paymentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type paymentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.paymentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
    include?: Prisma.paymentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
};
export type paymentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
};
