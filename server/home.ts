var express = require('express');
export var router = express.Router();



var userId: number;

router.get('/home', function (req, res, next) {
    res.render('home', {title: userId});
    // let top_box_bottom = document.getElementsByClassName("top_box_bottom");
    // top_box_bottom.style.backgroundColor = "rgb(214, 67, 9)";

    // (top_box_bottom.querySelector('.top_box_bottom') as HTMLInputElement).value = " a vaule";
   
    // const workoutDiv = document.createElement('div');
    // workoutDiv.innerHTML = "new content";
    // top_box_bottom.appendChild(workoutDiv);
  });

  export function setUserId(id: number){
    // userId = id;
    console.log("in set function")
  }

  // export default router;
  module.exports = router;