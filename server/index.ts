import { getDatabase } from './database';
import { getListOfUserByName } from './database';
import { setUser } from './database';

var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', async function (req: any, res: any, next: any) {
  try {
    getDatabase();
    res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
  } catch (err) {
    console.log("Getting error " + err);
    // exit(1);
    //fvnofnvod
  }
});

router.get('/home', function (req: any, res: any, next: any) {
  res.render('home');

});

router.post('/login', async(req: any, res: any, next: any) => {
  console.log("")
  try {
    // console.log(req.body.storedValue);
    const rows = await getListOfUserByName(req.body.username);
    // console.log(rows);

    if(rows.length > 0){
      rows.forEach(async function(row: any) {

        console.log(row.user_id, row.user_name);
        const match = await comparePasswords(req.body.password, row.user_password);
        
        if(match){
          setUser(req.body.storedValue, row.user_id);
          res.redirect('/home');
  
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
    console.log("Getting error in /login" + err);
    res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
  }
});

async function comparePasswords(plainTextPassword: String, hashedPassword: String) {
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