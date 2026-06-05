import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type restaurant_tablesModel = runtime.Types.Result.DefaultSelection<Prisma.$restaurant_tablesPayload>;
export type AggregateRestaurant_tables = {
    _count: Restaurant_tablesCountAggregateOutputType | null;
    _avg: Restaurant_tablesAvgAggregateOutputType | null;
    _sum: Restaurant_tablesSumAggregateOutputType | null;
    _min: Restaurant_tablesMinAggregateOutputType | null;
    _max: Restaurant_tablesMaxAggregateOutputType | null;
};
export type Restaurant_tablesAvgAggregateOutputType = {
    id: number | null;
    capacity: number | null;
    version: number | null;
};
export type Restaurant_tablesSumAggregateOutputType = {
    id: bigint | null;
    capacity: number | null;
    version: bigint | null;
};
export type Restaurant_tablesMinAggregateOutputType = {
    id: bigint | null;
    table_number: string | null;
    capacity: number | null;
    status: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
};
export type Restaurant_tablesMaxAggregateOutputType = {
    id: bigint | null;
    table_number: string | null;
    capacity: number | null;
    status: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
};
export type Restaurant_tablesCountAggregateOutputType = {
    id: number;
    table_number: number;
    capacity: number;
    status: number;
    created_by: number;
    created_at: number;
    updated_by: number;
    updated_at: number;
    version: number;
    _all: number;
};
export type Restaurant_tablesAvgAggregateInputType = {
    id?: true;
    capacity?: true;
    version?: true;
};
export type Restaurant_tablesSumAggregateInputType = {
    id?: true;
    capacity?: true;
    version?: true;
};
export type Restaurant_tablesMinAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
};
export type Restaurant_tablesMaxAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
};
export type Restaurant_tablesCountAggregateInputType = {
    id?: true;
    table_number?: true;
    capacity?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_by?: true;
    updated_at?: true;
    version?: true;
    _all?: true;
};
export type Restaurant_tablesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.restaurant_tablesWhereInput;
    orderBy?: Prisma.restaurant_tablesOrderByWithRelationInput | Prisma.restaurant_tablesOrderByWithRelationInput[];
    cursor?: Prisma.restaurant_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Restaurant_tablesCountAggregateInputType;
    _avg?: Restaurant_tablesAvgAggregateInputType;
    _sum?: Restaurant_tablesSumAggregateInputType;
    _min?: Restaurant_tablesMinAggregateInputType;
    _max?: Restaurant_tablesMaxAggregateInputType;
};
export type GetRestaurant_tablesAggregateType<T extends Restaurant_tablesAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurant_tables]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRestaurant_tables[P]> : Prisma.GetScalarType<T[P], AggregateRestaurant_tables[P]>;
};
export type restaurant_tablesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.restaurant_tablesWhereInput;
    orderBy?: Prisma.restaurant_tablesOrderByWithAggregationInput | Prisma.restaurant_tablesOrderByWithAggregationInput[];
    by: Prisma.Restaurant_tablesScalarFieldEnum[] | Prisma.Restaurant_tablesScalarFieldEnum;
    having?: Prisma.restaurant_tablesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Restaurant_tablesCountAggregateInputType | true;
    _avg?: Restaurant_tablesAvgAggregateInputType;
    _sum?: Restaurant_tablesSumAggregateInputType;
    _min?: Restaurant_tablesMinAggregateInputType;
    _max?: Restaurant_tablesMaxAggregateInputType;
};
export type Restaurant_tablesGroupByOutputType = {
    id: bigint;
    table_number: string;
    capacity: number;
    status: string;
    created_by: string | null;
    created_at: Date;
    updated_by: string | null;
    updated_at: Date | null;
    version: bigint | null;
    _count: Restaurant_tablesCountAggregateOutputType | null;
    _avg: Restaurant_tablesAvgAggregateOutputType | null;
    _sum: Restaurant_tablesSumAggregateOutputType | null;
    _min: Restaurant_tablesMinAggregateOutputType | null;
    _max: Restaurant_tablesMaxAggregateOutputType | null;
};
export type GetRestaurant_tablesGroupByPayload<T extends restaurant_tablesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Restaurant_tablesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Restaurant_tablesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Restaurant_tablesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Restaurant_tablesGroupByOutputType[P]>;
}>>;
export type restaurant_tablesWhereInput = {
    AND?: Prisma.restaurant_tablesWhereInput | Prisma.restaurant_tablesWhereInput[];
    OR?: Prisma.restaurant_tablesWhereInput[];
    NOT?: Prisma.restaurant_tablesWhereInput | Prisma.restaurant_tablesWhereInput[];
    id?: Prisma.BigIntFilter<"restaurant_tables"> | bigint | number;
    table_number?: Prisma.StringFilter<"restaurant_tables"> | string;
    capacity?: Prisma.IntFilter<"restaurant_tables"> | number;
    status?: Prisma.StringFilter<"restaurant_tables"> | string;
    created_by?: Prisma.StringNullableFilter<"restaurant_tables"> | string | null;
    created_at?: Prisma.DateTimeFilter<"restaurant_tables"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"restaurant_tables"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"restaurant_tables"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"restaurant_tables"> | bigint | number | null;
    reservations?: Prisma.ReservationsListRelationFilter;
};
export type restaurant_tablesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    reservations?: Prisma.reservationsOrderByRelationAggregateInput;
};
export type restaurant_tablesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    table_number?: string;
    AND?: Prisma.restaurant_tablesWhereInput | Prisma.restaurant_tablesWhereInput[];
    OR?: Prisma.restaurant_tablesWhereInput[];
    NOT?: Prisma.restaurant_tablesWhereInput | Prisma.restaurant_tablesWhereInput[];
    capacity?: Prisma.IntFilter<"restaurant_tables"> | number;
    status?: Prisma.StringFilter<"restaurant_tables"> | string;
    created_by?: Prisma.StringNullableFilter<"restaurant_tables"> | string | null;
    created_at?: Prisma.DateTimeFilter<"restaurant_tables"> | Date | string;
    updated_by?: Prisma.StringNullableFilter<"restaurant_tables"> | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"restaurant_tables"> | Date | string | null;
    version?: Prisma.BigIntNullableFilter<"restaurant_tables"> | bigint | number | null;
    reservations?: Prisma.ReservationsListRelationFilter;
}, "id" | "table_number">;
export type restaurant_tablesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.restaurant_tablesCountOrderByAggregateInput;
    _avg?: Prisma.restaurant_tablesAvgOrderByAggregateInput;
    _max?: Prisma.restaurant_tablesMaxOrderByAggregateInput;
    _min?: Prisma.restaurant_tablesMinOrderByAggregateInput;
    _sum?: Prisma.restaurant_tablesSumOrderByAggregateInput;
};
export type restaurant_tablesScalarWhereWithAggregatesInput = {
    AND?: Prisma.restaurant_tablesScalarWhereWithAggregatesInput | Prisma.restaurant_tablesScalarWhereWithAggregatesInput[];
    OR?: Prisma.restaurant_tablesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.restaurant_tablesScalarWhereWithAggregatesInput | Prisma.restaurant_tablesScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"restaurant_tables"> | bigint | number;
    table_number?: Prisma.StringWithAggregatesFilter<"restaurant_tables"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"restaurant_tables"> | number;
    status?: Prisma.StringWithAggregatesFilter<"restaurant_tables"> | string;
    created_by?: Prisma.StringNullableWithAggregatesFilter<"restaurant_tables"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"restaurant_tables"> | Date | string;
    updated_by?: Prisma.StringNullableWithAggregatesFilter<"restaurant_tables"> | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"restaurant_tables"> | Date | string | null;
    version?: Prisma.BigIntNullableWithAggregatesFilter<"restaurant_tables"> | bigint | number | null;
};
export type restaurant_tablesCreateInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
    reservations?: Prisma.reservationsCreateNestedManyWithoutRestaurant_tablesInput;
};
export type restaurant_tablesUncheckedCreateInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
    reservations?: Prisma.reservationsUncheckedCreateNestedManyWithoutRestaurant_tablesInput;
};
export type restaurant_tablesUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    reservations?: Prisma.reservationsUpdateManyWithoutRestaurant_tablesNestedInput;
};
export type restaurant_tablesUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    reservations?: Prisma.reservationsUncheckedUpdateManyWithoutRestaurant_tablesNestedInput;
};
export type restaurant_tablesCreateManyInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type restaurant_tablesUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type restaurant_tablesUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type Restaurant_tablesNullableScalarRelationFilter = {
    is?: Prisma.restaurant_tablesWhereInput | null;
    isNot?: Prisma.restaurant_tablesWhereInput | null;
};
export type restaurant_tablesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type restaurant_tablesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type restaurant_tablesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type restaurant_tablesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_by?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type restaurant_tablesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type restaurant_tablesCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.restaurant_tablesCreateWithoutReservationsInput, Prisma.restaurant_tablesUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.restaurant_tablesCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.restaurant_tablesWhereUniqueInput;
};
export type restaurant_tablesUpdateOneWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.restaurant_tablesCreateWithoutReservationsInput, Prisma.restaurant_tablesUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.restaurant_tablesCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.restaurant_tablesUpsertWithoutReservationsInput;
    disconnect?: Prisma.restaurant_tablesWhereInput | boolean;
    delete?: Prisma.restaurant_tablesWhereInput | boolean;
    connect?: Prisma.restaurant_tablesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.restaurant_tablesUpdateToOneWithWhereWithoutReservationsInput, Prisma.restaurant_tablesUpdateWithoutReservationsInput>, Prisma.restaurant_tablesUncheckedUpdateWithoutReservationsInput>;
};
export type restaurant_tablesCreateWithoutReservationsInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type restaurant_tablesUncheckedCreateWithoutReservationsInput = {
    id?: bigint | number;
    table_number: string;
    capacity: number;
    status: string;
    created_by?: string | null;
    created_at?: Date | string;
    updated_by?: string | null;
    updated_at?: Date | string | null;
    version?: bigint | number | null;
};
export type restaurant_tablesCreateOrConnectWithoutReservationsInput = {
    where: Prisma.restaurant_tablesWhereUniqueInput;
    create: Prisma.XOR<Prisma.restaurant_tablesCreateWithoutReservationsInput, Prisma.restaurant_tablesUncheckedCreateWithoutReservationsInput>;
};
export type restaurant_tablesUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.restaurant_tablesUpdateWithoutReservationsInput, Prisma.restaurant_tablesUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.restaurant_tablesCreateWithoutReservationsInput, Prisma.restaurant_tablesUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.restaurant_tablesWhereInput;
};
export type restaurant_tablesUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.restaurant_tablesWhereInput;
    data: Prisma.XOR<Prisma.restaurant_tablesUpdateWithoutReservationsInput, Prisma.restaurant_tablesUncheckedUpdateWithoutReservationsInput>;
};
export type restaurant_tablesUpdateWithoutReservationsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type restaurant_tablesUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    version?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
};
export type Restaurant_tablesCountOutputType = {
    reservations: number;
};
export type Restaurant_tablesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservations?: boolean | Restaurant_tablesCountOutputTypeCountReservationsArgs;
};
export type Restaurant_tablesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Restaurant_tablesCountOutputTypeSelect<ExtArgs> | null;
};
export type Restaurant_tablesCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.reservationsWhereInput;
};
export type restaurant_tablesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
    reservations?: boolean | Prisma.restaurant_tables$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Restaurant_tablesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["restaurant_tables"]>;
export type restaurant_tablesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
}, ExtArgs["result"]["restaurant_tables"]>;
export type restaurant_tablesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
}, ExtArgs["result"]["restaurant_tables"]>;
export type restaurant_tablesSelectScalar = {
    id?: boolean;
    table_number?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_by?: boolean;
    updated_at?: boolean;
    version?: boolean;
};
export type restaurant_tablesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "table_number" | "capacity" | "status" | "created_by" | "created_at" | "updated_by" | "updated_at" | "version", ExtArgs["result"]["restaurant_tables"]>;
export type restaurant_tablesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservations?: boolean | Prisma.restaurant_tables$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Restaurant_tablesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type restaurant_tablesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type restaurant_tablesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $restaurant_tablesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "restaurant_tables";
    objects: {
        reservations: Prisma.$reservationsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        table_number: string;
        capacity: number;
        status: string;
        created_by: string | null;
        created_at: Date;
        updated_by: string | null;
        updated_at: Date | null;
        version: bigint | null;
    }, ExtArgs["result"]["restaurant_tables"]>;
    composites: {};
};
export type restaurant_tablesGetPayload<S extends boolean | null | undefined | restaurant_tablesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload, S>;
export type restaurant_tablesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<restaurant_tablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Restaurant_tablesCountAggregateInputType | true;
};
export interface restaurant_tablesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['restaurant_tables'];
        meta: {
            name: 'restaurant_tables';
        };
    };
    findUnique<T extends restaurant_tablesFindUniqueArgs>(args: Prisma.SelectSubset<T, restaurant_tablesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends restaurant_tablesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, restaurant_tablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends restaurant_tablesFindFirstArgs>(args?: Prisma.SelectSubset<T, restaurant_tablesFindFirstArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends restaurant_tablesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, restaurant_tablesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends restaurant_tablesFindManyArgs>(args?: Prisma.SelectSubset<T, restaurant_tablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends restaurant_tablesCreateArgs>(args: Prisma.SelectSubset<T, restaurant_tablesCreateArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends restaurant_tablesCreateManyArgs>(args?: Prisma.SelectSubset<T, restaurant_tablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends restaurant_tablesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, restaurant_tablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends restaurant_tablesDeleteArgs>(args: Prisma.SelectSubset<T, restaurant_tablesDeleteArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends restaurant_tablesUpdateArgs>(args: Prisma.SelectSubset<T, restaurant_tablesUpdateArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends restaurant_tablesDeleteManyArgs>(args?: Prisma.SelectSubset<T, restaurant_tablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends restaurant_tablesUpdateManyArgs>(args: Prisma.SelectSubset<T, restaurant_tablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends restaurant_tablesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, restaurant_tablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends restaurant_tablesUpsertArgs>(args: Prisma.SelectSubset<T, restaurant_tablesUpsertArgs<ExtArgs>>): Prisma.Prisma__restaurant_tablesClient<runtime.Types.Result.GetResult<Prisma.$restaurant_tablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends restaurant_tablesCountArgs>(args?: Prisma.Subset<T, restaurant_tablesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Restaurant_tablesCountAggregateOutputType> : number>;
    aggregate<T extends Restaurant_tablesAggregateArgs>(args: Prisma.Subset<T, Restaurant_tablesAggregateArgs>): Prisma.PrismaPromise<GetRestaurant_tablesAggregateType<T>>;
    groupBy<T extends restaurant_tablesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: restaurant_tablesGroupByArgs['orderBy'];
    } : {
        orderBy?: restaurant_tablesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, restaurant_tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurant_tablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: restaurant_tablesFieldRefs;
}
export interface Prisma__restaurant_tablesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reservations<T extends Prisma.restaurant_tables$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.restaurant_tables$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$reservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface restaurant_tablesFieldRefs {
    readonly id: Prisma.FieldRef<"restaurant_tables", 'BigInt'>;
    readonly table_number: Prisma.FieldRef<"restaurant_tables", 'String'>;
    readonly capacity: Prisma.FieldRef<"restaurant_tables", 'Int'>;
    readonly status: Prisma.FieldRef<"restaurant_tables", 'String'>;
    readonly created_by: Prisma.FieldRef<"restaurant_tables", 'String'>;
    readonly created_at: Prisma.FieldRef<"restaurant_tables", 'DateTime'>;
    readonly updated_by: Prisma.FieldRef<"restaurant_tables", 'String'>;
    readonly updated_at: Prisma.FieldRef<"restaurant_tables", 'DateTime'>;
    readonly version: Prisma.FieldRef<"restaurant_tables", 'BigInt'>;
}
export type restaurant_tablesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where: Prisma.restaurant_tablesWhereUniqueInput;
};
export type restaurant_tablesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where: Prisma.restaurant_tablesWhereUniqueInput;
};
export type restaurant_tablesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where?: Prisma.restaurant_tablesWhereInput;
    orderBy?: Prisma.restaurant_tablesOrderByWithRelationInput | Prisma.restaurant_tablesOrderByWithRelationInput[];
    cursor?: Prisma.restaurant_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Restaurant_tablesScalarFieldEnum | Prisma.Restaurant_tablesScalarFieldEnum[];
};
export type restaurant_tablesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where?: Prisma.restaurant_tablesWhereInput;
    orderBy?: Prisma.restaurant_tablesOrderByWithRelationInput | Prisma.restaurant_tablesOrderByWithRelationInput[];
    cursor?: Prisma.restaurant_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Restaurant_tablesScalarFieldEnum | Prisma.Restaurant_tablesScalarFieldEnum[];
};
export type restaurant_tablesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where?: Prisma.restaurant_tablesWhereInput;
    orderBy?: Prisma.restaurant_tablesOrderByWithRelationInput | Prisma.restaurant_tablesOrderByWithRelationInput[];
    cursor?: Prisma.restaurant_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Restaurant_tablesScalarFieldEnum | Prisma.Restaurant_tablesScalarFieldEnum[];
};
export type restaurant_tablesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.restaurant_tablesCreateInput, Prisma.restaurant_tablesUncheckedCreateInput>;
};
export type restaurant_tablesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.restaurant_tablesCreateManyInput | Prisma.restaurant_tablesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type restaurant_tablesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    data: Prisma.restaurant_tablesCreateManyInput | Prisma.restaurant_tablesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type restaurant_tablesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.restaurant_tablesUpdateInput, Prisma.restaurant_tablesUncheckedUpdateInput>;
    where: Prisma.restaurant_tablesWhereUniqueInput;
};
export type restaurant_tablesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.restaurant_tablesUpdateManyMutationInput, Prisma.restaurant_tablesUncheckedUpdateManyInput>;
    where?: Prisma.restaurant_tablesWhereInput;
    limit?: number;
};
export type restaurant_tablesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.restaurant_tablesUpdateManyMutationInput, Prisma.restaurant_tablesUncheckedUpdateManyInput>;
    where?: Prisma.restaurant_tablesWhereInput;
    limit?: number;
};
export type restaurant_tablesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where: Prisma.restaurant_tablesWhereUniqueInput;
    create: Prisma.XOR<Prisma.restaurant_tablesCreateInput, Prisma.restaurant_tablesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.restaurant_tablesUpdateInput, Prisma.restaurant_tablesUncheckedUpdateInput>;
};
export type restaurant_tablesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
    where: Prisma.restaurant_tablesWhereUniqueInput;
};
export type restaurant_tablesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.restaurant_tablesWhereInput;
    limit?: number;
};
export type restaurant_tables$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type restaurant_tablesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.restaurant_tablesSelect<ExtArgs> | null;
    omit?: Prisma.restaurant_tablesOmit<ExtArgs> | null;
    include?: Prisma.restaurant_tablesInclude<ExtArgs> | null;
};
