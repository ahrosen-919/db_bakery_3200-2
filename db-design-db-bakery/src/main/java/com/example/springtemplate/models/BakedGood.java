package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table(name="baked_goods")
public class BakedGood {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Double price;
    private Integer calories;
    @Enumerated(EnumType.STRING)
    private Type type;
    private boolean vegan;
    @Column(name="gluten_free")
    private boolean glutenFree;

    @OneToMany(mappedBy = "bakedGood")
    @JsonIgnore
    private List<Recipe> recipes;

    @OneToMany(mappedBy = "bakedGood")
    @JsonIgnore
    private List<CartItem> cartItems;


    public BakedGood(String name, Double price, Integer calories, Type type, boolean vegan,
                     boolean glutenFree, List<Recipe> recipes, List<CartItem> cartItems) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.type = type;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
        this.recipes = recipes;
        this.cartItems = cartItems;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public boolean getVegan() {
        return vegan;
    }

    public void setVegan(boolean vegan) {
        this.vegan = vegan;
    }

    public boolean getGlutenFree() {
        return glutenFree;
    }

    public void setGlutenFree(boolean glutenFree) {
        this.glutenFree = glutenFree;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    public BakedGood() {}
}
