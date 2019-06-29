const express = require('express');
const app = express();
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3002, function () {
    console.log('Listening to port 3002')
});

var routes = require('./routes/app')
app.use(routes);


// mongoose.connect("mongodb+srv://mcontoor123:mcontoor123@healme-yz6ie.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
// .then(res => console.log('Connected'))
// .catch(err => console.log(err));

// const uri = "mongodb+srv://mcontoor123:<mcontoor123>@healme-yz6ie.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// var uri = 'mongodb://mcontoor123:mcontoor123@healme/healme?ssl=true&replicaSet=<replica setname>&authSource=admin';

// var db = mongoose.connect(uri, { useNewUrlParser: true })
// .then(res => console.log('connected'))
// .catch((error) => { console.log(error); });