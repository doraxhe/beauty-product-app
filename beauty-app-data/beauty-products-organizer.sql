drop database beauty_product_db;
create database beauty_product_db;
use beauty_product_db;
show tables;

create table hibernate_sequences (sequence_name varchar(255) not null, next_val bigint, primary key (sequence_name));
insert into hibernate_sequences(sequence_name, next_val) values ('default',0);
create table products (id bigint not null, name varchar(255), price double, comment varchar(255), description varchar(255), username varchar(255), primary key (id));

select * from products;
