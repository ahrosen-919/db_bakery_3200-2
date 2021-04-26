/*         this.name = name;
this.price = price;
this.calories = calories;
this.type = type;
this.vegan = vegan;
this.glutenFree = glutenFree;
this.recipes = recipes;
this.cartItems = cartItems;*/

import bakedGoodService from "./bakedGood-service"
const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const BakedGoodFormEditor = () => {
const {id} = useParams()
  const [bakedGood, setBakedGood] = useState({})
  useEffect(() => {
       if(id !== "new") {
           findBakedGoodById(id)
       }
   }, []);


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


           <br/>
           <Link to={`cartItems/bakedGoods/${bakedGood.id}`}>
           Cart Items Information
           </Link>
           <br/>
           <Link to={`recipes/bakedGoods/${bakedGood.id}`}>
            Recipes Information
           </Link>

       </div>
   )
}

export default BakedGoodFormEditor