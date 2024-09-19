function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  cityElement.innerHTML = searchInputElement.value;

  let apiKey = "274f131o2e7eb1f01bf45a84aaa21ta3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function displayWeather(response) {
  console.log(response.data.temperature.current);
  let temperature = Math.round(response.data.temperature.current);
  let cityName = response.data.city;

  let display = document.querySelector("#current-temperature-value");
  display.innerHTML = `${temperature}`;

  let city = document.querySelector("#current-city");
  city.innerHTML = `${cityName}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
