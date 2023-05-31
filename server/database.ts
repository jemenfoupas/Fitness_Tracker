var express = require('express');
var router = express.Router();

const util = require('util');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.sqlite3');
const query = util.promisify(db.all.bind(db));
const exec = util.promisify(db.exec.bind(db));

export async function getDatabase(){
    console.log("in the getDatabase function");

    try {
        var rows = await query(`SELECT name FROM sqlite_master WHERE type='table'`);
    
        if (rows.length < 1) {
            console.log("Creating table and inserting some sample data");
            
            /// create user table
            await exec(`
                create table user (
                    user_id INTEGER PRIMARY KEY,
                    user_name varchar(255) NOT NULL,
                    user_password varchar(255) NOT NULL
                );`
            );

            /// example values
            await exec(`
                insert into user (user_name, user_password) values ('root','$2b$10$npR01AH6n9ZWBZ4U.K1nK.SOQpu0/Qsnx7Ir4FSm8snMIscZx3Siy');
                insert into user (user_name, user_password) values ('root2','$2b$10$IBoZoC.LP6lQ8HBSwSa6dejiBEawXzA3dZolDKovrlCczydKczeUK');
                insert into user (user_name, user_password) values ('root3','$2b$10$pRlBjbrMistvU1xIrfFIfeRZ1hNVUVUD1IuggtVO/sWYOY4dpTNyK');
                insert into user (user_name, user_password) values ('root4','$2b$10$BS7BvP3nhgnkowdfBSy.K.QzqLFI266L3a.bsFu3WxsBD3a9beDx2');
                insert into user (user_name, user_password) values ('root5','$2b$10$BS7BvP3nhgnkowdfBSy.K.QzqLFI266L3a.bsFu3WxsBD3a9beDx2');
            `);

            /// create routine table
            await exec(`
                CREATE TABLE  routine (
                    routine_id INTEGER PRIMARY KEY,
                    routine_name VARCHAR(255) NOT NULL,
                    start_date DATE,
                    end_date DATE,
                    
                    user_id INTEGER,
                    FOREIGN KEY(user_id) REFERENCES user(user_id)
                );
            `);

            /// example values
            await exec(`
                insert into routine (routine_name, start_date, end_date, user_id) values('winter', '2022-12-21', '2023-03-20', 1);
                insert into routine (routine_name, start_date, end_date, user_id) values('spring', '2023-03-21', '2023-06-21', 1); 
                insert into routine (routine_name, start_date, end_date, user_id) values('summer', '2023-06-22', '2023-09-23', 1); 
                insert into routine (routine_name, start_date, end_date, user_id) values('fall', '2023-09-24', '2023-12-20', 1); 
            `);

            /// create weekday table
            await exec(`
                CREATE TABLE  weekday (
                    weekday_id INTEGER PRIMARY KEY,
                    weekday_name VARCHAR(255) NOT NULL
                );
            `);

            /// example values
            await exec(`
                insert into weekday (weekday_name) values('Sunday');
                insert into weekday (weekday_name) values('Monday'); 
                insert into weekday (weekday_name) values('Tuesday'); 
                insert into weekday (weekday_name) values('Wednesday');
                insert into weekday (weekday_name) values('Thursday');
                insert into weekday (weekday_name) values('Friday');
                insert into weekday (weekday_name) values('Saturday');
            `);

            /// create program table
            await exec(`
                CREATE TABLE  program (
                    program_id INTEGER PRIMARY KEY,
                    program_name VARCHAR(255) NOT NULL,
                    program_description VARCHAR(255) NOT NULL,
                    
                    routine_id INTEGER REFERENCES routine(routine_id),
                    
                    weekday_id INTEGER REFERENCES weekday(weekday_id),

                    day DATE NOT NULL
                );
            `);

            /// example values
            await exec(`
                insert into program (program_name, program_description, routine_id, weekday_id, day) values('Lower', 'Lower body workout', 1, 2, '2022-12-26'); 
                insert into program (program_name, program_description, routine_id, weekday_id, day) values('Upper', 'upper body workout', 1, 3, '2022-12-27'); 
                insert into program (program_name, program_description, routine_id, weekday_id, day) values('Lower', 'Lower body workout', 1, 5, '2022-12-29'); 
                insert into program (program_name, program_description, routine_id, weekday_id, day) values('Upper', 'upper body workout', 1, 6, '2022-12-30'); 
            `);

            /// create exercise table
            await exec(`
                CREATE TABLE  exercise (
                    exercise_id INTEGER PRIMARY KEY,
                    exercise_name VARCHAR(255) NOT NULL,
                    
                    weight INTEGER NOT NULL,
                    rep INTEGER NOT NULL,
                    numset INTEGER NOT NULL,
                    
                    user_id INTEGER REFERENCES user(user_id)
                );
            `);
            
            /// example values
            await exec(`
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('dip', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Pull-ups', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Bench press', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Biceps curl', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Lat pulldown', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Dumbbell bench pres', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Triceps cable pushdown ', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Dumbbell shoulder press', 0, 4, 10, 1);
                
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Squat', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Leg Curl', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Leg Press', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Leg Extensions', 0, 4, 10, 1);
                insert into exercise (exercise_name, weight, rep, numset, user_id) values('Seated Calf Raise', 0, 4, 10, 1);
            `);

            /// create program_exercise table
            await exec(`
                CREATE TABLE  program_exercise (
                    program_exercise_id INTEGER PRIMARY KEY,
                    
                    program_id INTEGER REFERENCES program(program_id),
                    
                    exercise_id INTEGER REFERENCES exercise(exercise_id)
                );
            `);

            /// example values
            await exec(`
                insert into program_exercise(program_id, exercise_id) values(1, 9);
                insert into program_exercise(program_id, exercise_id) values(2, 3);
                insert into program_exercise(program_id, exercise_id) values(3, 9);
                insert into program_exercise(program_id, exercise_id) values(4, 3);
                insert into program_exercise(program_id, exercise_id) values(5, 9);
                insert into program_exercise(program_id, exercise_id) values(6, 3);
                insert into program_exercise(program_id, exercise_id) values(7, 9);
                insert into program_exercise(program_id, exercise_id) values(8, 3);
                insert into program_exercise(program_id, exercise_id) values(9, 9);
                insert into program_exercise(program_id, exercise_id) values(10, 3);
                insert into program_exercise(program_id, exercise_id) values(11, 9);
                insert into program_exercise(program_id, exercise_id) values(12, 3);
                insert into program_exercise(program_id, exercise_id) values(13, 9);
                insert into program_exercise(program_id, exercise_id) values(14, 3);
                insert into program_exercise(program_id, exercise_id) values(15, 9);
                insert into program_exercise(program_id, exercise_id) values(16, 3);
            `);

            await exec(`
                create table currentUser (
                    id INTEGER PRIMARY KEY,
                    user_id INTEGER
                );`
            );
                
        } else {
            console.log("table a;ready exits");
        }

        rows = await query(`SELECT name FROM sqlite_master WHERE type='table'`);
        console.log(rows);
        console.log("rows size:", rows.length);
    } catch (err) {
        console.log("Getting error " + err);
    }
    
}

export async function getListOfUserByName(name: String){

    // const hashedPassword  = await bcrypt.hash(req.body.password, 10); this is how to hass a value
    try {
        return await query(`SELECT * FROM user WHERE user_name = '${name}';`);
    } catch (err) {
        console.log("Getting error " + err);
    }
}

export async function setUser(id: number){

    // const hashedPassword  = await bcrypt.hash(req.body.password, 10); this is how to hass a value
    try {
        await exec(`
            DELETE FROM currentUser
        `);

        await exec(`
            insert into currentUser(user_id) values(${id});
        `);

        var rows = await query(`SELECT user_id FROM currentUser`);
        console.log(rows);
    } catch (err) {
        console.log("Getting error " + err);
    }
}

export async function getUser(){

    // const hashedPassword  = await bcrypt.hash(req.body.password, 10); this is how to hass a value
    try {
        var rows = await query(`SELECT user_id FROM currentUser WHERE id = 1`);
        // console.log(rows);
        return rows;

    } catch (err) {
        console.log("Getting error " + err);
    }
}
// module.exports = {
//     getDatabase
// }