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
exports.setUserId = void 0;
// import { getUser } from './database';
const database_1 = require("./database");
var express = require('express');
var router = express.Router();
// var userId: number;
router.get('/home', function (req, res, next) {
    // console.log("/home userID: ", userId);
    res.render('home');
    // let top_box_bottom = document.getElementsByClassName("top_box_bottom");
    // top_box_bottom.style.backgroundColor = "rgb(214, 67, 9)";
    // (top_box_bottom.querySelector('.top_box_bottom') as HTMLInputElement).value = " a vaule";
    // const workoutDiv = document.createElement('div');
    // workoutDiv.innerHTML = "new content";
    // top_box_bottom.appendChild(workoutDiv);
});
router.get('/data', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("getting data");
        // console.log(req.query.storedValue);
        try {
            const result = yield (0, database_1.getUserRoutines)(req.query.storedValue); // Execute your SQL query and get the result
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
function setUserId(id) {
    // userId = id;
    // console.log("in set function")
}
exports.setUserId = setUserId;
// export default router;
module.exports = router;
