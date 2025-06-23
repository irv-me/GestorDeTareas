package com.eventpro.service;

import com.eventpro.model.Event;
import com.eventpro.model.EventStatus;
import com.eventpro.model.EventType;
import com.eventpro.repository.EventRepository;
import com.eventpro.patterns.observer.EventManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Service class for Event management
 */
@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class EventService {
    
    private final EventRepository eventRepository;
    private final EventManager eventManager;
    
    /**
     * Create a new event
     */
    public Event createEvent(Event event) {
        log.info("📅 Creating new event: {}", event.getTitle());
        
        // Set default values
        if (event.getStatus() == null) {
            event.setStatus(EventStatus.DRAFT);
        }
        if (event.getCurrentAttendees() == null) {
            event.setCurrentAttendees(0);
        }
        
        Event savedEvent = eventRepository.save(event);
        
        // Notify observers
        eventManager.createEvent(savedEvent);
        
        log.info("✅ Event created successfully with ID: {}", savedEvent.getId());
        return savedEvent;
    }
    
    /**
     * Update an existing event
     */
    public Event updateEvent(Long eventId, Event updatedEvent) {
        log.info("📝 Updating event ID: {}", eventId);
        
        Event existingEvent = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found with ID: " + eventId));
        
        // Update fields
        existingEvent.setTitle(updatedEvent.getTitle());
        existingEvent.setDescription(updatedEvent.getDescription());
        existingEvent.setStartDate(updatedEvent.getStartDate());
        existingEvent.setEndDate(updatedEvent.getEndDate());
        existingEvent.setLocation(updatedEvent.getLocation());
        existingEvent.setMaxAttendees(updatedEvent.getMaxAttendees());
        existingEvent.setPrice(updatedEvent.getPrice());
        
        Event savedEvent = eventRepository.save(existingEvent);
        
        // Notify observers
        eventManager.updateEvent(eventId, savedEvent);
        
        log.info("✅ Event updated successfully: {}", savedEvent.getTitle());
        return savedEvent;
    }
    
    /**
     * Get event by ID
     */
    @Transactional(readOnly = true)
    public Optional<Event> getEventById(Long eventId) {
        log.debug("🔍 Fetching event by ID: {}", eventId);
        return eventRepository.findById(eventId);
    }
    
    /**
     * Get all events with pagination
     */
    @Transactional(readOnly = true)
    public Page<Event> getAllEvents(Pageable pageable) {
        log.debug("📋 Fetching all events with pagination");
        return eventRepository.findAll(pageable);
    }
    
    /**
     * Get upcoming events
     */
    @Transactional(readOnly = true)
    public List<Event> getUpcomingEvents() {
        log.debug("📅 Fetching upcoming events");
        return eventRepository.findUpcomingEvents(LocalDateTime.now(), EventStatus.PUBLISHED);
    }
    
    /**
     * Search events
     */
    @Transactional(readOnly = true)
    public Page<Event> searchEvents(String searchTerm, Pageable pageable) {
        log.debug("🔍 Searching events with term: {}", searchTerm);
        return eventRepository.searchEvents(searchTerm, pageable);
    }
    
    /**
     * Get events by organizer
     */
    @Transactional(readOnly = true)
    public List<Event> getEventsByOrganizer(Long organizerId) {
        log.debug("👤 Fetching events by organizer ID: {}", organizerId);
        return eventRepository.findByOrganizerId(organizerId);
    }
    
    /**
     * Get events by type
     */
    @Transactional(readOnly = true)
    public List<Event> getEventsByType(EventType eventType) {
        log.debug("🏷️ Fetching events by type: {}", eventType);
        return eventRepository.findByType(eventType);
    }
    
    /**
     * Publish an event
     */
    public Event publishEvent(Long eventId) {
        log.info("📢 Publishing event ID: {}", eventId);
        
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found with ID: " + eventId));
        
        event.setStatus(EventStatus.PUBLISHED);
        Event publishedEvent = eventRepository.save(event);
        
        log.info("✅ Event published successfully: {}", publishedEvent.getTitle());
        return publishedEvent;
    }
    
    /**
     * Cancel an event
     */
    public Event cancelEvent(Long eventId) {
        log.info("❌ Cancelling event ID: {}", eventId);
        
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found with ID: " + eventId));
        
        event.setStatus(EventStatus.CANCELLED);
        Event cancelledEvent = eventRepository.save(event);
        
        // Notify observers
        eventManager.cancelEvent(eventId, cancelledEvent.getTitle());
        
        log.info("✅ Event cancelled successfully: {}", cancelledEvent.getTitle());
        return cancelledEvent;
    }
    
    /**
     * Complete an event
     */
    public Event completeEvent(Long eventId) {
        log.info("🏁 Completing event ID: {}", eventId);
        
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found with ID: " + eventId));
        
        event.setStatus(EventStatus.COMPLETED);
        Event completedEvent = eventRepository.save(event);
        
        // Notify observers
        eventManager.completeEvent(eventId, completedEvent.getTitle());
        
        log.info("✅ Event completed successfully: {}", completedEvent.getTitle());
        return completedEvent;
    }
    
    /**
     * Delete an event
     */
    public void deleteEvent(Long eventId) {
        log.info("🗑️ Deleting event ID: {}", eventId);
        
        if (!eventRepository.existsById(eventId)) {
            throw new RuntimeException("Event not found with ID: " + eventId);
        }
        
        eventRepository.deleteById(eventId);
        log.info("✅ Event deleted successfully");
    }
    
    /**
     * Get event statistics
     */
    @Transactional(readOnly = true)
    public EventStatistics getEventStatistics() {
        log.debug("📊 Calculating event statistics");
        
        Long totalEvents = eventRepository.count();
        Long publishedEvents = eventRepository.countEventsByStatus(EventStatus.PUBLISHED);
        Long completedEvents = eventRepository.countEventsByStatus(EventStatus.COMPLETED);
        Long totalAttendees = eventRepository.getTotalAttendeesByStatus(EventStatus.PUBLISHED);
        
        return new EventStatistics(totalEvents, publishedEvents, completedEvents, 
                totalAttendees != null ? totalAttendees : 0L);
    }
    
    /**
     * Inner class for event statistics
     */
    public record EventStatistics(Long totalEvents, Long publishedEvents, 
                                 Long completedEvents, Long totalAttendees) {}
}
