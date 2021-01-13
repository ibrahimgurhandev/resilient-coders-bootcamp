let arr = [ 6, 2, 1, 8, 10 ]


function sumOfNum(arr){
  return arr.sort((a,b)=>a-b).slice(1,-1).reduce((a,b)=>a+b)
  
}
console.log("the sum of all the numbers except the lowest and highest numbers is :"+sumOfNum(arr))


let array1 = [1, 2, 3, 4]

function product(array){
return array.reduce((a,b)=>a*b)
}
console.log("The product of all the numbers is :"+product(array1))



let array2 = [5,34,89,3,56,]

function youngestOldestDiff(ages){
 let oldestAge = Math.max(...ages)
 let youngestAge = Math.min(...ages)
 let difference = oldestAge-youngestAge
 let result = [youngestAge,oldestAge,difference]
 return result
}

console.log(youngestOldestDiff(array2))


// One:
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
let str1 ='Hello World!' //should become 'ello World' 
function removeFirstLastLetters(string){
return string.slice(1,-1)
}
console.log(removeFirstLastLetters(str1))

// Two:
// Create a function that alternates the case of a given string.
// Ex. HeLLo WoRLd => hEllO wOrlD

let str2 ='HeLLo WoRLd' //should become 'hEllO wOrlD' 
function alternateCasing(string){
  return string.split('').map(x=>x===x.toUpperCase()?x.toLowerCase():x.toUpperCase()).join('')
}
console.log(alternateCasing(str2))


// Three:
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
// Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"
// Note: You can expect all of the inputs to be the same length.


function concatStrings(str1,str2,str3){

 // return [...str1].map((x,i)=>x+str2[i]+str3[i]).join('')
  return [...str1].reduce((a,c,i)=>a+c+str2[i]+str3[i],[])

}
console.log(concatStrings("qkh","wcw","exq"))


function peak(array){
  return array.findIndex((_,i)=>
         array.slice(0,i).reduce((a,b)=>a+b,0) ===
         array.slice(i+1,).reduce((a,b)=>a+b,0))
   }

console.log(peak([1,2,3,5,3,2,1]))


function twoSort(s) {
  s.sort()
  return s[0].split('').join('***')
  }

  function randomColor() {
    return '#'+Math.random().toString(36)
  }

  console.log(randomColor())