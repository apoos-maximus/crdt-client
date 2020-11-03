package org.apoos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SharedResourceController {
    @GetMapping("/home")
    public String login(){
        return "login";
    }
}
