package com.eventpro.repository;

import com.eventpro.model.Event;
import com.eventpro.model.EventStatus;
import com.eventpro.model.EventType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Repository interface for Event entity
 */
@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    
    // Find events by status
    List<Event> findByStatus(EventStatus status);
    
    // Find events by organizer
    List<Event> findByOrganizerId(Long organizerId);
    
    // Find events by type
    List<Event> findByType(EventType type);
    
    // Find upcoming events
    @Query("SELECT e FROM Event e WHERE e.startDate > :now AND e.status = :status ORDER BY e.startDate ASC")
    List<Event> findUpcomingEvents(@Param("now") LocalDateTime now, @Param("status") EventStatus status);
    
    // Find events by date range
    @Query("SELECT e FROM Event e WHERE e.startDate BETWEEN :startDate AND :endDate")
    List<Event> findEventsByDateRange(@Param("startDate") LocalDateTime startDate, 
                                     @Param("endDate") LocalDateTime endDate);
    
    // Search events by title or description
    @Query("SELECT e FROM Event e WHERE " +
           "LOWER(e.title) LIKE LOWER(CONCAT('%', :searchTerm, '%')) OR " +
           "LOWER(e.description) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
    Page<Event> searchEvents(@Param("searchTerm") String searchTerm, Pageable pageable);
    
    // Find events with available spots
    @Query("SELECT e FROM Event e WHERE e.currentAttendees < e.maxAttendees AND e.status = :status")
    List<Event> findEventsWithAvailableSpots(@Param("status") EventStatus status);
    
    // Find events by tag
    @Query("SELECT e FROM Event e JOIN e.tags t WHERE t = :tag")
    List<Event> findEventsByTag(@Param("tag") String tag);
    
    // Get event statistics
    @Query("SELECT COUNT(e) FROM Event e WHERE e.status = :status")
    Long countEventsByStatus(@Param("status") EventStatus status);
    
    @Query("SELECT SUM(e.currentAttendees) FROM Event e WHERE e.status = :status")
    Long getTotalAttendeesByStatus(@Param("status") EventStatus status);
    
    // Find events requiring certificates
    @Query("SELECT e FROM Event e WHERE e.status = :status AND e.endDate < :now")
    List<Event> findCompletedEventsForCertificates(@Param("status") EventStatus status, 
                                                   @Param("now") LocalDateTime now);
}
