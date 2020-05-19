CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    hashed_password TEXT,
    email VARCHAR(32)
);

CREATE TABLE income (
    income_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    expected INTEGER,
    actual INTEGER
);

CREATE TABLE donations (
    donations_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    expected INTEGER,
    actual INTEGER
);

CREATE TABLE savings (
    savings_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    expected INTEGER,
    actual INTEGER
);

CREATE TABLE expenses (
    expenses_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    expected INTEGER,
    actual INTEGER
);