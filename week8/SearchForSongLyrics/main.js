// followed Traversy tutorial on youtube

let form = document.getElementById("inputValue");
let search = document.getElementById("search");
let result = document.getElementById("result");

/// api URL ///

/// adding event listener in form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchValue = search.value.trim();

  if (!searchValue) {
    alert("There is nothing to search");
  } else {
    searchSong(searchValue);
  }
});

//search song
async function searchSong(searchValue) {
  let searchResult = await fetch(
    `https://api.lyrics.ovh/suggest/${searchValue}`
  );
  let data = await searchResult.json();

  // console.log(finaldata)
  showData(data);
}

//display final result in DO
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

//event listener in get lyrics button
result.addEventListener("click", (e) => {
  let clickedElement = e.target;

  //checking clicked elemet is button or not
  if (clickedElement.tagName === "SPAN") {
    let artist = clickedElement.getAttribute("data-artist");
    let songTitle = clickedElement.getAttribute("data-songtitle");

    getLyrics(artist, songTitle);
  }
});

// Get lyrics for song
async function getLyrics(artist, songTitle) {
  let res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`);
  let data = await res.json();
  let lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <p>${lyrics}</p>`;
}
