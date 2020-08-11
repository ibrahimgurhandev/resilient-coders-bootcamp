var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');


var clickbox1 = 0;
var clickbox2 = 0;
var clickbox3 = 0;



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



box1.addEventListener("click",rotateBox1)
box2.addEventListener("click",rotateBox2)
box3.addEventListener("click",rotateBox3)
