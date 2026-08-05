CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    target_amount NUMERIC(12,2) NOT NULL
);