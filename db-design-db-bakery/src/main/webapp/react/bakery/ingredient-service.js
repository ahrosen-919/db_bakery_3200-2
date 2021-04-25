// TODO: declare URL where server listens for HTTP requests
const INGREDIENTS_URL = "http://localhost:8080/api/ingredients"

// TODO: retrieve all ingredients from the server
export const findAllIngredients = () =>
    fetch(`${INGREDIENTS_URL}`)
        .then(response => response.json())


// TODO: retrieve a single Ingredient by their ID
export const findIngredientById = (id) =>
    fetch(`${INGREDIENTS_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a Ingredient by their ID
export const deleteIngredient = (id) =>
    fetch(`${INGREDIENTS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new Ingredient
export const createIngredient = (ingredient) =>
    fetch(`${INGREDIENTS_URL}`, {
        method: 'POST',
        body: JSON.stringify(ingredient),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a ingredient by their ID
export const updateIngredient = (id, ingredient) =>
    fetch(`${INGREDIENTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(ingredient),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllIngredients, findIngredientById, deleteIngredient, createIngredient, updateIngredient
}
