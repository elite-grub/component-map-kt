const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { selectRestaurant } = require('./database/index.js');

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/restaurant/:id', (req, res) => {
  selectRestaurant(Number(req.params.id))
    .then((data) => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
app.listen(port, () => { console.log(`Server listening on Port ${port}!`); });
