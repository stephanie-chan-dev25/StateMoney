ALTER TABLE categories
ADD COLUMN user_id INTEGER;

UPDATE categories
SET user_id = 3;

ALTER TABLE categories
ALTER COLUMN user_id SET NOT NULL;

ALTER TABLE categories
ADD CONSTRAINT fk_category_user
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE;