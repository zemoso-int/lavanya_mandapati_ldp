package com.blinkist.backend.jparepository;

import com.blinkist.backend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksJpa extends JpaRepository<Book,Integer> {
}
