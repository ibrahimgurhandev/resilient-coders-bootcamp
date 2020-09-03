// <!-- Most of the javascrip is from Leon -->


var botScore=0;
var playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("paper").onclick=playerThrowsPaper;

function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();//getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");

}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
		loseThreeRounds()

	}
	else{
		increasePlayerScore();
		WinThreeRounds()
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");

}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You win");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;

}

function loseThreeRounds(){
	let scoreDiff = Math.abs(botScore-playerScore)
	if (scoreDiff===3 && botScore>playerScore && stopLose){
	alert("You are terrible at this game. Did you really want to keep going 😛")
	stopLose=false
}}

function WinThreeRounds(){
	let scoreDiff = Math.abs(playerScore-botScore)
	if (scoreDiff===3 && playerScore>botScore && stopWin){
	alert("Whoaa 😮 - You are good ")
	stopWin=false
}}

var stopLose=true
var stopWin=true

function stopWinLoop(){
	var stopWin=false

}

function stopLoseLoop(){
	var stopLose=false
}
