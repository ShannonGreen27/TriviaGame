var gameData = [
	{question:'In the game Metal Gear Solid,who is the twin brother of Solid Snake?', answer1:'Solidus Snake', answer2:'Liquid Snake', answer3:'Otacon', answer4:'Raiden', correctAnswer:'Liquid Snake'},

	{question:'In the game Mortal Kombat, what phrase is heard when Scorpion uses his spear?', answer1:'Get back here', answer2:'Get down here', answer3:'Come back here', answer4:'Get over here', correctAnswer:'Get over here'},

	{question:'In video gaming, what is the name of the princess whom Mario repeatedly stops Bowser from kidnapping?', answer1:'Princess Peach', answer2:'Princess Yoshi', answer3:'Princess Zelda', answer4:'Princess Marianna', correctAnswer:'Princess Peach'},

	{question:'Which 1986 Nintendo game is set in the fantasy land of Hyrule, and centres on a boy named Link?', answer1:'Turok', answer2:'Grand Turismo', answer3:'The Legend of Zelda', answer4:'Rachet and Clank', correctAnswer:'The Legend of Zelda'},

	{question:"Jumpman's goal is to save the Lady from the giant ape in which 1981 arcade game?", answer1:'Zoro', answer2:'Megaman', answer3:'Jurassic Park', answer4:'Donkey Kong', correctAnswer:'Donkey Kong'},

	{question:'Who is the kid brother of Donkey Kong?', answer1:'Mickey Kong', answer2:'Kirby Kong', answer3:'Rickey Kong', answer4:'Diddy Kong', correctAnswer:'Diddy Kong'},

	{question:'How many rows of aliens are there usually at the start of a Space Invaders game?', answer1:'Two', answer2:'Three', answer3:'Four', answer4:'Five', correctAnswer:'Five'},

	{question:'In the game Doom, which planet is the space marine posted to after assaulting his commanding officer?', answer1:'Mars', answer2:'Saturn', answer3:'Jupiter', answer4:'Venus', correctAnswer:'Mars'},

	{question:'In the computer game The Sims, how many Simoleons does each family start the game with?', answer1:'5,000', answer2:'20,000', answer3:'40,000', answer4:'10,000', correctAnswer:'20,000'},

	{question:'In video games, what colour is Pac-Man?', answer1:'Blue', answer2:'Green', answer3:'Yellow', answer4:'White', correctAnswer:'Yellow'}
]


var randomQandA;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var newQandA;
var totalQuestions = 0;
var countdownTime;
var timeRemaining = 20;

$(document).ready(function(){
		
	$('#startButton').on('click', function(){

		getQandA();

	})

	$('#answer1').on('click', function(){

		var answer = $(this).html();
		checkAnswer(answer);

	})

	$('#answer2').on('click', function(){

		var answer = $(this).html();
		checkAnswer(answer);

	})

	$('#answer3').on('click', function(){

		var answer = $(this).html();
		checkAnswer(answer);

	})

	$('#answer4').on('click', function(){

		var answer = $(this).html();
		checkAnswer(answer);

	})

})

function getQandA(){

	if (totalQuestions <= 7) {

		randomQandA = gameData[Math.floor(Math.random()*gameData.length)];
		$('#startButton').hide();

		timer();
		$('#timeRemaining').html('<h2>Time Remaining: ' + timeRemaining + '</h2>');
		$('#question').html(randomQandA.question);
		$('#answer1').html(randomQandA.answer1);
		$('#answer2').html(randomQandA.answer2);
		$('#answer3').html(randomQandA.answer3);
		$('#answer4').html(randomQandA.answer4);
		clearInterval(newQandA);

	} else {

		$('#question').html('Here are your results');
		$('#answer1').html('Incorrect Answers: ' + incorrectAnswers)
		$('#answer2').html('Correct Answers: ' + correctAnswers)
		$('#answer3').html('Unanswered: ' + unanswered)
		$('#answer4').empty();
		clearInterval(newQandA);
		createResetButton();


	}

}

function showNewQandA(){
	newQandA = setInterval(getQandA, 3000);
	timeRemaining = 20;
}

function countdown(){

	if (timeRemaining >= 0) {
		$('#timeRemaining').html('<h2>Time Remaining: ' + timeRemaining + '</h2>');
		timeRemaining-= 1;

	} else {

	clearInterval(countdownTime);
	unanswered++;
	totalQuestions++;
	$('#answer1').html('You are out of time');
	$('#answer2').html('The correct answer is ' + randomQandA.correctAnswer);
	$('#answer3').empty();
	$('#answer4').empty();
	showNewQandA();

	}	
}

function timer(){
	countdownTime = setInterval(countdown, 1000);
}

function startOver(){

	$('#startOverButton').on('click', function(){

		getQandA();

	})
}

function resetGame(){

		correctAnswers = 0;
		incorrectAnswers = 0;
		unanswered = 0;
		totalQuestions = 0;
		getQandA();
		$('.resetButton').hide();

}

function createResetButton(){

	var x = $('<button>')
    x.addClass('resetButton');
    x.text('Start Over');
    $('#displayArea').append(x);

}

function checkAnswer(cAparamter) {

	if (cAparamter == randomQandA.correctAnswer) {

		clearInterval(countdownTime);
		correctAnswers++;
		totalQuestions++;
		console.log(totalQuestions);
		$('#answer1').html('Correct');
		$('#answer2').empty();
		$('#answer3').empty();
		$('#answer4').empty();
		showNewQandA();

	} else {

		clearInterval(countdownTime);
		incorrectAnswers++;
		totalQuestions++;
		console.log(totalQuestions);
		$('#answer1').html('Incorrect');
		$('#answer2').html('The correct answer is ' + randomQandA.correctAnswer);
		$('#answer3').empty();
		$('#answer4').empty();			
		showNewQandA();

	}
}

$(document).on('click', '.resetButton', resetGame);
