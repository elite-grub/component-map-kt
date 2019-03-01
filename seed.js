const Sequelize = require('sequelize');
const faker = require('faker');
const { config } = require('./server/database/config.js');


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
})
  .then(() => {
    const Restaurants = sequelize.define('restaurants', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cityStateZip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { timestamps: false },
    { freezeTable: true });
    Restaurants.sync({ force: true })
      .then(() => {
        for (let i = 0; i < 100; i += 1) {
          Restaurants.create({
            name: faker.lorem.words(),
            street: faker.address.streetAddress(),
            cityStateZip: `${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
            phone: faker.phone.phoneNumberFormat(),
            website: faker.internet.url(),
          });
        }
      })
      .catch(err => console.log(err));
  });
/* .then(() => sequelize.close()); */
