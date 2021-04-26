import bakedGoodService from "./bakedGood-service"
import cartItemService from "./cartItem-service"
import {recipeService, findAllRecipes} from "./recipe-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const BakedGoodFormEditor = () => {
    const {id} = useParams()
    const [bakedGood, setBakedGood] = useState({})
    const [cartItems, setCartItems] = useState([])
    const [recipes, setRecipes] = useState([])
  useEffect(() => {
       if(id !== "new") {
           findBakedGoodById(id)
           findAllCartItems();
           findAllRecipes()
       }
   }, []);

    const findAllCartItems = () =>
        cartItemService.findAllCartItems()
            .then(cartItems => setCartItems(cartItems))

    const findAllRecipes = () =>
        recipeService.findAllRecipes()
            .then(recipes => setRecipes(recipes))

    const FilterBakedGoodItems = () => {
        {
            let id = bakedGood.id;
            return cartItems.filter(cartItem => id === cartItem.bakedGood.id).map(cartItem =>
                <ul className="list-group">
                    <li key={cartItem.id}>
                        <Link to={`/cartItems/${cartItem.id}`}>
                            Cart Item ID: {cartItem.id},
                            Cart Item Quantity: {cartItem.quantity},
                            Cart Item Customer ID: {cartItem.customer.id},
                            Cart Item Baked Good ID: {cartItem.bakedGood.id}
                        </Link>
                    </li>
                    <br/>
                </ul>)
        }
    }

    const FilterRecipeItems = () => {
        {
            let id = bakedGood.id;
            return recipes.filter(recipe => id === recipe.bakedGood.id).map(recipe =>
                <ul className="list-group">
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>
                            Recipe ID: {recipe.id},
                            Recipe Amount: {recipe.amount},
                            Recipe Ingredient ID: {recipe.ingredient.id},
                            Recipe Baked Good ID: {recipe.bakedGood.id}
                        </Link>
                    </li>
                    <br/>
                </ul>)
        }
    }


const findBakedGoodById = (id) => {
        bakedGoodService.findBakedGoodById(id)
            .then(bakedGood => setBakedGood(bakedGood))
            }
            const deleteBakedGood = (id) =>
                    bakedGoodService.deleteBakedGood(id)
                        .then(() => history.back())

                        const createBakedGood = (bakedGood) =>
                                bakedGoodService.createBakedGood(bakedGood)
                                    .then(() => history.back())

                                     const updateBakedGood = (id, newBakedGood) =>
                                            bakedGoodService.updateBakedGood(id, newBakedGood)
                                                .then(() => history.back())

   return (
       <div>
           <h2>BakedGood Editor</h2>
           <label>Id</label>
           <input value={bakedGood.id} placeholder="Auto Generated" className="form-control"/><br/>

           <label>Name</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood => ({...bakedGood, name: e.target.value}))}
           value={bakedGood.name} className="form-control"/>

           <label>Price</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood =>({...bakedGood, price: e.target.value}))}
           value={bakedGood.price} className="form-control"/>

           <label>Calories</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood => ({...bakedGood, calories: e.target.value}))}
           value={bakedGood.calories} className="form-control"/>

           <label for={"enumType"}>Type</label>
           <select name="enumType" id={"enumType"} className="form-control" onChange={(e) =>
               setBakedGood(bakedGood => ({...bakedGood, type: e.target.value}))}
                   value={bakedGood.type}>
               <option value="CAKE">Cake</option>
               <option value="COOKIE">Cookie</option>
               <option value="BREAD">Bread</option>
               <option value="PASTRY">Pastry</option>
           </select>

           <label>Vegan</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood => ({...bakedGood, vegan: e.target.value}))}
           value={bakedGood.vegan} className="form-control" placeholder={"Ex: true or false"}/>

           <label>Gluten Free</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood => ({...bakedGood, glutenFree: e.target.value}))}
           value={bakedGood.glutenFree} className="form-control" placeholder={"Ex: true or false"}/>

           <button onClick={() => {history.back()}}
           className="btn btn-warning">Cancel</button>

           <button onClick={() => deleteBakedGood(bakedGood.id)} className="btn btn-danger">Delete</button>
           <button onClick={() => updateBakedGood(bakedGood.id, bakedGood)}
           className="btn btn-primary">Save</button>
           <button onClick={() => createBakedGood(bakedGood)} className="btn btn-success">Create</button>
            <FilterBakedGoodItems/>
            <FilterRecipeItems />
       </div>
   )
}

export default BakedGoodFormEditor