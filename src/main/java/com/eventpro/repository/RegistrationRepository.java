package com.eventpro.repository;

import com.eventpro.model.Registration;
import com.eventpro.model.RegistrationStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repository interface for Registration entity
 */
@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    
    List<Registration> findByUserId(Long userId);
    
    List<Registration> findByEventId(Long eventId);
    
    List<Registration> findByStatus(RegistrationStatus status);
    
    Optional<Registration> findByUserIdAndEventId(Long userId, Long eventId);
    
    @Query("SELECT r FROM Registration r WHERE r.event.id = :eventId AND r.status = :status")
    List<Registration> findByEventIdAndStatus(@Param("eventId") Long eventId, 
                                            @Param("status") RegistrationStatus status);
    
    @Query("SELECT COUNT(r) FROM Registration r WHERE r.event.id = :eventId AND r.status = :status")
    Long countByEventIdAndStatus(@Param("eventId") Long eventId, 
                                @Param("status") RegistrationStatus status);
    
    @Query("SELECT r FROM Registration r WHERE r.attended = true AND r.status = :status")
    List<Registration> findAttendedRegistrations(@Param("status") RegistrationStatus status);
    
    boolean existsByUserIdAndEventId(Long userId, Long eventId);
}
