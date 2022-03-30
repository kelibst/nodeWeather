const axios = require("axios").default;
const { weatherToken } = require("../../config");

const forecast = (location, callback) => {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: location,
      lat: "0",
      lon: "0",
      id: "2172797",
      lang: "null",
      units: "imperial",
      mode: "json",
    },
    headers: {
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      "X-RapidAPI-Key": weatherToken,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      const { data } = response;
      callback(undefined, data);
    })
    .catch(function (error) {
      console.log("There was an error");

      if (!error.response) {
        callback(
          "We could not access the weather data, Kindly check your network and try again!",
          undefined
        );
      } else {
        callback("Something went wrong, Kindly try again later!", undefined);
      }

      console.error(error);
    });
};

module.exports = forecast;
