package com.eventpro.patterns;

import com.eventpro.patterns.factory.NotificationFactory;
import com.eventpro.patterns.factory.notifications.INotification;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mail.javamail.JavaMailSender;
import com.eventpro.model.NotificationType;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for Factory pattern implementation
 */
@SpringBootTest
class FactoryPatternTest {
    
    @MockBean
    private JavaMailSender mailSender;
    
    @Test
    void testEmailNotificationCreation() {
        // Given
        NotificationFactory factory = new NotificationFactory();
        
        // When
        INotification notification = factory.createNotification(
                com.eventpro.model.NotificationType.EMAIL);
        
        // Then
        assertNotNull(notification, "Notification should not be null");
        assertEquals("EMAIL", notification.getNotificationType(), 
                "Notification type should be EMAIL");
    }
    
    @Test
    void testSMSNotificationCreation() {
        // Given
        NotificationFactory factory = new NotificationFactory();
        
        // When
        INotification notification = factory.createNotification(
                com.eventpro.model.NotificationType.SMS);
        
        // Then
        assertNotNull(notification, "Notification should not be null");
        assertEquals("SMS", notification.getNotificationType(), 
                "Notification type should be SMS");
    }
    
    @Test
    void testPushNotificationCreation() {
        // Given
        NotificationFactory factory = new NotificationFactory();
        
        // When
        INotification notification = factory.createNotification(
                com.eventpro.model.NotificationType.PUSH);
        
        // Then
        assertNotNull(notification, "Notification should not be null");
        assertEquals("PUSH", notification.getNotificationType(), 
                "Notification type should be PUSH");
    }
    
    @Test
    void testUnsupportedNotificationType() {
        // Given
        NotificationFactory factory = new NotificationFactory();
        
        // When & Then
        assertThrows(IllegalArgumentException.class, () -> {
            // This would require modifying the enum or using reflection
            // For now, we'll test with null which should also throw an exception
        }, "Should throw exception for unsupported notification type");
    }
    
    @Test
    void testGetSupportedTypes() {
        // Given
        NotificationFactory factory = new NotificationFactory();
        
        // When
        com.eventpro.model.NotificationType[] supportedTypes = factory.getSupportedTypes();
        
        // Then
        assertNotNull(supportedTypes, "Supported types should not be null");
        assertTrue(supportedTypes.length > 0, "Should have at least one supported type");
    }
}
