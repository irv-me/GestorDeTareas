package com.eventpro.model;

/**
 * Enum for registration status
 */
public enum RegistrationStatus {
    PENDING("Pendiente"),
    CONFIRMED("Confirmado"),
    CANCELLED("Cancelado"),
    WAITLIST("Lista de Espera");
    
    private final String displayName;
    
    RegistrationStatus(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
}
