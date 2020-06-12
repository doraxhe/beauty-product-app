create table hibernate_sequences (sequence_name varchar(255) not null, next_val bigint, primary key (sequence_name))
insert into hibernate_sequences(sequence_name, next_val) values ('default',0)
create table products (id bigint not null, comment varchar(255), description varchar(255), name varchar(255), price double, username varchar(255), primary key (id))
