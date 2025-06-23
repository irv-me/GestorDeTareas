package com.eventpro.patterns.strategy;

import com.eventpro.model.CertificateType;
import com.eventpro.model.Event;

import java.util.concurrent.CompletableFuture;

/**
 * Strategy interface for certificate generation
 */
interface ICertificateStrategy {
    CompletableFuture<CertificateResult> generateCertificate(ParticipantData participant, Event event);
    String getStrategyName();
    CertificateType getCertificateType();
}
