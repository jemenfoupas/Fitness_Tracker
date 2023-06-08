// import { getUser } from './database';
import { getUserRoutines } from './database';

var express = require('express');
var router = express.Router();

// var userId: number;

router.get('/home', function (req: any, res: any, next: any) {
  console.log("/home userID: ", userId);

  res.render('home', {title: userId});
  // let top_box_bottom = document.getElementsByClassName("top_box_bottom");
  // top_box_bottom.style.backgroundColor = "rgb(214, 67, 9)";

  // (top_box_bottom.querySelector('.top_box_bottom') as HTMLInputElement).value = " a vaule";
  
  // const workoutDiv = document.createElement('div');
  // workoutDiv.innerHTML = "new content";
  // top_box_bottom.appendChild(workoutDiv);
});

router.get('/data', async function (req: any, res: any, next: any) {
  console.log("getting data");
  // console.log(req.query.storedValue);
  try {
    const result = await getUserRoutines(req.query.storedValue); // Execute your SQL query and get the result

    // Send the result as a JSON response
    res.json(result);
  } catch (error) {
    console.error(error);
    // Handle any errors and send an error response
    res.status(500).send('Error fetching data');
  }
});

export function setUserId(id: any) {
  userId = id;
  // console.log("in set function")
}

// export default router;
module.exports = router;