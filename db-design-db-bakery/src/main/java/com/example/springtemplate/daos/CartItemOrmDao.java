package com.example.springtemplate.daos;

import com.example.springtemplate.models.CartItem;
import com.example.springtemplate.models.Ingredient;
import com.example.springtemplate.models.BakedGood;
import com.example.springtemplate.repositories.CartItemRepository;
import com.example.springtemplate.repositories.BakedGoodRepository;
import com.example.springtemplate.repositories.IngredientRepository;

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
        BakedGood bakedGood = BakedGoodRepository.findById(bid).get();
        cartItem.setCustomer(customer);
        cartItem.setBakedGood(bakedGood);
        return cartItemRepository.save(cartItem);
    }

    @GetMapping("/api/customers/{cid}/cartItems")
    public List<CartItem> findCartItemsForCustomer(
            @PathVariable("cid") Integer customerId) {
        Customer customer = customerRepository.findById(customerId).get();
        return customer.getCartItems();
    }
    
    @GetMapping("/api/CartItems/{CartItemId}")
    public CartItem findCartItemById(
            @PathVariable("CartItemId") Integer id) {
        return CartItemRepository.findCartItemById(id);
    }

    @PutMapping("/api/CartItems/{CartItemId}")
    public CartItem updateCartItem(
            @PathVariable("CartItemId") Integer id,
            @RequestBody CartItem CartItemUpdates) {
        CartItem CartItem = CartItemRepository.findCartItemById(id);
        CartItem.setName(CartItemUpdates.getName());
        CartItem.setPrice(CartItemUpdates.getPrice());
        CartItem.setCalories(CartItemUpdates.getCalories());
        // not sure about enumeration datatype
        //CartItem.setType(CartItemUpdates.getType());
        CartItem.setVegan(CartItemUpdates.getVegan());
        CartItem.setGlutenFree(CartItemUpdates.getGlutenFree());

        return CartItemRepository.save(CartItem);
    }

    @DeleteMapping("/api/CartItems/{CartItemId}")
    public void deleteCartItem(
            @PathVariable("CartItemId") Integer id) {
        CartItemRepository.deleteById(id);
    }
}

//