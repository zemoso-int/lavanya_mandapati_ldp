package com.blinkist.backend.jparepository;

import com.blinkist.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserJpa extends JpaRepository<User,Integer> {
}
