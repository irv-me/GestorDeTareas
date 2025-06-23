package com.eventpro.service;

import com.eventpro.model.User;
import com.eventpro.model.UserRole;
import com.eventpro.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service class for User management
 */
@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class UserService {
    
    private final UserRepository userRepository;
    
    /**
     * Create a new user
     */
    public User createUser(User user) {
        log.info("👤 Creating new user: {}", user.getEmail());
        
        // Check if email already exists
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("User with email already exists: " + user.getEmail());
        }
        
        // Set default values
        if (user.getRole() == null) {
            user.setRole(UserRole.PARTICIPANT);
        }
        if (user.getIsActive() == null) {
            user.setIsActive(true);
        }
        
        User savedUser = userRepository.save(user);
        log.info("✅ User created successfully with ID: {}", savedUser.getId());
        return savedUser;
    }
    
    /**
     * Update an existing user
     */
    public User updateUser(Long userId, User updatedUser) {
        log.info("📝 Updating user ID: {}", userId);
        
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        
        // Update fields
        existingUser.setFirstName(updatedUser.getFirstName());
        existingUser.setLastName(updatedUser.getLastName());
        existingUser.setPhone(updatedUser.getPhone());
        existingUser.setOrganization(updatedUser.getOrganization());
        existingUser.setJobTitle(updatedUser.getJobTitle());
        existingUser.setBio(updatedUser.getBio());
        
        User savedUser = userRepository.save(existingUser);
        log.info("✅ User updated successfully: {}", savedUser.getFullName());
        return savedUser;
    }
    
    /**
     * Get user by ID
     */
    @Transactional(readOnly = true)
    public Optional<User> getUserById(Long userId) {
        log.debug("🔍 Fetching user by ID: {}", userId);
        return userRepository.findById(userId);
    }
    
    /**
     * Get user by email
     */
    @Transactional(readOnly = true)
    public Optional<User> getUserByEmail(String email) {
        log.debug("🔍 Fetching user by email: {}", email);
        return userRepository.findByEmail(email);
    }
    
    /**
     * Get all users
     */
    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        log.debug("📋 Fetching all users");
        return userRepository.findAll();
    }
    
    /**
     * Get active users
     */
    @Transactional(readOnly = true)
    public List<User> getActiveUsers() {
        log.debug("📋 Fetching active users");
        return userRepository.findByIsActiveTrue();
    }
    
    /**
     * Get users by role
     */
    @Transactional(readOnly = true)
    public List<User> getUsersByRole(UserRole role) {
        log.debug("👥 Fetching users by role: {}", role);
        return userRepository.findByRole(role);
    }
    
    /**
     * Search users
     */
    @Transactional(readOnly = true)
    public List<User> searchUsers(String searchTerm) {
        log.debug("🔍 Searching users with term: {}", searchTerm);
        return userRepository.searchUsers(searchTerm);
    }
    
    /**
     * Deactivate user
     */
    public User deactivateUser(Long userId) {
        log.info("🚫 Deactivating user ID: {}", userId);
        
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        
        user.setIsActive(false);
        User deactivatedUser = userRepository.save(user);
        
        log.info("✅ User deactivated successfully: {}", deactivatedUser.getFullName());
        return deactivatedUser;
    }
    
    /**
     * Activate user
     */
    public User activateUser(Long userId) {
        log.info("✅ Activating user ID: {}", userId);
        
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        
        user.setIsActive(true);
        User activatedUser = userRepository.save(user);
        
        log.info("✅ User activated successfully: {}", activatedUser.getFullName());
        return activatedUser;
    }
    
    /**
     * Delete user
     */
    public void deleteUser(Long userId) {
        log.info("🗑️ Deleting user ID: {}", userId);
        
        if (!userRepository.existsById(userId)) {
            throw new RuntimeException("User not found with ID: " + userId);
        }
        
        userRepository.deleteById(userId);
        log.info("✅ User deleted successfully");
    }
    
    /**
     * Get user statistics
     */
    @Transactional(readOnly = true)
    public UserStatistics getUserStatistics() {
        log.debug("📊 Calculating user statistics");
        
        Long totalUsers = userRepository.count();
        Long activeParticipants = userRepository.countActiveUsersByRole(UserRole.PARTICIPANT);
        Long activeOrganizers = userRepository.countActiveUsersByRole(UserRole.ORGANIZER);
        Long activeAdmins = userRepository.countActiveUsersByRole(UserRole.ADMIN);
        
        return new UserStatistics(totalUsers, 
                activeParticipants != null ? activeParticipants : 0L,
                activeOrganizers != null ? activeOrganizers : 0L,
                activeAdmins != null ? activeAdmins : 0L);
    }
    
    /**
     * Inner class for user statistics
     */
    public record UserStatistics(Long totalUsers, Long activeParticipants, 
                                Long activeOrganizers, Long activeAdmins) {}
}
