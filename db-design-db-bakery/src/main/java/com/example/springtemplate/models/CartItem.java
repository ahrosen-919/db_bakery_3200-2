package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name="cart_items")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer quantity;
//    @Column(name="baked_good_id")
//    private Integer bakedGoodId;
//    @Column(name="customer_id")
//    private Integer customerId;
    @ManyToOne
    @JsonIgnore
    private Customer customer;
    @ManyToOne
    @JsonIgnore
    private BakedGood bakedGood;



//    public CartItem(Integer quantity, Integer bakedGoodId, Integer customerId) {
//        this.quantity = quantity;
//        this.bakedGoodId = bakedGoodId;
//        this.customerId = customerId;
//    }

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

//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public Integer getQuantity() {
//        return quantity;
//    }
//
//    public void setQuantity(Integer quantity) {
//        this.quantity = quantity;
//    }
//
//    public Integer getBakedGoodId() {
//        return bakedGoodId;
//    }
//
//    public void setBakedGoodId(Integer bakedGoodId) {
//        this.bakedGoodId = bakedGoodId;
//    }
//
//    public Integer getCustomerId() {
//        return customerId;
//    }
//
//    public void setCustomerId(Integer customerId) {
//        this.customerId = customerId;
//    }
}
