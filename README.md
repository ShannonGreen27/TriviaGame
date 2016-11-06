# TriviaGame

This program utilizes JavaScript for the logic and jQuery to manipulate HTML. 
The game utlizes multiple choice and true/false options to test the users knowledge of vido games.

The player is presented with only one question until it is answered or the timer runs out.
If the player selects the correct answer a screen is presented congratulating them for choosing the right option and a knew question is presented to them a few seconds after, no user input required.
The scenario is similar for wrong answers and time-outs.

If the player runs out of time the player is told that their time is up. Also if the player chooses the wrong answer they are told they selected the wrong option. In both scenarios the user is shown the correct answer and a new question is generated a few seconds later.

On the final screen the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page) is presented.

Future implementations:
Expansion of the question library to increase randomness and thus reducing the possiblity of repeat questions.

Addition of a lightning round that asks the users questions at a faster rate than normal. This will be a barrage of seemingy endless questions that are presented at either double the normal rate or slowly accelerated until the user gets specific number of questions wrong in a row. 