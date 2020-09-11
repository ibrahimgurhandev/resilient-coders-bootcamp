let Match = {
  restart: () => {

    Match.flipped = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    Match.randomize()
    document.querySelector('button').style.display = 'none'


  },
  removeEvents: () => {
    document.querySelectorAll('div').forEach(x => x.removeEventListener("click", Match.flip))
  },
  addEvents: () => {
    document.querySelectorAll('div').forEach(x => x.addEventListener("click", Match.flip))
  },
  choices: [],
  randomArray: [],
  randomArray2: [],
  cardsArray: [],

  randomize: () => {
    Match.cardsArray = []
    Match.randomArray = []
    Match.randomArray2 = []
    while (Match.randomArray.length < 6) {
      Match.randomArray.push(Math.floor(Math.random() * 6))
      Match.randomArray = [...new Set(Match.randomArray)]
    }
    while (Match.randomArray2.length < 6) {
      Match.randomArray2.push(Math.floor(Math.random() * 6))
      Match.randomArray2 = [...new Set(Match.randomArray2)]
    }
    Match.cardsArray = Match.randomArray.concat(Match.randomArray2)
    let offset = Math.ceil(Math.random() * 5)
    Match.cardsArray.map(x => x + offset).forEach((x, i) => {
      document.querySelectorAll('div')[i].classList = `card${x} flip`
    })
    console.log(Match.cardsArray)
  },
  flipped: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  flip: (e) => {
    if (!Match.flipped[e.target.id]) {
      Match.removeEvents()
      Match.choices.push(e.target.id)
      console.log(Match.choices)
      e.target.classList.toggle("flip")
      Match.flipped[e.target.id] = 1

      if (Match.choices.length === 2) {
        Match.check()
      } else {
        Match.addEvents()
      }
    }
  },
  check: () => {
    if (Match.cardsArray[Match.choices[0]] !== Match.cardsArray[Match.choices[1]]) {
      setTimeout(() => {
        document.querySelectorAll('div')[Match.choices[0]].classList.toggle('flip')
        document.querySelectorAll('div')[Match.choices[1]].classList.toggle('flip')
        Match.flipped[Match.choices[0]] = 0
        Match.flipped[Match.choices[1]] = 0
        Match.addEvents()
        Match.clear()
      }, 1200)
    } else {

      if (Match.flipped.every(x => x === 1)) {
        document.querySelector('button').style.display = 'block'
      }
      setTimeout(() => {
        document.querySelectorAll('div')[Match.choices[1]].classList.toggle('pokeball')
        document.querySelectorAll('div')[Match.choices[0]].classList.toggle('pokeball')
        Match.clear()
        Match.addEvents()
      }, 800)

    }
  },

  clear: () => {
    Match.choices = []
  }
}
//============Adds Event Listeners===============//
Match.randomize()
Match.addEvents()