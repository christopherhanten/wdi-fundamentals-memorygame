
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []

cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[3]);

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[3]) 
console.log("You found a match!")
	else 
console.log("Sorry, try again.")}

var flipCards = function(cards) {
	if (cardsInPlay.length === 2) 
		checkForMatch();
}

flipCards(0)
flipCards(2)

console.log("User flipped" + " " + cards[0])
console.log("User flipped" + " " + cards[3]) 
		
	


	 

	

