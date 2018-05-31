var express = require('express');
var router = express.Router();
const db = require('../models/connection');
/* GET home page. */
router.get('/', function(req, res, next) {

    db.allPlayers( (err, userdetails) => {
        res.json(userdetails);
// console.log(userdetails)
// 
    })

});
router.get('/name/:name', function(req, res, next) {
var name=req.params.name;
    db.getByName( name,(err, userdetails) => {
        res.json(userdetails);
// console.log(userdetails)
// 
    })

});





module.exports = router;
