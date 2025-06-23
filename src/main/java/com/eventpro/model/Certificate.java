package com.eventpro.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;

/**
 * Certificate entity representing event completion certificates
 */
@Entity
@Table(name = "certificates")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Certificate {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    @Column(name = "certificate_id", unique = true, nullable = false)
    private String certificateId;
    
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "participant_id", nullable = false)
    private User participant;
    
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;
    
    @NotBlank
    @Column(name = "verification_code", unique = true, nullable = false)
    private String verificationCode;
    
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private CertificateType type = CertificateType.STANDARD;
    
    @Column(name = "file_path")
    private String filePath;
    
    @Column(name = "issued_date", nullable = false)
    private LocalDateTime issuedDate;
    
    @Column(name = "completion_hours")
    private Integer completionHours;
    
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (issuedDate == null) {
            issuedDate = LocalDateTime.now();
        }
    }
    
    // Business methods
    public String getDisplayTitle() {
        return String.format("Certificado de %s - %s", 
                type.getDisplayName(), event.getTitle());
    }
    
    public boolean isValid() {
        return certificateId != null && verificationCode != null && 
               participant != null && event != null;
    }
}
