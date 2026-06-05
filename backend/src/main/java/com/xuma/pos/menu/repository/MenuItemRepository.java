package com.xuma.pos.menu.repository;

import com.xuma.pos.menu.entity.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    @Query("SELECT m FROM MenuItem m WHERE m.deletedAt IS NULL AND m.available = true")
    List<MenuItem> findAllAvailable();

    @Query("SELECT m FROM MenuItem m WHERE m.deletedAt IS NULL AND m.available = true AND m.featured = true")
    List<MenuItem> findAllFeatured();
}
