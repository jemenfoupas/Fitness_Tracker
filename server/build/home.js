"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserId = exports.router = void 0;
var express = require('express');
exports.router = express.Router();
var userId;
exports.router.get('/home', function (req, res, next) {
    res.render('home', { title: userId });
    // let top_box_bottom = document.getElementsByClassName("top_box_bottom");
    // top_box_bottom.style.backgroundColor = "rgb(214, 67, 9)";
    // (top_box_bottom.querySelector('.top_box_bottom') as HTMLInputElement).value = " a vaule";
    // const workoutDiv = document.createElement('div');
    // workoutDiv.innerHTML = "new content";
    // top_box_bottom.appendChild(workoutDiv);
});
function setUserId(id) {
    // userId = id;
    console.log("in set function");
}
exports.setUserId = setUserId;
// export default router;
module.exports = exports.router;
