package com.eventpro.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

/**
 * Event entity representing an event in the platform
 */
@Entity
@Table(name = "events")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Event {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Event title is required")
    @Size(max = 200, message = "Title must not exceed 200 characters")
    @Column(nullable = false)
    private String title;
    
    @NotBlank(message = "Event description is required")
    @Size(max = 2000, message = "Description must not exceed 2000 characters")
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @NotNull(message = "Start date is required")
    @Future(message = "Start date must be in the future")
    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate;
    
    @NotNull(message = "End date is required")
    @Column(name = "end_date", nullable = false)
    private LocalDateTime endDate;
    
    @Column(name = "registration_start")
    private LocalDateTime registrationStart;
    
    @Column(name = "registration_end")
    private LocalDateTime registrationEnd;
    
    @NotBlank(message = "Location is required")
    private String location;
    
    private String address;
    
    @Column(name = "virtual_link")
    private String virtualLink;
    
    @Builder.Default
    @Column(name = "is_virtual")
    private Boolean isVirtual = false;
    
    @NotNull(message = "Maximum attendees is required")
    @Min(value = 1, message = "Maximum attendees must be at least 1")
    @Column(name = "max_attendees", nullable = false)
    private Integer maxAttendees;
    
    @Builder.Default
    @Column(name = "current_attendees")
    private Integer currentAttendees = 0;
    
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private EventType type = EventType.CONFERENCE;
    
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private EventStatus status = EventStatus.DRAFT;
    
    @DecimalMin(value = "0.0", message = "Price must be non-negative")
    @Builder.Default
    private Double price = 0.0;
    
    @Builder.Default
    @Column(name = "is_free")
    private Boolean isFree = true;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @ElementCollection
    @CollectionTable(name = "event_tags", joinColumns = @JoinColumn(name = "event_id"))
    @Column(name = "tag")
    private Set<String> tags;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "organizer_id", nullable = false)
    private User organizer;
    
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Registration> registrations;
    
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Certificate> certificates;
    
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    
    // Business methods
    public boolean hasAvailableSpots() {
        return currentAttendees < maxAttendees;
    }
    
    public int getAvailableSpots() {
        return maxAttendees - currentAttendees;
    }
    
    public double getOccupancyRate() {
        return (double) currentAttendees / maxAttendees * 100;
    }
    
    public boolean isRegistrationOpen() {
        LocalDateTime now = LocalDateTime.now();
        return (registrationStart == null || now.isAfter(registrationStart)) &&
               (registrationEnd == null || now.isBefore(registrationEnd)) &&
               status == EventStatus.PUBLISHED;
    }
}
