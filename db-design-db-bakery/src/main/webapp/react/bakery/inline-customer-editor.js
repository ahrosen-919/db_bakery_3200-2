const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineCustomerEditor = ({customer, deleteCustomer, updateCustomer}) => {
    const [customerCopy, setCustomerCopy] = useState(customer)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={customerCopy.firstName}
                            onChange={(e)=>setCustomerCopy(customerCopy => ({...customerCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={customerCopy.lastName}
                            onChange={(e)=>setCustomerCopy(customerCopy => ({...customerCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={customerCopy.username}
                            onChange={(e)=>setCustomerCopy(customerCopy => ({...customerCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/customers/${customerCopy.id}/cartItems`}>
                            Cart Items
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateCustomer(customerCopy.id, customerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteCustomer(customer.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/customers/${customerCopy.id}`}>
                            {customerCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/customers/${customerCopy.id}`}>
                            {customerCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/customers/${customerCopy.id}`}>
                            {customerCopy.username}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/customers/${customerCopy.id}/cartItems`}>
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

export default InlineCustomerEditor;