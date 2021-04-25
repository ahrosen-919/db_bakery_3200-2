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
const {useParams, useHistory} = window.ReactRouterDOM;
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
           <input value={bakedGood.id}/><br/>

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

           <label>Type</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood => ({...bakedGood, type: e.target.value}))}
           value={bakedGood.type} className="form-control"/>

           <label>Vegan</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood => ({...bakedGood, vegan: e.target.value}))}
           value={bakedGood.vegan} className="form-control"/>

           <label>Gluten Free</label>
           <input onChange={(e) =>
           setBakedGood(bakedGood => ({...bakedGood, glutenFree: e.target.value}))}
           value={bakedGood.glutenFree} className="form-control"/>

           <button onClick={() => {history.back()}}
           className="btn btn-warning">Cancel</button>

           <button onClick={() => deleteBakedGood(bakedGood.id)} className="btn btn-danger">Delete</button>
           <button onClick={() => updateBakedGood(bakedGood.id, bakedGood)}
           className="btn btn-primary">Save</button>
           <button onClick={() => createBakedGood(bakedGood)} className="btn btn-success">Create</button>
       </div>
   )
}

export default BakedGoodFormEditor