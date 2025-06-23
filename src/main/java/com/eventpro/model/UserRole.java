package com.eventpro.model;

/**
 * Enum for user roles
 */
public enum UserRole {
    PARTICIPANT("Participante"),
    ORGANIZER("Organizador"),
    ADMIN("Administrador");
    
    private final String displayName;
    
    UserRole(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
}
