import CustomerList from "./customer-lists";
import CustomerCartItems from "./customer-cartItems";
import BakedGoodCartItems from "./bakedGood-cartItems";
import BakedGoodRecipes from "./bakedGood-recipes";
import IngredientRecipes from "./ingredient-recipes";

import CustomerFormEditor from "./customer-form-editor";
import IngredientList from "./ingredient-lists";
import IngredientFormEditor from "./ingredient-form-editor";
import RecipeList from "./recipe-lists";
import RecipeFormEditor from "./recipe-form-editor";

import CartItemList from "./cartItem-lists";
import CartItemFormEditor from "./cartItem-form-editor";
import BakedGoodList from "./bakedGood-lists";
import BakedGoodFormEditor from "./bakedGood-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/customers","/"]} exact={true}>
                    <CustomerList/>
                </Route>
                <Route path="/customers/:id" exact={true}>
                    <CustomerFormEditor/>
                </Route>
                <Route path={["/bakedGoods","/"]} exact={true}>
                    <BakedGoodList/>
                </Route>
                <Route path="/bakedGoods/:id" exact={true}>
                    <BakedGoodFormEditor/>
                </Route>
                <Route path={["/ingredients","/"]} exact={true}>
                    <IngredientList/>
                </Route>
                <Route path="/ingredients/:id" exact={true}>
                    <IngredientFormEditor/>
                </Route>
                <Route path={["/recipes","/"]} exact={true}>
                    <RecipeList/>
                </Route>
                <Route path="/recipes/:id" exact={true}>
                    <RecipeFormEditor/>
                </Route>
                <Route path={["/cartItems", "/"]} exact={true}>
                    <CartItemList/>
                </Route>
                <Route path="/cartItems/:id" exact={true}>
                    <CartItemFormEditor/>
                </Route>
                <Route path="/customers/cartItems/customers/:customerId" exact={true}>
                    <CustomerCartItems/>
                </Route>
                <Route path="/bakedGoods/cartItems/bakedGoods/:bakedGoodId" exact={true}>
                    <BakedGoodCartItems/>
                </Route>
                <Route path="/bakedGoods/recipes/bakedGoods/:bakedGoodId" exact={true}>
                    <BakedGoodRecipes/>
                </Route>
                <Route path="/ingredients/recipes/ingredients/:ingredientId" exact={true}>
                    <IngredientRecipes/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;

// old code

// const App = () => {
//     return (
//         <div className="container-fluid">
//             <HashRouter>
//                 <Route path={["/customers", "/"]} exact={true}>
//                     <CustomerList/>
//                 </Route>
//                 <Route path="/customers/:id" exact={true}>
//                     <CustomerFormEditor/>
//                 </Route>
//             </HashRouter>
//         </div>
//     );
// }