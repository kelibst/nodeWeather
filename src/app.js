const axios = require("axios").default;

const getGeocode = (address, callback) => {
  const options = {
    method: "GET",
    url: "https://trueway-geocoding.p.rapidapi.com/Geocode",
    params: { address: address, language: "en" },
    headers: {
      "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
      "X-RapidAPI-Key": "bac5f06a9fmshd02a9f3c2e713cep16c968jsn34dcbc40a36a",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      const { data } = response;
      !data?.results.length &&
        callback(
          "Sorry that location does not exist in our database. Please try another search!",
          undefined
        );
    })
    .catch(function (error) {
      !error.response &&
        callback(
          "We could not access the location data, Kindly check your network and try again!",
          undefined
        );
      //   console.log(
      //     "We could not access the location data, Kindly check your network and try again"
      //   );
      // console.error(error);
    });
};

getGeocode("2lukk", (err, data) => {
  console.log("error", err);
  console.log("data", data);
});

// var options = {
//   method: "GET",
//   url: "https://trueway-geocoding.p.rapidapi.com/Geocode",
//   params: { address: "Hohoe Ghana", language: "en" },
//   headers: {
//     "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
//     "X-RapidAPI-Key": "bac5f06a9fmshd02a9f3c2e713cep16c968jsn34dcbc40a36a",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log("There was an error");
//     !error.response &&
//       console.log(
//         "We could not access the location data, Kindly check your network and try again"
//       );
//     // console.error(error);
//   });

// var options = {
//   method: "GET",
//   url: "https://community-open-weather-map.p.rapidapi.com/weather",
//   params: {
//     q: "Hohoe ,Ghana",
//     lat: "0",
//     lon: "0",
//     id: "2172797",
//     lang: "null",
//     units: "imperial",
//     mode: "json",
//   },
//   headers: {
//     "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
//     "X-RapidAPI-Key": "30a87362e7msh7a2e8b10b4610bep1685c3jsn1dd183d397d6",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log("There was an error");
//     console.error(error);
//   });
