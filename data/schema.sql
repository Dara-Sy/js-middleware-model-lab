CREATE TABLE dog_breed (
  breed_id    SERIAL PRIMARY KEY NOT NULL,
  name        VARCHAR(64),
  section     VARCHAR(64),
  country     VARCHAR(128),
  image       VARCHAR(128)
);

\copy dog_breed (name,section,country,image) FROM './breeds.csv' DELIMITER ','


CREATE TABLE puppy (
  puppy_id      SERIAL PRIMARY KEY NOT NULL,
  name          VARCHAR(64) NOT NULL,
  color         VARCHAR(64) NOT NULL,
  lbs           DECIMAL(3,2),
  breed         INT REFERENCES dog_breed (breed_id),
  tag_id        UUID,
  state_born    CHAR(2),
  age           SMALLINT,
  date_created  timestamp DEFAULT NOW(),
  date_updated  timestamp
);
