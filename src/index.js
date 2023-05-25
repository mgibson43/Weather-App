async function getWeatherData() {
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=48bf9f94d8334512a48223601232205&q=London&aqi=no', {mode: 'cors'});

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

getWeatherData();