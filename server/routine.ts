var express = require('express');
var router = express.Router();

router.get('/routine', function (req: any, res: any, next: any) {
    res.render('routine');
  });

  module.exports = router;