package com.eventpro.controller;

import com.eventpro.model.Event;
import com.eventpro.model.EventStatus;
import com.eventpro.model.EventType;
import com.eventpro.service.EventService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Unit tests for EventController
 */
@WebMvcTest(EventController.class)
class EventControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private EventService eventService;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    private Event testEvent;
    
    @BeforeEach
    void setUp() {
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
                .build();
    }
    
    @Test
    void testCreateEvent() throws Exception {
        // Given
        when(eventService.createEvent(any(Event.class))).thenReturn(testEvent);
        
        // When & Then
        mockMvc.perform(post("/api/events")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(testEvent)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.title").value("Test Event"))
                .andExpect(jsonPath("$.status").value("DRAFT"));
    }
    
    @Test
    void testGetEventById() throws Exception {
        // Given
        when(eventService.getEventById(1L)).thenReturn(Optional.of(testEvent));
        
        // When & Then
        mockMvc.perform(get("/api/events/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.title").value("Test Event"));
    }
    
    @Test
    void testGetEventByIdNotFound() throws Exception {
        // Given
        when(eventService.getEventById(999L)).thenReturn(Optional.empty());
        
        // When & Then
        mockMvc.perform(get("/api/events/999"))
                .andExpect(status().isNotFound());
    }
    
    @Test
    void testGetAllEvents() throws Exception {
        // Given
        Page<Event> eventsPage = new PageImpl<>(List.of(testEvent));
        when(eventService.getAllEvents(any())).thenReturn(eventsPage);
        
        // When & Then
        mockMvc.perform(get("/api/events"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.content").isArray())
                .andExpect(jsonPath("$.content[0].id").value(1L));
    }
    
    @Test
    void testUpdateEvent() throws Exception {
        // Given
        Event updatedEvent = Event.builder()
                .id(1L)
                .title("Updated Event")
                .description("Updated Description")
                .build();
        
        when(eventService.updateEvent(eq(1L), any(Event.class))).thenReturn(updatedEvent);
        
        // When & Then
        mockMvc.perform(put("/api/events/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedEvent)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Updated Event"));
    }
    
    @Test
    void testDeleteEvent() throws Exception {
        // When & Then
        mockMvc.perform(delete("/api/events/1"))
                .andExpect(status().isNoContent());
    }
    
    @Test
    void testPublishEvent() throws Exception {
        // Given
        testEvent.setStatus(EventStatus.PUBLISHED);
        when(eventService.publishEvent(1L)).thenReturn(testEvent);
        
        // When & Then
        mockMvc.perform(put("/api/events/1/publish"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("PUBLISHED"));
    }
    
    @Test
    void testCancelEvent() throws Exception {
        // Given
        testEvent.setStatus(EventStatus.CANCELLED);
        when(eventService.cancelEvent(1L)).thenReturn(testEvent);
        
        // When & Then
        mockMvc.perform(put("/api/events/1/cancel"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("CANCELLED"));
    }
    
    @Test
    void testCompleteEvent() throws Exception {
        // Given
        testEvent.setStatus(EventStatus.COMPLETED);
        when(eventService.completeEvent(1L)).thenReturn(testEvent);
        
        // When & Then
        mockMvc.perform(put("/api/events/1/complete"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("COMPLETED"));
    }
    
    @Test
    void testGetEventStatistics() throws Exception {
        // Given
        EventService.EventStatistics stats = new EventService.EventStatistics(10L, 8L, 5L, 1000L);
        when(eventService.getEventStatistics()).thenReturn(stats);
        
        // When & Then
        mockMvc.perform(get("/api/events/statistics"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.totalEvents").value(10))
                .andExpect(jsonPath("$.publishedEvents").value(8))
                .andExpect(jsonPath("$.completedEvents").value(5))
                .andExpect(jsonPath("$.totalAttendees").value(1000));
    }
}
