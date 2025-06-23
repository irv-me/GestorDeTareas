package com.eventpro.controller;

import com.eventpro.model.Event;
import com.eventpro.model.EventType;
import com.eventpro.service.EventService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

/**
 * REST Controller for Event management
 */
@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
public class EventController {
    
    private final EventService eventService;
    
    /**
     * Create a new event
     */
    @PostMapping
    public ResponseEntity<Event> createEvent(@Valid @RequestBody Event event) {
        log.info("📅 REST: Creating new event: {}", event.getTitle());
        try {
            Event createdEvent = eventService.createEvent(event);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
        } catch (Exception e) {
            log.error("❌ Error creating event: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    /**
     * Get all events with pagination
     */
    @GetMapping
    public ResponseEntity<Page<Event>> getAllEvents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "startDate") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir) {
        
        log.debug("📋 REST: Fetching events - page: {}, size: {}", page, size);
        
        Sort sort = sortDir.equalsIgnoreCase("desc") ? 
                Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        Pageable pageable = PageRequest.of(page, size, sort);
        
        Page<Event> events = eventService.getAllEvents(pageable);
        return ResponseEntity.ok(events);
    }
    
    /**
     * Get event by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        log.debug("🔍 REST: Fetching event by ID: {}", id);
        
        return eventService.getEventById(id)
                .map(event -> ResponseEntity.ok(event))
                .orElse(ResponseEntity.notFound().build());
    }
    
    /**
     * Update an event
     */
    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @Valid @RequestBody Event event) {
        log.info("📝 REST: Updating event ID: {}", id);
        try {
            Event updatedEvent = eventService.updateEvent(id, event);
            return ResponseEntity.ok(updatedEvent);
        } catch (RuntimeException e) {
            log.error("❌ Error updating event: {}", e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
    
    /**
     * Delete an event
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        log.info("🗑️ REST: Deleting event ID: {}", id);
        try {
            eventService.deleteEvent(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            log.error("❌ Error deleting event: {}", e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
    
    /**
     * Get upcoming events
     */
    @GetMapping("/upcoming")
    public ResponseEntity<List<Event>> getUpcomingEvents() {
        log.debug("📅 REST: Fetching upcoming events");
        List<Event> upcomingEvents = eventService.getUpcomingEvents();
        return ResponseEntity.ok(upcomingEvents);
    }
    
    /**
     * Search events
     */
    @GetMapping("/search")
    public ResponseEntity<Page<Event>> searchEvents(
            @RequestParam String q,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        
        log.debug("🔍 REST: Searching events with query: {}", q);
        
        Pageable pageable = PageRequest.of(page, size);
        Page<Event> events = eventService.searchEvents(q, pageable);
        return ResponseEntity.ok(events);
    }
    
    /**
     * Get events by organizer
     */
    @GetMapping("/organizer/{organizerId}")
    public ResponseEntity<List<Event>> getEventsByOrganizer(@PathVariable Long organizerId) {
        log.debug("👤 REST: Fetching events by organizer ID: {}", organizerId);
        List<Event> events = eventService.getEventsByOrganizer(organizerId);
        return ResponseEntity.ok(events);
    }
    
    /**
     * Get events by type
     */
    @GetMapping("/type/{eventType}")
    public ResponseEntity<List<Event>> getEventsByType(@PathVariable EventType eventType) {
        log.debug("🏷️ REST: Fetching events by type: {}", eventType);
        List<Event> events = eventService.getEventsByType(eventType);
        return ResponseEntity.ok(events);
    }
    
    /**
     * Publish an event
     */
    @PutMapping("/{id}/publish")
    public ResponseEntity<Event> publishEvent(@PathVariable Long id) {
        log.info("📢 REST: Publishing event ID: {}", id);
        try {
            Event publishedEvent = eventService.publishEvent(id);
            return ResponseEntity.ok(publishedEvent);
        } catch (RuntimeException e) {
            log.error("❌ Error publishing event: {}", e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
    
    /**
     * Cancel an event
     */
    @PutMapping("/{id}/cancel")
    public ResponseEntity<Event> cancelEvent(@PathVariable Long id) {
        log.info("❌ REST: Cancelling event ID: {}", id);
        try {
            Event cancelledEvent = eventService.cancelEvent(id);
            return ResponseEntity.ok(cancelledEvent);
        } catch (RuntimeException e) {
            log.error("❌ Error cancelling event: {}", e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
    
    /**
     * Complete an event
     */
    @PutMapping("/{id}/complete")
    public ResponseEntity<Event> completeEvent(@PathVariable Long id) {
        log.info("🏁 REST: Completing event ID: {}", id);
        try {
            Event completedEvent = eventService.completeEvent(id);
            return ResponseEntity.ok(completedEvent);
        } catch (RuntimeException e) {
            log.error("❌ Error completing event: {}", e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
    
    /**
     * Get event statistics
     */
    @GetMapping("/statistics")
    public ResponseEntity<EventService.EventStatistics> getEventStatistics() {
        log.debug("📊 REST: Fetching event statistics");
        EventService.EventStatistics stats = eventService.getEventStatistics();
        return ResponseEntity.ok(stats);
    }
}
