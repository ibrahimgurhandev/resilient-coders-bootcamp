// pseudo code - and thought process to break this down into steps
// first assign variables to get keys pressed in the window
// then match the key pressed with the audio. really easy to do that
// after key is pressed again make it so the sound timer resets to zero.
// by the this should all be wrapped up inside a function that we can call on
// aslo add way to make the css class that will make the buttons pop out
// when pressed
// - still don't understand how removing the transitions work, will watch more tutorials for that
function removeCssTransition(e) {
  element.style.background = "url('') ";




   if (e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');


 }

 function registerKeysAndPlay(e) {
   var sounds = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   if (!sounds) return;
   key.classList.add('playing');
   element.style.background = "url('http://ibrahimgurhan.com/giphy.gif')";
   element.style.backgroundRepeat = "no-repeat";
   element.style.backgroundSize = "cover";


   sounds.currentTime = 0;

   sounds.play();

 }

 var keys = Array.from(document.querySelectorAll('.key'));
 keys.forEach(key => key.addEventListener('transitionend', removeCssTransition));
 window.addEventListener('keydown', registerKeysAndPlay);


// function changeBackground(){
//   document.html.style.background = `url('../bg.gif')`;
//
// }


element = document.querySelector(".image");
