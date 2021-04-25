import recipeService from "./recipe-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;


const RecipeFormEditor = () => {
    const {id} = useParams()
    let bakedGoodId = useState({})
    let ingredientId = useState({})
    const [recipe, setRecipe] = useState({bakedGood:{id:null}, ingredient:{id:null}})

    useEffect(() => {
        if(id !== "new") {
            findRecipeById(id)
            recipe.bakedGood.id = 123;
            recipe.ingredient.id = 123;
        }
    }, []);

    const checkBakedLink = () => {
        let path;
        recipe.bakedGood.id === null ?  path = "/bakedGoods"
            : path = "/bakedGoods/" + recipe.bakedGood.id;
        return path;
    }

    const checkIngredLink = () => {
        let path;
        recipe.ingredient.id === null ?  path = "/ingredients"
            : path = "/ingredients/" + recipe.ingredient.id;
        return path;
    }
    const findRecipeById = (id) => {
        recipeService.findRecipeById(id)
            .then(recipe => setRecipe(recipe))
    }
    const deleteRecipe = (id) =>
        recipeService.deleteRecipe(id)
            .then(() => history.back())

    const createRecipe = (ingredientId, bakedGoodId, recipe) =>
        recipeService.createRecipe(ingredientId, bakedGoodId, recipe)
            .then(() => history.back())

    const updateRecipe = (id, newRecipe) =>
        recipeService.updateRecipe(id, newRecipe)
            .then(() => history.back())


    return (
        <div>
            <h2>Recipe Editor</h2>
            <label>Id</label>
            <input value={recipe.id} placeholder="Auto Generated" className="form-control"/><br/>

            <label>Amount</label>
            <input onChange={(e) =>
                setRecipe(recipe => ({...recipe, amount: e.target.value}))}
                   value={recipe.amount} className="form-control"/>
            <label>Ingredient ID</label>
            <input onChange={(e) => ingredientId = (e.target.value)}
                 //setRecipe(recipe => ({...recipe, amount: e.target.value}))

                   value={recipe.ingredient.id} className="form-control" placeholder="Number ex: 1"/>
            <label>Baked Good ID</label>
            <input onChange={(e) => bakedGoodId = (e.target.value)}
                //setRecipe(recipe => ({...recipe, amount: e.target.value}))}
                   value={recipe.bakedGood.id} className="form-control" placeholder="Number ex: 1"/>
            <br/>

            <button onClick={() => {history.back()}}
                    className="btn btn-warning">Cancel</button>
            <button onClick={() => deleteRecipe(recipe.id)} className="btn btn-danger">Delete</button>
            <button onClick={() => updateRecipe(recipe.id, recipe)}
                    className="btn btn-primary">Save</button>
            <button onClick={() => createRecipe(ingredientId, bakedGoodId, recipe)} className="btn btn-success">Create</button>
            <br/>
            <Link to={checkIngredLink()}>
                Ingredient Information
            </Link>
            <br/>
            <Link to={checkBakedLink()}>
                 Baked Goods Information
            </Link>

        </div>
    )
}

export default RecipeFormEditor