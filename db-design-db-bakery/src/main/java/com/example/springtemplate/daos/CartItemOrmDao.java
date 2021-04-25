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


    @PostMapping("/api/cartItems/{customerId}/{bakedGoodId}")
    public CartItem createCartItem(
            @PathVariable("customerId") Integer cid,
            @PathVariable("bakedGoodId") Integer bid,
            @RequestBody CartItem cartItem) {

        cartItem.setCustomer(customerRepository.findCustomerById(cid));
        cartItem.setBakedGood(bakedGoodRepository.findBakedGoodById(bid));
        ;return cartItemRepository.save(cartItem);
    }

    @GetMapping("/api/cartItems")
    public List<CartItem> findAllCartItems() {
        return cartItemRepository.findAllCartItems();
    }
    
    @GetMapping("/api/cartItems/{cartItemId}")
    public CartItem findCartItemById(
            @PathVariable("cartItemId") Integer id) {
        return cartItemRepository.findCartItemById(id);
    }

    @PutMapping("/api/cartItems/{cartItemId}/{customerId}/{bakedGoodId}")
    public CartItem updateCartItem(
            @PathVariable("cartItemId") Integer id,
            @PathVariable("customerId") Integer cid,
            @PathVariable("bakedGoodId") Integer bid,
            @RequestBody CartItem cartItemUpdates) {
        CartItem cartItem = cartItemRepository.findCartItemById(id);
        cartItem.setQuantity(cartItemUpdates.getQuantity());
        cartItem.setCustomer(customerRepository.findCustomerById(cid));
        cartItem.setBakedGood(bakedGoodRepository.findBakedGoodById(bid));

        return cartItemRepository.save(cartItem);
    }

    @DeleteMapping("/api/cartItems/{cartItemId}")
    public void deleteCartItem(
            @PathVariable("cartItemId") Integer id) {
        cartItemRepository.deleteById(id);
    }
}

//