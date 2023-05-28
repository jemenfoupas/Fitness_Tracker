-- DROP TABLE IF EXISTS `assignments`;
CREATE DATABASE IF NOT EXISTS account;
USE account;

-- Tables to drop
DROP TABLE IF EXISTS program_exercise;
DROP TABLE IF EXISTS exercise;
DROP TABLE IF EXISTS program;
DROP TABLE IF EXISTS weekday;
DROP TABLE IF EXISTS routine;
DROP TABLE IF EXISTS user;

-- Table creation
CREATE TABLE  user (
	user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE  routine (
	routine_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    routine_name VARCHAR(255) NOT NULL,
    start_date DATE,
    end_date DATE,
    
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES user(user_id)
);

CREATE TABLE  weekday (
	weekday_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    weekday_name VARCHAR(255) NOT NULL
);

CREATE TABLE  program (
	program_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    program_name VARCHAR(255) NOT NULL,
    program_description VARCHAR(255) NOT NULL,
    
    routine_id INTEGER,
    FOREIGN KEY(routine_id) REFERENCES routine(routine_id),
    
    weekday_id INTEGER,
    FOREIGN KEY(weekday_id) REFERENCES weekday(weekday_id),
    
    -- need to add specific date
    day DATE NOT NULL
);

CREATE TABLE  exercise (
	exercise_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    exercise_name VARCHAR(255) NOT NULL,
    
    weight INTEGER NOT NULL,
    rep INTEGER NOT NULL,
    numset INTEGER NOT NULL,
    
--     program_id INTEGER,
--     FOREIGN KEY(program_id) REFERENCES program(program_id),
    
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES user(user_id)
);

CREATE TABLE  program_exercise (
	program_exercise_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    
    program_id INTEGER,
    FOREIGN KEY(program_id) REFERENCES program(program_id),
    
    exercise_id INTEGER,
    FOREIGN KEY(exercise_id) REFERENCES exercise(exercise_id)
);