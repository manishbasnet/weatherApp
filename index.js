let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'bb68ce4fd18ef91f5a042e9bea9ef210';
let city = argv.c || 'kathmandu';
let postalCode = argv.p || '44600';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${postalCode}&units=imperial&appid=${apiKey}`;


request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body)
      const { lon, lat } = weather.coord;
      const today = new Date();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let message = `It's ${weather.main.temp} degrees in ${weather.name} and current time is ${time}!`;
      console.log(message);
    }
});