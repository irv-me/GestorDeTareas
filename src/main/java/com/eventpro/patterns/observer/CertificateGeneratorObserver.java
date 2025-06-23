package com.eventpro.patterns.observer;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * Certificate generation observer
 */
@Component
@Slf4j
class CertificateGeneratorObserver implements IEventObserver {
    
    @Override
    public void update(EventData eventData) {
        log.info("🏆 [CertificateObserver] Processing event: {} - {}", 
                eventData.getEventType(), eventData.getEventTitle());
        
        if (eventData.getEventType() == EventData.EventType.COMPLETED) {
            generateCertificates(eventData);
        }
    }
    
    @Override
    public String getObserverName() {
        return "CertificateGeneratorObserver";
    }
    
    @Override
    public boolean isInterestedIn(EventData.EventType eventType) {
        return eventType == EventData.EventType.COMPLETED;
    }
    
    private void generateCertificates(EventData eventData) {
        log.info("📜 Generating certificates for completed event: {}", eventData.getEventTitle());
        try {
            Thread.sleep(2000);
            log.info("✅ Certificates generated successfully for event: {}", eventData.getEventTitle());
        } catch (InterruptedException e) {
            log.error("❌ Error generating certificates: {}", e.getMessage());
            Thread.currentThread().interrupt();
        }
    }
}
