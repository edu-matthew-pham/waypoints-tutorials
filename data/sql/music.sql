-- Music library: a small made-up collection for the SQL lessons.
CREATE TABLE songs (
  id INTEGER PRIMARY KEY,
  title TEXT,
  artist TEXT,
  genre TEXT,
  year INTEGER,
  seconds INTEGER,
  plays INTEGER
);
INSERT INTO songs VALUES
 (1,'Paper Planes Home','Mira Vale','pop',2021,201,5400),
 (2,'Low Tide','The Dunes','rock',2018,243,3100),
 (3,'Neon Rain','Kito','electronic',2022,189,7800),
 (4,'Backyard Summer','Mira Vale','pop',2019,215,9200),
 (5,'Rust and Gold','The Dunes','rock',2020,276,2600),
 (6,'Slow Burn','Ayla Reed','soul',2017,258,4100),
 (7,'Static','Kito','electronic',2020,172,6300),
 (8,'Third Street','Ayla Reed','soul',2021,231,3900),
 (9,'Sunday Drive','Juno & Co','folk',2016,224,1800),
 (10,'Hollow Crown','The Dunes','rock',2022,301,2200),
 (11,'Glass Hearts','Mira Vale','pop',2023,196,8800),
 (12,'Orbit','Kito','electronic',2023,208,5100),
 (13,'River Song','Juno & Co','folk',2019,247,1500),
 (14,'Midnight Bus','Ayla Reed','soul',2023,264,4700),
 (15,'Lemonade Sky','Mira Vale','pop',2022,183,6900);
