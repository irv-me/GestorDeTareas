package com.eventpro.patterns;

import com.eventpro.patterns.singleton.DatabaseConnectionManager;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import javax.sql.DataSource;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Unit tests for Singleton pattern implementation
 */
@SpringBootTest
class SingletonPatternTest {
    
    @MockBean
    private DataSource dataSource;
    
    @Test
    void testSingletonInstance() {
        // Given & When
        DatabaseConnectionManager instance1 = DatabaseConnectionManager.getInstance(dataSource);
        DatabaseConnectionManager instance2 = DatabaseConnectionManager.getInstance(dataSource);
        
        // Then
        assertSame(instance1, instance2, "Both instances should be the same object");
        assertEquals(instance1.hashCode(), instance2.hashCode(), "Hash codes should be equal");
    }
    
    @Test
    void testSingletonInitialization() {
        // Given & When
        DatabaseConnectionManager instance = DatabaseConnectionManager.getInstance(dataSource);
        
        // Then
        assertNotNull(instance, "Instance should not be null");
        assertTrue(instance.isInitialized(), "Instance should be initialized");
    }
    
    @Test
    void testMultipleCallsReturnSameInstance() {
        // Given
        DatabaseConnectionManager[] instances = new DatabaseConnectionManager[10];
        
        // When
        for (int i = 0; i < 10; i++) {
            instances[i] = DatabaseConnectionManager.getInstance(dataSource);
        }
        
        // Then
        for (int i = 1; i < 10; i++) {
            assertSame(instances[0], instances[i], 
                    "All instances should be the same object");
        }
    }
}
