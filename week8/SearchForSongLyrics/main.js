// followed Traversy tutorial on youtube

let form = document.getElementById("inputValue");
let search = document.getElementById("search");
let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchValue = search.value.trim();

  if (!searchValue) {
    alert("There is nothing to search");
  } else {
    searchSong(searchValue);
  }
});

function searchSong(searchValue) {
  let searchResult = fetch(`https://api.lyrics.ovh/suggest/${searchValue}`)
    .then((response) => response.json())

    .then((data) => {
      showData(data);
    });
}

function showData(data) {
  result.innerHTML = `
    <ul class="song-list">
      ${data.data
        .map(
          (song) => `<li>
                    <div>
                        <strong>${song.artist.name}</strong> -${song.title} 
                    </div>
                    <span data-artist="${song.artist.name}" data-songtitle="${song.title}"> get lyrics</span>
                </li>`
        )
        .join("")}
    </ul>
  `;
}

result.addEventListener("click", (e) => {
  let clickedElement = e.target;

  if (clickedElement.tagName === "SPAN") {
    let artist = clickedElement.getAttribute("data-artist");
    let songTitle = clickedElement.getAttribute("data-songtitle");

    getLyrics(artist, songTitle);
  }
});

function getLyrics(artist, songTitle) {
  fetch(
    `https://orion.apiseeds.com/api/music/lyric/${artist}/${songTitle}?apikey=TibJStcK2J0m8rOQyhrNNWLXYDxSd3rvWRIyfS3Pwv3PvVu5aOD8dS5PaR5spEmI`
  )
    .then((response) => response.json())

    .then((data) => {
      let lyrics = data.result.track.text.replace(/(\r\n|\r|\n)/g, "<br>");

      result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <p>${lyrics}</p>`;
    })
    .catch((err) =>
      alert(
        "Sorry, we don't have the Lyrics to this particular song. Try searching foranother song"
      )
    );
}
