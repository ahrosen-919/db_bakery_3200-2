const {Link, useHistory} = window.ReactRouterDOM;
import ingredientService from "./ingredient-service"
const { useState, useEffect } = React;

const IngredientList = () => {
    const history = useHistory()
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        findAllIngredients()
    }, [])
    const findAllIngredients = () =>
        ingredientService.findAllIngredients()
            .then(ingredients => {setIngredients(ingredients); console.log(ingredients)})
    return(
        <div>
            <h2>Ingredient List</h2>
            <button onClick={() => history.push("/ingredients/new")} className="btn btn-primary">
                Add Ingredient
            </button>
            <ul className="list-group">
                {
                    ingredients.map(ingredient =>
                        <li key={ingredient.id}>
                            <Link to={`/ingredients/${ingredient.id}`}>
                                Ingredient ID: {ingredient.id},
                                Ingredient Name: {ingredient.name},
                                Ingredient Price: {ingredient.price},
                                Ingredient Brand: {ingredient.brand}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default IngredientList;