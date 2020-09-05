document.getElementById("btnWeather").addEventListener("click", getWeather);
function getLocation() {
  fetch(`https://ipapi.co/json/`)
    .then((response) => response.json())

    .then((data) => {
      console.log(data);

      document.querySelector("#city").innerHTML = data["city"];
      document.querySelector("#regionName").innerHTML = data["region"];
      document.querySelector("#zipcode").innerHTML = data["postal"];
      document.querySelector("#ip").innerHTML = data["ip"];
      document.querySelector("#lat").innerHTML = data["latitude"];
      document.querySelector("#lon").innerHTML = data["longitude"];

      // let locationIcon = document.querySelector(".weather-icon");
      // locationIcon.innerHTML = `<img src="icons/${data["weather"][0]["icon"]}.png"></img>`;
      // document.querySelector(".name").innerHTML = data["name"];
      // document.querySelector(".description").innerHTML =
      //   data["weather"]["0"]["description"];
      // document.querySelector(".temp").innerHTML = data["main"]["temp"];
      // document.querySelector(".wind").innerHTML = data["wind"]["speed"];
      // document.querySelector(".humidity").innerHTML =
      //   data["main"]["humidity"];
    })
    .catch((err) => console.log(err));
}

getLocation();

function getWeather() {
  let latitude = document.querySelector("#lat").innerHTML;
  let longitude = document.querySelector("#lon").innerHTML;
  fetch(
    `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=366cc5a7fdf890e156cf71b1182d64f9&query=${latitude},${longitude}`
  )
    .then((res) => res.json())

    .then((data) => {
      console.log(data);
      document.querySelector("#temp").innerHTML =
        data.current.temperature + "ºF";
      document.querySelector("#wind").innerHTML = data.current.wind_speed;
      document.querySelector("#humidity").innerHTML =
        data["current"]["humidity"];
      document.querySelector(".description").innerHTML =
        data.current.weather_descriptions[0];
      document.getElementById("icon").src = `${data.current.weather_icons[0]}`;
    })
    .catch((err) => console.log(err));
}
