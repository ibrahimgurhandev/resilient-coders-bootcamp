var allNumKeys = [...document.getElementsByClassName('btn')]
var displayScreen = document.getElementById("displayScreen");
var equalBtn = document.getElementById("equals");
const clear = document.getElementById("clear");
var del = document.getElementById("del");


allNumKeys.forEach(btn => btn.addEventListener("click", ()=>{ 
  checkInput()
  console.log(checkInput())
  displayScreen.value += btn.getAttribute("id")

}))


function checkInput(){
  return displayScreen.value.match("^\d+(\.\d+)?([+\-*\/]\d+(\.\d+)?)*$")
}

equalBtn.addEventListener("click", ()=>  {
  if (operands.indexOf(displayScreen.value.slice(-1)) !== -1) {
    alert("Enter a Math problem correctly to continue");
  } else {
    // using this javascript property eval after watching youtube tutorial. does the calculations for you.
    let solution = eval(displayScreen.value);
    displayScreen.value = solution;
    }
  }
)

clear.addEventListener("click", () => displayScreen.value = "")

del.addEventListener("click", ()=> displayScreen.value = displayScreen.value.slice(0, -1))

