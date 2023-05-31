import { getDatabase } from './database';
import { getListOfUserByName } from './database';
import { setUser } from './database';

var express = require('express');
var router = express.Router();
var userId: number;
const bcrypt = require('bcrypt');

router.get('/', async function (req, res, next) {
  try {
    getDatabase();
    res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
  } catch (err) {
    console.log("Getting error " + err);
    // exit(1);
    //fvnofnvod
  }
});

router.get('/home', function (req, res, next) {

  setUser(userId);
  res.render('home', {title: userId});

});

router.post('/login', async(req, res, next) => {
  console.log("")
  try {
    const rows = await getListOfUserByName(req.body.username);
    // console.log(rows);

    if(rows.length > 0){
      rows.forEach(async function(row) {

        console.log(row.user_id, row.user_name);
        const match = await comparePasswords(req.body.password, row.user_password);
        
        if(match){
  
          // console.log("the passwords match");
          userId = row.user_id;
  
          // Add the parameters to the URL using query parameters
          // const url = '/home?userId=' + encodeURIComponent(userId);
          const url = '/home';
          // Redirect to the new page
          res.redirect(url);
          // res.redirect('/');
  
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
    console.log("Getting error " + err);
    res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
  }
});

async function comparePasswords(plainTextPassword, hashedPassword) {
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