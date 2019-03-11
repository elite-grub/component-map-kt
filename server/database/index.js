const Sequelize = require('sequelize');
const { config } = require('./config.js');
const { seed } = require('../../seed.js');

const sequelize = new Sequelize({
  database: config.database,
  username: config.username,
  password: config.password,
  dialect: config.dialect,
  host: config.host,
});

sequelize.authenticate().then(() => {
  console.log('Connection Successful at index.js!');
}).catch((err) => {
  console.error('No connection to database!', err);
});

const selectRestaurant = (async (id) => {
  try {
    seed();
  } catch (err) {
    return err;
  }
  try {
    const res = await sequelize.query(`SELECT * FROM restaurants WHERE id = ${id}`);
    return res[0];
  } catch (err) {
    return err;
  }
});


module.exports = { selectRestaurant };
