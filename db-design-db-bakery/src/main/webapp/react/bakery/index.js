import CustomerList from "./customer-lists";
import CustomerFormEditor from "./customer-form-editor";
import IngredientList from "./ingredient-lists";
import IngredientFormEditor from "./ingredient-form-editor";
import RecipeList from "./recipe-lists";
import RecipeFormEditor from "./recipe-form-editor";


const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/customers", "/"]} exact={true}>
                    <CustomerList/>
                </Route>
                <Route path="/customers/:id" exact={true}>
                    <CustomerFormEditor/>
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