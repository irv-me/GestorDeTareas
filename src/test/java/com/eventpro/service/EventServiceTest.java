package com.eventpro.service;

import com.eventpro.model.Event;
import com.eventpro.model.EventStatus;
import com.eventpro.model.EventType;
import com.eventpro.model.User;
import com.eventpro.repository.EventRepository;
import com.eventpro.patterns.observer.EventManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

/**
 * Unit tests for EventService
 */
@ExtendWith(MockitoExtension.class)
class EventServiceTest {
    
    @Mock
    private EventRepository eventRepository;
    
    @Mock
    private EventManager eventManager;
    
    @InjectMocks
    private EventService eventService;
    
    private Event testEvent;
    private User testOrganizer;
    
    @BeforeEach
    void setUp() {
        testOrganizer = User.builder()
                .id(1L)
                .firstName("Juan")
                .lastName("Pérez")
                .email("juan@example.com")
                .build();
        
        testEvent = Event.builder()
                .id(1L)
                .title("Test Event")
                .description("Test Description")
                .startDate(LocalDateTime.now().plusDays(1))
                .endDate(LocalDateTime.now().plusDays(1).plusHours(8))
                .location("Test Location")
                .maxAttendees(100)
                .currentAttendees(0)
                .type(EventType.CONFERENCE)
                .status(EventStatus.DRAFT)
                .organizer(testOrganizer)
                .build();
    }
    
    @Test
    void testCreateEvent() {
        // Given
        when(eventRepository.save(any(Event.class))).thenReturn(testEvent);
        
        // When
        Event createdEvent = eventService.createEvent(testEvent);
        
        // Then
        assertNotNull(createdEvent, "Created event should not be null");
        assertEquals(testEvent.getTitle(), createdEvent.getTitle(), "Title should match");
        assertEquals(EventStatus.DRAFT, createdEvent.getStatus(), "Status should be DRAFT");
        assertEquals(0, createdEvent.getCurrentAttendees(), "Current attendees should be 0");
        
        verify(eventRepository).save(testEvent);
        verify(eventManager).createEvent(testEvent);
    }
    
    @Test
    void testGetEventById() {
        // Given
        when(eventRepository.findById(1L)).thenReturn(Optional.of(testEvent));
        
        // When
        Optional<Event> foundEvent = eventService.getEventById(1L);
        
        // Then
        assertTrue(foundEvent.isPresent(), "Event should be found");
        assertEquals(testEvent.getId(), foundEvent.get().getId(), "Event ID should match");
        
        verify(eventRepository).findById(1L);
    }
    
    @Test
    void testGetEventByIdNotFound() {
        // Given
        when(eventRepository.findById(999L)).thenReturn(Optional.empty());
        
        // When
        Optional<Event> foundEvent = eventService.getEventById(999L);
        
        // Then
        assertFalse(foundEvent.isPresent(), "Event should not be found");
        
        verify(eventRepository).findById(999L);
    }
    
    @Test
    void testUpdateEvent() {
        // Given
        Event updatedEvent = Event.builder()
                .title("Updated Title")
                .description("Updated Description")
                .startDate(testEvent.getStartDate())
                .endDate(testEvent.getEndDate())
                .location("Updated Location")
                .maxAttendees(150)
                .price(50.0)
                .build();
        
        when(eventRepository.findById(1L)).thenReturn(Optional.of(testEvent));
        when(eventRepository.save(any(Event.class))).thenReturn(testEvent);
        
        // When
        Event result = eventService.updateEvent(1L, updatedEvent);
        
        // Then
        assertNotNull(result, "Updated event should not be null");
        
        verify(eventRepository).findById(1L);
        verify(eventRepository).save(any(Event.class));
        verify(eventManager).updateEvent(eq(1L), any(Event.class));
    }
    
    @Test
    void testUpdateEventNotFound() {
        // Given
        when(eventRepository.findById(999L)).thenReturn(Optional.empty());
        
        // When & Then
        assertThrows(RuntimeException.class, () -> {
            eventService.updateEvent(999L, testEvent);
        }, "Should throw exception when event not found");
        
        verify(eventRepository).findById(999L);
        verify(eventRepository, never()).save(any(Event.class));
    }
    
    @Test
    void testPublishEvent() {
        // Given
        when(eventRepository.findById(1L)).thenReturn(Optional.of(testEvent));
        when(eventRepository.save(any(Event.class))).thenReturn(testEvent);
        
        // When
        Event publishedEvent = eventService.publishEvent(1L);
        
        // Then
        assertNotNull(publishedEvent, "Published event should not be null");
        
        verify(eventRepository).findById(1L);
        verify(eventRepository).save(testEvent);
    }
    
    @Test
    void testCancelEvent() {
        // Given
        when(eventRepository.findById(1L)).thenReturn(Optional.of(testEvent));
        when(eventRepository.save(any(Event.class))).thenReturn(testEvent);
        
        // When
        Event cancelledEvent = eventService.cancelEvent(1L);
        
        // Then
        assertNotNull(cancelledEvent, "Cancelled event should not be null");
        
        verify(eventRepository).findById(1L);
        verify(eventRepository).save(testEvent);
        verify(eventManager).cancelEvent(1L, testEvent.getTitle());
    }
    
    @Test
    void testCompleteEvent() {
        // Given
        when(eventRepository.findById(1L)).thenReturn(Optional.of(testEvent));
        when(eventRepository.save(any(Event.class))).thenReturn(testEvent);
        
        // When
        Event completedEvent = eventService.completeEvent(1L);
        
        // Then
        assertNotNull(completedEvent, "Completed event should not be null");
        
        verify(eventRepository).findById(1L);
        verify(eventRepository).save(testEvent);
        verify(eventManager).completeEvent(1L, testEvent.getTitle());
    }
    
    @Test
    void testDeleteEvent() {
        // Given
        when(eventRepository.existsById(1L)).thenReturn(true);
        
        // When
        eventService.deleteEvent(1L);
        
        // Then
        verify(eventRepository).existsById(1L);
        verify(eventRepository).deleteById(1L);
    }
    
    @Test
    void testDeleteEventNotFound() {
        // Given
        when(eventRepository.existsById(999L)).thenReturn(false);
        
        // When & Then
        assertThrows(RuntimeException.class, () -> {
            eventService.deleteEvent(999L);
        }, "Should throw exception when event not found");
        
        verify(eventRepository).existsById(999L);
        verify(eventRepository, never()).deleteById(999L);
    }
}
