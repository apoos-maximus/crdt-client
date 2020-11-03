package org.apoos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class SharedResourceController {
    @GetMapping("/login")
    public ModelAndView login(){
        return new ModelAndView("login");
    }
}
