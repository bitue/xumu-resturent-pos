package com.xuma.pos.menu.mapper;

import com.xuma.pos.menu.dto.MenuItemResponse;
import com.xuma.pos.menu.entity.Allergen;
import com.xuma.pos.menu.entity.MenuItem;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.Set;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface MenuItemMapper {

    @Mapping(target = "categoryId", source = "category.id")
    @Mapping(target = "allergens", source = "allergens", qualifiedByName = "mapAllergens")
    MenuItemResponse toResponse(MenuItem item);

    @Named("mapAllergens")
    default Set<String> mapAllergens(Set<Allergen> allergens) {
        if (allergens == null) return Set.of();
        return allergens.stream().map(Allergen::getName).collect(Collectors.toSet());
    }
}
