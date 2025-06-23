package com.eventpro.patterns.factory.notifications;

import java.util.Map;
import java.util.concurrent.CompletableFuture;

/**
 * Interface for all notification implementations
 */
public interface INotification {
    
    /**
     * Send a notification
     */
    CompletableFuture<Boolean> send(String recipient, String message, String subject, Map<String, Object> data);
    
    /**
     * Get the notification type
     */
    String getNotificationType();
    
    /**
     * Validate recipient format
     */
    boolean isValidRecipient(String recipient);
    
    /**
     * Get maximum message length
     */
    int getMaxMessageLength();
}
