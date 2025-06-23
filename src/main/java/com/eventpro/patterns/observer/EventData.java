package com.eventpro.patterns.observer;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;

/**
 * Event data class for observer notifications
 */
@Data
@Slf4j
public class EventData {
    private final Long eventId;
    private final String eventTitle;
    private final EventType eventType;
    private final LocalDateTime timestamp;
    private final Object data;
    
    public EventData(Long eventId, String eventTitle, EventType eventType, Object data) {
        this.eventId = eventId;
        this.eventTitle = eventTitle;
        this.eventType = eventType;
        this.timestamp = LocalDateTime.now();
        this.data = data;
    }
    
    public enum EventType {
        CREATED, UPDATED, CANCELLED, COMPLETED, REGISTRATION_OPENED, REGISTRATION_CLOSED
    }
}
