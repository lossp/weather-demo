#!/usr/bin/env node

var axios = require('axios');
var data = {};

if(process.argv[2]){
  data.params = {
    city: process.argv[2]
  }
}

axios.get('http://api.jirengu.com/weather.php', data)
  .then(function (response) {
      var weather = response.data.results[0].weather_data[0];
      var city = response.data.results[0].currentCity;
      console.log(city);
      console.log(weather.date);
      console.log(weather.temperature)
      console.log(weather.weather + ',' + weather.wind)
  })

//1522380129
//1611503966
//996163400
//18328029683
  .catch(function (error) {
    console.log(error);
  })
