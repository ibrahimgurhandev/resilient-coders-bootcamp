let definition = document.querySelector("p");
button = document.getElementById("button");
button.addEventListener("click", getDefinition);

function getDefinition() {
  let term = document.getElementById("term").value;
  fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=3d2faf5b-7dea-4207-b472-c506f726d3e6`
  )
    .then((response) => response.json())
    .then((data) => {
      showData(data);
      // definition.innerHTML = data[0].shortdef[0];
    })
    .catch((err) => alert("sorry could not find that word"));
}

function showData(data) {
  definition.innerHTML = `
    <ul class="">
      ${data
        .map(
          (definition) =>
            `<li>📖
                  
                    ${definition.shortdef}
                    
                </li>`
        )
        .join("")}
    </ul>
  `;
}

document.querySelector("#term").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getDefinition();
  }
});
