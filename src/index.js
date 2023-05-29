// Imports for style and weather condition codes
import './style.css';
import conditionData from './weather_conditions.json';

// IIFE for encapsulation
(function() {
  'use strict'

  // Switch for unit of heat
  let metric = 'f';

  // Query selectors
  const icon = document.querySelector('.icon');
  const temperature = document.querySelector('.temp');
  const location = document.querySelector('.location');
  const search = document.querySelector('.search');
  const searchBtn = document.querySelector('.search-btn');
  const celToFar = document.querySelector('.cel-to-far');
  const feel = document.querySelector('.feel');
  const wind = document.querySelector('.wind');
  const humVal = document.querySelector('.hum');

  // Initialize weatherData object;
  let weatherData;

  // Pulls data from weatherapi and stores it in an object
  async function getWeatherData() {
    let searchKey = 'New York';
    search.value == '' ? searchKey = 'New York' : searchKey = search.value;
    search.value = '';
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=${searchKey}&aqi=no`, {mode: 'cors'});
      
      const responseData = await response.json();

      weatherData = organizeData(responseData);
      
      displayInfo();
    }

    catch {
      alert('Location not found');
    }
  }

  // Parses data from weatherapi into an object
  function organizeData(data) {
    const weatherData = {
      tempF: data.current.temp_f,
      
      tempC: data.current.temp_c,
      
      feelsLikeF: data.current.feelslike_f,
      
      feelsLikeC: data.current.feelslike_c,
      
      condition: data.current.condition.code,
      
      hum: data.current.humidity,
      
      loc: data.location.name,
      
      country: data.location.country,

      windMph: data.current.wind_mph,

      windKph: data.current.wind_kph,
    };
    return weatherData;
  }


  // Pushes info into HTML
  function displayInfo() {
    const iconCode = conditionData.find(cond => cond.code == weatherData.condition).icon;
    icon.setAttribute('src', `./icons/${iconCode}.svg`);
    location.textContent = `${weatherData.loc}, ${weatherData.country}`;
    humVal.textContent = `Humidity: ${weatherData.hum}`;
    if (metric === 'f') {
      temperature.textContent = `${weatherData.tempF}°F`;
      feel.textContent = `Feels like ${weatherData.feelsLikeF}°F`;
      wind.textContent = `Wind: ${weatherData.windMph} mph`;
    }

    if (metric === 'c') {
      temperature.textContent = `${weatherData.tempC}°C`;
      feel.textContent = `Feels like ${weatherData.feelsLikeC}°C`;
      wind.textContent = `Wind: ${weatherData.windKph} kph`;
    }
  }

  // Changes unit of heat
  function metricChange() {
    metric === 'f' ? metric = 'c' : metric = 'f';
    displayInfo();
  }

  // Event listeners
  searchBtn.addEventListener('click', getWeatherData);
  search.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      getWeatherData();
    }
  });
  celToFar.addEventListener('click', metricChange);

  // Runs when webpage is first opened
  getWeatherData();
})();