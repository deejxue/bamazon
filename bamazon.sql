CREATE DATABASE bamazon_db

USE bamazon_db;
CREATE TABLE products (item_id INTEGER(1) AUTO_INCREMENT NOT NULL, product_name VARCHAR(30) NOT NULL, department_name VARCHAR(30) NOT NULL, price DECIMAL(10,2), stock_quantity INTEGER(10), PRIMARY KEY (item_id)

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (1,"bean bags", "sports equipment", "5.00", 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (2,"football", "sports equipment", "12.00", 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (3,"swim caps", "sports equipment", "8.00", 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (4,"boxing shorts", "sports apparel", "13.00", 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (5,"boxing gloves--large", "sports equipment", "30.00", 12);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (6,"kick paddles", "sports equipment", "35.00", 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (7,"shoulder pads", "sports equipment", "55.00", 5);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (8,"cleat shoes", "sports apparel", "45.00", 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (9,"swim trunks--men", "sports apparel", "35.00", 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (10,"swimsuits--women", "sports apparel", "65.00", 25);

SELECT item_id, product_name, department_name, price FROM products;
