
var express = require('express');
var methodOverride = require('method-override');
var burger_router = express.Router();
var burger_call = require('../models/burger.js');
var bodyParser = require('body-parser');

burger_router.use(bodyParser.json());
burger_router.use(bodyParser.urlencoded({extended: false}));
burger_router.use(bodyParser.text());
burger_router.use(bodyParser.json({type:'application/vnd.api+json'}));

burger_router.get('/', function(req,res){
  res.redirect('/burger');
});

burger_router.get('/burger', function(req,res){
  burger_call.read(function(data){

    var hbs_object = {burger: data};
    res.render('index', hbs_object);
  });
});

burger_router.post('/burger/add', function(req, res){
  burger_call.insert(req.body.user_burger, function(data){
    res.redirect('/burger');
  });
});

burger_router.put('/burger/update/:id?', function(req,res){
  var user_id = parseInt(req.params.id);
  burger_call.update(user_id, function(data){
    res.redirect('/burger');
  });
});

burger_router.put('/burger/delete/:id?', function(req,res){
  var user_id = parseInt(req.params.id);
  burger_call.delete(user_id, function(data){
    res.redirect('/burger');
  });
});
module.exports = burger_router;
