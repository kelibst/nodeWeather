const axios = require("axios").default;
const { geoToken } = require("../../config");

const getGeocode = (address, callback) => {
  const options = {
    method: "GET",
    url: "https://trueway-geocoding.p.rapidapi.com/Geocode",
    params: { address: address, language: "en" },
    headers: {
      "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      "X-RapidAPI-Key": geoToken,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      const { data } = response;
      if (!data?.results.length) {
        callback(
          "Sorry that location does not exist in our database. Please try another search!",
          undefined
        );
      } else if (data?.results.length) {
        callback(undefined, data?.results[0]);
      }
    })
    .catch(function (error) {
      !error.response &&
        callback(
          "We could not access the location data, Kindly check your network and try again!",
          undefined
        );
    });
};

module.exports = getGeocode;
