INSERT INTO employees values 
    (1, '2004-03-03','Ermuun','Oyunbayar','M','2023-02-28'),
    (2, '2003-12-11','Temuulen','Bayarsaikhan','M','2023-02-28'),
    (3, '1996-10-31','Anerchy','Tumenbayar','M','2023-02-28'),
    (4, '2000-07-16','Sukhbat','Oyuntsetseg','M','2023-02-28'),
    (5, '1999-09-01','Temuulen','Munkhjargal','M','2023-02-28')



create table user(id int auto_increment, name varchar(50),birth_date date, primary key(id));
create table product(id int auto_increment, name varchar(50),imgUrl varchar(100),createdAt datetime, primary key(id));
create table order(id int auto_increment, user_id int,sags_id int, primary key(id));