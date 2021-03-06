package org.apoos.controller;

import org.apoos.pojo.User;
import org.apoos.pojo.UserContent;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.node.ObjectNode;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
public class UserController {
    private User user;
    private static final Logger logger = Logger.getLogger(UserController.class.getName());

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody String requestBody) throws IOException {
        logger.log(Level.INFO, "POST : login : " + requestBody);
        JsonNode parent = new ObjectMapper().readTree(requestBody);
        String name = parent.path("name").asText();
        this.user.setName(name);
        this.user.setSessionId(name);
        logger.log(Level.INFO, "name : " + this.user.getName());

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setContentType(MediaType.APPLICATION_JSON);
        ObjectMapper objectMapper = new ObjectMapper();
        ObjectNode session =objectMapper.createObjectNode();
        session.put("status","OK");
        return new ResponseEntity<>(objectMapper.writeValueAsString(session) , responseHeaders, HttpStatus.OK);
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
    public ResponseEntity<String> setContent(@RequestBody String requestBody) throws IOException {
        logger.log(Level.INFO, "POST :" + requestBody);
        ObjectMapper objectMapper = new ObjectMapper();
        UserContent userContent = objectMapper.readValue(requestBody, UserContent.class);
        this.user.setUserContent(userContent);

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setContentType(MediaType.APPLICATION_JSON);
        String JSONDescription = objectMapper.writeValueAsString(this.user.getUserContent());
        return new ResponseEntity<>(JSONDescription, responseHeaders, HttpStatus.OK);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}