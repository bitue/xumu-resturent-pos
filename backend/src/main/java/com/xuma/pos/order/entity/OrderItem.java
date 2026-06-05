package com.xuma.pos.order.entity;

import com.xuma.pos.menu.entity.MenuItem;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name="order_items")
@Getter
@NoArgsConstructor(access=AccessLevel.PROTECTED)
public class OrderItem {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="order_id", nullable=false)
    Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="menu_item_id", nullable=false)
    MenuItem menuItem;

    @Column(nullable=false) int quantity;
    @Column(nullable=false) BigDecimal unitPrice;
    String specialRequest;

    @Enumerated(EnumType.STRING)
    @Column(nullable=false)
    OrderItemStatus status = OrderItemStatus.PENDING;

    @Column(nullable=false, updatable=false) Instant createdAt;
    @Column(nullable=false) Instant updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = Instant.now();
        updatedAt = Instant.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = Instant.now();
    }

    public static OrderItem of(Order order, MenuItem menuItem, int quantity, String note) {
        OrderItem oi = new OrderItem();
        oi.order = order;
        oi.menuItem = menuItem;
        oi.quantity = quantity;
        oi.unitPrice = menuItem.getPrice();
        oi.specialRequest = note;
        return oi;
    }

    public void transitionTo(OrderItemStatus next) {
        this.status = next;
    }
}
