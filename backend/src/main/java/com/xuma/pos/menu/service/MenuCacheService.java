package com.xuma.pos.menu.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xuma.pos.menu.dto.MenuItemResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MenuCacheService {
    private static final String KEY_FULL = "menu:full";
    private static final String KEY_FEATURED = "menu:featured";
    private static final Duration TTL = Duration.ofMinutes(10);
    
    private final StringRedisTemplate redis;
    private final ObjectMapper json;

    public Optional<List<MenuItemResponse>> getFullMenu() {
        return read(KEY_FULL, new TypeReference<>() {});
    }

    public void putFullMenu(List<MenuItemResponse> data) {
        write(KEY_FULL, data);
    }

    public Optional<List<MenuItemResponse>> getFeatured() {
        return read(KEY_FEATURED, new TypeReference<>() {});
    }

    public void putFeatured(List<MenuItemResponse> data) {
        write(KEY_FEATURED, data);
    }

    public void evictAll() {
        redis.delete(List.of(KEY_FULL, KEY_FEATURED));
    }

    private <T> Optional<T> read(String key, TypeReference<T> type) {
        try {
            String val = redis.opsForValue().get(key);
            if (val != null) {
                return Optional.of(json.readValue(val, type));
            }
        } catch (Exception e) {
            log.error("Failed to read from cache key: {}", key, e);
        }
        return Optional.empty();
    }

    private void write(String key, Object data) {
        try {
            String val = json.writeValueAsString(data);
            redis.opsForValue().set(key, val, TTL);
        } catch (JsonProcessingException e) {
            log.error("Failed to serialize data for cache key: {}", key, e);
        }
    }
}
