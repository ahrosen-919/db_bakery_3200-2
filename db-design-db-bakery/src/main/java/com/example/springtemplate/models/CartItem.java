package com.example.springtemplate.models;

import com.example.springtemplate.repositories.BakedGoodRepository;
import com.example.springtemplate.repositories.CustomerRepository;
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

    @JoinColumn(name = "baked_good_id", referencedColumnName = "id")
    private BakedGood bakedGood;

    //private BakedGoodRepository bakedGoodRepository;
    //private CustomerRepository customerRepository;



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


    public Integer getCustomerId() {
        return this.customer.getId();
    }

   /* public void setCustomer(Integer customerId) {
        this.customer = this.customerRepository.findCustomerById(customerId);
    }*/

    public Integer getBakedGoodId() {
        return this.bakedGood.getId();
    }

    /*public void setBakedGood(Integer bakedGoodId) {
        this.bakedGood = this.bakedGoodRepository.findBakedGoodById(bakedGoodId);
    }*/
}
