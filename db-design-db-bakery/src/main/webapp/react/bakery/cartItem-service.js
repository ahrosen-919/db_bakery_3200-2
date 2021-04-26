// TODO: declare URL where server listens for HTTP requests
const CART_ITEMS_URL = "http://localhost:8080/api/cartItems"

// TODO: retrieve all cartItems from the server
export const findAllCartItems = () =>
    fetch(`${CART_ITEMS_URL}`)
        .then(response => response.json())


// TODO: retrieve a single CartItem by their ID
export const findCartItemById = (id) =>
            fetch(`${CART_ITEMS_URL}/${id}`)
                .then(response => response.json())


// TODO: delete a CartItem by their ID
export const deleteCartItem = (id) =>
    fetch(`${CART_ITEMS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new CartItem
export const createCartItem = (customerId, bakedGoodId, cartItem) =>
    fetch(`${CART_ITEMS_URL}/${customerId}/${bakedGoodId}`, {
        method: 'POST',
        body: JSON.stringify(cartItem),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a cartItem by their ID
export const updateCartItem = (id, cartItem) =>
    fetch(`${CART_ITEMS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(cartItem),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllCartItems, findCartItemById, deleteCartItem, createCartItem, updateCartItem
}
