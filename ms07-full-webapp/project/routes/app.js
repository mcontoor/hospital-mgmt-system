const router = require('express').Router();
const Doctor = require('../models/doctor');
const User = require('../models/user');
const session = require('express-session');
//route to home page
router.get('/home',(req,res)=>res.render('home'));
//route to login page
router.get('/login',(req,res)=>res.redirect('login'));
//route to register page
router.get('/register',(req,res)=>res.redirect('register'));
//adding user to database
router.post('/register',function(req,res){
    console.log(req.body);
    let user = new User();
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.username = req.body.username;
    user.password = req.body.password;
    user.age = req.body.age;
    user.email = req.body.emailId;
    user.save().then(console.log("New User Created",user)).catch(err=>console.log(err));
    res.redirect('/login');
});
//user login
router.post('/login',function(req,res){
   let username = req.body.username;
   let password = req.body.password;
   User.findOne({username : username, password : password},function(err,user){
       if(err){
           console.log(err);
       }
       if(!user){
           return res.status(404).send('<h1>User Not Found</h1>');
       }
       return res.render(`<h1>Welcome ${username}</h1>`);
   });
   res.render('home');
});
module.exports = router;
