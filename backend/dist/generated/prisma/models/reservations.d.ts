import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type reservationsModel = runtime.Types.Result.DefaultSelection<Prisma.$reservationsPayload>;
export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null;
    _avg: ReservationsAvgAggregateOutputType | null;
    _sum: ReservationsSumAggregateOutputType | null;
    _min: ReservationsMinAggregateOutputType | null;
    _max: ReservationsMaxAggregateOutputType | null;
};
export type ReservationsAvgAggregateOutputType = {
    id: number | null;
    table_id: number | null;
    party_size: number | null;
    version: number | null;
};
export type ReservationsSumAggregateOutputType = {
    id: bigint | null;
    table_id: bigint | null;
    party_size: number | null;
    version: bigint | null;
};
export type ReservationsMinAggregateOutputType = {
    id: bigint | null;
    customer_name: string | null;
    customer_phone: string | null;
    table_id: bigint | null;
    reservation_time: Date | null;
    party_size: number | null;
    status: string | null;
    special_requests: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
};
export type ReservationsMaxAggregateOutputType = {
    id: bigint | null;
    customer_name: string | null;
    customer_phone: string | null;
    table_id: bigint | null;
    reservation_time: Date | null;
    party_size: number | null;
    status: string | null;
    special_requests: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
};
export type ReservationsCountAggregateOutputType = {
    id: number;
    customer_name: number;
    customer_phone: number;
    table_id: number;
    reservation_time: number;
    party_size: number;
    status: number;
    special_requests: number;
    created_by: number;
    created_at: number;
    updated_by: number;
    updated_at: number;
    version: number;
    _all: number;
};
export type ReservationsAvgAggregateInputType = {
    id?: true;
    table_id?: true;
    party_size?: true;
    version?: true;
};
export type ReservationsSumAggregateInputType = {
    id?: true;
    table_id?: true;
    party_size?: true;
    version?: true;
};
export type ReservationsMinAggregateInputType = {
    id?: true;
    customer_name?: true;
    customer_phone?: true;
    table_id?: true;
    reservation_time?: true;
    party_size?: true;
    status?: true;
    special_requests?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
};
export type ReservationsMaxAggregateInputType = {
    id?: true;
    customer_name?: true;
    customer_phone?: true;
    table_id?: true;
    reservation_time?: true;
    party_size?: true;
    status?: true;
    special_requests?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
};
export type ReservationsCountAggregateInputType = {
    id?: true;
    customer_name?: true;
    customer_phone?: true;
    table_id?: true;
    reservation_time?: true;
    party_size?: true;
    status?: true;
    special_requests?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
    _all?: true;
};
export type ReservationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reservationsWhereInput;
    orderBy?: Prisma.reservationsOrderByWithRelationInput | Prisma.reservationsOrderByWithRelationInput[];
    cursor?: Prisma.reservationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReservationsCountAggregateInputType;
    _avg?: ReservationsAvgAggregateInputType;
    _sum?: ReservationsSumAggregateInputType;
    _min?: ReservationsMinAggregateInputType;
    _max?: ReservationsMaxAggregateInputType;
};
export type GetReservationsAggregateType<T extends ReservationsAggregateArgs> = {
    [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReservations[P]> : Prisma.GetScalarType<T[P], AggregateReservations[P]>;
};
export type reservationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reservationsWhereInput;
    orderBy?: Prisma.reservationsOrderByWithAggregationInput | Prisma.reservationsOrderByWithAggregationInput[];
    by: Prisma.ReservationsScalarFieldEnum[] | Prisma.ReservationsScalarFieldEnum;
    having?: Prisma.reservationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReservationsCountAggregateInputType | true;
    _avg?: ReservationsAvgAggregateInputType;
    _sum?: ReservationsSumAggregateInputType;
    _min?: ReservationsMinAggregateInputType;
    _max?: ReservationsMaxAggregateInputType;
};
export type ReservationsGroupByOutputType = {
    id: bigint;
    customer_name: string;
    customer_phone: string;
    table_id: bigint | null;
    reservation_time: Date;
    party_size: number;
    status: string;
    special_requests: string | null;
    created_by: string | null;
    created_at: Date;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
    _count: ReservationsCountAggregateOutputType | null;
    _avg: ReservationsAvgAggregateOutputType | null;
    _sum: ReservationsSumAggregateOutputType | null;
    _min: ReservationsMinAggregateOutputType | null;
    _max: ReservationsMaxAggregateOutputType | null;
};
export type GetReservationsGroupByPayload<T extends reservationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReservationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReservationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReservationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReservationsGroupByOutputType[P]>;
}>>;
export type reservationsWhereInput = {
    AND?: Prisma.reservationsWhereInput | Prisma.reservationsWhereInput[];
    OR?: Prisma.reservationsWhereInput[];
    NOT?: Prisma.reservationsWhereInput | Prisma.reservationsWhereInput[];
    id?: Prisma.BigIntFilter<"reservations"> | bigint | number;
    customer_name?: Prisma.StringFilter<"reservations"> | string;
    customer_phone?: Prisma.StringFilter<"reservations"> | string;
    table_id?: Prisma.BigIntNullableFilter<"reservations"> | bigint | number | null;
    reservation_time?: Prisma.DateTimeFilter<"reservations"> | Date | string;
    party_size?: Prisma.IntFilter<"reservations"> | number;
    status?: Prisma.StringFilter<"reservations"> | string;
    special_requests?: Prisma.StringNullableFilter<"reservations"> | string | null;
    created_by?: Prisma.StringNullableFilter<"reservations"> | string | null;
    created_at?: Prisma.DateTimeFilter<"reservations"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"reservations"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"reservations"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"reservations"> | bigint | number | null;
    restaurant_tables?: Prisma.XOR<Prisma.Restaurant_tablesNullableScalarRelationFilter, Prisma.restaurant_tablesWhereInput> | null;
};
export type reservationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_phone?: Prisma.SortOrder;
    table_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    reservation_time?: Prisma.SortOrder;
    party_size?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    restaurant_tables?: Prisma.restaurant_tablesOrderByWithRelationInput;
};
export type reservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.reservationsWhereInput | Prisma.reservationsWhereInput[];
    OR?: Prisma.reservationsWhereInput[];
    NOT?: Prisma.reservationsWhereInput | Prisma.reservationsWhereInput[];
    customer_name?: Prisma.StringFilter<"reservations"> | string;
    customer_phone?: Prisma.StringFilter<"reservations"> | string;
    table_id?: Prisma.BigIntNullableFilter<"reservations"> | bigint | number | null;
    reservation_time?: Prisma.DateTimeFilter<"reservations"> | Date | string;
    party_size?: Prisma.IntFilter<"reservations"> | number;
    status?: Prisma.StringFilter<"reservations"> | string;
    special_requests?: Prisma.StringNullableFilter<"reservations"> | string | null;
    created_by?: Prisma.StringNullableFilter<"reservations"> | string | null;
    created_at?: Prisma.DateTimeFilter<"reservations"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"reservations"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"reservations"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"reservations"> | bigint | number | null;
    restaurant_tables?: Prisma.XOR<Prisma.Restaurant_tablesNullableScalarRelationFilter, Prisma.restaurant_tablesWhereInput> | null;
}, "id">;
export type reservationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_phone?: Prisma.SortOrder;
    table_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    reservation_time?: Prisma.SortOrder;
    party_size?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.reservationsCountOrderByAggregateInput;
    _avg?: Prisma.reservationsAvgOrderByAggregateInput;
    _max?: Prisma.reservationsMaxOrderByAggregateInput;
    _min?: Prisma.reservationsMinOrderByAggregateInput;
    _sum?: Prisma.reservationsSumOrderByAggregateInput;
};
export type reservationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.reservationsScalarWhereWithAggregatesInput | Prisma.reservationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.reservationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.reservationsScalarWhereWithAggregatesInput | Prisma.reservationsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"reservations"> | bigint | number;
    customer_name?: Prisma.StringWithAggregatesFilter<"reservations"> | string;
    customer_phone?: Prisma.StringWithAggregatesFilter<"reservations"> | string;
    table_id?: Prisma.BigIntNullableWithAggregatesFilter<"reservations"> | bigint | number | null;
    reservation_time?: Prisma.DateTimeWithAggregatesFilter<"reservations"> | Date | string;
    party_size?: Prisma.IntWithAggregatesFilter<"reservations"> | number;
    status?: Prisma.StringWithAggregatesFilter<"reservations"> | string;
    special_requests?: Prisma.StringNullableWithAggregatesFilter<"reservations"> | string | null;
    created_by?: Prisma.StringNullableWithAggregatesFilter<"reservations"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"reservations"> | Date | string;
    updated_by?: Prisma.StringNullableWithAggregatesFilter<"reservations"> | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"reservations"> | Date | string | null;
    version?: Prisma.BigIntNullableWithAggregatesFilter<"reservations"> | bigint | number | null;
};
export type reservationsCreateInput = {
    id?: bigint | number;
    customer_name: string;
    customer_phone: string;
    reservation_time: Date | string;
    party_size: number;
    status: string;
    special_requests?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
    restaurant_tables?: Prisma.restaurant_tablesCreateNestedOneWithoutReservationsInput;
};
export type reservationsUncheckedCreateInput = {
    id?: bigint | number;
    customer_name: string;
    customer_phone: string;
    table_id?: bigint | number | null;
    reservation_time: Date | string;
    party_size: number;
    status: string;
    special_requests?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type reservationsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_phone?: Prisma.StringFieldUpdateOperationsInput | string;
    reservation_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    party_size?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    restaurant_tables?: Prisma.restaurant_tablesUpdateOneWithoutReservationsNestedInput;
};
export type reservationsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_phone?: Prisma.StringFieldUpdateOperationsInput | string;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    reservation_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    party_size?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type reservationsCreateManyInput = {
    id?: bigint | number;
    customer_name: string;
    customer_phone: string;
    table_id?: bigint | number | null;
    reservation_time: Date | string;
    party_size: number;
    status: string;
    special_requests?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type reservationsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_phone?: Prisma.StringFieldUpdateOperationsInput | string;
    reservation_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    party_size?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type reservationsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_phone?: Prisma.StringFieldUpdateOperationsInput | string;
    table_id?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    reservation_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    party_size?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type reservationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_phone?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    reservation_time?: Prisma.SortOrder;
    party_size?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type reservationsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    party_size?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type reservationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_phone?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    reservation_time?: Prisma.SortOrder;
    party_size?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type reservationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_name?: Prisma.SortOrder;
    customer_phone?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    reservation_time?: Prisma.SortOrder;
    party_size?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type reservationsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    party_size?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type ReservationsListRelationFilter = {
    every?: Prisma.reservationsWhereInput;
    some?: Prisma.reservationsWhereInput;
    none?: Prisma.reservationsWhereInput;
};
export type reservationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type reservationsCreateNestedManyWithoutRestaurant_tablesInput = {
    create?: Prisma.XOR<Prisma.reservationsCreateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput> | Prisma.reservationsCreateWithoutRestaurant_tablesInput[] | Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput[];
    connectOrCreate?: Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput | Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput[];
    createMany?: Prisma.reservationsCreateManyRestaurant_tablesInputEnvelope;
    connect?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
};
export type reservationsUncheckedCreateNestedManyWithoutRestaurant_tablesInput = {
    create?: Prisma.XOR<Prisma.reservationsCreateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput> | Prisma.reservationsCreateWithoutRestaurant_tablesInput[] | Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput[];
    connectOrCreate?: Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput | Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput[];
    createMany?: Prisma.reservationsCreateManyRestaurant_tablesInputEnvelope;
    connect?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
};
export type reservationsUpdateManyWithoutRestaurant_tablesNestedInput = {
    create?: Prisma.XOR<Prisma.reservationsCreateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput> | Prisma.reservationsCreateWithoutRestaurant_tablesInput[] | Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput[];
    connectOrCreate?: Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput | Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput[];
    upsert?: Prisma.reservationsUpsertWithWhereUniqueWithoutRestaurant_tablesInput | Prisma.reservationsUpsertWithWhereUniqueWithoutRestaurant_tablesInput[];
    createMany?: Prisma.reservationsCreateManyRestaurant_tablesInputEnvelope;
    set?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    disconnect?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    delete?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    connect?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    update?: Prisma.reservationsUpdateWithWhereUniqueWithoutRestaurant_tablesInput | Prisma.reservationsUpdateWithWhereUniqueWithoutRestaurant_tablesInput[];
    updateMany?: Prisma.reservationsUpdateManyWithWhereWithoutRestaurant_tablesInput | Prisma.reservationsUpdateManyWithWhereWithoutRestaurant_tablesInput[];
    deleteMany?: Prisma.reservationsScalarWhereInput | Prisma.reservationsScalarWhereInput[];
};
export type reservationsUncheckedUpdateManyWithoutRestaurant_tablesNestedInput = {
    create?: Prisma.XOR<Prisma.reservationsCreateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput> | Prisma.reservationsCreateWithoutRestaurant_tablesInput[] | Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput[];
    connectOrCreate?: Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput | Prisma.reservationsCreateOrConnectWithoutRestaurant_tablesInput[];
    upsert?: Prisma.reservationsUpsertWithWhereUniqueWithoutRestaurant_tablesInput | Prisma.reservationsUpsertWithWhereUniqueWithoutRestaurant_tablesInput[];
    createMany?: Prisma.reservationsCreateManyRestaurant_tablesInputEnvelope;
    set?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    disconnect?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    delete?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    connect?: Prisma.reservationsWhereUniqueInput | Prisma.reservationsWhereUniqueInput[];
    update?: Prisma.reservationsUpdateWithWhereUniqueWithoutRestaurant_tablesInput | Prisma.reservationsUpdateWithWhereUniqueWithoutRestaurant_tablesInput[];
    updateMany?: Prisma.reservationsUpdateManyWithWhereWithoutRestaurant_tablesInput | Prisma.reservationsUpdateManyWithWhereWithoutRestaurant_tablesInput[];
    deleteMany?: Prisma.reservationsScalarWhereInput | Prisma.reservationsScalarWhereInput[];
};
export type reservationsCreateWithoutRestaurant_tablesInput = {
    id?: bigint | number;
    customer_name: string;
    customer_phone: string;
    reservation_time: Date | string;
    party_size: number;
    status: string;
    special_requests?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type reservationsUncheckedCreateWithoutRestaurant_tablesInput = {
    id?: bigint | number;
    customer_name: string;
    customer_phone: string;
    reservation_time: Date | string;
    party_size: number;
    status: string;
    special_requests?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type reservationsCreateOrConnectWithoutRestaurant_tablesInput = {
    where: Prisma.reservationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reservationsCreateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput>;
};
export type reservationsCreateManyRestaurant_tablesInputEnvelope = {
    data: Prisma.reservationsCreateManyRestaurant_tablesInput | Prisma.reservationsCreateManyRestaurant_tablesInput[];
    skipDuplicates?: boolean;
};
export type reservationsUpsertWithWhereUniqueWithoutRestaurant_tablesInput = {
    where: Prisma.reservationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.reservationsUpdateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedUpdateWithoutRestaurant_tablesInput>;
    create: Prisma.XOR<Prisma.reservationsCreateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedCreateWithoutRestaurant_tablesInput>;
};
export type reservationsUpdateWithWhereUniqueWithoutRestaurant_tablesInput = {
    where: Prisma.reservationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.reservationsUpdateWithoutRestaurant_tablesInput, Prisma.reservationsUncheckedUpdateWithoutRestaurant_tablesInput>;
};
export type reservationsUpdateManyWithWhereWithoutRestaurant_tablesInput = {
    where: Prisma.reservationsScalarWhereInput;
    data: Prisma.XOR<Prisma.reservationsUpdateManyMutationInput, Prisma.reservationsUncheckedUpdateManyWithoutRestaurant_tablesInput>;
};
export type reservationsScalarWhereInput = {
    AND?: Prisma.reservationsScalarWhereInput | Prisma.reservationsScalarWhereInput[];
    OR?: Prisma.reservationsScalarWhereInput[];
    NOT?: Prisma.reservationsScalarWhereInput | Prisma.reservationsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"reservations"> | bigint | number;
    customer_name?: Prisma.StringFilter<"reservations"> | string;
    customer_phone?: Prisma.StringFilter<"reservations"> | string;
    table_id?: Prisma.BigIntNullableFilter<"reservations"> | bigint | number | null;
    reservation_time?: Prisma.DateTimeFilter<"reservations"> | Date | string;
    party_size?: Prisma.IntFilter<"reservations"> | number;
    status?: Prisma.StringFilter<"reservations"> | string;
    special_requests?: Prisma.StringNullableFilter<"reservations"> | string | null;
    created_by?: Prisma.StringNullableFilter<"reservations"> | string | null;
    created_at?: Prisma.DateTimeFilter<"reservations"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"reservations"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"reservations"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"reservations"> | bigint | number | null;
};
export type reservationsCreateManyRestaurant_tablesInput = {
    id?: bigint | number;
    customer_name: string;
    customer_phone: string;
    reservation_time: Date | string;
    party_size: number;
    status: string;
    special_requests?: string | null;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type reservationsUpdateWithoutRestaurant_tablesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_phone?: Prisma.StringFieldUpdateOperationsInput | string;
    reservation_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    party_size?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type reservationsUncheckedUpdateWithoutRestaurant_tablesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_phone?: Prisma.StringFieldUpdateOperationsInput | string;
    reservation_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    party_size?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type reservationsUncheckedUpdateManyWithoutRestaurant_tablesInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    customer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_phone?: Prisma.StringFieldUpdateOperationsInput | string;
    reservation_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    party_size?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type reservationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_name?: boolean;
    customer_phone?: boolean;
    table_id?: boolean;
    reservation_time?: boolean;
    party_size?: boolean;
    status?: boolean;
    special_requests?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
    restaurant_tables?: boolean | Prisma.reservations$restaurant_tablesArgs<ExtArgs>;
}, ExtArgs["result"]["reservations"]>;
export type reservationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_name?: boolean;
    customer_phone?: boolean;
    table_id?: boolean;
    reservation_time?: boolean;
    party_size?: boolean;
    status?: boolean;
    special_requests?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
    restaurant_tables?: boolean | Prisma.reservations$restaurant_tablesArgs<ExtArgs>;
}, ExtArgs["result"]["reservations"]>;
export type reservationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_name?: boolean;
    customer_phone?: boolean;
    table_id?: boolean;
    reservation_time?: boolean;
    party_size?: boolean;
    status?: boolean;
    special_requests?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
    restaurant_tables?: boolean | Prisma.reservations$restaurant_tablesArgs<ExtArgs>;
}, ExtArgs["result"]["reservations"]>;
export type reservationsSelectScalar = {
    id?: boolean;
    customer_name?: boolean;
    customer_phone?: boolean;
    table_id?: boolean;
    reservation_time?: boolean;
    party_size?: boolean;
    status?: boolean;
    special_requests?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
};
export type reservationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_name" | "customer_phone" | "table_id" | "reservation_time" | "party_size" | "status" | "special_requests" | "created_by" | "created_at" | "updated_by" | "updated_at" | "version", ExtArgs["result"]["reservations"]>;
export type reservationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant_tables?: boolean | Prisma.reservations$restaurant_tablesArgs<ExtArgs>;
};
export type reservationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant_tables?: boolean | Prisma.reservations$restaurant_tablesArgs<ExtArgs>;
};
export type reservationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    restaurant_tables?: boolean | Prisma.reservations$restaurant_tablesArgs<ExtArgs>;
};
export type $reservationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "reservations";
    objects: {
        restaurant_tables: Prisma.$restaurant_tablesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        customer_name: string;
        customer_phone: string;
        table_id: bigint | null;
        reservation_time: Date;
        party_size: number;
        status: string;
        special_requests: string | null;
        created_by: string | null;
        created_at: Date;
        updated_by: string | null;
        updated_at: Date | null;
        version: bigint | null;
    }, ExtArgs["result"]["reservations"]>;
    composites: {};
};
export type reservationsGetPayload<S extends boolean | null | undefined | reservationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$reservationsPayload, S>;
export type reservationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<reservationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReservationsCountAggregateInputType | true;
};
export interface reservationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['reservations'];
        meta: {
            name: 'reservations';
        };
    };
    findUnique<T extends reservationsFindUniqueArgs>(args: Prisma.SelectSubset<T, reservationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends reservationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, reservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends reservationsFindFirstArgs>(args?: Prisma.SelectSubset<T, reservationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends reservationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, reservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends reservationsFindManyArgs>(args?: Prisma.SelectSubset<T, reservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends reservationsCreateArgs>(args: Prisma.SelectSubset<T, reservationsCreateArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends reservationsCreateManyArgs>(args?: Prisma.SelectSubset<T, reservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends reservationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, reservationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends reservationsDeleteArgs>(args: Prisma.SelectSubset<T, reservationsDeleteArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends reservationsUpdateArgs>(args: Prisma.SelectSubset<T, reservationsUpdateArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends reservationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, reservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends reservationsUpdateManyArgs>(args: Prisma.SelectSubset<T, reservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends reservationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, reservationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends reservationsUpsertArgs>(args: Prisma.SelectSubset<T, reservationsUpsertArgs<ExtArgs>>): Prisma.Prisma__reservationsClient<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends reservationsCountArgs>(args?: Prisma.Subset<T, reservationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReservationsCountAggregateOutputType> : number>;
    aggregate<T extends ReservationsAggregateArgs>(args: Prisma.Subset<T, ReservationsAggregateArgs>): Prisma.PrismaPromise<GetReservationsAggregateType<T>>;
    groupBy<T extends reservationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: reservationsGroupByArgs['orderBy'];
    } : {
        orderBy?: reservationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, reservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: reservationsFieldRefs;
}
export interface Prisma__reservationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    restaurant_tables<T extends Prisma.reservations$restaurant_tablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reservations$restaurant_tablesArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface reservationsFieldRefs {
    readonly id: Prisma.FieldRef<"reservations", 'BigInt'>;
    readonly customer_name: Prisma.FieldRef<"reservations", 'String'>;
    readonly customer_phone: Prisma.FieldRef<"reservations", 'String'>;
    readonly table_id: Prisma.FieldRef<"reservations", 'BigInt'>;
    readonly reservation_time: Prisma.FieldRef<"reservations", 'DateTime'>;
    readonly party_size: Prisma.FieldRef<"reservations", 'Int'>;
    readonly status: Prisma.FieldRef<"reservations", 'String'>;
    readonly special_requests: Prisma.FieldRef<"reservations", 'String'>;
    readonly created_by: Prisma.FieldRef<"reservations", 'String'>;
    readonly created_at: Prisma.FieldRef<"reservations", 'DateTime'>;
    readonly updated_by: Prisma.FieldRef<"reservations", 'String'>;
    readonly updated_at: Prisma.FieldRef<"reservations", 'DateTime'>;
    readonly version: Prisma.FieldRef<"reservations", 'BigInt'>;
}
export type reservationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    where: Prisma.reservationsWhereUniqueInput;
};
export type reservationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    where: Prisma.reservationsWhereUniqueInput;
};
export type reservationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    where?: Prisma.reservationsWhereInput;
    orderBy?: Prisma.reservationsOrderByWithRelationInput | Prisma.reservationsOrderByWithRelationInput[];
    cursor?: Prisma.reservationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationsScalarFieldEnum | Prisma.ReservationsScalarFieldEnum[];
};
export type reservationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    where?: Prisma.reservationsWhereInput;
    orderBy?: Prisma.reservationsOrderByWithRelationInput | Prisma.reservationsOrderByWithRelationInput[];
    cursor?: Prisma.reservationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationsScalarFieldEnum | Prisma.ReservationsScalarFieldEnum[];
};
export type reservationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    where?: Prisma.reservationsWhereInput;
    orderBy?: Prisma.reservationsOrderByWithRelationInput | Prisma.reservationsOrderByWithRelationInput[];
    cursor?: Prisma.reservationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationsScalarFieldEnum | Prisma.ReservationsScalarFieldEnum[];
};
export type reservationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.reservationsCreateInput, Prisma.reservationsUncheckedCreateInput>;
};
export type reservationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.reservationsCreateManyInput | Prisma.reservationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type reservationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    data: Prisma.reservationsCreateManyInput | Prisma.reservationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.reservationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type reservationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.reservationsUpdateInput, Prisma.reservationsUncheckedUpdateInput>;
    where: Prisma.reservationsWhereUniqueInput;
};
export type reservationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.reservationsUpdateManyMutationInput, Prisma.reservationsUncheckedUpdateManyInput>;
    where?: Prisma.reservationsWhereInput;
    limit?: number;
};
export type reservationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.reservationsUpdateManyMutationInput, Prisma.reservationsUncheckedUpdateManyInput>;
    where?: Prisma.reservationsWhereInput;
    limit?: number;
    include?: Prisma.reservationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type reservationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    where: Prisma.reservationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.reservationsCreateInput, Prisma.reservationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.reservationsUpdateInput, Prisma.reservationsUncheckedUpdateInput>;
};
export type reservationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
    where: Prisma.reservationsWhereUniqueInput;
};
export type reservationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reservationsWhereInput;
    limit?: number;
};
export type reservations$restaurant_tablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where?: Prisma.restaurant_tablesWhereInput;
};
export type reservationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.reservationsSelect<ExtArgs> | null;
    omit?: Prisma.reservationsOmit<ExtArgs> | null;
    include?: Prisma.reservationsInclude<ExtArgs> | null;
};
