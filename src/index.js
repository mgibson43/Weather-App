import './style.css';

(function() {
  'use strict'

  const conditions = new Map();
  conditions.set('sunny', )
  const container = document.createElement('div');
  const main = document.createElement('main');

  main.classList.add('main');
  container.classList.add('container');

  const location = document.createElement('h2');
  location.classList.add('location');
  
  main.appendChild(location);

  const celBox = document.createElement('div');
  const farBox = document.createElement('div');
  const condBox = document.createElement('div');
  const humBox = document.createElement('div');
  const weatherBox = document.createElement('div');

  celBox.classList.add('weatherCard');
  farBox.classList.add('weatherCard');
  weatherBox.classList.add('weatherCard');

  const tempC = document.createElement('p');
  const tempF = document.createElement('p');
  const tempFeelF = document.createElement('p');
  const tempFeelC = document.createElement('p');
  const conditionTxt = document.createElement('p');
  const condition = document.createElement('div');
  const humidityTxt = document.createElement('p');
  const humidity = document.createElement('p');

  tempC.classList.add('infoTemp');
  tempF.classList.add('infoTemp');
  tempFeelC.classList.add('infoFeel');
  tempFeelF.classList.add('infoFeel');
  condition.classList.add('infoCond');
  humidity.classList.add('infoCond');
  conditionTxt.classList.add('condTxt');
  humidityTxt.classList.add('condTxt');

  celBox.appendChild(tempC);
  celBox.appendChild(tempFeelC);
  farBox.appendChild(tempF);
  farBox.appendChild(tempFeelF);
  condBox.appendChild(condition);
  condBox.appendChild(conditionTxt);
  humBox.appendChild(humidity);
  humBox.appendChild(humidityTxt);
  weatherBox.appendChild(condBox);
  weatherBox.appendChild(humBox);
    
  const searchBox = document.createElement('div');
  searchBox.classList.add('searchBox');
    
  const search = document.createElement('input');
  search.classList.add('search');
  search.setAttribute('placeholder', 'New York');
  search.setAttribute('type', 'text');
    
  const searchBtn = document.createElement('button');
  searchBtn.classList.add('btn');
  searchBtn.textContent = 'Search';
  searchBtn.addEventListener('click', getWeatherData);
    
  searchBox.appendChild(search);
  searchBox.appendChild(searchBtn);

  main.appendChild(celBox);
  main.appendChild(farBox);
  main.appendChild(weatherBox);
    
  container.appendChild(main);
  container.appendChild(searchBox);
  
  document.querySelector('body').appendChild(container);

  
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