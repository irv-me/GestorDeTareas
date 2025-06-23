package com.eventpro.patterns.strategy;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Factory for creating certificate strategies
 */
@Component
@Slf4j
public class CertificateStrategyFactory {
    
    public ICertificateStrategy createStrategy(String eventType, boolean isPremium) {
        log.debug("🏭 Creating certificate strategy for event type: {}, premium: {}", eventType, isPremium);
        
        if (isPremium) {
            return new PremiumCertificateStrategy();
        }
        
        return switch (eventType.toLowerCase()) {
            case "course", "workshop" -> new CompletionCertificateStrategy();
            case "conference", "seminar", "webinar" -> new StandardCertificateStrategy();
            default -> new StandardCertificateStrategy();
        };
    }
    
    public List<String> getSupportedEventTypes() {
        return List.of("course", "workshop", "conference", "seminar", "webinar");
    }
}
