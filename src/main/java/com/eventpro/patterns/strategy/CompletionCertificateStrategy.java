package com.eventpro.patterns.strategy;

import com.eventpro.model.CertificateType;
import com.eventpro.model.Event;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.util.concurrent.CompletableFuture;

/**
 * Completion certificate strategy
 */
@Slf4j
class CompletionCertificateStrategy implements ICertificateStrategy {
    
    @Override
    public CompletableFuture<CertificateResult> generateCertificate(ParticipantData participant, Event event) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                log.info("🎓 Generating completion certificate for: {}", participant.getName());
                
                // Validate attendance requirements
                int requiredHours = (int) (event.getStartDate().until(event.getEndDate(), 
                        java.time.temporal.ChronoUnit.HOURS) * 0.8);
                
                if (participant.getAttendanceHours() < requiredHours) {
                    throw new IllegalArgumentException(
                            String.format("Participant does not meet minimum hours requirement: %d", requiredHours));
                }
                
                Thread.sleep(1500);
                
                String certificateId = "CERT-COMP-" + System.currentTimeMillis();
                String verificationCode = generateCompletionCode(participant, event);
                String filePath = "/certificates/completion/" + certificateId + ".pdf";
                
                log.info("🎯 Completion certificate generated: {}", certificateId);
                log.info("📊 Hours completed: {}/{}", participant.getAttendanceHours(), requiredHours);
                
                return new CertificateResult(certificateId, filePath, verificationCode, CertificateType.COMPLETION);
                
            } catch (InterruptedException e) {
                log.error("❌ Error generating completion certificate: {}", e.getMessage());
                Thread.currentThread().interrupt();
                throw new RuntimeException("Completion certificate generation failed", e);
            }
        });
    }
    
    @Override
    public String getStrategyName() {
        return "Completion Certificate Strategy";
    }
    
    @Override
    public CertificateType getCertificateType() {
        return CertificateType.COMPLETION;
    }
    
    private String generateCompletionCode(ParticipantData participant, Event event) {
        String participantHash = String.format("%04d", participant.getId());
        String eventHash = String.format("%04d", event.getId());
        String yearHash = String.valueOf(LocalDateTime.now().getYear());
        return String.format("COMP-%s-%s-%s", participantHash, eventHash, yearHash);
    }
}
