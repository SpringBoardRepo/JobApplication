DROP DATABASE IF EXISTS JobApp;

CREATE DATABASE JobApp;

\c JobApp;

DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name TEXT Not NULL,
    last_name TEXT NOT NULL,
    email TEXT,
    phone_num INTEGER,
    address TEXT,
    resume TEXT

);

CREATE TABLE clients(
    client_name TEXT,
    poc TEXT,
    email TEXT,
    role TEXT,
    urgency TEXT,
    quantity INTEGER ,
    skills TEXT
);

INSERT INTO clients(client_name,poc,email,role,urgency,quantity,skills)
VALUES 
('PWC', 'Maria Rodriguez', 'M.RD43@datapiper.com', 'Core Senior Software Developer', 'High', 1, 'Java Springborad kubernetes Cloud API microSevices'),
('PWC', 'Maria Rodriguez', 'M.RD43@datapiper.com', 'Core Senior Software Developer', 'High', 1, 'Java Springborad kubernetes Cloud API microSevices'),
('PWC', 'David Smith', 'David.S43@datapiper.com', 'ZenDesk Developer', 'Medium', 1, 'ZenDesk Developer'),
('PWC', 'Rob Adams','Rob.adam@datapiper.com', 'Datavault2.0', 'High', 3, 'Datavault 2.0 certified' ),
('PWC', 'Eliza Cath','Eliz@datapiper.com', 'SnowFlak Data Engineer', 'Low', 1, 'JD' ),
('PWC', 'Maria Rodriguez', 'M.RD43@datapiper.com', 'Software Developer', 'High', 1, 'Java Springborad kubernetes Cloud API microSevices');

