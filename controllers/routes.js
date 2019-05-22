var express = require('express');
var routes = express.Router();

router.get('/', function(req, res){
    res.render('index');
})