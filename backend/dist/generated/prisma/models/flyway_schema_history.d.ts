import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type flyway_schema_historyModel = runtime.Types.Result.DefaultSelection<Prisma.$flyway_schema_historyPayload>;
export type AggregateFlyway_schema_history = {
    _count: Flyway_schema_historyCountAggregateOutputType | null;
    _avg: Flyway_schema_historyAvgAggregateOutputType | null;
    _sum: Flyway_schema_historySumAggregateOutputType | null;
    _min: Flyway_schema_historyMinAggregateOutputType | null;
    _max: Flyway_schema_historyMaxAggregateOutputType | null;
};
export type Flyway_schema_historyAvgAggregateOutputType = {
    installed_rank: number | null;
    checksum: number | null;
    execution_time: number | null;
};
export type Flyway_schema_historySumAggregateOutputType = {
    installed_rank: number | null;
    checksum: number | null;
    execution_time: number | null;
};
export type Flyway_schema_historyMinAggregateOutputType = {
    installed_rank: number | null;
    version: string | null;
    description: string | null;
    type: string | null;
    script: string | null;
    checksum: number | null;
    installed_by: string | null;
    installed_on: Date | null;
    execution_time: number | null;
    success: boolean | null;
};
export type Flyway_schema_historyMaxAggregateOutputType = {
    installed_rank: number | null;
    version: string | null;
    description: string | null;
    type: string | null;
    script: string | null;
    checksum: number | null;
    installed_by: string | null;
    installed_on: Date | null;
    execution_time: number | null;
    success: boolean | null;
};
export type Flyway_schema_historyCountAggregateOutputType = {
    installed_rank: number;
    version: number;
    description: number;
    type: number;
    script: number;
    checksum: number;
    installed_by: number;
    installed_on: number;
    execution_time: number;
    success: number;
    _all: number;
};
export type Flyway_schema_historyAvgAggregateInputType = {
    installed_rank?: true;
    checksum?: true;
    execution_time?: true;
};
export type Flyway_schema_historySumAggregateInputType = {
    installed_rank?: true;
    checksum?: true;
    execution_time?: true;
};
export type Flyway_schema_historyMinAggregateInputType = {
    installed_rank?: true;
    version?: true;
    description?: true;
    type?: true;
    script?: true;
    checksum?: true;
    installed_by?: true;
    installed_on?: true;
    execution_time?: true;
    success?: true;
};
export type Flyway_schema_historyMaxAggregateInputType = {
    installed_rank?: true;
    version?: true;
    description?: true;
    type?: true;
    script?: true;
    checksum?: true;
    installed_by?: true;
    installed_on?: true;
    execution_time?: true;
    success?: true;
};
export type Flyway_schema_historyCountAggregateInputType = {
    installed_rank?: true;
    version?: true;
    description?: true;
    type?: true;
    script?: true;
    checksum?: true;
    installed_by?: true;
    installed_on?: true;
    execution_time?: true;
    success?: true;
    _all?: true;
};
export type Flyway_schema_historyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.flyway_schema_historyWhereInput;
    orderBy?: Prisma.flyway_schema_historyOrderByWithRelationInput | Prisma.flyway_schema_historyOrderByWithRelationInput[];
    cursor?: Prisma.flyway_schema_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Flyway_schema_historyCountAggregateInputType;
    _avg?: Flyway_schema_historyAvgAggregateInputType;
    _sum?: Flyway_schema_historySumAggregateInputType;
    _min?: Flyway_schema_historyMinAggregateInputType;
    _max?: Flyway_schema_historyMaxAggregateInputType;
};
export type GetFlyway_schema_historyAggregateType<T extends Flyway_schema_historyAggregateArgs> = {
    [P in keyof T & keyof AggregateFlyway_schema_history]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFlyway_schema_history[P]> : Prisma.GetScalarType<T[P], AggregateFlyway_schema_history[P]>;
};
export type flyway_schema_historyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.flyway_schema_historyWhereInput;
    orderBy?: Prisma.flyway_schema_historyOrderByWithAggregationInput | Prisma.flyway_schema_historyOrderByWithAggregationInput[];
    by: Prisma.Flyway_schema_historyScalarFieldEnum[] | Prisma.Flyway_schema_historyScalarFieldEnum;
    having?: Prisma.flyway_schema_historyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Flyway_schema_historyCountAggregateInputType | true;
    _avg?: Flyway_schema_historyAvgAggregateInputType;
    _sum?: Flyway_schema_historySumAggregateInputType;
    _min?: Flyway_schema_historyMinAggregateInputType;
    _max?: Flyway_schema_historyMaxAggregateInputType;
};
export type Flyway_schema_historyGroupByOutputType = {
    installed_rank: number;
    version: string | null;
    description: string;
    type: string;
    script: string;
    checksum: number | null;
    installed_by: string;
    installed_on: Date;
    execution_time: number;
    success: boolean;
    _count: Flyway_schema_historyCountAggregateOutputType | null;
    _avg: Flyway_schema_historyAvgAggregateOutputType | null;
    _sum: Flyway_schema_historySumAggregateOutputType | null;
    _min: Flyway_schema_historyMinAggregateOutputType | null;
    _max: Flyway_schema_historyMaxAggregateOutputType | null;
};
export type GetFlyway_schema_historyGroupByPayload<T extends flyway_schema_historyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Flyway_schema_historyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Flyway_schema_historyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Flyway_schema_historyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Flyway_schema_historyGroupByOutputType[P]>;
}>>;
export type flyway_schema_historyWhereInput = {
    AND?: Prisma.flyway_schema_historyWhereInput | Prisma.flyway_schema_historyWhereInput[];
    OR?: Prisma.flyway_schema_historyWhereInput[];
    NOT?: Prisma.flyway_schema_historyWhereInput | Prisma.flyway_schema_historyWhereInput[];
    installed_rank?: Prisma.IntFilter<"flyway_schema_history"> | number;
    version?: Prisma.StringNullableFilter<"flyway_schema_history"> | string | null;
    description?: Prisma.StringFilter<"flyway_schema_history"> | string;
    type?: Prisma.StringFilter<"flyway_schema_history"> | string;
    script?: Prisma.StringFilter<"flyway_schema_history"> | string;
    checksum?: Prisma.IntNullableFilter<"flyway_schema_history"> | number | null;
    installed_by?: Prisma.StringFilter<"flyway_schema_history"> | string;
    installed_on?: Prisma.DateTimeFilter<"flyway_schema_history"> | Date | string;
    execution_time?: Prisma.IntFilter<"flyway_schema_history"> | number;
    success?: Prisma.BoolFilter<"flyway_schema_history"> | boolean;
};
export type flyway_schema_historyOrderByWithRelationInput = {
    installed_rank?: Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    script?: Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    installed_by?: Prisma.SortOrder;
    installed_on?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
};
export type flyway_schema_historyWhereUniqueInput = Prisma.AtLeast<{
    installed_rank?: number;
    AND?: Prisma.flyway_schema_historyWhereInput | Prisma.flyway_schema_historyWhereInput[];
    OR?: Prisma.flyway_schema_historyWhereInput[];
    NOT?: Prisma.flyway_schema_historyWhereInput | Prisma.flyway_schema_historyWhereInput[];
    version?: Prisma.StringNullableFilter<"flyway_schema_history"> | string | null;
    description?: Prisma.StringFilter<"flyway_schema_history"> | string;
    type?: Prisma.StringFilter<"flyway_schema_history"> | string;
    script?: Prisma.StringFilter<"flyway_schema_history"> | string;
    checksum?: Prisma.IntNullableFilter<"flyway_schema_history"> | number | null;
    installed_by?: Prisma.StringFilter<"flyway_schema_history"> | string;
    installed_on?: Prisma.DateTimeFilter<"flyway_schema_history"> | Date | string;
    execution_time?: Prisma.IntFilter<"flyway_schema_history"> | number;
    success?: Prisma.BoolFilter<"flyway_schema_history"> | boolean;
}, "installed_rank">;
export type flyway_schema_historyOrderByWithAggregationInput = {
    installed_rank?: Prisma.SortOrder;
    version?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    script?: Prisma.SortOrder;
    checksum?: Prisma.SortOrderInput | Prisma.SortOrder;
    installed_by?: Prisma.SortOrder;
    installed_on?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
    _count?: Prisma.flyway_schema_historyCountOrderByAggregateInput;
    _avg?: Prisma.flyway_schema_historyAvgOrderByAggregateInput;
    _max?: Prisma.flyway_schema_historyMaxOrderByAggregateInput;
    _min?: Prisma.flyway_schema_historyMinOrderByAggregateInput;
    _sum?: Prisma.flyway_schema_historySumOrderByAggregateInput;
};
export type flyway_schema_historyScalarWhereWithAggregatesInput = {
    AND?: Prisma.flyway_schema_historyScalarWhereWithAggregatesInput | Prisma.flyway_schema_historyScalarWhereWithAggregatesInput[];
    OR?: Prisma.flyway_schema_historyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.flyway_schema_historyScalarWhereWithAggregatesInput | Prisma.flyway_schema_historyScalarWhereWithAggregatesInput[];
    installed_rank?: Prisma.IntWithAggregatesFilter<"flyway_schema_history"> | number;
    version?: Prisma.StringNullableWithAggregatesFilter<"flyway_schema_history"> | string | null;
    description?: Prisma.StringWithAggregatesFilter<"flyway_schema_history"> | string;
    type?: Prisma.StringWithAggregatesFilter<"flyway_schema_history"> | string;
    script?: Prisma.StringWithAggregatesFilter<"flyway_schema_history"> | string;
    checksum?: Prisma.IntNullableWithAggregatesFilter<"flyway_schema_history"> | number | null;
    installed_by?: Prisma.StringWithAggregatesFilter<"flyway_schema_history"> | string;
    installed_on?: Prisma.DateTimeWithAggregatesFilter<"flyway_schema_history"> | Date | string;
    execution_time?: Prisma.IntWithAggregatesFilter<"flyway_schema_history"> | number;
    success?: Prisma.BoolWithAggregatesFilter<"flyway_schema_history"> | boolean;
};
export type flyway_schema_historyCreateInput = {
    installed_rank: number;
    version?: string | null;
    description: string;
    type: string;
    script: string;
    checksum?: number | null;
    installed_by: string;
    installed_on?: Date | string;
    execution_time: number;
    success: boolean;
};
export type flyway_schema_historyUncheckedCreateInput = {
    installed_rank: number;
    version?: string | null;
    description: string;
    type: string;
    script: string;
    checksum?: number | null;
    installed_by: string;
    installed_on?: Date | string;
    execution_time: number;
    success: boolean;
};
export type flyway_schema_historyUpdateInput = {
    installed_rank?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    script?: Prisma.StringFieldUpdateOperationsInput | string;
    checksum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    installed_by?: Prisma.StringFieldUpdateOperationsInput | string;
    installed_on?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    execution_time?: Prisma.IntFieldUpdateOperationsInput | number;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type flyway_schema_historyUncheckedUpdateInput = {
    installed_rank?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    script?: Prisma.StringFieldUpdateOperationsInput | string;
    checksum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    installed_by?: Prisma.StringFieldUpdateOperationsInput | string;
    installed_on?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    execution_time?: Prisma.IntFieldUpdateOperationsInput | number;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type flyway_schema_historyCreateManyInput = {
    installed_rank: number;
    version?: string | null;
    description: string;
    type: string;
    script: string;
    checksum?: number | null;
    installed_by: string;
    installed_on?: Date | string;
    execution_time: number;
    success: boolean;
};
export type flyway_schema_historyUpdateManyMutationInput = {
    installed_rank?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    script?: Prisma.StringFieldUpdateOperationsInput | string;
    checksum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    installed_by?: Prisma.StringFieldUpdateOperationsInput | string;
    installed_on?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    execution_time?: Prisma.IntFieldUpdateOperationsInput | number;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type flyway_schema_historyUncheckedUpdateManyInput = {
    installed_rank?: Prisma.IntFieldUpdateOperationsInput | number;
    version?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    script?: Prisma.StringFieldUpdateOperationsInput | string;
    checksum?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    installed_by?: Prisma.StringFieldUpdateOperationsInput | string;
    installed_on?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    execution_time?: Prisma.IntFieldUpdateOperationsInput | number;
    success?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type flyway_schema_historyCountOrderByAggregateInput = {
    installed_rank?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    script?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    installed_by?: Prisma.SortOrder;
    installed_on?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
};
export type flyway_schema_historyAvgOrderByAggregateInput = {
    installed_rank?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
};
export type flyway_schema_historyMaxOrderByAggregateInput = {
    installed_rank?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    script?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    installed_by?: Prisma.SortOrder;
    installed_on?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
};
export type flyway_schema_historyMinOrderByAggregateInput = {
    installed_rank?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    script?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    installed_by?: Prisma.SortOrder;
    installed_on?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
    success?: Prisma.SortOrder;
};
export type flyway_schema_historySumOrderByAggregateInput = {
    installed_rank?: Prisma.SortOrder;
    checksum?: Prisma.SortOrder;
    execution_time?: Prisma.SortOrder;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type flyway_schema_historySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    installed_rank?: boolean;
    version?: boolean;
    description?: boolean;
    type?: boolean;
    script?: boolean;
    checksum?: boolean;
    installed_by?: boolean;
    installed_on?: boolean;
    execution_time?: boolean;
    success?: boolean;
}, ExtArgs["result"]["flyway_schema_history"]>;
export type flyway_schema_historySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    installed_rank?: boolean;
    version?: boolean;
    description?: boolean;
    type?: boolean;
    script?: boolean;
    checksum?: boolean;
    installed_by?: boolean;
    installed_on?: boolean;
    execution_time?: boolean;
    success?: boolean;
}, ExtArgs["result"]["flyway_schema_history"]>;
export type flyway_schema_historySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    installed_rank?: boolean;
    version?: boolean;
    description?: boolean;
    type?: boolean;
    script?: boolean;
    checksum?: boolean;
    installed_by?: boolean;
    installed_on?: boolean;
    execution_time?: boolean;
    success?: boolean;
}, ExtArgs["result"]["flyway_schema_history"]>;
export type flyway_schema_historySelectScalar = {
    installed_rank?: boolean;
    version?: boolean;
    description?: boolean;
    type?: boolean;
    script?: boolean;
    checksum?: boolean;
    installed_by?: boolean;
    installed_on?: boolean;
    execution_time?: boolean;
    success?: boolean;
};
export type flyway_schema_historyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"installed_rank" | "version" | "description" | "type" | "script" | "checksum" | "installed_by" | "installed_on" | "execution_time" | "success", ExtArgs["result"]["flyway_schema_history"]>;
export type $flyway_schema_historyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "flyway_schema_history";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        installed_rank: number;
        version: string | null;
        description: string;
        type: string;
        script: string;
        checksum: number | null;
        installed_by: string;
        installed_on: Date;
        execution_time: number;
        success: boolean;
    }, ExtArgs["result"]["flyway_schema_history"]>;
    composites: {};
};
export type flyway_schema_historyGetPayload<S extends boolean | null | undefined | flyway_schema_historyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload, S>;
export type flyway_schema_historyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<flyway_schema_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Flyway_schema_historyCountAggregateInputType | true;
};
export interface flyway_schema_historyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['flyway_schema_history'];
        meta: {
            name: 'flyway_schema_history';
        };
    };
    findUnique<T extends flyway_schema_historyFindUniqueArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends flyway_schema_historyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends flyway_schema_historyFindFirstArgs>(args?: Prisma.SelectSubset<T, flyway_schema_historyFindFirstArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends flyway_schema_historyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, flyway_schema_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends flyway_schema_historyFindManyArgs>(args?: Prisma.SelectSubset<T, flyway_schema_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends flyway_schema_historyCreateArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyCreateArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends flyway_schema_historyCreateManyArgs>(args?: Prisma.SelectSubset<T, flyway_schema_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends flyway_schema_historyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, flyway_schema_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends flyway_schema_historyDeleteArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyDeleteArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends flyway_schema_historyUpdateArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyUpdateArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends flyway_schema_historyDeleteManyArgs>(args?: Prisma.SelectSubset<T, flyway_schema_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends flyway_schema_historyUpdateManyArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends flyway_schema_historyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends flyway_schema_historyUpsertArgs>(args: Prisma.SelectSubset<T, flyway_schema_historyUpsertArgs<ExtArgs>>): Prisma.Prisma__flyway_schema_historyClient<runtime.Types.Result.GetResult<Prisma.$flyway_schema_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends flyway_schema_historyCountArgs>(args?: Prisma.Subset<T, flyway_schema_historyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Flyway_schema_historyCountAggregateOutputType> : number>;
    aggregate<T extends Flyway_schema_historyAggregateArgs>(args: Prisma.Subset<T, Flyway_schema_historyAggregateArgs>): Prisma.PrismaPromise<GetFlyway_schema_historyAggregateType<T>>;
    groupBy<T extends flyway_schema_historyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: flyway_schema_historyGroupByArgs['orderBy'];
    } : {
        orderBy?: flyway_schema_historyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, flyway_schema_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlyway_schema_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: flyway_schema_historyFieldRefs;
}
export interface Prisma__flyway_schema_historyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface flyway_schema_historyFieldRefs {
    readonly installed_rank: Prisma.FieldRef<"flyway_schema_history", 'Int'>;
    readonly version: Prisma.FieldRef<"flyway_schema_history", 'String'>;
    readonly description: Prisma.FieldRef<"flyway_schema_history", 'String'>;
    readonly type: Prisma.FieldRef<"flyway_schema_history", 'String'>;
    readonly script: Prisma.FieldRef<"flyway_schema_history", 'String'>;
    readonly checksum: Prisma.FieldRef<"flyway_schema_history", 'Int'>;
    readonly installed_by: Prisma.FieldRef<"flyway_schema_history", 'String'>;
    readonly installed_on: Prisma.FieldRef<"flyway_schema_history", 'DateTime'>;
    readonly execution_time: Prisma.FieldRef<"flyway_schema_history", 'Int'>;
    readonly success: Prisma.FieldRef<"flyway_schema_history", 'Boolean'>;
}
export type flyway_schema_historyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    where: Prisma.flyway_schema_historyWhereUniqueInput;
};
export type flyway_schema_historyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    where: Prisma.flyway_schema_historyWhereUniqueInput;
};
export type flyway_schema_historyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    where?: Prisma.flyway_schema_historyWhereInput;
    orderBy?: Prisma.flyway_schema_historyOrderByWithRelationInput | Prisma.flyway_schema_historyOrderByWithRelationInput[];
    cursor?: Prisma.flyway_schema_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Flyway_schema_historyScalarFieldEnum | Prisma.Flyway_schema_historyScalarFieldEnum[];
};
export type flyway_schema_historyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    where?: Prisma.flyway_schema_historyWhereInput;
    orderBy?: Prisma.flyway_schema_historyOrderByWithRelationInput | Prisma.flyway_schema_historyOrderByWithRelationInput[];
    cursor?: Prisma.flyway_schema_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Flyway_schema_historyScalarFieldEnum | Prisma.Flyway_schema_historyScalarFieldEnum[];
};
export type flyway_schema_historyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    where?: Prisma.flyway_schema_historyWhereInput;
    orderBy?: Prisma.flyway_schema_historyOrderByWithRelationInput | Prisma.flyway_schema_historyOrderByWithRelationInput[];
    cursor?: Prisma.flyway_schema_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Flyway_schema_historyScalarFieldEnum | Prisma.Flyway_schema_historyScalarFieldEnum[];
};
export type flyway_schema_historyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.flyway_schema_historyCreateInput, Prisma.flyway_schema_historyUncheckedCreateInput>;
};
export type flyway_schema_historyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.flyway_schema_historyCreateManyInput | Prisma.flyway_schema_historyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type flyway_schema_historyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    data: Prisma.flyway_schema_historyCreateManyInput | Prisma.flyway_schema_historyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type flyway_schema_historyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.flyway_schema_historyUpdateInput, Prisma.flyway_schema_historyUncheckedUpdateInput>;
    where: Prisma.flyway_schema_historyWhereUniqueInput;
};
export type flyway_schema_historyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.flyway_schema_historyUpdateManyMutationInput, Prisma.flyway_schema_historyUncheckedUpdateManyInput>;
    where?: Prisma.flyway_schema_historyWhereInput;
    limit?: number;
};
export type flyway_schema_historyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.flyway_schema_historyUpdateManyMutationInput, Prisma.flyway_schema_historyUncheckedUpdateManyInput>;
    where?: Prisma.flyway_schema_historyWhereInput;
    limit?: number;
};
export type flyway_schema_historyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    where: Prisma.flyway_schema_historyWhereUniqueInput;
    create: Prisma.XOR<Prisma.flyway_schema_historyCreateInput, Prisma.flyway_schema_historyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.flyway_schema_historyUpdateInput, Prisma.flyway_schema_historyUncheckedUpdateInput>;
};
export type flyway_schema_historyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
    where: Prisma.flyway_schema_historyWhereUniqueInput;
};
export type flyway_schema_historyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.flyway_schema_historyWhereInput;
    limit?: number;
};
export type flyway_schema_historyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.flyway_schema_historySelect<ExtArgs> | null;
    omit?: Prisma.flyway_schema_historyOmit<ExtArgs> | null;
};
