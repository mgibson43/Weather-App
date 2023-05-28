import './style.css';

(function() {
  'use strict'
  
  async function getWeatherData() {
    let searchKey;
    search.value == '' ? searchKey = 'New York' : searchKey = search.value;
    search.value = '';
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=${searchKey}&aqi=no`, {mode: 'cors'});
      
      const responseData = await response.json();
      
      const weatherData = {
        tempF: responseData.current.temp_f,
        
        tempC: responseData.current.temp_c,
        
        feelsLikeF: responseData.current.feelslike_f,
        
        feelsLikeC: responseData.current.feelslike_c,
        
        condition: responseData.current.condition.text,
        
        hum: responseData.current.humidity,
        
        loc: responseData.location.name,
        
        reg: responseData.location.region,
      };

      displayInfo(weatherData);
      console.log(weatherData);
    }

    catch {
      console.log('No such location');
    }
  }


  function displayInfo(data) {
    humidity.textContent = `${data.hum}`
    humidityTxt.textContent = 'Humidity'
    conditionTxt.textContent = `${data.condition}`
    tempC.textContent = `${data.tempC}°C`
    tempF.textContent = `${data.tempF}°F`
    tempFeelC.textContent = `Feels like ${data.feelsLikeC}°C`
    tempFeelF.textContent = `Feels like ${data.feelsLikeF}°F`
  }

  function getCondImg(cond) {

  }

  getWeatherData();
})();