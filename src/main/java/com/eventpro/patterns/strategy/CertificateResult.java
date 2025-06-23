package com.eventpro.patterns.strategy;

import com.eventpro.model.CertificateType;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * Certificate result data
 */
@Data
public class CertificateResult {
    private String certificateId;
    private String filePath;
    private String verificationCode;
    private LocalDateTime generatedAt;
    private CertificateType type;
    
    public CertificateResult(String certificateId, String filePath, String verificationCode, CertificateType type) {
        this.certificateId = certificateId;
        this.filePath = filePath;
        this.verificationCode = verificationCode;
        this.type = type;
        this.generatedAt = LocalDateTime.now();
    }
}
