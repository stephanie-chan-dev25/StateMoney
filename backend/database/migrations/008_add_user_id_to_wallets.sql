ALTER TABLE wallets
ADD COLUMN user_id INTEGER;


UPDATE wallets
SET user_id = 3;


ALTER TABLE wallets
ALTER COLUMN user_id SET NOT NULL;


ALTER TABLE wallets
ADD CONSTRAINT fk_wallet_user
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE;