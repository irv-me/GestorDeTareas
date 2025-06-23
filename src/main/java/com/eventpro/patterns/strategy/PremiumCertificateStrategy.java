package com.eventpro.patterns.strategy;

import com.eventpro.model.CertificateType;
import com.eventpro.model.Event;
import lombok.extern.slf4j.Slf4j;

import java.util.UUID;
import java.util.concurrent.CompletableFuture;

/**
 * Premium certificate strategy
 */
@Slf4j
class PremiumCertificateStrategy implements ICertificateStrategy {
    
    @Override
    public CompletableFuture<CertificateResult> generateCertificate(ParticipantData participant, Event event) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                log.info("🏆 Generating premium certificate for: {}", participant.getName());
                
                Thread.sleep(2000);
                
                String certificateId = "CERT-PREM-" + System.currentTimeMillis();
                String verificationCode = generateSecureVerificationCode();
                String filePath = "/certificates/premium/" + certificateId + ".pdf";
                
                log.info("✨ Premium certificate generated with special design: {}", certificateId);
                
                return new CertificateResult(certificateId, filePath, verificationCode, CertificateType.PREMIUM);
                
            } catch (InterruptedException e) {
                log.error("❌ Error generating premium certificate: {}", e.getMessage());
                Thread.currentThread().interrupt();
                throw new RuntimeException("Premium certificate generation failed", e);
            }
        });
    }
    
    @Override
    public String getStrategyName() {
        return "Premium Certificate Strategy";
    }
    
    @Override
    public CertificateType getCertificateType() {
        return CertificateType.PREMIUM;
    }
    
    private String generateSecureVerificationCode() {
        String timestamp = String.valueOf(System.currentTimeMillis());
        String random = UUID.randomUUID().toString().substring(0, 8);
        return (timestamp + "-" + random).toUpperCase();
    }
}
