package com.eventpro.patterns.observer;

/**
 * Observer interface for event notifications
 */
interface IEventObserver {
    void update(EventData eventData);
    String getObserverName();
    boolean isInterestedIn(EventData.EventType eventType);
}
