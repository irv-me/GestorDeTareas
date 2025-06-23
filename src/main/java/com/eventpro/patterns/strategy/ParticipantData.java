package com.eventpro.patterns.strategy;

import lombok.Data;
import lombok.AllArgsConstructor;

/**
 * Participant data for certificate generation
 */
@Data
@AllArgsConstructor
public class ParticipantData {
    private Long id;
    private String name;
    private String email;
    private Integer attendanceHours;
    private Boolean attended;
}
