let runApp = {
  inputValue: document.querySelector("#inputValue"),
  searchBox: new google.maps.places.SearchBox(inputValue),
  getWeather: () =>
    runApp.searchBox.addListener("places_changed", () => {
      let place = runApp.searchBox.getPlaces()[0];
      if (place == null) return;
      let latitude = place.geometry.location.lat();
      let longitude = place.geometry.location.lng();
      console.log(longitude);
      console.log(latitude);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=003bd0423f8f627a496637434f9231df&units=imperial`
      )
        .then((response) => response.json())

        .then((data) => {
          console.log(data);
          let locationIcon = document.querySelector(".weather-icon");
          locationIcon.innerHTML = `<img src="icons/${data["weather"][0]["icon"]}.png"></img>`;
          document.querySelector(".name").innerHTML = data["name"];
          document.querySelector(".description").innerHTML =
            data["weather"]["0"]["description"];
          document.querySelector(".temp").innerHTML = data["main"]["temp"];
          document.querySelector(".wind").innerHTML = data["wind"]["speed"];
          document.querySelector(".humidity").innerHTML =
            data["main"]["humidity"];
        })
        .catch((err) => console.log(err));
    }),
};
runApp.getWeather();

//   https://api.nasa.gov/planetary/apod?api_key=0uca91s9lPFLMO0DOTBYVf31d5MJQkaQnxYPs9Y9
//   0uca91s9lPFLMO0DOTBYVf31d5MJQkaQnxYPs9Y9
