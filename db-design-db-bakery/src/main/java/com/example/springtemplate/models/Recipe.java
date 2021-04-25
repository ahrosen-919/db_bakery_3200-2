package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer amount;

    @ManyToOne
    @JoinColumn(name = "ingredient_id", referencedColumnName = "id")
    private Ingredient ingredient;
    @ManyToOne
    @JoinColumn(name = "bakedGood_id", referencedColumnName = "id")
    private BakedGood bakedGood;

    public Recipe(Integer amount, Ingredient ingredient, BakedGood bakedGood) {
        this.amount = amount;
        this.ingredient = ingredient;
        this.bakedGood = bakedGood;
    }

    public Recipe() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public BakedGood getBakedGood() {
        return bakedGood;
    }

    public void setBakedGood(BakedGood bakedGood) {
        this.bakedGood = bakedGood;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

}
