const {Link, useParams} = window.ReactRouterDOM;
import ingredientService from "./ingredient-service"
const { useState, useEffect } = React;


const IngredientRecipes = () => {
const {ingredientId} = useParams()
const [recipes, setRecipes] = useState([])
    useEffect(() => {
        findIngredientRecipes(ingredientId)
    }, [])



    const findIngredientRecipes = (ingredientId) =>
        ingredientService.ingredientRecipes(ingredientId)
            .then(recipes => setRecipes(recipes))
    return(
        <div>
            <h2>Recipe List</h2>
            <ul className="list-group">
                            {
                               recipes.map(recipe =>
                                  <li key={recipe.id}>
                                   <Link to={`/recipes/${recipe.id}`}>
                                      Recipe ID: {recipe.id},
                                      Recipe Amount: {recipe.amount},
                                      Recipe Ingredient ID: {recipe.ingredient.id},
                                      Recipe Baked Good ID: {recipe.bakedGood.id}
                                      </Link>
                                  </li>)
                            }

            </ul>
        </div>
    )
}

export default IngredientRecipes;

