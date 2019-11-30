DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL ,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("basketball", "sports & outdoor", 13, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iphone 11", "electronics", 699, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bicycle", "sports & outdoors", 130, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("teddy bear", "toys & games", 25, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("makeup kit", "beauty", 20, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("power tool kit", "home improvement", 150, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("airpods", "electronics", 140, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lamp", "furniture", 80, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("air fryer", "home", 90, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("first aid kit", "health", 30, 35);

SELECT * FROM products;