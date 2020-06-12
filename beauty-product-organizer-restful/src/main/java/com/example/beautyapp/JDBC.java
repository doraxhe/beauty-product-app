//package com.example.beautyapp;
//
//import com.example.beautyapp.model.Product;
//import org.springframework.stereotype.Component;
//
//import java.sql.*;
//import java.util.ArrayList;
//import java.util.List;
//
//@Component
//public class JDBC {
//    private final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
//    private final String DB_URL = "jdbc:mysql://localhost:3306/beauty_product_db";
//
//    //  Database credentials - project username and password in MySQL
//    private final String USER = "root";
//    private final String PASS = "Locker7@";
//
//    private Connection conn;
//    Statement statement = null;
//    ResultSet rs;
//
//    private List<Product> products;
//
////    private int count = 0;
//
//    public JDBC(){
//        this.products = new ArrayList<>();
//
//        try {
//            // load driver
//            Class.forName(JDBC_DRIVER);
//            // establish db connection
//            conn = DriverManager.getConnection(DB_URL, USER, PASS);
//        }
//        catch (ClassNotFoundException e){}
//        catch (SQLException e){}
//    }
//
//
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
//
//
////    public Expense findById(int id){
////        Expense expense = null; // if it is null, the later setId won't append; so create new instance later for setId to take effect.
////
////        try {
////            statement = conn.createStatement();
////            rs = statement.executeQuery("select * from expenses where id = " + id);
////
////            while(rs.next()) {
////
////                expense = new Expense();
////
////                expense.setId(rs.getInt("id"));
////                expense.setName(rs.getString("name"));
////                expense.setAmount(rs.getFloat("amount"));
////                expense.setCategory(rs.getString("category"));
////                expense.setDescription(rs.getString("description"));
////
////            }
////
////            rs.close();
////            statement.close();
////        }
////        catch (SQLException e){}
////
////        return expense;
////    }
//
//
////    public Expense save(Expense expense){
////
////        expense.setId(count);
////        count++;
////        this.expenses.add(expense);
////
////        return expense;
////
////    }
//
////    public void deleteById(int id){
////        Expense expense = this.findById(id);
////        this.expenses.remove(expense);
////    }
////
////    public void delete(Expense expense){
////        this.deleteById(expense.getId());
////    }
//}
