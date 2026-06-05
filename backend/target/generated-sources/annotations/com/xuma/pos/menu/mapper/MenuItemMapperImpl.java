package com.xuma.pos.menu.mapper;

import com.xuma.pos.menu.dto.MenuItemResponse;
import com.xuma.pos.menu.entity.Category;
import com.xuma.pos.menu.entity.MenuItem;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-06-05T18:31:43+0600",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.6 (Oracle Corporation)"
)
@Component
public class MenuItemMapperImpl implements MenuItemMapper {

    @Override
    public MenuItemResponse toResponse(MenuItem item) {
        if ( item == null ) {
            return null;
        }

        MenuItemResponse.MenuItemResponseBuilder menuItemResponse = MenuItemResponse.builder();

        menuItemResponse.categoryId( itemCategoryId( item ) );
        menuItemResponse.allergens( mapAllergens( item.getAllergens() ) );
        menuItemResponse.id( item.getId() );
        menuItemResponse.name( item.getName() );
        menuItemResponse.description( item.getDescription() );
        menuItemResponse.price( item.getPrice() );
        menuItemResponse.imageUrl( item.getImageUrl() );
        menuItemResponse.available( item.isAvailable() );
        menuItemResponse.featured( item.isFeatured() );
        menuItemResponse.prepTimeMinutes( item.getPrepTimeMinutes() );
        menuItemResponse.calories( item.getCalories() );

        return menuItemResponse.build();
    }

    private Long itemCategoryId(MenuItem menuItem) {
        if ( menuItem == null ) {
            return null;
        }
        Category category = menuItem.getCategory();
        if ( category == null ) {
            return null;
        }
        Long id = category.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
