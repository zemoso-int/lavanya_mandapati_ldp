package com.blinkist.backend.controller;


import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDateTime;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @GetMapping("/")
    public String Hello()
    {
        return "Hello world "+ LocalDateTime.now();
    }
}

