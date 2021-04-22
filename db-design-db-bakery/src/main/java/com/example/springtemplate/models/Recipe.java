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

    // Is @ManyToOne apply to an Object or a Primitive type data?
    // In Sections.java @ManyToOne applies to an Object instead of a primitive integer ID
    // If that is the case do we still need the field for ingredientId and bakedGoodId?

    @ManyToOne
    @JsonIgnore
    private Ingredient ingredient;
    @ManyToOne
    @JsonIgnore
    private BakedGood bakedGood;



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

        public Integer getIngredient() {
        return ingredientId;
    }

    public void setIngredient(Integer ingredient) {
        this.ingredient = ingredient;
    }

    public Integer getBakedGood() {
        return bakedGood;
    }

    public void setBakedGood(Integer bakedGood) {
        this.bakedGood = bakedGood;
    }
    public Integer getIngredient() {
        return ingredient;
    }

//    public void setIngredientId(Integer ingredientId) {
//        this.ingredientId = ingredientId;
//    }

//    public Integer getBakedGoodId() {
//        return bakedGoodId;
//    }
//
//    public void setBakedGoodId(Integer bakedGoodId) {
//        this.bakedGoodId = bakedGoodId;
//    }
}
