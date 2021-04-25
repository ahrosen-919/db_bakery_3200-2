// TODO: declare URL where server listens for HTTP requests
const BAKED_GOODS_URL = "http://localhost:8080/api/bakedGoods"

// TODO: retrieve all bakedGoods from the server
export const findAllBakedGoods = () =>
    fetch(`${BAKED_GOODS_URL}`)
        .then(response => response.json())




// TODO: retrieve a single BakedGood by their ID
export const findBakedGoodById = (id) =>
            fetch(`${BAKED_GOODS_URL}/${id}`)
                .then(response => response.json())


// TODO: delete a BakedGood by their ID
export const deleteBakedGood = (id) =>
    fetch(`${BAKED_GOODS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new BakedGood
export const createBakedGood = (bakedGood) =>
    fetch(`${BAKED_GOODS_URL}`, {
        method: 'POST',
        body: JSON.stringify(bakedGood),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a bakedGood by their ID
export const updateBakedGood = (id, bakedGood) =>
    fetch(`${BAKED_GOODS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(bakedGood),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllBakedGoods, findBakedGoodById, deleteBakedGood, createBakedGood, updateBakedGood
}
