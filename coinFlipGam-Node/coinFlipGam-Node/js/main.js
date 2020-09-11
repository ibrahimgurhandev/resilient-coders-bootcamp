let buttonHead = document.getElementById('buttonHead')
let buttonTail = document.getElementById('buttonTail')
let results = document.getElementById('results')
let feedback = document.getElementById('feedback')
buttonHead.addEventListener('click', playHeads)
buttonTail.addEventListener('click', playTails)

function playHeads() {
    play("heads")
}

function playTails() {
    play("tails")
}

function play(chosenSide) {
    fetch(`/api`)
        .then(response => response.json())
        .then((data) => {
            //heads/tails image
            if (data.checker === "heads") {
                results.innerHTML = `<img src="https://cdn11.bigcommerce.com/s-4ulzs/images/stencil/1280x1280/products/12235/13432/apismz7sk__35703.1583015166.jpg?c=2" alt="">`;
            } else {
                results.innerHTML = `<img src="https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png" alt="">`;
            }
            //feedback
            if (data.checker === chosenSide) {
                feedback.innerHTML = `You got it right`;
            } else {
                feedback.innerHTML = `You got it wrong`;
            }
        });
}