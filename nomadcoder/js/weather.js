const API_KEY = 'bd8db1f879b1c4ae727fd2582620614c';

let onGeoOk = function(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  // console.log(position);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = data.name;
      const weather = data.weather[0].main;
      console.log(city, weather);
    });
}

let onGeoError = function() {
  console.log('Not founded');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);