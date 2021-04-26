// TODO: declare URL where server listens for HTTP requests
const CUSTOMERS_URL = "http://localhost:8080/api/customers"

// TODO: retrieve all customers from the server
export const findAllCustomers = () =>
    fetch(`${CUSTOMERS_URL}`)
        .then(response => response.json())


// TODO: retrieve a single Customer by their ID
export const findCustomerById = (id) =>
            fetch(`${CUSTOMERS_URL}/${id}`)
                .then(response => response.json())


// TODO: delete a Customer by their ID
export const deleteCustomer = (id) =>
    fetch(`${CUSTOMERS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new Customer
export const createCustomer = (customer) =>
    fetch(`${CUSTOMERS_URL}`, {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a customer by their ID
export const updateCustomer = (id, customer) =>
    fetch(`${CUSTOMERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(customer),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllCustomers, findCustomerById, deleteCustomer, createCustomer, updateCustomer
}
