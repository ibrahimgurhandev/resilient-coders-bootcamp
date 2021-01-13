

let array = [5,7,8,87,43,5,42]


function findYoungestOldest(array){
    let oldest = Math.max(...array)
    let youngest = Math.min(...array)
    let diff = oldest - youngest

    return [youngest,oldest,diff]
}
console.log(findYoungestOldest(array))