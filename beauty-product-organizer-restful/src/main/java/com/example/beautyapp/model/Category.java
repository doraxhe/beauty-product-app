//package com.example.beautyapp.model;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//@Table(name = "categories")
//public class Category {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.TABLE)
//    private long id;
//
//    @Column(name = "category_name")
//    private String categoryName;
//
//    @JoinColumn(name = "product_id")
//    @OneToMany
//    private List<Product> products;
//
//
//    public Category() {}
//
//    public Category(long id, String categoryName) {
//        this.id = id;
//        this.categoryName = categoryName;
//    }
//
//    public long getId() {
//        return id;
//    }
//
//    public void setId(long id) {
//        this.id = id;
//    }
//
//    public String getCategoryName() {
//        return categoryName;
//    }
//
//    public void setCategoryName(String categoryName) {
//        this.categoryName = categoryName;
//    }
//}
