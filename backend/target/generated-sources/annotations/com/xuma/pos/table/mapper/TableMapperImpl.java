package com.xuma.pos.table.mapper;

import com.xuma.pos.table.dto.TableResponse;
import com.xuma.pos.table.entity.RestaurantTable;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-05T18:45:20+0600",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.6 (Oracle Corporation)"
)
@Component
public class TableMapperImpl implements TableMapper {

    @Override
    public TableResponse toResponse(RestaurantTable table) {
        if ( table == null ) {
            return null;
        }

        TableResponse tableResponse = new TableResponse();

        tableResponse.setId( table.getId() );
        tableResponse.setTableNumber( table.getTableNumber() );
        tableResponse.setCapacity( table.getCapacity() );
        tableResponse.setStatus( table.getStatus() );

        return tableResponse;
    }
}
