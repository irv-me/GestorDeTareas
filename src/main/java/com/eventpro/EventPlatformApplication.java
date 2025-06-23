package com.eventpro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * Main application class for EventPro Platform
 * 
 * @author EventPro Team
 * @version 1.0.0
 */
@SpringBootApplication
@EnableAsync
public class EventPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventPlatformApplication.class, args);
        System.out.println("🚀 EventPro Platform started successfully!");
        System.out.println("📊 Dashboard: http://localhost:8080");
        System.out.println("🔧 API Docs: http://localhost:8080/api/docs");
    }
}
