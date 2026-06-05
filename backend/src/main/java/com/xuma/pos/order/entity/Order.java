package com.xuma.pos.order.entity;

import com.xuma.pos.common.entity.SoftDeletableEntity;
import com.xuma.pos.common.exception.ValidationException;
import com.xuma.pos.menu.entity.MenuItem;
import com.xuma.pos.order.exception.InvalidOrderStateException;
import com.xuma.pos.order.state.OrderStateMachine;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static java.math.BigDecimal.ZERO;

@Entity
@Table(name="orders")
@Getter
@NoArgsConstructor(access=AccessLevel.PROTECTED)
public class Order extends SoftDeletableEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    @Column(nullable=false, unique=true) String orderNumber;
    @Enumerated(EnumType.STRING) OrderType type;
    @Enumerated(EnumType.STRING) OrderStatus status = OrderStatus.PENDING;
    @Setter BigDecimal subtotal = ZERO;
    @Setter BigDecimal tax = ZERO;
    @Setter BigDecimal discount = ZERO;
    @Setter BigDecimal total = ZERO;
    @Setter String customerNote;
    Long tableId;
    Long assignedWaiterId;
    Long customerId;
    @Column(unique=true) String idempotencyKey;

    @OneToMany(mappedBy="order", cascade=ALL, orphanRemoval=true)
    private final List<OrderItem> items = new ArrayList<>();

    public static Order open(OrderType type, Long tableId, Long customerId, Long waiterId,
                             String orderNumber, String idempotencyKey) {
        Order o = new Order();
        o.type = type; o.tableId = tableId; o.customerId = customerId;
        o.assignedWaiterId = waiterId;
        o.orderNumber = orderNumber;
        o.idempotencyKey = idempotencyKey;
        return o;
    }

    public OrderItem addItem(MenuItem menuItem, int quantity, String note) {
        if (status != OrderStatus.PENDING)
            throw new InvalidOrderStateException("Cannot modify a " + status + " order");
        if (!menuItem.isAvailable())
            throw new ValidationException("Item not available: " + menuItem.getName());
        OrderItem oi = OrderItem.of(this, menuItem, quantity, note);
        items.add(oi);
        recalculate();
        return oi;
    }

    public void transitionTo(OrderStatus next) {
        OrderStateMachine.validate(this.status, next);
        this.status = next;
    }

    public void applyDiscount(BigDecimal amount) {
        if (amount.signum() < 0 || amount.compareTo(subtotal) > 0)
            throw new ValidationException("Invalid discount amount");
        this.discount = amount;
        recalculate();
    }

    private void recalculate() {
        this.subtotal = items.stream()
            .map(i -> i.getUnitPrice().multiply(BigDecimal.valueOf(i.getQuantity())))
            .reduce(ZERO, BigDecimal::add);
        this.total = this.subtotal.add(this.tax).subtract(this.discount);
    }
}
