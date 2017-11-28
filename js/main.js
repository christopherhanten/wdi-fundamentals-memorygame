var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts", 
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
},
];

var cardsInPlay = [];

//cardsInPlay.push(cards[0].rank);
//cardsInPlay.push(cards[2].rank);

var checkForMatch = function() {
	if (cardsInPlay.length === 2)}
		cardElement.setAttribute('src', 'cards.cardImage');
		if (cardsInPlay[0].rank === cardsInPlay[2].rank){
		alert("You found a match!")
	 else 
		alert("Sorry, try again.");
	}

var flipCard = function(cards) {
	cardElement.this.getAttribute('data-id')
	checkForMatch() 
}
var createBoard = function(){
for (var i = 0; i < cards.length; i++)
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementsById("game-board")[0]; appendChild(cardElement);
}

{
/*console.log("User flipped" + " " + cards[0].rank)
console.log(cards[0].cardImage)
console.log(cards[0].suit)

console.log("User flipped" + " " + cards[2].rank) 
console.log(cards[2].cardImage)
console.log(cards[2].suit);*/

createBoard(){
	}
}




