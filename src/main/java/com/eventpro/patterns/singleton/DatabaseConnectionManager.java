package com.eventpro.patterns.singleton;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

/**
 * Singleton pattern implementation for database connection management
 * 
 * This class ensures only one instance of database connection manager exists
 * and provides centralized access to database connections.
 */
@Component
@Slf4j
public class DatabaseConnectionManager {
    
    private static DatabaseConnectionManager instance;
    private final DataSource dataSource;
    private boolean isInitialized = false;
    
    @Value("${spring.datasource.url}")
    private String databaseUrl;
    
    @Value("${spring.datasource.username}")
    private String username;
    
    // Private constructor to prevent direct instantiation
    private DatabaseConnectionManager(DataSource dataSource) {
        this.dataSource = dataSource;
        initialize();
    }
    
    /**
     * Get the singleton instance of DatabaseConnectionManager
     * Thread-safe implementation using double-checked locking
     */
    public static synchronized DatabaseConnectionManager getInstance(DataSource dataSource) {
        if (instance == null) {
            synchronized (DatabaseConnectionManager.class) {
                if (instance == null) {
                    instance = new DatabaseConnectionManager(dataSource);
                }
            }
        }
        return instance;
    }
    
    /**
     * Initialize the database connection manager
     */
    private void initialize() {
        try {
            // Test the connection
            try (Connection connection = dataSource.getConnection()) {
                log.info("🔗 Database connection established successfully");
                log.info("📊 Database URL: {}", databaseUrl);
                log.info("👤 Username: {}", username);
                isInitialized = true;
            }
        } catch (SQLException e) {
            log.error("❌ Failed to initialize database connection", e);
            throw new RuntimeException("Database connection initialization failed", e);
        }
    }
    
    /**
     * Get a database connection
     */
    public Connection getConnection() throws SQLException {
        if (!isInitialized) {
            throw new IllegalStateException("DatabaseConnectionManager not initialized");
        }
        
        Connection connection = dataSource.getConnection();
        log.debug("📊 Database connection obtained: {}", connection.toString());
        return connection;
    }
    
    /**
     * Get connection status
     */
    public boolean isConnectionHealthy() {
        try (Connection connection = getConnection()) {
            return connection.isValid(5); // 5 seconds timeout
        } catch (SQLException e) {
            log.warn("⚠️ Database connection health check failed", e);
            return false;
        }
    }
    
    /**
     * Get database metadata information
     */
    public String getDatabaseInfo() {
        try (Connection connection = getConnection()) {
            var metaData = connection.getMetaData();
            return String.format("Database: %s %s, Driver: %s %s",
                    metaData.getDatabaseProductName(),
                    metaData.getDatabaseProductVersion(),
                    metaData.getDriverName(),
                    metaData.getDriverVersion());
        } catch (SQLException e) {
            log.error("❌ Failed to get database info", e);
            return "Database info unavailable";
        }
    }
    
    public boolean isInitialized() {
        return isInitialized;
    }
    
    /**
     * Demonstration method for Singleton pattern
     */
    public void demonstrateSingleton() {
        log.info("🎯 Demonstrating Singleton Pattern - Database Connection Manager");
        log.info("✅ Instance created: {}", this.hashCode());
        log.info("🔍 Connection healthy: {}", isConnectionHealthy());
        log.info("📋 Database info: {}", getDatabaseInfo());
    }
}
