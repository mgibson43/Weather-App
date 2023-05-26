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

  tempC.classList.add('temp');
  tempF.classList.add('temp');
  tempFeelC.classList.add('temp');
  tempFeelF.classList.add('temp');
    
  const searchBox = document.createElement('div');
  searchBox.classList.add('searchBox');
    
  const search = document.createElement('input');
  search.classList.add('search');
  search.setAttribute('placeholder', 'New York');
  search.setAttribute('type', 'text');
    
  const searchBtn = document.createElement('button');
  searchBtn.classList.add('btn');
  searchBtn.textContent = 'Search';
  searchBtn.addEventListener('click', displayInfo);
    
  searchBox.appendChild(search);
  searchBox.appendChild(searchBtn);
    
  container.appendChild(main);
  container.appendChild(searchBox);
  
  document.querySelector('body').appendChild(container);

  
  async function getWeatherData() {
    let searchKey;
    search.value == '' ? searchKey = 'New York' : searchKey = search.value;

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=${searchKey}&aqi=no`, {mode: 'cors'});
      
      const responseData = await response.json();
      
      const weatherData = {
        temp_f: responseData.current.temp_f,
        
        temp_c: responseData.current.temp_c,
        
        feelsLike_f: responseData.current.feelslike_f,
        
        feelsLike_c: responseData.current.feelslike_c,
        
        condition: responseData.current.condition.text,
        
        hum: responseData.current.humidity,
        
        loc: responseData.location.name,
        
        reg: responseData.location.region,
      };
      console.log(weatherData);
    }

    catch {
      console.log('No such location');
    }
  }

  getWeatherData();

  async function displayInfo() {
    await getWeatherData();
    
  }
})();