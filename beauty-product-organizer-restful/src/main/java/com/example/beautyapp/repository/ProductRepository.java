package com.example.beautyapp.repository;

import com.example.beautyapp.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


@Repository
@CrossOrigin(origins="*")
public interface ProductRepository extends CrudRepository<Product, Long> {

    List<Product> findAll();
    Product findById(long id);
    Product save(Product product);
    void delete(Product product);
    void deleteById(long id);
}


//public interface ProductRepository {
//    List<Product> findAll();
//
//    Product findById(int id);
//
//    Product save(Product product);
//}
//@Component


//    public List<Product> findAll(){
//        List<Product> allProducts = new ArrayList<>();
//
//        try {
//            statement = conn.createStatement();
//            rs = statement.executeQuery("select * from products");
//
//            while(rs.next()) {
//                Product product = new Product();
//
//                product.setId(rs.getInt("id"));
//                product.setName(rs.getString("name"));
//                product.setPrice(rs.getDouble("price"));
//                product.setCategory(rs.getString("category"));
//                product.setDescription(rs.getString("description"));
//                product.setTags(rs.getString("tag"));
//
//                allProducts.add(product);
//            }
//            rs.close();
//            statement.close();
//        }
//        catch (SQLException e){}
//
//        return allProducts;
//    }


//    public Expense findById(int id){
//        Expense expense = null; // if it is null, the later setId won't append; so create new instance later for setId to take effect.
//
//        try {
//            statement = conn.createStatement();
//            rs = statement.executeQuery("select * from expenses where id = " + id);
//
//            while(rs.next()) {
//
//                expense = new Expense();
//
//                expense.setId(rs.getInt("id"));
//                expense.setName(rs.getString("name"));
//                expense.setAmount(rs.getFloat("amount"));
//                expense.setCategory(rs.getString("category"));
//                expense.setDescription(rs.getString("description"));
//
//            }
//
//            rs.close();
//            statement.close();
//        }
//        catch (SQLException e){}
//
//        return expense;
//    }


//    public Expense save(Expense expense){
//
//        expense.setId(count);
//        count++;
//        this.expenses.add(expense);
//
//        return expense;
//
//    }

//    public void deleteById(int id){
//        Expense expense = this.findById(id);
//        this.expenses.remove(expense);
//    }
//
//    public void delete(Expense expense){
//        this.deleteById(expense.getId());
//    }