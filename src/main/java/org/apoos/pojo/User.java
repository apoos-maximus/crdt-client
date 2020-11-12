package org.apoos.pojo;

public class User {
    private String name;
    private String sessionId;
    private UserContent userContent;


    public String getName() {
        return name;
    }

    public String getSessionId() {
        return sessionId;
    }

    public UserContent getUserContent() {
        return userContent;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public void setUserContent(UserContent userContent) {
        this.userContent = userContent;
    }
}
