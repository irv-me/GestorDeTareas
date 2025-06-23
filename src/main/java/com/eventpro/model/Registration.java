package com.eventpro.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;

/**
 * Registration entity representing user event registrations
 */
@Entity
@Table(name = "registrations")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Registration {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;
    
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private RegistrationStatus status = RegistrationStatus.PENDING;
    
    @Column(name = "registration_date", nullable = false)
    private LocalDateTime registrationDate;
    
    @Column(columnDefinition = "TEXT")
    private String expectations;
    
    @Builder.Default
    private Boolean attended = false;
    
    @Column(name = "attendance_hours")
    private Integer attendanceHours;
    
    @Column(name = "check_in_time")
    private LocalDateTime checkInTime;
    
    @Column(name = "check_out_time")
    private LocalDateTime checkOutTime;
    
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        if (registrationDate == null) {
            registrationDate = LocalDateTime.now();
        }
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    
    // Business methods
    public boolean isEligibleForCertificate() {
        return attended && status == RegistrationStatus.CONFIRMED;
    }
    
    public void checkIn() {
        this.checkInTime = LocalDateTime.now();
        this.attended = true;
    }
    
    public void checkOut() {
        this.checkOutTime = LocalDateTime.now();
        if (checkInTime != null && checkOutTime != null) {
            // Calculate attendance hours
            long hours = java.time.Duration.between(checkInTime, checkOutTime).toHours();
            this.attendanceHours = (int) hours;
        }
    }
}
