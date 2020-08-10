// // Create a variable, reassign the value, add the value to the dom
// var myName
// myName="Ibrahim"
// document.getElementById('name').innerHTML+=myName
//
//
// // Create a variable, multiply it by itself, replace a number in the dom with the new number from the multiplication
// var num =2
// num= num*num
// document.getElementById('replace').innerHTML=num
//

// Create a function that takes in one argument. That argument should be a Fahrenheit value to be converted to Celcius. Console log the converted value
function celcius(a){
  let convert = (a-32)* 5/9
  console.log(`${a} fahrenheit is ${convert} celcius`)
}

// // Create a function takes in two arguments. Create a function that takes in one argument and alerts that value.
// // Call the second function with an argument that is the sum from the original two argument function
//
// function twoArg(a,b){
//   return a+b
// }
//
// function oneArg(c){
// return alert(c)
// }
// oneArg(twoArg(2,2))
//
//
// // Create a function that choses a random throw of rock, paper, scissors, lizard, spock and alerts the random choice
// function game(){
//   var num = Math.random()
//   if(num <0.2 ){
//      alert("Rock")
//
//   }
//   else if(num <0.4 ){
//      alert("paper")
//
//   }
//   else if(num <0.6 ){
//     alert("lizard")
//
//   }
//   else if(num <0.8 ){
//      alert("scissors")
//
//   }
//   else{
//     alert("spock")
//
//   }
//
// }
// game()




// Create a function that takes in two numbers.
// If the second number is divisible by the first,
// alert the product of those two numbers. If not,
// alert the sum of those two numbers.

// function twoNum(num1,num2){
//   if (num2 % num1 ===0){
//     // console.log("num2 is divisible by num1")
//     alert(num1*num2)
//   }else{
//     alert(num1+num2)
//   }
// }
//
// Print a pyramid to the console where the
//  base of the pyramid is a number passed into a function
function pyramid(a){
  for (let line = "#"; line.length <= a; line += "#")
  console.log(line);
}




// Create a horoscope app where the user
// can enter their birthday and get their
// horoscope. There should be minimum 12 unique horoscopes.
//
// Aries dates: March 21 – April 19
// Taurus dates: April 20 – May 20
// Gemini dates: May 21 – June 20
// Cancer dates: June 21 – July 22
// Leo dates: July 23 – August 22
// Virgo dates: August 23 – September 22
// Libra dates: September 23 – October 22
// Scorpio dates: October 23 – November 21
// Sagittarius dates: November 22 – December 21
// Capricorn dates: December 22 – January 19
// Aquarius dates: January 20 – February 18
// Pisces dates: February 19 – March 20

function horoscope(){
  var month = document.getElementById('month').value
  var day = document.getElementById('day').value

  month = parseInt(month,10)
  day = parseInt(day,10)

  if ((month ===03 && day >=21) || (month ===04 && day <=19)){
    document.getElementById('change').innerHTML=("You are an Aries 	&#9800;\n Your Horoscope is:")
  }
   else if ((month ===04 && day >=20) || (month ===05 && day <=20)){
    document.getElementById('change').innerHTML=("You are a Taurus &#9801;\n Your Horoscope is:")
  }
  else if ((month ===05 && day >=21) || (month ===06 && day <=20)){
    document.getElementById('change').innerHTML=("You are a Gemini &#9802;\n Your Horoscope is:")
  }
  else if ((month ===06 && day >=21) || (month ===07 && day <=22)){
    document.getElementById('change').innerHTML=("You are Cancer &#9803;\n Your Horoscope is:")
  }
  else if ((month ===07 && day >=23) || (month ===08 && day <=22)){
    document.getElementById('change').innerHTML=("You are a Leo &#9804;\n Your Horoscope is:")
  }
  else if ((month ===08 && day >=23) || (month ===09 && day <=22)){
    document.getElementById('change').innerHTML=("You are a Virgo &#9805;\n Your Horoscope is:")
  }
  else if ((month ===09 && day >=23) || (month ===10 && day <=22)){
    document.getElementById('change').innerHTML=("You are a Libra &#9806;\n Your Horoscope is:")
  }
  else if ((month ===10 && day >=23) || (month ===11 && day <=21)){
    document.getElementById('change').innerHTML=("You are a Scropio &#9807;\n Your Horoscope is:")
  }
  else if ((month ===11 && day >=22) || (month ===12 && day <=21)){
    document.getElementById('change').innerHTML=("You are a Sagittarius &#9808;\n Your Horoscope is:")
  }
  else if ((month ===12 && day >=22) || (month ===01 && day <=19)){
    document.getElementById('change').innerHTML=("You are a Capricorn &#9809;\n Your Horoscope is:")
  }
  else if ((month ===01 && day >=20) || (month ===02 && day <=18)){
    document.getElementById('change').innerHTML=("You are Aquarius &#9810; \n Your Horoscope is:")
  }
  else if ((month ===02 && day >=19) || (month ===03 && day <=20)){
    document.getElementById('change').innerHTML=("You are a Pisces &#9811; \n Your Horoscope is:")
 }
 else {
   alert("You did not enter your birthday correctly")
 }
}

btn= document.getElementById('btn')
btn.addEventListener('click',horoscope)
