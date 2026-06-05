package com.xuma.pos.menu.service;

import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.menu.dto.CreateMenuItemRequest;
import com.xuma.pos.menu.dto.MenuItemResponse;
import com.xuma.pos.menu.dto.UpdateMenuItemRequest;
import com.xuma.pos.menu.entity.Allergen;
import com.xuma.pos.menu.entity.Category;
import com.xuma.pos.menu.entity.MenuItem;
import com.xuma.pos.menu.mapper.MenuItemMapper;
import com.xuma.pos.menu.repository.AllergenRepository;
import com.xuma.pos.menu.repository.CategoryRepository;
import com.xuma.pos.menu.repository.MenuItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MenuService {
    private final MenuItemRepository menuItemRepository;
    private final CategoryRepository categoryRepository;
    private final AllergenRepository allergenRepository;
    private final MenuCacheService menuCacheService;
    private final MenuItemMapper menuItemMapper;

    public List<MenuItemResponse> getFullAvailableMenu() {
        return menuCacheService.getFullMenu().orElseGet(() -> {
            List<MenuItemResponse> data = menuItemRepository.findAllAvailable().stream()
                    .map(menuItemMapper::toResponse)
                    .collect(Collectors.toList());
            menuCacheService.putFullMenu(data);
            return data;
        });
    }

    public List<MenuItemResponse> getFeaturedMenu() {
        return menuCacheService.getFeatured().orElseGet(() -> {
            List<MenuItemResponse> data = menuItemRepository.findAllFeatured().stream()
                    .map(menuItemMapper::toResponse)
                    .collect(Collectors.toList());
            menuCacheService.putFeatured(data);
            return data;
        });
    }

    @Transactional
    public MenuItemResponse createMenuItem(CreateMenuItemRequest request) {
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new NotFoundException("Category not found"));

        Set<Allergen> allergens = resolveAllergens(request.getAllergenIds());

        MenuItem item = MenuItem.builder()
                .category(category)
                .name(request.getName())
                .description(request.getDescription())
                .price(request.getPrice())
                .imageUrl(request.getImageUrl())
                .available(request.isAvailable())
                .featured(request.isFeatured())
                .prepTimeMinutes(request.getPrepTimeMinutes())
                .calories(request.getCalories())
                .allergens(allergens)
                .build();

        item = menuItemRepository.save(item);
        menuCacheService.evictAll();
        return menuItemMapper.toResponse(item);
    }

    @Transactional
    public MenuItemResponse updateMenuItem(Long id, UpdateMenuItemRequest request) {
        MenuItem item = menuItemRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("MenuItem not found"));

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new NotFoundException("Category not found"));

        Set<Allergen> allergens = resolveAllergens(request.getAllergenIds());

        item.setCategory(category);
        item.setName(request.getName());
        item.setDescription(request.getDescription());
        item.updatePrice(request.getPrice());
        item.setImageUrl(request.getImageUrl());
        item.setAvailable(request.isAvailable());
        item.setFeatured(request.isFeatured());
        item.setPrepTimeMinutes(request.getPrepTimeMinutes());
        item.setCalories(request.getCalories());
        item.setAllergens(allergens);

        item = menuItemRepository.save(item);
        menuCacheService.evictAll();
        return menuItemMapper.toResponse(item);
    }

    @Transactional
    public void deleteMenuItem(Long id) {
        MenuItem item = menuItemRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("MenuItem not found"));
        item.softDelete();
        menuItemRepository.save(item);
        menuCacheService.evictAll();
    }

    @Transactional
    public void toggleAvailability(Long id) {
        MenuItem item = menuItemRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("MenuItem not found"));
        
        if (item.isAvailable()) {
            item.make86();
        } else {
            item.restock();
        }
        
        menuItemRepository.save(item);
        menuCacheService.evictAll();
    }

    private Set<Allergen> resolveAllergens(Set<Long> allergenIds) {
        if (allergenIds == null || allergenIds.isEmpty()) return Set.of();
        return allergenIds.stream()
                .map(id -> allergenRepository.findById(id)
                        .orElseThrow(() -> new NotFoundException("Allergen not found: " + id)))
                .collect(Collectors.toSet());
    }
}
