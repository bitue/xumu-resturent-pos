package com.xuma.pos.table.repository;

import com.xuma.pos.table.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByReservationTimeBetweenOrderByReservationTimeAsc(LocalDateTime start, LocalDateTime end);
    List<Reservation> findByCustomerPhoneOrderByReservationTimeDesc(String phone);
}
