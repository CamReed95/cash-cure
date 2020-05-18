CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    hashed_password TEXT,
    email VARCHAR(32)
);

CREATE TABLE vals (
    vals_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    vals_id INT REFERENCES vals(vals_id)
);