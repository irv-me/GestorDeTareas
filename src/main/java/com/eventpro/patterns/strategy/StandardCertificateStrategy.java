package com.eventpro.patterns.strategy;

import com.eventpro.model.CertificateType;
import com.eventpro.model.Event;
import lombok.extern.slf4j.Slf4j;

import java.util.UUID;
import java.util.concurrent.CompletableFuture;

/**
 * Standard certificate strategy
 */
@Slf4j
class StandardCertificateStrategy implements ICertificateStrategy {
    
    @Override
    public CompletableFuture<CertificateResult> generateCertificate(ParticipantData participant, Event event) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                log.info("📜 Generating standard certificate for: {}", participant.getName());
                
                Thread.sleep(1000);
                
                String certificateId = "CERT-STD-" + System.currentTimeMillis();
                String verificationCode = generateVerificationCode();
                String filePath = "/certificates/standard/" + certificateId + ".pdf";
                
                log.info("✅ Standard certificate generated: {}", certificateId);
                
                return new CertificateResult(certificateId, filePath, verificationCode, CertificateType.STANDARD);
                
            } catch (InterruptedException e) {
                log.error("❌ Error generating standard certificate: {}", e.getMessage());
                Thread.currentThread().interrupt();
                throw new RuntimeException("Certificate generation failed", e);
            }
        });
    }
    
    @Override
    public String getStrategyName() {
        return "Standard Certificate Strategy";
    }
    
    @Override
    public CertificateType getCertificateType() {
        return CertificateType.STANDARD;
    }
    
    private String generateVerificationCode() {
        return UUID.randomUUID().toString().substring(0, 8).toUpperCase();
    }
}
