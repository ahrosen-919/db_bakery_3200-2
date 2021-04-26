package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.repositories.CustomerRepository;
import com.example.springtemplate.models.CartItem;
import com.example.springtemplate.repositories.CartItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerOrmDao {
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    CartItemRepository cartItemRepository;

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
        return customerRepository.save(customer);
    }

    @DeleteMapping("/api/customers/{customerId}")
    public void deleteCustomer(
            @PathVariable("customerId") Integer id) {
        customerRepository.deleteById(id);
    }

    @GetMapping("/api/customers/cartItems/customers/{customerId}")
    public List<CartItem> findCartItemByCustomer(
            @PathVariable("customerId") Integer id) {
        return cartItemRepository.findCartItemsByCustomer(id);
    }
}