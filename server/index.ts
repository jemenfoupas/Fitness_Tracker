import { getDatabase } from './database';
import { getListOfUserByName } from './database';
import { setUser } from './database';

var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const keylenght: number = 50;

let sessionKeys: string;

router.get('/', async function (req: any, res: any, next: any) {
  try {
    getDatabase();
    res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
  } catch (err) {
    console.log("Getting error " + err);
  }
});

router.get('/home', function (req: any, res: any, next: any) {
  let storedValues = {
    sessionKey: sessionKeys
  }

  console.log("in home", sessionKeys);
  // var storedValue = req.query.storedValue;
  res.render('home', {storedValues});
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
          let sessionKey = generateString(keylenght);
          sessionKeys = sessionKey;
          console.log("in log", sessionKey);
          setUser(sessionKey, row.user_id);
          // res.redirect('/home');
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


// program to generate random strings
// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length: number) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

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