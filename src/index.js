import './style.css';
import conditionData from './weather_conditions.json';

(function() {
  'use strict'

  console.log(conditionData);
  async function getWeatherData() {
    let searchKey = 'New York';
    // search.value == '' ? searchKey = 'New York' : searchKey = search.value;
    // search.value = '';
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
    document.querySelector('.icon').setAttribute('src', `./icons/${iconCode}.svg`);
  }

  function getCondImg(cond) {

  }

  getWeatherData();
})();