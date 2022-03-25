// config.js
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();
console.log(process.env.GEO_KEY, "deotenv");
module.exports = {
  geoToken: process.env.GEO_KEY,
  weatherToken: process.env.WEATHER_KEY,
};
