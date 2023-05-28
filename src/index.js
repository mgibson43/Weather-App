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
  const searchBtn = document.querySelector('.searchBtn')

  async function getWeatherData() {
    let searchKey = 'New York';
    search.value == '' ? searchKey = 'New York' : searchKey = search.value;
    search.value = '';
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=${searchKey}&aqi=no`, {mode: 'cors'});
      
      const responseData = await response.json();
      console.log(responseData);
      
      const weatherData = {
        tempF: responseData.current.temp_f,
        
        tempC: responseData.current.temp_c,
        
        feelsLikeF: responseData.current.feelslike_f,
        
        feelsLikeC: responseData.current.feelslike_c,
        
        condition: responseData.current.condition.code,
        
        hum: responseData.current.humidity,
        
        loc: responseData.location.name,
        
        country: responseData.location.country,

        windMph: responseData.current.wind_mph,

        windKph: responseData.current.wind_kph,
      };

      displayInfo(weatherData);
      console.log(weatherData);
    }

    catch {
      console.log('No such location');
    }
  }


  function displayInfo(data) {
    const iconCode = conditionData.find(cond => cond.code == data.condition).icon;
    icon.setAttribute('src', `./icons/${iconCode}.svg`);
    location.textContent = `${data.loc}, ${data.country}`;
    if (metric === 'f') {
      temperature.textContent = `${data.tempF}°F`;
    }

    if (metric === 'c') {
      temperature.textContent = data.tempC;
    }
  }

  function getCondImg(cond) {

  }

  searchBtn.addEventListener('click', getWeatherData);
  search.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      getWeatherData();
    }
  })

  getWeatherData();
})();