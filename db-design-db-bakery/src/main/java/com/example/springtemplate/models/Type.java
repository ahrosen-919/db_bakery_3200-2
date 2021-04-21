package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="types")
public class Type {
    @Id
    private String type;

    public Type(String type) {
        this.type = type;
    }

    public Type() {
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
