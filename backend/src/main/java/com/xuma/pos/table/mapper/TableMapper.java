package com.xuma.pos.table.mapper;

import com.xuma.pos.table.dto.TableResponse;
import com.xuma.pos.table.entity.RestaurantTable;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TableMapper {
    TableResponse toResponse(RestaurantTable table);
}
