import './style.css';

(function() {
  'use strict'


  const container = document.createElement('div');
  const main = document.createElement('main');

  main.classList.add('main');
  container.classList.add('container');

  const location = document.createElement('h2');
  location.classList.add('location');
  
  main.appendChild(location);

  for (let i = 1; i < 7; i++) {
    const div = document.createElement('div');
    div.classList.add(`tempBox${i}`);
    main.appendChild(div);
  }

  const tempC = document.createElement('div');
  const tempF = document.createElement('div');
  const tempFeelF = document.createElement('div');
  const tempFeelC = document.createElement('div');
  const condition = document.createElement('div');
  const humidity = document.createElement('div');

  tempC.classList.add('info');
  tempF.classList.add('info');
  tempFeelC.classList.add('info');
  tempFeelF.classList.add('info');
  condition.classList.add('info');
  humidity.classList.add('info');
    
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
    humidity.textContent = `Humidity: ${data.hum}`
    condition.textContent = `Condition: ${data.condition}`
    tempC.textContent = `C: ${data.tempC}`
    tempF.textContent = `F: ${data.tempF}`
    tempFeelC.textContent = `Feels Like (C): ${data.feelsLikeC}`
    tempFeelF.textContent = `Feels Like (F): ${data.feelsLikeF}`

    document.querySelector('.tempBox1').appendChild(humidity);
    document.querySelector('.tempBox2').appendChild(condition);
    document.querySelector('.tempBox3').appendChild(tempC);
    document.querySelector('.tempBox4').appendChild(tempF);
    document.querySelector('.tempBox5').appendChild(tempFeelC);
    document.querySelector('.tempBox6').appendChild(tempFeelF);
  }

  getWeatherData();
})();