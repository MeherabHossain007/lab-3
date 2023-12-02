CREATE TABLE blogs(
    "id" SERIAL PRIMARY KEY,
    "post" VARCHAR(255) NOT NULL,
    "user_id" VARCHAR (255) NOT NULL,
    "status" VARCHAR(255) NOT NULL
)