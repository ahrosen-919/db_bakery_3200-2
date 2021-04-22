package com.example.springtemplate.daos;

import com.example.springtemplate.models.Ingredient;
import com.example.springtemplate.repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class IngredientOrmDao {
    @Autowired
    IngredientRepository ingredientRepository;

    @PostMapping("/api/ingredients")
    public Ingredient createIngredient(@RequestBody Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

    @GetMapping("/api/ingredients")
    public List<Ingredient> findAllIngredients() {
        return ingredientRepository.findAllIngredients();
    }

    @GetMapping("/api/ingredients/{ingredientId}")
    public Ingredient findIngredientById(
            @PathVariable("ingredientId") Integer id) {
        return ingredientRepository.findIngredientById(id);
    }

    @PutMapping("/api/ingredients/{ingredientId}")
    public Ingredient updateIngredient(
            @PathVariable("ingredientId") Integer id,
            @RequestBody Ingredient ingredientUpdates) {
        Ingredient ingredient = ingredientRepository.findIngredientById(id);
        ingredient.setName(ingredientUpdates.getName());
        ingredient.setPrice(ingredientUpdates.getPrice());
        ingredient.setBrand(ingredientUpdates.getBrand());

        return ingredientRepository.save(ingredient);
    }

    @DeleteMapping("/api/ingredients/{ingredientId}")
    public void deleteIngredient(
            @PathVariable("ingredientId") Integer id) {
        ingredientRepository.deleteById(id);
    }
}