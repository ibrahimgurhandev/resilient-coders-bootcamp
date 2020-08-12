var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');


var clickbox1 = 0;
var clickbox2 = 0;
var clickbox3 = 0;
var numDeg= 0;

// box2.addEventListener("click",rotateBox2)
// box3.addEventListener("click",rotateBox3)

// Leons Method
box1.addEventListener("click", ()=>{
  numDeg +=45;
  box1.style.transform = `rotateZ(${numDeg}deg)`
  clickbox1++;
if (clickbox1===1){
  box1.style.borderRadius = "50%";
  box1.style.marginLeft = "10%";
}else if (clickbox1 == 2){
  box1.style.borderRadius = "0%";
  box1.style.marginLeft = "80px";
  }else if (clickbox1 % 3 == 0 ){
    box2.style.backgroundColor = ('green');
    box3.style.backgroundColor = ('green');
  }else {
    box2.style.backgroundColor = ('white');
    box3.style.backgroundColor = ('white');
  }
})









box2.addEventListener("click", ()=>{
  numDeg +=45;
  box2.style.transform = `rotateZ(${numDeg}deg)`
  clickbox2++;
if (clickbox2===1){
  box2.style.borderRadius = "50%";
  box2.style.marginLeft = "10%";
}else if (clickbox2 == 2){
  box2.style.borderRadius = "0%";
  box2.style.marginLeft = "80px";
}else if (clickbox2 % 3 == 0 ){
    box1.style.backgroundColor = ('red');
    box3.style.backgroundColor = ('red');
  }else {
    box1.style.backgroundColor = ('white');
    box3.style.backgroundColor = ('white');
  }
})


// Leons Method
box3.addEventListener("click", ()=>{
  numDeg +=45;
  box3.style.transform = `rotateZ(${numDeg}deg)`
  clickbox3++;
if (clickbox3===1){
  box3.style.borderRadius = "50%";
  box3.style.marginLeft = "10%";
}else if (clickbox3 == 2){
  box3.style.borderRadius = "0%";
  box3.style.marginLeft = "80px";
}else if (clickbox3 % 3 == 0 ){
    box1.style.backgroundColor = ('purple');
    box2.style.backgroundColor = ('purple');
  }else {
    box1.style.backgroundColor = ('white');
    box2.style.backgroundColor = ('white');
  }
})
















box2.addEventListener("click",rotateBox2)
box3.addEventListener("click",rotateBox3)




//First Method

function rotateBox1(){

  box1.classList.toggle('rotateBox');
  clickbox1++;
if (clickbox1===1){
  box1.classList.toggle('circle');

}   else if (clickbox1 == 2){
    box1.classList.remove ('circle');
  }

  else if (clickbox1 % 3 == 0 ){
    box2.classList.toggle('green');
    box3.classList.toggle('green');
  }
}



function rotateBox2(){
  box2.classList.toggle('rotateBox');
  clickbox2++;
  if (clickbox2===1){
    box2.classList.toggle('circle');
  }
  else if (clickbox2 == 2){
    box2.classList.remove ('circle');
  }

  else if (clickbox2 % 3 == 0){
    box1.classList.toggle('black');
    box3.classList.toggle('black');
  }
}

function rotateBox3(){
  box3.classList.toggle('rotateBox');
  clickbox3++;
  if (clickbox3===1){
    box3.classList.toggle('circle');
  }
  else if (clickbox3 == 2){
    box3.classList.remove ('circle');
  }
  else if (clickbox3 % 3 == 0){
    box1.classList.toggle('purple');
    box2.classList.toggle('purple');
  }
}
