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
var unanswered = 0;
var newQandA;
var totalQuestions = 0;
var newTime;
var timeRemaining = 20;

$(document).ready(function(){

	$('#startOverButton').hide();

	if (totalQuestions < 8) {
		
		$('#startButton').on('click', function(){
console.log((totalQuestions < 8));
console.log(totalQuestions);
			getQandA();
			console.log(randomQandA.correctAnswer);
		})

		$('#answer1').on('click', function(){

			if ($(this).html() == randomQandA.correctAnswer) {

				correctAnswers++

			} else {

				incorrectAnswers++
			}
			console.log(incorrectAnswers);
			console.log($(this).html());

		})

		$('#answer2').on('click', function(){

			if ($(this).html() == randomQandA.correctAnswer) {

				correctAnswers++

			} else {

				incorrectAnswers++
			}
			console.log(incorrectAnswers);
			console.log($(this).html());

		})

		$('#answer3').on('click', function(){

			if ($(this).html() == randomQandA.correctAnswer) {

				correctAnswers++;
				totalQuestions++;
				$('#answer1').html('Correct');
				$('#answer2').empty();
				$('#answer3').empty();
				$('#answer4').empty();			
				newQandA();

			} else {

				incorrectAnswers++;
				totalQuestions++;
				$('#answer1').html('Incorrect');
				$('#answer2').html('The correct answer is ' + randomQandA.correctAnswer);
				$('#answer3').empty();
				$('#answer4').empty();			
				newQandA();
			}

		})

		$('#answer4').on('click', function(){

			if ($(this).html() == randomQandA.correctAnswer) {

				correctAnswers++;
				totalQuestions++;
				$('#answer1').html('Correct');
				$('#answer2').empty();
				$('#answer3').empty();
				$('#answer4').empty();
				newQandA();

			} else {

				incorrectAnswers++;
				totalQuestions++;
				$('#answer1').html('Incorrect');
				$('#answer2').html('The correct answer is ' + randomQandA.correctAnswer);
				$('#answer3').empty();
				$('#answer4').empty();			
				newQandA();
			}

		})

	} else {
		$('#question').html('Here are your results');
		$('#answer1').html('Incorrect Answers: ' + incorrectAnswers)
		$('#answer2').html('Correct Answers: ' + correctAnswers)
		$('#answer3').html('Unanswered: ' + unanswered)
		$('#answer4').empty();		
	}

})

function getQandA(){

	randomQandA = gameData[Math.floor(Math.random()*gameData.length)];
	$('#startButton').hide();
	timerReset();
	timer();
	$('#question').html(randomQandA.question);
	$('#answer1').html(randomQandA.answer1);
	$('#answer2').html(randomQandA.answer2);
	$('#answer3').html(randomQandA.answer3);
	$('#answer4').html(randomQandA.correctAnswer);
	// clearInterval(newQandA);

}

function newQandA(){
	newQandA = setInterval(getQandA, 3000);
}

function countdown(){
	timeRemaining-= 1;
	$('#timeRemaining').html('<h2>Time Remaining: ' + timeRemaining + '</h2>');
}

function timer(){
	newTime = setInterval(countdown, 1000);
}

function timerReset(){
	timeRemaining = 20;
}

// function checkAnswer(x){

// 	if ($(this).html() == randomQandA.correctAnswer) {

// 		correctAnswers++

// 	} else {

// 		incorrectAnswers++
// 	}
// 	console.log(correctAnswers);
// 	console.log($(this).html());

// }