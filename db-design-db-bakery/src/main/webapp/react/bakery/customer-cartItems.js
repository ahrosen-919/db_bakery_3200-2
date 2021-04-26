const {Link, useParams} = window.ReactRouterDOM;
import customerService from "./customer-service"
const { useState, useEffect } = React;


const CustomerCartItems = () => {
const {customerId} = useParams()
console.log(customerId)
const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        findCustomerCartItems(customerId)
    }, [])



    const findCustomerCartItems = (customerId) =>
        customerService.customerItems(customerId)
            .then(cartItems => setCartItems(cartItems))
    return(
        <div>
            <h2>Cart Item List</h2>
            <ul className="list-group">
                            {
                               cartItems.map(cartItem =>
                                  <li key={cartItem.id}>
                                   <Link to={`/cartItems/${cartItem.id}`}>
                                       Cart Item ID: {cartItem.id},
                                      Cart Item Quantity: {cartItem.quantity},
                                      Cart Item Customer ID: {cartItem.customer.id},
                                      Cart Item Baked Good ID: {cartItem.bakedGood.id}
                                      </Link>
                                  </li>)
                            }

            </ul>
        </div>
    )
}

export default CustomerCartItems;

