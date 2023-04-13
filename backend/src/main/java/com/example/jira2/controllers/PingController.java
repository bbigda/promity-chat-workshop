package com.example.jira2.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @GetMapping("/api")
    public String ping() {
        return "PROMITY WORKSHOP";
    }

}
