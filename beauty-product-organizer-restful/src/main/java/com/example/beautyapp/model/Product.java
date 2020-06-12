package com.example.beautyapp.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

//    @JoinColumn(name = "product_id")
//    @ManyToOne(cascade = CascadeType.ALL)
//    private Category category;

    @Column(name = "description")
    private String description;

    @Column(name = "comment")
    private String comment;


//    @JoinColumn(name = "tag_id")
//    @ManyToMany(cascade = CascadeType.ALL)
//    private List<Tag> tags;

    @Column(name = "username")
    private String username;


    public Product() {}

    public Product(long id, String name, double price, String description, String comment, String username) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.comment = comment;
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getUser() {
        return username;
    }

    public void setUser(String username) {
        this.username = username;
    }
}
