package com.xuma.pos.menu.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Set;

@Data
@Builder
public class MenuItemResponse {
    private Long id;
    private Long categoryId;
    private String name;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private boolean available;
    private boolean featured;
    private int prepTimeMinutes;
    private Integer calories;
    private Set<String> allergens;
}
