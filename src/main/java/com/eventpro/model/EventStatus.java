package com.eventpro.model;

/**
 * Enum for event status
 */
public enum EventStatus {
    DRAFT("Borrador"),
    PUBLISHED("Publicado"),
    CANCELLED("Cancelado"),
    COMPLETED("Completado"),
    PRIVATE("Privado");
    
    private final String displayName;
    
    EventStatus(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
}
