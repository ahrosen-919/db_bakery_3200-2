package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Recipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipeRepository
        extends CrudRepository<Recipe, Integer> {
    @Query(value = "SELECT * FROM recipes",
            nativeQuery = true)
    public List<Recipe> findAllRecipes();
    @Query(value = "SELECT * FROM recipes WHERE id=:recipeId",
            nativeQuery = true)
    public Recipe findRecipeById(@Param("recipeId") Integer id);
}
