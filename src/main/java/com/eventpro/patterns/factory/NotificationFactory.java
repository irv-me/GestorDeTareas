package com.eventpro.patterns.factory;

import com.eventpro.patterns.factory.notifications.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

/**
 * Factory pattern implementation for creating different types of notifications
 * 
 * This factory creates notification objects based on the type requested,
 * encapsulating the creation logic and making it easy to add new notification types.
 */
@Component
@Slf4j
public class NotificationFactory {
    
    @Autowired
    private JavaMailSender mailSender;
    
    /**
     * Create a notification instance based on the type
     */
    public INotification createNotification(NotificationType type) {
        log.debug("🏭 Creating notification of type: {}", type);
        
        return switch (type) {
            case EMAIL -> {
                log.debug("📧 Creating EmailNotification");
                yield new EmailNotification(mailSender);
            }
            case SMS -> {
                log.debug("📱 Creating SMSNotification");
                yield new SMSNotification();
            }
            case PUSH -> {
                log.debug("🔔 Creating PushNotification");
                yield new PushNotification();
            }
            default -> {
                log.error("❌ Unsupported notification type: {}", type);
                throw new IllegalArgumentException("Unsupported notification type: " + type);
            }
        };
    }
    
    /**
     * Get all supported notification types
     */
    public NotificationType[] getSupportedTypes() {
        return NotificationType.values();
    }
    
    /**
     * Check if a notification type is supported
     */
    public boolean isTypeSupported(NotificationType type) {
        try {
            createNotification(type);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }
    
    /**
     * Demonstration method for Factory pattern
     */
    public void demonstrateFactory() {
        log.info("🎯 Demonstrating Factory Pattern - Notification Creation");
        
        for (NotificationType type : getSupportedTypes()) {
            try {
                INotification notification = createNotification(type);
                log.info("✅ Created {}: {}", type, notification.getClass().getSimpleName());
                log.info("📋 Type: {}", notification.getNotificationType());
            } catch (Exception e) {
                log.error("❌ Failed to create notification type {}: {}", type, e.getMessage());
            }
        }
    }
}

/**
 * Enum for notification types
 */
enum NotificationType {
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
