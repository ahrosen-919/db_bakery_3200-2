package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="cart_items")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;

    @ManyToOne
    @JsonIgnore
    private Customer customer;
    @ManyToOne
    @JsonIgnore
    private BakedGood bakedGood;



    public CartItem(Integer quantity, BakedGood bakedGood, Customer customer) {
        this.quantity = quantity;
        this.bakedGood = bakedGood;
        this.customer = customer;
    }

    public CartItem() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getBakedGood() {
        return bakedGood;
    }

    public void setBakedGood(Integer bakedGood) {
        this.bakedGood = bakedGood;
    }

    public Integer getCustomer() {
        return customer;
    }

    public void setCustomer(Integer customer) {
        this.customer = customer;
    }


}
