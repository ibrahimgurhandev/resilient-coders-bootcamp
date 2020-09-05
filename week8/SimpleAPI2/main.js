let definition = document.querySelector("p");
button = document.getElementById("button");
button.addEventListener("click", getData);

function getData() {
  let firstName = document.getElementById("firstName").value;
  let secName = document.getElementById("secName").value;
  let percent = document.getElementById("percent");
  let text = document.getElementById("text");

  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secName}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "e06772900emshda90c5f26813d25p1ea574jsnb5d519c41fe2",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      percent.innerHTML = data.percentage + "%";
      text.innerHTML = data.result;
    })
    .catch((err) => alert("sorry could not find that word"));
}

document.querySelector("#firstName").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getData();
  }
});
