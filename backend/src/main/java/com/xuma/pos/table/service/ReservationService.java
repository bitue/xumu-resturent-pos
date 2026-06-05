package com.xuma.pos.table.service;

import com.xuma.pos.common.exception.NotFoundException;
import com.xuma.pos.table.dto.ReservationRequest;
import com.xuma.pos.table.dto.ReservationResponse;
import com.xuma.pos.table.entity.Reservation;
import com.xuma.pos.table.entity.ReservationStatus;
import com.xuma.pos.table.entity.RestaurantTable;
import com.xuma.pos.table.repository.ReservationRepository;
import com.xuma.pos.table.repository.RestaurantTableRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private final RestaurantTableRepository tableRepository;

    @Transactional(readOnly = true)
    public List<ReservationResponse> getReservationsForDate(LocalDate date) {
        return reservationRepository.findByReservationTimeBetweenOrderByReservationTimeAsc(
                date.atStartOfDay(),
                date.plusDays(1).atStartOfDay().minusNanos(1)
        ).stream().map(this::toResponse).collect(Collectors.toList());
    }

    @Transactional
    public ReservationResponse createReservation(ReservationRequest request) {
        RestaurantTable table = null;
        if (request.getTableId() != null) {
            table = tableRepository.findById(request.getTableId())
                    .orElseThrow(() -> new NotFoundException("Table not found"));
        }

        Reservation reservation = Reservation.builder()
                .customerName(request.getCustomerName())
                .customerPhone(request.getCustomerPhone())
                .table(table)
                .reservationTime(request.getReservationTime())
                .partySize(request.getPartySize())
                .status(ReservationStatus.PENDING)
                .specialRequests(request.getSpecialRequests())
                .build();

        reservation = reservationRepository.save(reservation);
        return toResponse(reservation);
    }

    @Transactional
    public ReservationResponse updateStatus(Long id, ReservationStatus status) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Reservation not found"));
        reservation.setStatus(status);
        return toResponse(reservationRepository.save(reservation));
    }
    
    @Transactional
    public ReservationResponse assignTable(Long id, Long tableId) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Reservation not found"));
        RestaurantTable table = tableRepository.findById(tableId)
                .orElseThrow(() -> new NotFoundException("Table not found"));
        
        reservation.setTable(table);
        if (reservation.getStatus() == ReservationStatus.PENDING) {
            reservation.setStatus(ReservationStatus.CONFIRMED);
        }
        return toResponse(reservationRepository.save(reservation));
    }

    private ReservationResponse toResponse(Reservation reservation) {
        return ReservationResponse.builder()
                .id(reservation.getId())
                .customerName(reservation.getCustomerName())
                .customerPhone(reservation.getCustomerPhone())
                .tableId(reservation.getTable() != null ? reservation.getTable().getId() : null)
                .tableNumber(reservation.getTable() != null ? reservation.getTable().getTableNumber() : null)
                .reservationTime(reservation.getReservationTime())
                .partySize(reservation.getPartySize())
                .status(reservation.getStatus())
                .specialRequests(reservation.getSpecialRequests())
                .createdAt(reservation.getCreatedAt() != null ? java.time.LocalDateTime.ofInstant(reservation.getCreatedAt(), java.time.ZoneId.systemDefault()) : null)
                .build();
    }
}
