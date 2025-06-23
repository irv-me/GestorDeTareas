package com.eventpro.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;

/**
 * User entity representing platform users
 */
@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "First name is required")
    @Size(max = 50, message = "First name must not exceed 50 characters")
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @NotBlank(message = "Last name is required")
    @Size(max = 50, message = "Last name must not exceed 50 characters")
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    @Column(unique = true, nullable = false)
    private String email;
    
    @Pattern(regexp = "^\\+?[1-9]\\d{1,14}$", message = "Phone number must be valid")
    private String phone;
    
    private String organization;
    
    @Column(name = "job_title")
    private String jobTitle;
    
    @Column(columnDefinition = "TEXT")
    private String bio;
    
    @Column(name = "avatar_url")
    private String avatarUrl;
    
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private UserRole role = UserRole.PARTICIPANT;
    
    @Builder.Default
    @Column(name = "is_active")
    private Boolean isActive = true;
    
    @Builder.Default
    @Column(name = "email_notifications")
    private Boolean emailNotifications = true;
    
    @Builder.Default
    @Column(name = "event_reminders")
    private Boolean eventReminders = true;
    
    @Builder.Default
    @Column(name = "newsletter_subscription")
    private Boolean newsletterSubscription = false;
    
    @Builder.Default
    @Column(name = "public_profile")
    private Boolean publicProfile = true;
    
    @OneToMany(mappedBy = "organizer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Event> organizedEvents;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Registration> registrations;
    
    @OneToMany(mappedBy = "participant", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
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
    public String getFullName() {
        return firstName + " " + lastName;
    }
    
    public String getInitials() {
        return (firstName.substring(0, 1) + lastName.substring(0, 1)).toUpperCase();
    }
    
    public boolean isOrganizer() {
        return role == UserRole.ORGANIZER || role == UserRole.ADMIN;
    }
    
    public int getTotalEventsAttended() {
        return registrations != null ? (int) registrations.stream()
                .filter(r -> r.getStatus() == RegistrationStatus.CONFIRMED)
                .count() : 0;
    }
    
    public int getTotalCertificates() {
        return certificates != null ? certificates.size() : 0;
    }
}
