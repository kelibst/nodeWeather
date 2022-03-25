const path = require("path");
const express = require("express");

const app = express();
const publicDir = path.join(__dirname, "./public");

app.set("view engine", "hbs");

app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index");
  // res.send("Hello world!");
});

app.get("/help", (req, res) => {
  res.send("Welcome to the help page.");
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});

// const getGeocode = require("./utilities/getLocation");
// const forecast = require("./utilities/forecast");

// const location = process.argv[2];

// if (!location) {
//   console.log("Please provide an address");
// } else {
//   getGeocode({ location }, (err, data) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       console.log("You are requesting the weather for " + data.address);
//       forecast(data.address, (err, data) => {
//         if (err) {
//           return console.log(err);
//         }
//         const { main, description } = data.weather[0];
//         console.log("Main", main);
//         console.log("Description", description);
//       });
//     }
//   });
// }
