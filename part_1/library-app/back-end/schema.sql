USE db;
/* title
author
pages
publisher
published_at */
CREATE TABLE users
(
    id INT
    AUTO_INCREMENT NOT NULL,
   title VARCHAR
    (45),
   author VARCHAR
    (200),
   pages VARCHAR
    (200),
    publisher VARCHAR(45),
    published_at VARCHAR(45),
    PRIMARY KEY
    (id)
);