// my pseudo code:
// first thing I need to do is assign a variable to all the
// calc keys and pull them from the html
//
// I will do the same thing for my display screen input,
// and the clear and equal button will have their
// variables assigned to them
//
// Then create a loop that will pull all the number keys
//  passed into aa loop when a number is pressed it will
//   equal what ever it's id is using the get attribute mehtod.
// then that key pressed will be added to the display screen
//
// the clear button should be easy if I just make function
// that will make the display screen empty
//
// The calculations will be done using the builtin javascript method called eval


var allNumKeys = document.getElementsByClassName('btn');
var displayScreen = document.getElementById("displayScreen");
var equalBtn = document.getElementById("equals");
const clear = document.getElementById("clear");
var del = document.getElementById("del");


// Loop through all buttons with a for loop
//basically this loop will add event listener to all the buttons
for (let i = 0; i < allNumKeys.length; i++) {
allNumKeys[i].addEventListener("click",pullTheKeys)

function pullTheKeys() {
  // Assign the attribute of each button to the variable number
  let number = allNumKeys[i].getAttribute("id");
  // Add the attributes of number to the screen value
  displayScreen.value += number;
}
}


// An if condition is used so that it only evaluates if there are values ​​on the screen.
equalBtn.addEventListener("click",theCalculation)

function theCalculation() {
if (displayScreen.value === "") {
  alert("Enter a Math Problem to continue");
} else {
  // using this javascript property eval after watching youtube tutorial. does the calculations for you.
  let solution = eval(displayScreen.value);
  displayScreen.value = solution;
}
}

clear.addEventListener("click", clearDisplay)

// This function will change the screen value to "empty" when the clear button is clicked

function clearDisplay() {
  // reset the display screen
displayScreen.value = "";
}


function delDisplay() {
  // reset the display screen
displayScreen.value = displayScreen.value.slice(0,-1);
}

del.addEventListener("click", delDisplay)
