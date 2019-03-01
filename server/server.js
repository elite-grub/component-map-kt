const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { selectRestaurant } = require('./database/index.js');

const app = express();
const port = 3333;

app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static(path.join(__dirname, './client/dist')));
app.use(express.static('./client/dist'));

app.get('/restaurant/:id', (req, res) => {
  selectRestaurant(Number(req.params.id))
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
app.listen(port, () => { console.log(`SERVER listening on PORT ${port}!`); });
