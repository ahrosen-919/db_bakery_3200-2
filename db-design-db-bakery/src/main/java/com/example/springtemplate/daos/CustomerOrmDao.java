package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerOrmDao {
    @Autowired
    CustomerRepository customerRepository;

    @PostMapping("/api/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @GetMapping("/api/customers")
    public List<Customer> findAllCustomers() {
        return customerRepository.findAllCustomers();
    }

    @GetMapping("/api/customers/{customerId}")
    public Customer findCustomerById(
            @PathVariable("customerId") Integer id) {
        return customerRepository.findCustomerById(id);
    }

    @PutMapping("/api/customers/{customerId}")
    public Customer updateCustomer(
            @PathVariable("customerId") Integer id,
            @RequestBody Customer customerUpdates) {
        Customer customer = customerRepository.findCustomerById(id);
        customer.setFirstName(customerUpdates.getFirstName());
        customer.setLastName(customerUpdates.getLastName());
        customer.setUsername(customerUpdates.getUsername());
        customer.setPassword(customerUpdates.getPassword());
        customer.setEmail(customerUpdates.getEmail());
        customer.setDateOfBirth(customerUpdates.getDateOfBirth());
        customer.setRewards(customerUpdates.isRewards());
        customer.setCartItems(customerUpdates.getCartItems());
        return customerRepository.save(customer);
    }

    @DeleteMapping("/api/customers/{customerId}")
    public void deleteCustomer(
            @PathVariable("customerId") Integer id) {
        customerRepository.deleteById(id);
    }
}