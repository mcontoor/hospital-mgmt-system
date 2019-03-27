var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient

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

var uri = 'mongodb://mcontoor123:mcontoor123@healme/healme?ssl=true&replicaSet=<replica setname>&authSource=admin';

var db = mongoose.connect(uri, { useNewUrlParser: true })
.then(res => console.log('connected'))
.catch((error) => { console.log(error); });