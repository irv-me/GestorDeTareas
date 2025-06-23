package com.eventpro.patterns.factory.notifications;

import lombok.extern.slf4j.Slf4j;

import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.regex.Pattern;

/**
 * SMS notification implementation
 */
@Slf4j
public class SMSNotification implements INotification {
    
    private static final Pattern PHONE_PATTERN = 
            Pattern.compile("^\\+?[1-9]\\d{1,14}$");
    
    @Override
    public CompletableFuture<Boolean> send(String recipient, String message, String subject, Map<String, Object> data) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                log.info("📱 Sending SMS to: {}", recipient);
                log.info("💬 Message: {}", message);
                
                if (!isValidRecipient(recipient)) {
                    log.error("❌ Invalid phone number: {}", recipient);
                    return false;
                }
                
                if (message.length() > getMaxMessageLength()) {
                    log.error("❌ Message too long: {} characters (max: {})", 
                            message.length(), getMaxMessageLength());
                    return false;
                }
                
                // Simulate SMS sending via SMS gateway
                // In real implementation, integrate with SMS service like Twilio
                
                // Simulate processing time
                Thread.sleep(800);
                
                log.info("✅ SMS sent successfully to: {}", recipient);
                return true;
                
            } catch (Exception e) {
                log.error("❌ Failed to send SMS to {}: {}", recipient, e.getMessage());
                return false;
            }
        });
    }
    
    @Override
    public String getNotificationType() {
        return "SMS";
    }
    
    @Override
    public boolean isValidRecipient(String recipient) {
        return recipient != null && PHONE_PATTERN.matcher(recipient).matches();
    }
    
    @Override
    public int getMaxMessageLength() {
        return 160; // Standard SMS length
    }
}
