const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicDir = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./public/assets/views");
const partials = path.join(__dirname, "./public/assets/partials");
const currentYear = new Date().getFullYear();

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partials);

app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    year: currentYear,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Weather App",
    year: currentYear,
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Weather App",
    year: currentYear,
  });
});

app.get("/weather", (req, res) => {
  const location = req.query.search;
  if (!location) {
    return res.send({
      error: "Please provide a search term!",
    });
  } else {
    const getGeocode = require("./utilities/getLocation");
    const forecast = require("./utilities/forecast");

    getGeocode({ location }, (geoErr, geoData) => {
      if (geoErr) {
        return res.send({
          error: geoErr,
        });
      } else {
        forecast(geoData.address, (forErr, forData) => {
          if (forErr) {
            return res.send({
              error: forErr,
            });
          }
          console.log("data weather", forData);
          const { main, description } = forData.weather[0];
          res.send({
            location: geoData.address,
            weather: {
              main: main,
              description: description,
            },
          });
        });
      }
    });
  }
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "Not Found",
    year: currentYear,
  });
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
