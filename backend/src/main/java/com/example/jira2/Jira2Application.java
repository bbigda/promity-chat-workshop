package com.example.jira2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class Jira2Application {

    public static void main(String[] args) {
        SpringApplication.run(Jira2Application.class, args);
    }
}
