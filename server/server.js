const express = require('express');
const bodyParser = require('body-parser');

const { selectRestaurant } = require('./database/index.js');

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(express.static('./client/dist'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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
