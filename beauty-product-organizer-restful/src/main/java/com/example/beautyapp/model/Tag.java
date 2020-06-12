//package com.example.beautyapp.model;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//@Table(name = "tags")
//public class Tag {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.TABLE)
//    private long id;
//
//    @Column(name = "tag_name")
//    private String tagName;
//
////    @ManyToMany(mappedBy = "tags")
////    private List<Product> products;
//
//
//    public Tag() {}
//
//    public Tag(long id, String tagName) {
//        this.id = id;
//        this.tagName = tagName;
////        this.products = products;
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
//    public String getName() {
//        return tagName;
//    }
//
//    public void setName(String tagName) {
//        this.tagName = tagName;
//    }
//
////    public List<Product> getProducts() {
////        return products;
////    }
////
////    public void setProducts(List<Product> products) {
////        this.products = products;
////    }
//}
