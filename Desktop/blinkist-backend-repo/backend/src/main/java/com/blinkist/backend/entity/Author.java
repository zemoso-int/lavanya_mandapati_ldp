package com.blinkist.backend.entity;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="author")
public class Author {

    @Id
    @NotNull
    @Column(name = "author_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int authorId;

    @Column(name="author_name")
    private String authorName;

    @Column(name="author_description")
    private String authorDescription;
}
