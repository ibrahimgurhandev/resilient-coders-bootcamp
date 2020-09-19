function saveName() {
    Input = document.getElementById('saveThis')
    localStorage.setItem('movie', `${Input.value}`);
    console.log("name was saved to local storage")
    console.log()
}