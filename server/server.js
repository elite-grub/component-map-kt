const express = require('express');
const path = require('path');
const app = express();
const port = 3333;
// const { getAllPhotos, getRandomPhotos } = require('../database-mysql/index.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('Server Response!')
});
app.listen(port, () => { console.log(`Server listening on Port ${port}!`); });