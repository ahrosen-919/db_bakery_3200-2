package com.example.springtemplate.daos;

import com.example.springtemplate.models.Recipe;
import com.example.springtemplate.models.Ingredient;
import com.example.springtemplate.models.BakedGood;
import com.example.springtemplate.repositories.RecipeRepository;
import com.example.springtemplate.repositories.BakedGoodRepository;
import com.example.springtemplate.repositories.IngredientRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RecipeOrmDao {
    @Autowired
    RecipeRepository recipeRepository;
    @Autowired
    BakedGoodRepository bakedGoodRepository;
    @Autowired
    IngredientRepository ingredientRepository;


    @PostMapping("/api/recipes/{ingredientId}/{bakedGoodId}")
    public Recipe createRecipe(@PathVariable("ingredientId") Integer ingredientId,
                               @PathVariable("bakedGoodId") Integer bakedGoodId,
                               @RequestBody Recipe recipe) {
        recipe.setIngredient(ingredientRepository.findIngredientById(ingredientId));
        recipe.setBakedGood(bakedGoodRepository.findBakedGoodById(bakedGoodId));
        return recipeRepository.save(recipe);
    }

    @GetMapping("/api/recipes")
    public List<Recipe> findAllRecipes() {
        return recipeRepository.findAllRecipes();
    }

    @GetMapping("/api/recipes/{recipeId}")
    public Recipe findRecipeById(
            @PathVariable("recipeId") Integer id) {
        return recipeRepository.findRecipeById(id);
    }

    @PutMapping("/api/recipes/{recipeId}")
    public Recipe updateRecipe(
            @PathVariable("recipeId") Integer id,
            @RequestBody Recipe recipeUpdates) {
        Recipe recipe = recipeRepository.findRecipeById(id);
        recipe.setAmount(recipeUpdates.getAmount());
        recipe.setIngredient(recipe.getIngredient());
        recipe.setBakedGood(recipe.getBakedGood());

        return recipeRepository.save(recipe);
    }

    @DeleteMapping("/api/recipes/{recipeId}")
    public void deleteRecipe(
            @PathVariable("recipeId") Integer id) {
        recipeRepository.deleteById(id);
    }
}

//