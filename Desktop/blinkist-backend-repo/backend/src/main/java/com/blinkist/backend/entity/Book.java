package com.blinkist.backend.entity;

import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import javax.persistence.*;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private int bookId;

    @Column(name = "book_title")
    private String bookTitle;

    @Column(name = "description")
    private String description;

    @Column(name = "total_pages")
    private int totalPages;

    @Column(name = "no_of_readings")
    private int noOfReadings;

    @Column(name = "book_image")
    private String bookImage;




}