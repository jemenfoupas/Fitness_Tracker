import { getUserRoutines } from './database';

var express = require('express');
var router = express.Router();

router.get('/home', function (req: any, res: any, next: any) {
  res.render('home');
});

router.get('/routine', function (req: any, res: any, next: any) {
  console.log(req.body.fieldName);
  res.render('routine');
});

router.get('/data', async function (req: any, res: any, next: any) {
  console.log("getting data");
  // console.log(req.query.storedValue);
  try {
    const result = await getUserRoutines(req.query.storedValue);

    // Send the result as a JSON response
    res.json(result);
  } catch (error) {
    console.error(error);
    // Handle any errors and send an error response
    res.status(500).send('Error fetching data');
  }
});

module.exports = router;