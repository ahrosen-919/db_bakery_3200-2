const {Link, useHistory} = window.ReactRouterDOM;
import recipeService from "./recipe-service"
const { useState, useEffect } = React;

const RecipeList = () => {
    const history = useHistory()
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        findAllRecipes()
    }, [])
    const findAllRecipes = () =>
        recipeService.findAllRecipes()
            .then(recipes => {setRecipes(recipes); console.log(recipes)})
    return(
        <div>
            <h2>Recipe List</h2>
            <button onClick={() => history.push("/recipes/new")} className="btn btn-primary">
                Add Recipe
            </button>
            <ul className="list-group">
                {
                    recipes.map(recipe =>
                        <li key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`}>
                                Item: {recipe.bakedGood.name},

                                Ingredient: {recipe.ingredient.name},

                                Ingredient Amount: {recipe.amount} tons,
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default RecipeList;