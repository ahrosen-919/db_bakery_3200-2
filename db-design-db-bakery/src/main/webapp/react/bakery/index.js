import CartItemList from "./cartItem-lists";
import CartItemFormEditor from "./cartItem-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/cartItems", "/"]} exact={true}>
                    <CartItemList/>
                </Route>
                <Route path="/cartItems/:id" exact={true}>
                    <CartItemFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
