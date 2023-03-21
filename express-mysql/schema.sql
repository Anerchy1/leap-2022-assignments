alter table category add primary key(categoryId);

alter table category
add
    FOREIGN KEY(created) REFERENCES user(userId),
add
    FOREIGN KEY(updated) REFERENCES user(userId);

ALTER Table category
add
    FOREIGN KEY(parent_id) REFERENCES category(categoryId);

alter table product add PRIMARY KEY(productId);

alter table product
add
    FOREIGN KEY(created) REFERENCES user(userId),
add
    FOREIGN KEY(updated) REFERENCES user(userId);

alter table product
add
    FOREIGN KEY(categoryId) REFERENCES category(categoryId);