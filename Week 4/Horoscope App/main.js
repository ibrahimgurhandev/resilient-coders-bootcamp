
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
  var birthday = document.getElementById("myDate").value
  birthday = birthday.split("-");
  month = parseInt(birthday[1],10)
  day = parseInt(birthday[2],10)


  if ((month ===03 && day >=21) || (month ===04 && day <=19)){
    document.getElementById('change').innerHTML=("You are an Aries 	&#9800;<br> Your Horoscope is: <br> The stars want you to strike out in a new direction. Dare to be bold and different!")
  }
   else if ((month ===04 && day >=20) || (month ===05 && day <=20)){
    document.getElementById('change').innerHTML=("You are a Taurus &#9801;<br> Your Horoscope is: <br> Attitude, like pepper, adds spice. But add too much, and you're sneezing like crazy.")
  }
  else if ((month ===05 && day >=21) || (month ===06 && day <=20)){
    document.getElementById('change').innerHTML=("You are a Gemini &#9802;<br> Your Horoscope is: <br> Those big ideas? It's about time you put them into action. Start making them real.")
  }
  else if ((month ===06 && day >=21) || (month ===07 && day <=22)){
    document.getElementById('change').innerHTML=("You are Cancer &#9803;<br> Your Horoscope is: <br>Spontaneity? Isn't that a kitchen cleaner? No, it's what you're all about right now.")
  }
  else if ((month ===07 && day >=23) || (month ===08 && day <=22)){
    document.getElementById('change').innerHTML=("You are a Leo &#9804;<br> Your Horoscope is:<br> You shine on and on. The stars lend you some of their glow, not that you need it")
  }
  else if ((month ===08 && day >=23) || (month ===09 && day <=22)){
    document.getElementById('change').innerHTML=("You are a Virgo &#9805;<br> Your Horoscope is:<br>You just can't resist organizing! Refine your own filing system, then help a friend.")
  }
  else if ((month ===09 && day >=23) || (month ===10 && day <=22)){
    document.getElementById('change').innerHTML=("You are a Libra &#9806;<br> Your Horoscope is:<br>Try to grasp the entire picture. Tunnel vision isn't desirable in this situation.")
  }
  else if ((month ===10 && day >=23) || (month ===11 && day <=21)){
    document.getElementById('change').innerHTML=("You are a Scropio &#9807;<br> Your Horoscope is:<br>Someone's a bit touchy. You naturally attract attention, but keep a low profile")
  }
  else if ((month ===11 && day >=22) || (month ===12 && day <=21)){
    document.getElementById('change').innerHTML=("You are a Sagittarius &#9808;<br> Your Horoscope is:<br>Lady Luck's your new best friend right now. Whatever you do, you'll hit the jackpot.")
  }
  else if ((month ===12 && day >=22) || (month ===01 && day <=19)){
    document.getElementById('change').innerHTML=("You are a Capricorn &#9809;<br> Your Horoscope is:<br> Some people can't stop asking for help, and others can't start. Who are you today?")
  }
  else if ((month ===01 && day >=20) || (month ===02 && day <=18)){
    document.getElementById('change').innerHTML=("You are Aquarius &#9810; <br> Your Horoscope is:<br> Don't fence me in! That's your rallying cry. You're all about freedom -- lots of it.")
  }
  else if ((month ===02 && day >=19) || (month ===03 && day <=20)){
    document.getElementById('change').innerHTML=("You are a Pisces &#9811; <br> Your Horoscope is:<br> Turn off a casual acquaintance's personal soap opera and concentrate on yourself.")
 }
 else {
   alert("You did not enter your birthday correctly ")
 }
}


btn= document.getElementById('btn')
btn.addEventListener('click',horoscope)
