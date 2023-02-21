//Imported sequelize connection//
const express = require('express');
const app = express();
const routes = require('./routes');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Sequelize models synced to the database, then turns on server//
sequelize.sync({ force: false }).then(() => {
app.listen(3002, () => {
  console.log(`App listening on port ${PORT}!`);
});
});

