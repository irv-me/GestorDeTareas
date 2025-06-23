package com.eventpro.patterns.observer;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * Analytics observer
 */
@Component
@Slf4j
class AnalyticsObserver implements IEventObserver {
    
    @Override
    public void update(EventData eventData) {
        log.info("📊 [AnalyticsObserver] Recording event: {} - {}", 
                eventData.getEventType(), eventData.getEventTitle());
        recordEventMetrics(eventData);
    }
    
    @Override
    public String getObserverName() {
        return "AnalyticsObserver";
    }
    
    @Override
    public boolean isInterestedIn(EventData.EventType eventType) {
        return true;
    }
    
    private void recordEventMetrics(EventData eventData) {
        log.info("📈 Updating analytics for event: {} (Type: {})", 
                eventData.getEventTitle(), eventData.getEventType());
    }
}
