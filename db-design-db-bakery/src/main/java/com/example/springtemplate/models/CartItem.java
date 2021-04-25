package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="cart_items")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "bakedGood_id", referencedColumnName = "id")
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

    public BakedGood getBakedGood() {
        return bakedGood;
    }

    public void setBakedGood(BakedGood bakedGood) {
        this.bakedGood = bakedGood;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }


}
