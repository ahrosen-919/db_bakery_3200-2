const {Link, useParams} = window.ReactRouterDOM;
import bakedGoodService from "./bakedGood-service"
const { useState, useEffect } = React;


const BakedGoodCartItems = () => {
const {bakedGoodId} = useParams()
const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        findBakedGoodCartItems(bakedGoodId)
    }, [])



    const findBakedGoodCartItems = (bakedGoodId) =>
        bakedGoodService.bakedGoodItems(bakedGoodId)
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

export default BakedGoodCartItems;

