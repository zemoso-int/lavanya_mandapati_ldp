package com.blinkist.backend.entity;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="user_book_details")
public class UserBookDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private int userBookDetailId;

    @Column(name="status")
    private boolean readingStatus;

    @Column(name="pages_left")
    private int pagesLeft;
}
