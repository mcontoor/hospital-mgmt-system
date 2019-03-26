var express = require('express');
var router = express.Router();

router.get('/', function(req, res, err){
    res.render('pages/userProfile');
});

module.exports = router;

