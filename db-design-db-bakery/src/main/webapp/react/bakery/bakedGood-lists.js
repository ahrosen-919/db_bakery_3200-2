const {Link, useHistory} = window.ReactRouterDOM;
import bakedGoodService from "./bakedGood-service"
const { useState, useEffect } = React;

const BakedGoodList = () => {
const history = useHistory()
 const [bakedGoods, setBakedGoods] = useState([])
    useEffect(() => {
        findAllBakedGoods()
    }, [])
    const findAllBakedGoods = () =>
        bakedGoodService.findAllBakedGoods()
            .then(bakedGoods => setBakedGoods(bakedGoods))
    return(
        <div>
            <h2>Baked Good List</h2>
            <button onClick={() => history.push("/bakedGoods/new")} className="btn btn-primary">
                Add BakedGood
            </button>
            <ul className="list-group">
                            {
                               bakedGoods.map(bakedGood =>
                                  <li key={bakedGood.id}>
                                   <Link to={`/bakedGoods/${bakedGood.id}`}>
                                      {bakedGood.name},
                                      {bakedGood.price},
                                      {bakedGood.calories},
                                      {bakedGood.type}
                                      </Link>
                                  </li>)
                            }

            </ul>
        </div>
    )
}

export default BakedGoodList;