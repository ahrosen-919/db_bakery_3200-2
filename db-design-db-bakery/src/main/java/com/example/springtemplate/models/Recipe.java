package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="recipes")
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer amount;
    @Column(name="ingredient_id")
    private Integer ingredientId;
    @Column(name="baked_good_id")
    private Integer bakedGoodId;

    public Recipe(Integer amount, Integer ingredientId, Integer bakedGoodId) {
        this.amount = amount;
        this.ingredientId = ingredientId;
        this.bakedGoodId = bakedGoodId;
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

    public Integer getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(Integer ingredientId) {
        this.ingredientId = ingredientId;
    }

    public Integer getBakedGoodId() {
        return bakedGoodId;
    }

    public void setBakedGoodId(Integer bakedGoodId) {
        this.bakedGoodId = bakedGoodId;
    }
}
