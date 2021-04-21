package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Ingredient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientRepository
        extends CrudRepository<Ingredient, Integer> {
    @Query(value = "SELECT * FROM ingredients",
            nativeQuery = true)
    public List<Ingredient> findAllIngredients();
    @Query(value = "SELECT * FROM ingredients WHERE id=:ingredientId",
            nativeQuery = true)
    public Ingredient findIngredientById(@Param("ingredientId") Integer id);
}
