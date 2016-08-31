var gameData = [
	{question:'In the game Metal Gear Solid,who is the twin brother of Solid Snake?', answer1:'Solidus Snake', answer2:'Raiden', answer3:'Otacon', correctAnswer:'Liquid Snake'},
	{question:'In the game Mortal Kombat, what phrase is heard when Scorpion uses his spear?', answer1:'Get back here', answer2:'Get down here', answer3:'Come back here', correctAnswer:'Get over here'},
	{question:'In video gaming, what is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?', answer1:'Princess Yoshi', answer2:'Princess Zelda', answer3:'Princess Marianna', correctAnswer:'Princess Peach'},
	{question:'Which 1986 Nintendo game is set in the fantasy land of Hyrule, and centres on a boy named Link?', answer1:'Turok', answer2:'Grand Turismo', answer3:'Rachet and Clank', correctAnswer:'The Legend of Zelda'},
	{question:"Jumpman's goal is to save the Lady from the giant ape in which 1981 arcade game?", answer1:'Zoro', answer2:'Megaman', answer3:'Jurassic Park', correctAnswer:'Donkey Kong'},
	{question:'Who is the kid brother of Donkey Kong?', answer1:'Mickey Kong', answer2:'Kirby Kong', answer3:'Rickey Kong', correctAnswer:'Diddy Kong'},
	{question:'How many rows of aliens are there usually at the start of a Space Invaders game?', answer1:'Two', answer2:'Three', answer3:'Four', correctAnswer:'Five'},
	{question:'In the game Doom, which planet is the space marine posted to after assaulting his commanding officer?', answer1:'Venus', answer2:'Saturn', answer3:'Jupiter', correctAnswer:'Mars'},
	{question:'In the computer game The Sims, how many Simoleons does each family start the game with?', answer1:'5,000', answer2:'10,000', answer3:'40,000', correctAnswer:'20,000'},
	{question:'In video games, what colour is Pac-Man?', answer1:'Blue', answer2:'Green', answer3:'White', correctAnswer:'Yellow'}
]

var randomQandA;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;

$(document).ready(function(){

	
	$('#startButton').on('click', function(){

		getQandA();
		console.log(randomQandA.correctAnswer);
	})

	$('#answers').on('click', function(){

		if ($(this) == randomQandA.correctAnswer) {

			correctAnswers++
		}
		console.log(correctAnswers);
	})

})

function getQandA() {

	randomQandA = gameData[Math.floor(Math.random()*gameData.length)];

	$('#startButton').hide();

	$('#question').html(randomQandA.question);
	$('#answers').append('<p>' + randomQandA.answer1 + '</p>');
	$('#answers').append('<p>' + randomQandA.answer2) + '</p>';
	$('#answers').append('<p>' + randomQandA.answer3 + '</p>');
	$('#answers').append('<p>' + randomQandA.correctAnswer + '</p>');

}