button = document.querySelector('button')
button.addEventListener('click', check)


function check() {
    string = document.getElementById("myInput").value;

    fetch(`/api?string=${string}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.checker)
            if (data.checker === "yes") {
                document.querySelector('p').innerHTML = `${string} is  a Palindrome`
            } else {
                document.querySelector('p').innerHTML = `${string} is not a Palindrome`
            }
        });
}