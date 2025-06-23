package com.eventpro.patterns.observer;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * Email notification observer
 */
@Component
@Slf4j
class EmailNotificationObserver implements IEventObserver {
    
    @Override
    public void update(EventData eventData) {
        log.info("📧 [EmailObserver] Processing event: {} - {}", 
                eventData.getEventType(), eventData.getEventTitle());
        
        switch (eventData.getEventType()) {
            case CREATED -> sendEventCreatedEmail(eventData);
            case UPDATED -> sendEventUpdatedEmail(eventData);
            case CANCELLED -> sendEventCancelledEmail(eventData);
            case COMPLETED -> sendEventCompletedEmail(eventData);
            case REGISTRATION_OPENED -> sendRegistrationOpenedEmail(eventData);
            case REGISTRATION_CLOSED -> sendRegistrationClosedEmail(eventData);
        }
    }
    
    @Override
    public String getObserverName() {
        return "EmailNotificationObserver";
    }
    
    @Override
    public boolean isInterestedIn(EventData.EventType eventType) {
        return true;
    }
    
    private void sendEventCreatedEmail(EventData eventData) {
        log.info("✉️ Sending event creation confirmation email for: {}", eventData.getEventTitle());
    }
    
    private void sendEventUpdatedEmail(EventData eventData) {
        log.info("✉️ Sending event update notification email for: {}", eventData.getEventTitle());
    }
    
    private void sendEventCancelledEmail(EventData eventData) {
        log.info("✉️ Sending event cancellation email for: {}", eventData.getEventTitle());
    }
    
    private void sendEventCompletedEmail(EventData eventData) {
        log.info("✉️ Sending event completion email for: {}", eventData.getEventTitle());
    }
    
    private void sendRegistrationOpenedEmail(EventData eventData) {
        log.info("✉️ Sending registration opened email for: {}", eventData.getEventTitle());
    }
    
    private void sendRegistrationClosedEmail(EventData eventData) {
        log.info("✉️ Sending registration closed email for: {}", eventData.getEventTitle());
    }
}
