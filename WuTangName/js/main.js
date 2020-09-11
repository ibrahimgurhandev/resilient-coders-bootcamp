function myFunction() {
  console.log("button clicked")
  const colorPicked = document.getElementById('color').value
  const petPicked = document.getElementById('pet').value
  const moviePicked = document.getElementById('movie').value

  fetch(`/api?choices=${colorPicked}${petPicked}${moviePicked}`)
    .then(response => response.json())
    .then((data) => {
      document.querySelector('p').innerHTML = `your name is ${data}`
    });
}