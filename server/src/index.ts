import { title } from "process";

var express = require('express');
var router = express.Router();

const util = require('util');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.sqlite3');
const query = util.promisify(db.all.bind(db));
const exec = util.promisify(db.exec.bind(db));

var userId: number;
const bcrypt = require('bcrypt');

router.get('/', async function (req, res, next) {
  try {
    const rows = await query(`SELECT name FROM sqlite_master WHERE type='table' AND name='user'`);

    if (rows.length === 1) {
      console.log("Table exists!");
      res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });

    } else {
      console.log("Creating table and inserting some sample data");
      await exec(`create table user (
              user_id INTEGER PRIMARY KEY AUTOINCREMENT,
              user_name varchar(255) NOT NULL,
              user_password varchar(255) NOT NULL
               );
                insert into user (user_name, user_password) values ('root','$2b$10$npR01AH6n9ZWBZ4U.K1nK.SOQpu0/Qsnx7Ir4FSm8snMIscZx3Siy');
                insert into user (user_name, user_password) values ('root2','$2b$10$IBoZoC.LP6lQ8HBSwSa6dejiBEawXzA3dZolDKovrlCczydKczeUK');
                insert into user (user_name, user_password) values ('root3','$2b$10$pRlBjbrMistvU1xIrfFIfeRZ1hNVUVUD1IuggtVO/sWYOY4dpTNyK');
                insert into user (user_name, user_password) values ('root4','$2b$10$BS7BvP3nhgnkowdfBSy.K.QzqLFI266L3a.bsFu3WxsBD3a9beDx2');`);
        res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
    }
  } catch (err) {
    console.log("Getting error " + err);
    // exit(1);
  }
});

router.get('/home', function (req, res, next) {
  console.log("");
  console.log("in the home function");
  console.log("userID: ", req.query.userId);
  
  res.render('home', {title: req.query.userId});
});

router.post('/login', async(req, res, next) => {
  console.log("")
  try {

    const hashedPassword  = await bcrypt.hash(req.body.password, 10);

    const rows = await query(`SELECT * FROM user WHERE user_name = '${req.body.username}';`);
    console.log(rows);

    
    if(rows.length > 0){
      rows.forEach(async function(row) {

        console.log(row.user_id, row.user_name);
        const match = await comparePasswords(req.body.password, row.user_password);
        
        if(match){
  
          console.log("the passwords match");
          userId = row.user_id;
  
          // Add the parameters to the URL using query parameters
          const url = '/home?userId=' + encodeURIComponent(userId);
  
          // Redirect to the new page
          res.redirect(url);
          // res.redirect('/');
  
        } else{
          console.log("password is wrong");
          res.redirect('/');
        }
      });
    } else{
      console.log("something went wrong");
      res.redirect('/');
    }
    
    
  } catch (err) {
    console.log("Getting error " + err);
    res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
  }
});

async function comparePasswords(plainTextPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plainTextPassword, hashedPassword);
    if (match) {
      // Passwords match
      console.log('Password is correct!');
    } else {
      // Passwords do not match
      console.log('Password is incorrect!');
    }
    return match;
  } catch (err) {
    // Handle error
    console.error(err);
    throw err;
  }
}

function exit(arg0: number) {
  throw new Error("Function not implemented.");
}

module.exports = router;