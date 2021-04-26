const {Link, useParams} = window.ReactRouterDOM;
import bakedGoodService from "./bakedGood-service"
const { useState, useEffect } = React;


const BakedGoodRecipes = () => {
const {bakedGoodId} = useParams()
const [recipes, setRecipes] = useState([])
    useEffect(() => {
        findBakedGoodRecipes(bakedGoodId)
    }, [])



    const findBakedGoodRecipes = (bakedGoodId) =>
        bakedGoodService.bakedGoodRecipes(bakedGoodId)
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

export default BakedGoodRecipes;

