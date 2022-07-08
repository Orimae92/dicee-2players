var dice_1 = document.querySelectorAll("img")[0];
var dice_2 = document.querySelectorAll("img")[1];
var resultText = document.querySelector("h1");

var imgSource = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

function randomDice(){
  var randomNumber1 = Math.floor(Math.random()*6);
  dice_1.setAttribute("src",imgSource[randomNumber1]);
  var randomNumber2 = Math.floor(Math.random()*6);
  dice_2.setAttribute("src",imgSource[randomNumber2]);

  if(randomNumber1>randomNumber2){
    resultText.textContent = "🚩Player 1 Wins!";
  }
  else if(randomNumber1<randomNumber2){
    resultText.textContent = "Player 2 Wins!🚩";
  }
  else{
    resultText.textContent = "Draw";
  }
}

randomDice();
