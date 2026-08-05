CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    amount NUMERIC(12, 2) NOT NULL,
    date DATE NOT NULL,
    description TEXT,
    category_id INTEGER NOT NULL,
    wallet_id INTEGER NOT NULL,

    CONSTRAINT fk_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_wallet
        FOREIGN KEY (wallet_id)
        REFERENCES wallets(id)
        ON DELETE RESTRICT
);