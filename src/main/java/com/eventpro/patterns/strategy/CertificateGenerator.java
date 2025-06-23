package com.eventpro.patterns.strategy;

import com.eventpro.model.CertificateType;
import com.eventpro.model.Event;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.concurrent.CompletableFuture;

/**
 * Certificate generator context that uses strategies
 */
@Component
@Slf4j
public class CertificateGenerator {
    
    private ICertificateStrategy strategy;
    
    public CertificateGenerator() {
        this.strategy = new StandardCertificateStrategy();
    }
    
    public void setStrategy(ICertificateStrategy strategy) {
        this.strategy = strategy;
        log.info("🔄 Certificate strategy changed to: {}", strategy.getStrategyName());
    }
    
    public CompletableFuture<CertificateResult> generateCertificate(ParticipantData participant, Event event) {
        log.info("🚀 Starting certificate generation with strategy: {}", strategy.getStrategyName());
        
        return strategy.generateCertificate(participant, event)
                .thenApply(result -> {
                    log.info("✅ Certificate generated successfully: {}", result.getCertificateId());
                    return result;
                })
                .exceptionally(throwable -> {
                    log.error("❌ Certificate generation failed: {}", throwable.getMessage());
                    throw new RuntimeException("Certificate generation failed", throwable);
                });
    }
    
    public String getCurrentStrategy() {
        return strategy.getStrategyName();
    }
    
    public CertificateType getCurrentCertificateType() {
        return strategy.getCertificateType();
    }
}
