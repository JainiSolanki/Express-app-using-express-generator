var express = require('express');
var router = express.Router();
var StudentModel = require('../models/Student')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/add-student', function(req, res, next) {
  res.render('add-student', { title: 'Express' });
});
router.post('/add-student-process', function(req, res, next) {
  //console.log(req.body);
  var StudentData = {
    sname : req.body.name,
    semail : req.body.email,
    smobile : req.body.mobile
  }
  //assign data to model
  var myData = StudentModel(StudentData)
  //save in database
  myData.save()
  .then(()=> {
    res.send("Data Added")
  })
  .catch((err)=>res.send("Error" +err))
});

module.exports = router;
