package com.eventpro.model;

/**
 * Enum for event types
 */
public enum EventType {
    CONFERENCE("Conferencia"),
    SEMINAR("Seminario"),
    WORKSHOP("Workshop"),
    WEBINAR("Webinar"),
    COURSE("Curso"),
    MEETUP("Meetup");
    
    private final String displayName;
    
    EventType(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
}
