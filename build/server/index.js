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
const database_1 = require("./database");
const database_2 = require("./database");
const database_3 = require("./database");
var express = require('express');
var router = express.Router();
var userId;
const bcrypt = require('bcrypt');
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, database_1.getDatabase)();
            res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
        }
        catch (err) {
            console.log("Getting error " + err);
            // exit(1);
            //fvnofnvod
        }
    });
});
router.get('/home', function (req, res, next) {
    (0, database_3.setUser)(userId);
    res.render('home', { title: userId });
});
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("");
    try {
        const rows = yield (0, database_2.getListOfUserByName)(req.body.username);
        // console.log(rows);
        if (rows.length > 0) {
            rows.forEach(function (row) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(row.user_id, row.user_name);
                    const match = yield comparePasswords(req.body.password, row.user_password);
                    if (match) {
                        // console.log("the passwords match");
                        userId = row.user_id;
                        // Add the parameters to the URL using query parameters
                        // const url = '/home?userId=' + encodeURIComponent(userId);
                        const url = '/home';
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
    }
    catch (err) {
        console.log("Getting error " + err);
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
