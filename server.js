//Imported sequelize connection//
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sequelized models synced to the database, then to server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});