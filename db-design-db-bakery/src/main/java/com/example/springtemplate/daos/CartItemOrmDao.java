package com.example.springtemplate.daos;

import com.example.springtemplate.models.CartItem;
import com.example.springtemplate.models.Customer;
import com.example.springtemplate.models.BakedGood;
import com.example.springtemplate.repositories.CartItemRepository;
import com.example.springtemplate.repositories.BakedGoodRepository;
import com.example.springtemplate.repositories.CustomerRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CartItemOrmDao {
    @Autowired
    CartItemRepository cartItemRepository;
    @Autowired
    BakedGoodRepository bakedGoodRepository;
    @Autowired
    CustomerRepository customerRepository;


    @PostMapping("/api/cartItems")
    public CartItem createCartItem(@RequestBody CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @GetMapping("/api/cartItems")
    public List<CartItem> findAllCartItems() {
        return cartItemRepository.findAllCartItems();
    }

    @GetMapping("/api/customers/{cid}/cartItems")
    public List<CartItem> findCartItemsForCustomer(
            @PathVariable("cid") Integer customerId) {
        Customer customer = customerRepository.findById(customerId).get();
        return customer.getCartItems();
    }

    // It doesn't make sense to have bakedGoodId referencing a cartItem?
    // would the below be a better api url?
    // api/customer/{customerId}/bakedGoods/{bakedGoodId}/cartItems/cartItem/2
    @PostMapping("/api/customers/{customerId}/cartItems/{bakedGoodId}")
    public CartItem createCartItemForBakedGood(
            @PathVariable("customerId") Integer cid,
            @PathVariable("bakedGoodId") Integer bid,
            @RequestBody CartItem cartItem) {
        cartItem = cartItemRepository.save(cartItem);
        Customer customer = customerRepository.findById(cid).get();
        BakedGood bakedGood = bakedGoodRepository.findById(bid).get();
        cartItem.setCustomer(customer);
        cartItem.setBakedGood(bakedGood);
        return cartItemRepository.save(cartItem);
    }

    @GetMapping("/api/bakedGoods/{bid}/cartItems")
    public List<CartItem> findCartItemsForBakedGood(
            @PathVariable("bid") Integer bakedGoodId) {
        BakedGood bakedGood = bakedGoodRepository.findById(bakedGoodId).get();
        return bakedGood.getCartItems();
    }
    
    @GetMapping("/api/cartItems/{cartItemId}")
    public CartItem findCartItemById(
            @PathVariable("cartItemId") Integer id) {
        return cartItemRepository.findCartItemById(id);
    }

    @PutMapping("/api/cartItems/{cartItemId}")
    public CartItem updateCartItem(
            @PathVariable("cartItemId") Integer id,
            @RequestBody CartItem cartItemUpdates) {
        CartItem cartItem = cartItemRepository.findCartItemById(id);
        cartItem.setQuantity(cartItemUpdates.getQuantity());
        cartItem.setCustomer(cartItemUpdates.getCustomer());
        cartItem.setBakedGood(cartItemUpdates.getBakedGood());

        return cartItemRepository.save(cartItem);
    }

    @DeleteMapping("/api/cartItems/{cartItemId}")
    public void deleteCartItem(
            @PathVariable("cartItemId") Integer id) {
        cartItemRepository.deleteById(id);
    }
}

//