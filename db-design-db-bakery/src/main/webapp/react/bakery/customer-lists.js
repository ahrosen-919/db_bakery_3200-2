const {Link, useHistory} = window.ReactRouterDOM;
import customerService from "./customer-service"
const { useState, useEffect } = React;

const CustomerList = () => {
const history = useHistory()
 const [customers, setCustomers] = useState([])
    useEffect(() => {
        findAllCustomers()
    }, [])
    const findAllCustomers = () =>
        customersService.findAllCustomers()
            .then(customers => setCustomers(customers))
    return(
        <div>
            <h2>Customer List</h2>
            <button onClick={() => history.push("/customers/new")} className="btn btn-primary">
                Add Customer
            </button>
            <ul className="list-group">
                            {
                               customers.map(customer =>
                                  <li key={customer.id}>
                                   <Link to={`/customers/${customer.id}`}>
                                      {customer.firstName},
                                      {customer.lastName},
                                      {customer.username}
                                      {customer.email}
                                      </Link>
                                  </li>)
                            }

            </ul>
        </div>
    )
}

export default CustomerList;