package com.eventpro.patterns.factory.notifications;

import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.regex.Pattern;

/**
 * Email notification implementation
 */
@Slf4j
public class EmailNotification implements INotification {
    
    private final JavaMailSender mailSender;
    private static final Pattern EMAIL_PATTERN = 
            Pattern.compile("^[A-Za-z0-9+_.-]+@([A-Za-z0-9.-]+\\.[A-Za-z]{2,})$");
    
    public EmailNotification(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    
    @Override
    public CompletableFuture<Boolean> send(String recipient, String message, String subject, Map<String, Object> data) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                log.info("📧 Sending email to: {}", recipient);
                log.info("📋 Subject: {}", subject);
                log.info("💬 Message: {}", message);
                
                if (!isValidRecipient(recipient)) {
                    log.error("❌ Invalid email address: {}", recipient);
                    return false;
                }
                
                SimpleMailMessage mailMessage = new SimpleMailMessage();
                mailMessage.setTo(recipient);
                mailMessage.setSubject(subject);
                mailMessage.setText(message);
                mailMessage.setFrom("noreply@eventpro.com");
                
                // Simulate email sending (in real implementation, uncomment below)
                // mailSender.send(mailMessage);
                
                // Simulate processing time
                Thread.sleep(1000);
                
                log.info("✅ Email sent successfully to: {}", recipient);
                return true;
                
            } catch (Exception e) {
                log.error("❌ Failed to send email to {}: {}", recipient, e.getMessage());
                return false;
            }
        });
    }
    
    @Override
    public String getNotificationType() {
        return "EMAIL";
    }
    
    @Override
    public boolean isValidRecipient(String recipient) {
        return recipient != null && EMAIL_PATTERN.matcher(recipient).matches();
    }
    
    @Override
    public int getMaxMessageLength() {
        return 10000; // 10KB for email
    }
}
