package com.eventpro.controller;

import com.eventpro.patterns.singleton.DatabaseConnectionManager;
import com.eventpro.patterns.factory.NotificationFactory;
import com.eventpro.patterns.observer.EventManager;
import com.eventpro.patterns.strategy.CertificateService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

/**
 * REST Controller for Design Patterns demonstrations
 */
@RestController
@RequestMapping("/api/patterns")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "*")
public class PatternsController {
    
    private final DataSource dataSource;
    private final NotificationFactory notificationFactory;
    private final EventManager eventManager;
    private final CertificateService certificateService;
    
    /**
     * Demonstrate Singleton pattern
     */
    @PostMapping("/singleton/demo")
    public ResponseEntity<Map<String, Object>> demonstrateSingleton() {
        log.info("🎯 REST: Demonstrating Singleton pattern");
        
        try {
            DatabaseConnectionManager dbManager = DatabaseConnectionManager.getInstance(dataSource);
            dbManager.demonstrateSingleton();
            
            Map<String, Object> response = new HashMap<>();
            response.put("pattern", "Singleton");
            response.put("status", "success");
            response.put("message", "Singleton pattern demonstrated successfully");
            response.put("instanceHash", dbManager.hashCode());
            response.put("isInitialized", dbManager.isInitialized());
            response.put("connectionHealthy", dbManager.isConnectionHealthy());
            response.put("databaseInfo", dbManager.getDatabaseInfo());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            log.error("❌ Error demonstrating Singleton pattern: {}", e.getMessage());
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("pattern", "Singleton");
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Demonstrate Factory pattern
     */
    @PostMapping("/factory/demo")
    public ResponseEntity<Map<String, Object>> demonstrateFactory() {
        log.info("🎯 REST: Demonstrating Factory pattern");
        
        try {
            notificationFactory.demonstrateFactory();
            
            Map<String, Object> response = new HashMap<>();
            response.put("pattern", "Factory");
            response.put("status", "success");
            response.put("message", "Factory pattern demonstrated successfully");
            response.put("supportedTypes", notificationFactory.getSupportedTypes());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            log.error("❌ Error demonstrating Factory pattern: {}", e.getMessage());
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("pattern", "Factory");
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Demonstrate Observer pattern
     */
    @PostMapping("/observer/demo")
    public ResponseEntity<Map<String, Object>> demonstrateObserver() {
        log.info("🎯 REST: Demonstrating Observer pattern");
        
        try {
            eventManager.demonstrateObserver();
            
            Map<String, Object> response = new HashMap<>();
            response.put("pattern", "Observer");
            response.put("status", "success");
            response.put("message", "Observer pattern demonstrated successfully");
            response.put("observerCount", eventManager.getObserverCount());
            response.put("observers", eventManager.getObserverNames());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            log.error("❌ Error demonstrating Observer pattern: {}", e.getMessage());
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("pattern", "Observer");
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Demonstrate Strategy pattern
     */
    @PostMapping("/strategy/demo")
    public ResponseEntity<Map<String, Object>> demonstrateStrategy() {
        log.info("🎯 REST: Demonstrating Strategy pattern");
        
        try {
            certificateService.demonstrateStrategy();
            
            Map<String, Object> response = new HashMap<>();
            response.put("pattern", "Strategy");
            response.put("status", "success");
            response.put("message", "Strategy pattern demonstrated successfully");
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            log.error("❌ Error demonstrating Strategy pattern: {}", e.getMessage());
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("pattern", "Strategy");
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    /**
     * Get all patterns information
     */
    @GetMapping("/info")
    public ResponseEntity<Map<String, Object>> getPatternsInfo() {
        log.debug("📋 REST: Getting patterns information");
        
        Map<String, Object> response = new HashMap<>();
        
        // Singleton info
        Map<String, Object> singletonInfo = new HashMap<>();
        singletonInfo.put("name", "Singleton");
        singletonInfo.put("description", "Ensures only one instance of DatabaseConnectionManager exists");
        singletonInfo.put("benefits", new String[]{"Resource optimization", "Consistency", "Access control"});
        
        // Factory info
        Map<String, Object> factoryInfo = new HashMap<>();
        factoryInfo.put("name", "Factory Method");
        factoryInfo.put("description", "Creates different types of notifications flexibly");
        factoryInfo.put("benefits", new String[]{"Extensibility", "Maintenance", "Flexibility"});
        factoryInfo.put("supportedTypes", notificationFactory.getSupportedTypes());
        
        // Observer info
        Map<String, Object> observerInfo = new HashMap<>();
        observerInfo.put("name", "Observer");
        observerInfo.put("description", "Automatically notifies state changes to multiple components");
        observerInfo.put("benefits", new String[]{"Low coupling", "Reactivity", "Scalability"});
        observerInfo.put("observerCount", eventManager.getObserverCount());
        
        // Strategy info
        Map<String, Object> strategyInfo = new HashMap<>();
        strategyInfo.put("name", "Strategy");
        strategyInfo.put("description", "Different strategies for generating certificates by type");
        strategyInfo.put("benefits", new String[]{"Flexibility", "Interchangeability", "Maintainability"});
        
        response.put("patterns", Map.of(
                "singleton", singletonInfo,
                "factory", factoryInfo,
                "observer", observerInfo,
                "strategy", strategyInfo
        ));
        
        return ResponseEntity.ok(response);
    }
}
