package com.example.springtemplate.repositories;

import com.example.springtemplate.models.CartItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartItemRepository
        extends CrudRepository<CartItem, Integer> {
    @Query(value = "SELECT * FROM cart_items",
            nativeQuery = true)
    public List<CartItem> findAllCartItems();
    @Query(value = "SELECT * FROM cart_items WHERE id=:cartItemId",
            nativeQuery = true)
    public CartItem findCartItemById(@Param("cartItemId") Integer id);
    @Query(value = "SELECT * FROM cart_items WHERE customer_id=:customerId",
            nativeQuery = true)
    public List<CartItem> findCartItemsByCustomer(@Param("customerId") Integer id);
    @Query(value = "SELECT * FROM cart_items WHERE baked_good_id=:bakedGoodId",
            nativeQuery = true)
    public List<CartItem> findCartItemsByBakedGood(@Param("bakedGoodId") Integer id);
}
