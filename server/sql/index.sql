-- CREATE DATABASE
CREATE DATABASE vending_machine;

-- CREATE TABLE
-- TODO: ADD A COLUMN FOR TYPES (SNACKS AND DRINKS)
CREATE TABLE products(
   id serial PRIMARY KEY,
   name VARCHAR(255) UNIQUE NOT NULL,
   price SMALLINT,
   type VARCHAR(255)
);

-- INSERT INTO
INSERT INTO products(name)
VALUES ('Funyuns');

-- DROP TABLE
DROP TABLE products;

-- Alter Table to Add Quantity Column 
ALTER TABLE products
ADD COLUMN quantity SMALLINT;