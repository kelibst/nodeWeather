const form = document.querySelector("form");
const loc = document.querySelector(".locInp");
const weatherContainer = document.querySelector(".weather");
const errorCont = document.querySelector(".error-container");
const error = document.querySelector(".error");
const weatherTitle = document.querySelector(".weatherTitle");
const weatherDesc = document.querySelector(".weatherDesc");
const weatherLoc = document.querySelector(".weatherLoc");
const weatherTemp = document.querySelector(".weatherTemp");
const weatherMaxTemp = document.querySelector(".weatherMaxTemp");
const weatherMinTemp = document.querySelector(".weatherMinTemp");

const getWeather = (location, callback) => {
  fetch(`http://localhost:3000/weather?search=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        callback(data.error, undefined);
      } else {
        callback(undefined, data);
      }
    });
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getWeather(loc.value, (error, data) => {
    if (error) {
      errorCont.classList.contains("d-none") &&
        errorCont.classList.remove("d-none");
      errorCont.innerText = error;
    } else {
      const { weather, location } = data;
      const elements = [
        { node: weatherTitle, name: "Title", value: weather.main },
        {
          node: weatherDesc,
          name: "Description",
          value: weather.description,
        },
        { node: weatherLoc, name: "Location", value: location },
        {
          node: weatherMaxTemp,
          name: "Maximum Temperature",
          value: weather.temp_max,
        },
        {
          node: weatherMinTemp,
          name: "Minimum Temperature",
          value: weather.temp_min,
        },
        {
          node: weatherTemp,
          name: "Temperature",
          value: weather.temp,
        },
      ];
      !errorCont.classList.contains("d-none") &&
        errorCont.classList.add("d-none");
      elements.map((ele) => {
        ele.node.innerText = `${ele.name}: ${ele.value}`;
      });
    }
  });
});
