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
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=003bd0423f8f627a496637434f9231df&units=imperial`
  )
    .then((res) => res.json())

    .then((data) => {
      console.log(data);
      let locationIcon = document.querySelector(".weather-icon");
      locationIcon.innerHTML = `<img src="icons/${data["weather"][0]["icon"]}.png"></img>`;
      document.querySelector(".name").innerHTML = data["name"];
      document.querySelector("#temp").innerHTML = data["main"]["temp"] + "ºF";
      document.querySelector("#wind").innerHTML = data["wind"]["speed"];
      document.querySelector("#humidity").innerHTML = data["main"]["humidity"];
      document.querySelector(".description").innerHTML =
        data["weather"]["0"]["description"];
    })
    .catch((err) => console.log(err));
}
