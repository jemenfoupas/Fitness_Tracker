"use strict";
var express = require('express');
var router = express.Router();
router.get('/routine', function (req, res, next) {
    res.render('routine');
});
module.exports = router;
