// TODO: declare URL where server listens for HTTP requests
const RECIPES_URL = "http://localhost:8080/api/recipes"

// TODO: retrieve all recipes from the server
export const findAllRecipes = () =>
    fetch(`${RECIPES_URL}`)
        .then(response => response.json())


// TODO: retrieve a single Recipe by their ID
export const findRecipeById = (id) =>
    fetch(`${RECIPES_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a Recipe by their ID
export const deleteRecipe = (id) =>
    fetch(`${RECIPES_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new Recipe
export const createRecipe = (ingredientId, bakedGoodId, recipe) =>
    fetch(`${RECIPES_URL}/${ingredientId}/${bakedGoodId}`, {
        method: 'POST',
        body: JSON.stringify(recipe),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a recipe by their ID
export const updateRecipe = (id, recipe) =>
    fetch(`${RECIPES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(recipe),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllRecipes, findRecipeById, deleteRecipe, createRecipe, updateRecipe
}
