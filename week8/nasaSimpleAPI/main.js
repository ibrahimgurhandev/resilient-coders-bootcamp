let selectedDate = moment().tz("America/New_York").format("YYYY-MM-DD");
document.getElementById("date").value = selectedDate;
console.log(selectedDate);

let runApp = {
  button: document.getElementById("button"),

  selectedDate: moment().tz("America/New_York").format("YYYY-MM-DD"),
  today: () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=0uca91s9lPFLMO0DOTBYVf31d5MJQkaQnxYPs9Y9&date=${runApp.selectedDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector("p").innerHTML = data.explanation;
        if (data.media_type == "video") {
          document.querySelector("iframe").src = data.url;
          document.querySelector("iframe").style.display = "block";
          document.getElementById("nasa").style.display = "none";
        } else {
          document.getElementById("nasa").src = data.url;
          document.getElementById("nasa").style.display = "block";
          document.querySelector("iframe").style.display = "none";
        }
      })
      .catch((err) => console.log(err));
  },
  inputValue: document.getElementById("date").value,
  userSelectedDate: () => {
    runApp.button.addEventListener("click", function () {
      runApp.selectedDate = document.getElementById("date").value;

      if (
        runApp.selectedDate >
        moment().tz("America/New_York").format("YYYY-MM-DD")
      ) {
        runApp.selectedDate = moment()
          .tz("America/New_York")
          .format("YYYY-MM-DD");
      } else {
        runApp.selectedDate = document.getElementById("date").value;
      }

      document.querySelector("iframe").src = "";
      document.getElementById("nasa").src = "";
      document.querySelector("p").innerHTML = "";
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=0uca91s9lPFLMO0DOTBYVf31d5MJQkaQnxYPs9Y9&date=${runApp.selectedDate}`
      )
        .then((response) => response.json())
        .then((data) => {
          document.querySelector("p").innerHTML = data.explanation;

          if (data.media_type == "video") {
            document.querySelector("iframe").src = data.url;
            document.querySelector("iframe").style.display = "block";
            document.getElementById("nasa").style.display = "none";
          } else {
            document.getElementById("nasa").src = data.url;
            document.getElementById("nasa").style.display = "block";
            document.querySelector("iframe").style.display = "none";
          }
        })
        .catch((err) => console.log(err));
    });
  },
};

runApp.today();
runApp.userSelectedDate();

//   https://api.nasa.gov/planetary/apod?api_key=0uca91s9lPFLMO0DOTBYVf31d5MJQkaQnxYPs9Y9
//   0uca91s9lPFLMO0DOTBYVf31d5MJQkaQnxYPs9Y9
