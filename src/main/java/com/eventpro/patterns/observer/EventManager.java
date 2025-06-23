package com.eventpro.patterns.observer;

import com.eventpro.model.Event;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Event manager that implements the Subject in Observer pattern
 */
@Component
@Slf4j
public class EventManager {
    
    private final List<IEventObserver> observers = new CopyOnWriteArrayList<>();
    
    public void addObserver(IEventObserver observer) {
        observers.add(observer);
        log.info("➕ Observer added: {}", observer.getObserverName());
    }
    
    public void removeObserver(IEventObserver observer) {
        observers.remove(observer);
        log.info("➖ Observer removed: {}", observer.getObserverName());
    }
    
    public void notifyObservers(EventData eventData) {
        log.info("🔔 Notifying {} observers about event: {}", 
                observers.size(), eventData.getEventType());
        
        observers.parallelStream()
                .filter(observer -> observer.isInterestedIn(eventData.getEventType()))
                .forEach(observer -> {
                    try {
                        observer.update(eventData);
                    } catch (Exception e) {
                        log.error("❌ Error in observer {}: {}", 
                                observer.getObserverName(), e.getMessage());
                    }
                });
    }
    
    public Long createEvent(Event event) {
        Long eventId = System.currentTimeMillis();
        log.info("📅 Creating event: {}", event.getTitle());
        
        EventData eventData = new EventData(eventId, event.getTitle(), 
                EventData.EventType.CREATED, event);
        notifyObservers(eventData);
        
        return eventId;
    }
    
    public boolean updateEvent(Long eventId, Event updatedEvent) {
        log.info("📝 Updating event ID: {}", eventId);
        
        EventData eventData = new EventData(eventId, updatedEvent.getTitle(), 
                EventData.EventType.UPDATED, updatedEvent);
        notifyObservers(eventData);
        
        return true;
    }
    
    public boolean cancelEvent(Long eventId, String eventTitle) {
        log.info("❌ Cancelling event ID: {}", eventId);
        
        EventData eventData = new EventData(eventId, eventTitle, 
                EventData.EventType.CANCELLED, null);
        notifyObservers(eventData);
        
        return true;
    }
    
    public boolean completeEvent(Long eventId, String eventTitle) {
        log.info("✅ Completing event ID: {}", eventId);
        
        EventData eventData = new EventData(eventId, eventTitle, 
                EventData.EventType.COMPLETED, null);
        notifyObservers(eventData);
        
        return true;
    }
    
    public int getObserverCount() {
        return observers.size();
    }
    
    public List<String> getObserverNames() {
        return observers.stream()
                .map(IEventObserver::getObserverName)
                .toList();
    }
    
    public void demonstrateObserver() {
        log.info("🎯 Demonstrating Observer Pattern - Event Management");
        log.info("📋 Registered observers: {}", getObserverCount());
        
        // Create a sample event - using constructor instead of builder
        Event sampleEvent = new Event();
        sampleEvent.setTitle("Conferencia de IA 2024");
        sampleEvent.setDescription("Evento de demostración");
        
        Long eventId = createEvent(sampleEvent);
        
        log.info("\n" + "=".repeat(50));
        updateEvent(eventId, sampleEvent);
        
        log.info("\n" + "=".repeat(50));
        completeEvent(eventId, sampleEvent.getTitle());
        
        log.info("\n🎉 Observer pattern demonstration completed");
    }
}
