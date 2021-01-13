function peak(array){
    
    for(var i = 0; i<array.length;i++){
        if(test(array,i)===true){
            return i
        }
    } 
    return -1

}
console.log(peak([1,2,3,5,3,2,1]))
console.log(peak([1,12,3,3,6,3,1]))
console.log(peak([10,20,30,40]))

function test(array,index){

    let leftSum = array.slice(0,index).reduce((a,b)=>a+b,0)
    let rightSum = array.slice(index+1,).reduce((a,b)=>a+b,0)
    if(leftSum === rightSum){
        return true
    }else{
        return false
    }
   
 }
 //console.log(test([1,2,3,5,3,2,1],6))