const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.set('useCreateIndex',true);
mongoose.connect('mongodb://localhost:27017/healme', {useNewUrlParser: true}).then(res => console.log('MongoDB connected')).catch(err => console.log("Err at connrction with mongo ", err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.set('view engine','ejs');
app.get('/', (req, res) => res.send('Heal Me!'));
app.listen(3002, () => console.log('Heal Me!'));

