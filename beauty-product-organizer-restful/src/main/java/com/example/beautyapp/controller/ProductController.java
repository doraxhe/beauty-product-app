package com.example.beautyapp.controller;

import com.example.beautyapp.model.Product;
import com.example.beautyapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

//    Request: GET /products
//    Response: Product[]
    @GetMapping("/users/{username}/products")
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

//    Request: GET /product/{id}
//    Response: Product
    @GetMapping("/users/{username}/products/{id}")
    public Product getProductById(@PathVariable long id) {
        return productRepository.findById(id);
    }

//    Request: POST /product Product
//    Response: Product
    @PostMapping("/users/{username}/products")
    public Product saveProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

//    Request: DELETE /product/{id}
//    Response: void
    @DeleteMapping("/users/{username}/products/{id}")
    public void deleteProductById(@PathVariable long id) { productRepository.deleteById(id); }

//    Request: DELETE /product Product
//    Response: void
//    @DeleteMapping("/product")
//    public void deleteProduct(@RequestBody Product product) { productRepository.delete(product); }

//    Request: UPDATE /product/{id}
//    Response: Product
    @PutMapping("/users/{username}/products/{id}")
    public Product updateProduct(@PathVariable long id, @RequestBody Product product) { return productRepository.save(product); }

}
