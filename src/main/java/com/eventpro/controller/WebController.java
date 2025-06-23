package com.eventpro.controller;

import com.eventpro.model.Event;
import com.eventpro.model.EventStatus;
import com.eventpro.service.EventService;
import com.eventpro.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * Web Controller for serving HTML pages
 */
@Controller
@RequiredArgsConstructor
@Slf4j
public class WebController {
    
    private final EventService eventService;
    private final UserService userService;
    
    /**
     * Dashboard home page
     */
    @GetMapping("/")
    public String dashboard(Model model) {
        log.info("🏠 Loading dashboard page");
        
        try {
            // Get upcoming events
            List<Event> upcomingEvents = eventService.getUpcomingEvents();
            
            // Get statistics
            EventService.EventStatistics eventStats = eventService.getEventStatistics();
            UserService.UserStatistics userStats = userService.getUserStatistics();
            
            // Add to model
            model.addAttribute("upcomingEvents", upcomingEvents);
            model.addAttribute("eventStats", eventStats);
            model.addAttribute("userStats", userStats);
            model.addAttribute("pageTitle", "Dashboard - EventPro");
            
            log.info("✅ Dashboard data loaded successfully");
            return "dashboard";
            
        } catch (Exception e) {
            log.error("❌ Error loading dashboard: {}", e.getMessage());
            model.addAttribute("error", "Error loading dashboard data");
            return "error";
        }
    }
    
    /**
     * Events listing page
     */
    @GetMapping("/events")
    public String events(Model model, 
                        @RequestParam(defaultValue = "0") int page,
                        @RequestParam(defaultValue = "12") int size,
                        @RequestParam(required = false) String search) {
        
        log.info("📅 Loading events page - page: {}, search: {}", page, search);
        
        try {
            var pageable = PageRequest.of(page, size);
            var eventsPage = (search != null && !search.trim().isEmpty()) ?
                    eventService.searchEvents(search, pageable) :
                    eventService.getAllEvents(pageable);
            
            model.addAttribute("eventsPage", eventsPage);
            model.addAttribute("currentPage", page);
            model.addAttribute("searchTerm", search);
            model.addAttribute("pageTitle", "Events - EventPro");
            
            return "events";
            
        } catch (Exception e) {
            log.error("❌ Error loading events: {}", e.getMessage());
            model.addAttribute("error", "Error loading events");
            return "error";
        }
    }
    
    /**
     * Event details page
     */
    @GetMapping("/events/{id}")
    public String eventDetails(@PathVariable Long id, Model model) {
        log.info("🔍 Loading event details for ID: {}", id);
        
        try {
            Event event = eventService.getEventById(id)
                    .orElseThrow(() -> new RuntimeException("Event not found"));
            
            model.addAttribute("event", event);
            model.addAttribute("pageTitle", event.getTitle() + " - EventPro");
            
            return "event-details";
            
        } catch (Exception e) {
            log.error("❌ Error loading event details: {}", e.getMessage());
            model.addAttribute("error", "Event not found");
            return "error";
        }
    }
    
    /**
     * Create event page
     */
    @GetMapping("/events/create")
    public String createEvent(Model model) {
        log.info("➕ Loading create event page");
        
        model.addAttribute("event", new Event());
        model.addAttribute("pageTitle", "Create Event - EventPro");
        
        return "create-event";
    }
    
    /**
     * User profile page
     */
    @GetMapping("/profile")
    public String profile(Model model) {
        log.info("👤 Loading user profile page");
        
        // For demo purposes, we'll use a mock user
        // In a real application, you'd get the current authenticated user
        model.addAttribute("pageTitle", "My Profile - EventPro");
        
        return "profile";
    }
    
    /**
     * Design patterns demo page
     */
    @GetMapping("/patterns")
    public String patternsDemo(Model model) {
        log.info("🎯 Loading design patterns demo page");
        
        model.addAttribute("pageTitle", "Design Patterns Demo - EventPro");
        
        return "patterns-demo";
    }
}
