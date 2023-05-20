"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
const util = require('util');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.sqlite3');
const query = util.promisify(db.all.bind(db));
const exec = util.promisify(db.exec.bind(db));
var userId;
const bcrypt = require('bcrypt');
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rows = yield query(`SELECT name FROM sqlite_master WHERE type='table' AND name='user'`);
            if (rows.length === 1) {
                console.log("Table exists!");
                res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
            }
            else {
                console.log("Creating table and inserting some sample data");
                yield exec(`create table user (
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
        }
        catch (err) {
            console.log("Getting error " + err);
            // exit(1);
        }
    });
});
router.get('/home', function (req, res, next) {
    console.log("");
    console.log("in the home function");
    console.log("userID: ", req.query.userId);
    res.render('home', { title: req.query.userId });
});
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("");
    try {
        const hashedPassword = yield bcrypt.hash(req.body.password, 10);
        const rows = yield query(`SELECT * FROM user WHERE user_name = '${req.body.username}';`);
        console.log(rows);
        if (rows.length > 0) {
            rows.forEach(function (row) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(row.user_id, row.user_name);
                    const match = yield comparePasswords(req.body.password, row.user_password);
                    if (match) {
                        console.log("the passwords match");
                        userId = row.user_id;
                        // Add the parameters to the URL using query parameters
                        const url = '/home?userId=' + encodeURIComponent(userId);
                        // Redirect to the new page
                        res.redirect(url);
                        // res.redirect('/');
                    }
                    else {
                        console.log("password is wrong");
                        res.redirect('/');
                    }
                });
            });
        }
        else {
            console.log("something went wrong");
            res.redirect('/');
        }
        ////
        // var db = new sqlite3.Database('mydb.sqlite3',
        //   sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
        //   (err) => {
        //     if (err) {
        //       console.log("Getting error " + err);
        //       exit(1);
        //     }
        //     console.log("seaching");
        //     db.all(`SELECT * FROM user WHERE user_name = '${req.body.username}' and user_password ='${hashedPassword}';`, 
        //       function(err, rows) {
        //         console.log("Retrieved user:", rows);
        //         if (rows.length === 1) {
        //           userId = rows[0].user_id;
        //           console.log("user ID sert", req.userID);
        //           res.redirect('/home');
        //         } else {
        //           res.redirect('/');
        //         }
        //       }
        //     )
        //   }
        // );
        ////
    }
    catch (err) {
        console.log("Getting error " + err);
        // console.log("the passwords don't match");
        //     res.redirect('/');
        res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
    }
}));
function comparePasswords(plainTextPassword, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const match = yield bcrypt.compare(plainTextPassword, hashedPassword);
            if (match) {
                // Passwords match
                console.log('Password is correct!');
            }
            else {
                // Passwords do not match
                console.log('Password is incorrect!');
            }
            return match;
        }
        catch (err) {
            // Handle error
            console.error(err);
            throw err;
        }
    });
}
function exit(arg0) {
    throw new Error("Function not implemented.");
}
module.exports = router;
