var express = require('express');
var router = express.Router();
const Rentee=require('../models/Rentee');
// const Details=require('../models/Details');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const rentee =await Rentee.find();

  res.render('home', {renteeList: rentee })
});
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Gharbhada' });
});
router.post('/save',async function(req, res, next) {

  await Rentee.insertMany({ Fname : req.body.name, phone: req.body.phone, number_of_rooms: req.body.rooms, price: req.body.price});
  
  res.redirect('/');
});
router.get('/delete/:id',async function(req,res,next){

  await Rentee.remove({_id: req.params.id});
  res.redirect('/');

});
router.get('/edit/:id', async function(req, res, next) {
  const rent = await Rentee.findOne({_id: req.params.id}); 
 
  res.render('edit', {rentee :rent});
});
router.post('/update/:id',async function(req,res,next){
  await Rentee.updateOne({_id: req.params.id}, {$set:{Fname : req.body.name, phone: req.body.phone, number_of_rooms: req.body.rooms, price: req.body.price}});
  res.redirect('/');

});



router.get('/viewdetails/:id',async  function(req, res, next) {
  const rent = await Rentee.findOne({_id: req.params.id}); 
  res.render('viewdetails', {rentee: rent});
});
router.get('/updatedetails/:id', async function(req, res, next) {
  const rent = await Rentee.findOne({_id: req.params.id}); 
 
  res.render('updatedetails', {rentee :rent});
});
router.post('/final/:id',async function(req,res,next){
  await Rentee.updateOne({_id: req.params.id}, {$set:{month: req.body.month,status: req.body.status }});
  res.redirect('/viewdetails/:id');

});

module.exports = router;
