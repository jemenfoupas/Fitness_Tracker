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
var express = require('express');
var router = express.Router();
router.get('/home', function (req, res, next) {
    res.render('home');
});
router.get('/routine', function (req, res, next) {
    console.log(req.body.fieldName);
    res.render('routine');
});
router.get('/data', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("getting data");
        // console.log(req.query.storedValue);
        try {
            const result = yield (0, database_1.getUserRoutines)(req.query.storedValue);
            // Send the result as a JSON response
            res.json(result);
        }
        catch (error) {
            console.error(error);
            // Handle any errors and send an error response
            res.status(500).send('Error fetching data');
        }
    });
});
module.exports = router;
