const Sequelize = require('sequelize');
const { config } = require('./config.js');

const sequelize = new Sequelize({
  database: 'elitemap',
  username: config.username,
  password: config.password,
  dialect: 'postgres',
});

sequelize.authenticate().then(() => {
  console.log('Connection Successful!');
}).catch((err) => {
  console.error('No connection to database!', err);
});


const selectRestaurant = (async (id) => {
  try {
    const res = await sequelize.query(`SELECT * FROM restaurants WHERE id = ${id}`);
    return res[0];
  } catch (err) {
    return err;
  }
});


module.exports = { selectRestaurant };
