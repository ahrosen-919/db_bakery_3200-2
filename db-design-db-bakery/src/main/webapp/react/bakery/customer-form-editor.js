import customerService from "./customer-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const CustomerFormEditor = () => {
 const {id} = useParams()
   const [customer, setCustomer] = useState({})
   useEffect(() => {
        if(id !== "new") {
            findCustomerById(id)
        }
    }, []);


 const findCustomerById = (id) => {
         customerService.findCustomerById(id)
             .then(customer => setCustomer(customer))
             }
             const deleteCustomer = (id) =>
                     customerService.deleteCustomer(id)
                         .then(() => history.back())

                         const createCustomer = (customer) =>
                                 customerService.createCustomer(customer)
                                     .then(() => history.back())

                                      const updateCustomer = (id, newCustomer) =>
                                             customerService.updateCustomer(id, newCustomer)
                                                 .then(() => history.back())




    return (
        <div>
            <h2>Customer Editor</h2>
            <label>Id</label>
            <input value={customer.id} placeholder="Auto Generated" className="form-control"/><br/>

            <label>First Name</label>
            <input onChange={(e) =>
            setCustomer(customer => ({...customer, firstName: e.target.value}))}
            value={customer.firstName} className="form-control"/>

            <label>Last Name</label>
            <input onChange={(e) =>
            setCustomer(customer =>({...customer, lastName: e.target.value}))}
            value={customer.lastName} className="form-control"/>

            <label>Username</label>
            <input onChange={(e) =>
            setCustomer(customer => ({...customer, username: e.target.value}))}
            value={customer.username} className="form-control"/>

            <label>Password</label>
            <input onChange={(e) =>
            setCustomer(customer => ({...customer, password: e.target.value}))}
            value={customer.password} className="form-control"/>

            <label>Email</label>
            <input onChange={(e) =>
            setCustomer(customer => ({...customer, email: e.target.value}))}
            value={customer.email} className="form-control"/>

            <label>Date of Birth</label>
            <input onChange={(e) =>
            setCustomer(customer => ({...customer, dateOfBirth: e.target.value}))}
            value={customer.dateOfBirth} className="form-control"/>

            <label>Rewards</label>
            <input onChange={(e) =>
            setCustomer(customer => ({...customer, rewards: e.target.value}))}
            value={customer.rewards} className="form-control" placeholder={"Ex: true or false"}/>
            <br/>



            <button onClick={() => {history.back()}}
            className="btn btn-warning">Cancel</button>

            <button onClick={() => deleteCustomer(customer.id)} className="btn btn-danger">Delete</button>
            <button onClick={() => updateCustomer(customer.id, customer)}
            className="btn btn-primary">Save</button>
            <button onClick={() => createCustomer(customer)} className="btn btn-success">Create</button>
        </div>
    )
}

export default CustomerFormEditor