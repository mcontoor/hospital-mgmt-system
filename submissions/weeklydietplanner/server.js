//install dependencies and create a simple node server
var express =require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

const User = require('./models/user')

app.set('view engine', 'ejs');

var port = process.env.PORT || 5000;


app.listen(port, function(){
    console.log('Server is listening on '+ port +' ...');

});

app.get('/',function(req,res){

    res.send("HELLO WORLD");
});


var user = require('./routes/user');
app.use('/user', user);

var login = require('./routes/login');
app.use('/login', login);
// connect the server to MongoDB database 'slackernews' using mongoose

// mongoose.connect('mongodb://localhost:27017/slackernews', {useNewUrlParser: true});


// // const newUser = {
//    email : req.body.email ,
//    password : req.body.password
// }

// new User(newUser).save()