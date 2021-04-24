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


    @PostMapping("/api/recipes")
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @GetMapping("/api/recipes")
    public List<Recipe> findAllRecipes() {
        return recipeRepository.findAllRecipes();
    }

    @GetMapping("/api/ingredients/{cid}/recipes")
    public List<Recipe> findRecipesForIngredient(
            @PathVariable("cid") Integer ingredientId) {
        Ingredient ingredient = ingredientRepository.findById(ingredientId).get();
        return ingredient.getRecipes();
    }

    // It doesn't make sense to have bakedGoodId referencing a recipe?
    // would the below be a better api url?
    // api/ingredient/{ingredientId}/bakedGoods/{bakedGoodId}/recipes/recipe/2
    @PostMapping("/api/ingredients/{ingredientId}/recipes/{bakedGoodId}")
    public Recipe createRecipeForBakedGood(
            @PathVariable("ingredientId") Integer cid,
            @PathVariable("bakedGoodId") Integer bid,
            @RequestBody Recipe recipe) {
        recipe = recipeRepository.save(recipe);
        Ingredient ingredient = ingredientRepository.findById(cid).get();
        BakedGood bakedGood = bakedGoodRepository.findById(bid).get();
        recipe.setIngredient(ingredient);
        recipe.setBakedGood(bakedGood);
        return recipeRepository.save(recipe);
    }

    @GetMapping("/api/bakedGoods/{bid}/recipes")
    public List<Recipe> findRecipesForBakedGood(
            @PathVariable("bid") Integer bakedGoodId) {
        BakedGood bakedGood = bakedGoodRepository.findById(bakedGoodId).get();
        return bakedGood.getRecipes();
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
        recipe.setIngredient(recipeUpdates.getIngredient());
        recipe.setBakedGood(recipeUpdates.getBakedGood());

        return recipeRepository.save(recipe);
    }

    @DeleteMapping("/api/recipes/{recipeId}")
    public void deleteRecipe(
            @PathVariable("recipeId") Integer id) {
        recipeRepository.deleteById(id);
    }
}

//