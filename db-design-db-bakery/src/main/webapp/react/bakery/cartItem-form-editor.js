import cartItemService from "./cartItem-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const CartItemFormEditor = () => {
 const {id} = useParams()
 var {customerId} = useState({})
 var {bakedGoodId} = useState({})
   const [cartItem, setCartItem] = useState({bakedGood:{id:null}, customer:{id:null}})
   useEffect(() => {
        if(id !== "new") {
            findCartItemById(id)
            cartItem.bakedGood.id = 123;
            cartItem.customer.id = 123;
        }
    }, []);

const checkBakedLink = () => {
    let path;
    cartItem.bakedGood.id === null ?  path = "/bakedGoods"
        : path = "/bakedGoods/" + cartItem.bakedGood.id;
    return path;
}

const checkCustomerLink = () => {
    let path;
    cartItem.customer.id === null ?  path = "/customers"
        : path = "/customers/" + cartItem.customer.id;
    return path;
}

 const findCartItemById = (id) => {
         cartItemService.findCartItemById(id)
             .then(cartItem => setCartItem(cartItem))
             }
             const deleteCartItem = (id) =>
                     cartItemService.deleteCartItem(id)
                         .then(() => history.back())

                         const createCartItem = (customerId, bakedGoodId, cartItem) =>
                                 cartItemService.createCartItem(customerId, bakedGoodId, cartItem)
                                     .then(() => history.back())

                                      const updateCartItem = (id, newCartItem) =>
                                             cartItemService.updateCartItem(id, newCartItem)
                                                 .then(() => history.back())




    return (
        <div>
            <h2>CartItem Editor</h2>
            <label>Id</label>
            <input value={cartItem.id} placeholder="Auto Generated" className="form-control"/><br/>

            <label>Quantity</label>
            <input onChange={(e) =>
            setCartItem(cartItem => ({...cartItem, quantity: e.target.value}))}
            value={cartItem.quantity} className="form-control"/>

            <label>Baked Good ID</label>
            <input onChange={(e) => bakedGoodId = (e.target.value)}
            //setCartItem(cartItem =>({...cartItem, bakedGood: (e.target.value)}))}
            //value={typeof cartItem.bakedGood === 'object' ? cartItem.bakedGood.id : 0} className="form-control"/>
            value={ cartItem.bakedGood.id } className="form-control" placeholder={"Number ex: 1"}/>

            <label>Customer ID</label>
            <input onChange={(e) => customerId = (e.target.value)}
            //setCartItem(cartItem => ({...cartItem, customer: (e.target.value)}))}
            value={cartItem.customer.id} className="form-control"  placeholder={"Number ex: 1"}/>

            <br/>

            <button onClick={() => {history.back()}}
            className="btn btn-warning">Cancel</button>

            <button onClick={() => deleteCartItem(cartItem.id)} className="btn btn-danger">Delete</button>
            <button onClick={() => updateCartItem(cartItem.id, cartItem)}
            className="btn btn-primary">Save</button>
            <button onClick={() => createCartItem(customerId, bakedGoodId, cartItem)}
                        className="btn btn-primary">Create</button>

            <br/>
            <Link to={checkCustomerLink()}>
                Customer Information
            </Link>
            <br/>
            <Link to={checkBakedLink()}>
                Baked Goods Information
            </Link>
        </div>

)
}

export default CartItemFormEditor