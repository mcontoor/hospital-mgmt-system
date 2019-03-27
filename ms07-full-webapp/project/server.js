const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Heal Me!'));

app.listen(3002, () => console.log('Heal Me!'));

