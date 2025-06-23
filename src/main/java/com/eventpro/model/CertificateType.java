package com.eventpro.model;

/**
 * Enum for certificate types
 */
public enum CertificateType {
    STANDARD("Participación"),
    PREMIUM("Participación Premium"),
    COMPLETION("Finalización");
    
    private final String displayName;
    
    CertificateType(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
}
