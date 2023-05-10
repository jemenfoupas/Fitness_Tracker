var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.get('/', function (req, res, next) {
  var db = new sqlite3.Database('mydb.sqlite3',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      if (err) {
        console.log("Getting error " + err);
        exit(1);
      }
      //Query if the table exists if not lets create it on the fly!
      db.all(`SELECT name FROM sqlite_master WHERE type='table' AND name='user'`,
      (err, rows) => {
        if (rows.length === 1) {
          console.log("Table exists!");
          res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
        } else {
          console.log("Creating table and inserting some sample data");
            db.exec(`create table user (
                    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_name varchar(255) NOT NULL,
                    user_password varchar(255) NOT NULL
                     );
                      insert into user (user_name, user_password) values ('root','123');
                      insert into user (user_name, user_password) values ('root2','123');
                      insert into user (user_name, user_password) values ('root3','123');`,
              () => {
                res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
              });
        }
      });
    });
  // res.render('index', { title: 'Home2', message: 'Welcome to my app!' });
});

router.post('/login', (req, res, next) => {
  var db = new sqlite3.Database('mydb.sqlite3',
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      if (err) {
        console.log("Getting error " + err);
        exit(1);
      }

      console.log("seaching");
      db.all(`SELECT * FROM user WHERE user_name = '${req.body.username}' and user_password ='${req.body.password}';`, 
        function(err, rows) {
          console.log("Retrieved user:", rows);

          if (rows.length === 1) {
            res.render('index', { title: 'Home', message: 'Welcome to my app!' });
          }
          // console.log("User name:", rows.user_name);
          // console.log("Submitted user name:", req.body.username);

          // if(rows.user_name == req.body.username) {
          //   res.render('index', { title: 'Home', message: 'Welcome to my app!' });
          // } 
          else {
            res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
          }
          // console.log(rows);

          // res.render('index', { title: 'Fitness_Tracker', message: 'Welcome to my app!' });
        }
      )
    }
  );
  
});
module.exports = router;

function exit(arg0: number) {
    throw new Error("Function not implemented.");
}
