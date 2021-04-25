const {Link, useHistory} = window.ReactRouterDOM;
import cartItemService from "./cartItem-service"
const { useState, useEffect } = React;

const CartItemList = () => {
const history = useHistory()
 const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        findAllCartItems()
    }, [])
    const findAllCartItems = () =>
        cartItemService.findAllCartItems()
            .then(cartItems => setCartItems(cartItems))
    return(
        <div>
            <h2>CartItem List</h2>
            <button onClick={() => history.push("/cartItems/new")} className="btn btn-primary">
                Add CartItem
            </button>
            <ul className="list-group">
                            {
                               cartItems.map(cartItem =>
                                  <li key={cartItem.id}>
                                   <Link to={`/cartItems/${cartItem.id}`}>
                                      {cartItem.quantity},
                                      {cartItem.customer.id},
                                      {cartItem.bakedGood.id}
                                      </Link>
                                  </li>)
                            }

            </ul>
        </div>
    )
}

export default CartItemList;