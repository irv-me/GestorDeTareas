package com.eventpro.repository;

import com.eventpro.model.Certificate;
import com.eventpro.model.CertificateType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repository interface for Certificate entity
 */
@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {
    
    List<Certificate> findByParticipantId(Long participantId);
    
    List<Certificate> findByEventId(Long eventId);
    
    List<Certificate> findByType(CertificateType type);
    
    Optional<Certificate> findByCertificateId(String certificateId);
    
    Optional<Certificate> findByVerificationCode(String verificationCode);
    
    @Query("SELECT c FROM Certificate c WHERE c.participant.id = :participantId AND c.event.id = :eventId")
    Optional<Certificate> findByParticipantIdAndEventId(@Param("participantId") Long participantId, 
                                                       @Param("eventId") Long eventId);
    
    @Query("SELECT COUNT(c) FROM Certificate c WHERE c.type = :type")
    Long countByType(@Param("type") CertificateType type);
    
    boolean existsByCertificateId(String certificateId);
    
    boolean existsByVerificationCode(String verificationCode);
}
