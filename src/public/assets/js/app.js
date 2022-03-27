const form = document.querySelector("form");
const loc = document.querySelector(".locInp");
const weatherContainer = document.querySelector(".weather");
const errorCont = document.querySelector(".error-container");
const error = document.querySelector(".error");
const weatherTitle = document.querySelector(".weatherTitle");
const weatherDesc = document.querySelector(".weatherDesc");
const weatherLoc = document.querySelector(".weatherLoc");

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
      errorCont.classList;
      innerText = error;
    } else {
      console.log(errorCont.classList.contains("d-none"));
      !errorCont.classList.contains("d-none") &&
        errorCont.classList.add("d-none");
      weatherTitle.innerText = data.weather.main;
      weatherDesc.innerText = data.weather.description;
      weatherLoc.innerText = data.location;
    }
  });
  console.log(e);
});
