var express = require('express');
var router = express.Router();
var puppies = [];


router.get('/form', function(req, res, next) {
  res.render('form');
});



// GET all puppies
router.get('/puppies', function(req, res, next) {
  res.json(puppies);
});

//POST single puppy
router.post('/', function(req, res, next) {
  var new_puppy = {name: req.body.name, age: req.body.age};
  puppies.push(new_puppy);
  res.json(puppies);
});

// GET single puppy
router.get('/puppies/:id', function(req, res, next) {
  console.log(req.params);
  res.json(puppies[req.params.id-1]);
});

// PUT single puppy
router.put('/puppies/:id', function(req, res, next) {
  puppies[req.params.id-1].name = req.body.name;
  puppies[req.params.id-1].age= req.body.age;
  res.json(puppies);
});

// DELETE single puppy
router.delete('/puppies/:id', function(req, res, next) {
  puppies.splice([req.params.id-1], 1);
  res.json(puppies);
});


module.exports = router;
