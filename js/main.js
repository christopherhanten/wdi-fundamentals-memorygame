
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[1];
var cardTwo = cards[3];
var cardThree =cards[2]

cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);
cardsInPlay.push(cardThree)
//console.log("User flipped queen");
//console.log("User flipped king");

if (cardsInPlay.length === 2) { 
	 if(cardsInPlay[cardOne] === cardsInPlay[cardThree]){
	 	alert("You found a match!");
	} else 
		alert("Sorry, try again.");
}

/*var answer;
if (a == b) {
  if (a == c) {
    answer = "all are equal";
  } else {
    answer = "a and b are equal";
  }*/