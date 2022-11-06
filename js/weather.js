const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "xxxxxxxxxxxxx";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  /*
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.weather[0].description} / ${data.main.temp}°C /`;
    });
  */
 
 const data = {"coord":{"lon":127.0364,"lat":37.278},"weather":[{"id":801,"main":"Clouds","description":"약간의 구름이 낀 하늘","icon":"02n"}],"base":"stations","main":{"temp":8.58,"feels_like":8.58,"temp_min":7.62,"temp_max":9.72,"pressure":1023,"humidity":61},"visibility":10000,"wind":{"speed":0.51,"deg":100},"clouds":{"all":20},"dt":1667730751,"sys":{"type":1,"id":5509,"country":"KR","sunrise":1667685658,"sunset":1667723397},"timezone":32400,"id":6573030,"name":"Namhyang-dong","cod":200};
 city.innerText = data.name;
 weather.innerText = `${data.weather[0].main} / ${data.weather[0].description} / ${data.main.temp}°C /`;

}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = "magenta";
 all[i].style.webkitTextStroke = "0.2px white"
 all[i].style.textAlign = "center";
}