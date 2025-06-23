package com.eventpro.patterns.strategy;

import com.eventpro.model.Event;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.concurrent.CompletableFuture;

/**
 * Certificate service that integrates all components
 */
@Component
@Slf4j
public class CertificateService {
    
    private final CertificateGenerator generator;
    private final CertificateStrategyFactory strategyFactory;
    
    public CertificateService(CertificateGenerator generator, CertificateStrategyFactory strategyFactory) {
        this.generator = generator;
        this.strategyFactory = strategyFactory;
    }
    
    public CompletableFuture<List<CertificateResult>> generateEventCertificates(
            List<ParticipantData> participants, Event event, boolean isPremium) {
        
        ICertificateStrategy strategy = strategyFactory.createStrategy(event.getType().name(), isPremium);
        generator.setStrategy(strategy);
        
        log.info("📋 Generating certificates for {} participants", participants.size());
        log.info("🎯 Event: {} ({})", event.getTitle(), event.getType());
        log.info("⚙️ Strategy: {}", strategy.getStrategyName());
        
        List<CompletableFuture<CertificateResult>> futures = participants.stream()
                .map(participant -> generator.generateCertificate(participant, event)
                        .thenApply(result -> {
                            log.info("✅ Certificate generated for: {}", participant.getName());
                            return result;
                        })
                        .exceptionally(throwable -> {
                            log.error("❌ Failed to generate certificate for {}: {}", 
                                    participant.getName(), throwable.getMessage());
                            return null;
                        }))
                .toList();
        
        return CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
                .thenApply(v -> futures.stream()
                        .map(CompletableFuture::join)
                        .filter(result -> result != null)
                        .toList())
                .thenApply(results -> {
                    log.info("🎉 Certificate generation completed. {}/{} certificates generated successfully", 
                            results.size(), participants.size());
                    return results;
                });
    }
    
    public void demonstrateStrategy() {
        log.info("🎯 Demonstrating Strategy Pattern - Certificate Generation");
        
        List<ParticipantData> participants = List.of(
                new ParticipantData(1L, "Juan Pérez", "juan@email.com", 8, true),
                new ParticipantData(2L, "María García", "maria@email.com", 6, true),
                new ParticipantData(3L, "Carlos López", "carlos@email.com", 10, true)
        );
        
        Event workshopEvent = new Event();
        workshopEvent.setId(101L);
        workshopEvent.setTitle("Workshop de React Avanzado");
        workshopEvent.setType(com.eventpro.model.EventType.WORKSHOP);
        workshopEvent.setStartDate(LocalDateTime.now().minusDays(1));
        workshopEvent.setEndDate(LocalDateTime.now());
        
        Event conferenceEvent = new Event();
        conferenceEvent.setId(102L);
        conferenceEvent.setTitle("Conferencia de IA 2024");
        conferenceEvent.setType(com.eventpro.model.EventType.CONFERENCE);
        conferenceEvent.setStartDate(LocalDateTime.now().minusDays(1));
        conferenceEvent.setEndDate(LocalDateTime.now());
        
        try {
            log.info("=".repeat(60));
            generateEventCertificates(participants, workshopEvent, false).get();
            
            log.info("\n" + "=".repeat(60));
            generateEventCertificates(participants, conferenceEvent, true).get();
            
            log.info("\n🎉 Strategy pattern demonstration completed");
            
        } catch (Exception e) {
            log.error("❌ Error in strategy demonstration: {}", e.getMessage());
        }
    }
}
