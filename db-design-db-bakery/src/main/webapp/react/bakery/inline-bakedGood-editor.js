const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineBakedGoodEditor = ({bakedGood, deleteBakedGood, updateBakedGood}) => {
    const [bakedGoodCopy, setBakedGoodCopy] = useState(bakedGood)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={bakedGoodCopy.name}
                            onChange={(e)=>setBakedGoodCopy(bakedGoodCopy => ({...bakedGoodCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={bakedGoodCopy.price}
                            onChange={(e)=>setBakedGoodCopy(bakedGoodCopy => ({...bakedGoodCopy, price: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={bakedGoodCopy.calories}
                            onChange={(e)=>setBakedGoodCopy(bakedGoodCopy => ({...bakedGoodCopy, calories: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/bakedGoods/${bakedGoodCopy.id}/cartItems`}>
                            Cart Items
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateBakedGood(bakedGoodCopy.id, bakedGoodCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteBakedGood(bakedGood.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/bakedGoods/${bakedGoodCopy.id}`}>
                            {bakedGoodCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/bakedGoods/${bakedGoodCopy.id}`}>
                            {bakedGoodCopy.price}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/bakedGoods/${bakedGoodCopy.id}`}>
                            {bakedGoodCopy.type}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/bakedGoods/${bakedGoodCopy.id}/cartItems`}>
                            Cart Items
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineBakedGoodEditor;