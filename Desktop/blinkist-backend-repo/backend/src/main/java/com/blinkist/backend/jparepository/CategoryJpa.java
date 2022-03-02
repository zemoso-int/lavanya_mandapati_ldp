package com.blinkist.backend.jparepository;


import com.blinkist.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryJpa extends JpaRepository<Category,Integer> {
}
