package org.apoos.controller;

import org.apoos.pojo.User;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
public class UserController {
    private User user;
    private static final Logger logger = Logger.getLogger(UserController.class.getName());

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String name) {
        this.user.setName(name);
        this.user.setSessionId(name);
        logger.log(Level.INFO, "name : " + this.user.getName());
        return new ResponseEntity<>("login success", HttpStatus.OK);
    }

    @GetMapping("/content")
    public ResponseEntity<String> getContent() throws IOException {
        logger.log(Level.INFO, "content request");
        ObjectMapper objectMapper = new ObjectMapper();
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setContentType(MediaType.APPLICATION_JSON);
        String JSONDescription = objectMapper.writeValueAsString(this.user.getUserContent());
        return  new ResponseEntity<>(JSONDescription,responseHeaders, HttpStatus.OK);
    }

    @PostMapping("/content")
    public ResponseEntity<String> setContent(@RequestParam String content){
        this.user.getUserContent().setContent(content);
        logger.log(Level.INFO, "content set : " + this.user.getUserContent().getContent());
        return new ResponseEntity<>("content set", HttpStatus.OK);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}