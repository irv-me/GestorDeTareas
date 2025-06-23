package com.eventpro.model;

/**
 * Enum for notification types
 */
public enum NotificationType {
    EMAIL("Email"),
    SMS("SMS"),
    PUSH("Push Notification");
    
    private final String displayName;
    
    NotificationType(String displayName) {
        this.displayName = displayName;
    }
    
    public String getDisplayName() {
        return displayName;
    }
}
