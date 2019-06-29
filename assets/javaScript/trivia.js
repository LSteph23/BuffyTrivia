$(document).ready(function() {
    // console.log( "ready!" );

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 15;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
      {
	    question: "Who is not a member of the Scooby Gang?",
	    choices: ["Willow", "Xander", "Parker", "Giles"],
	    correctAnswer: "Parker",
	    image: ""
	  }, 
	  {
	    question: "In what season did Buffy's sister first appear?",
	    choices: ["One", "Five", "Four", "Six"],
	    correctAnswer: "Five",
	    image: ""
	  }, 
	  {
	    question: "Who was the Big Bad in season three?",
	    choices: ["Angel", "The Mayor", "Adam", "Glory"],
        correctAnswer: "The Mayor",
        image: ""
	  }, 
	  {
	    question: "In what seasons does Buffy die?",
	    choices: ["One and Seven", "Two and Five", "Three and Six", "One and Five"],
	    correctAnswer: "One and Five",
	    image: ""
	  }, 
	  {
	    question: "Willow is a:",
	    choices: ["Witch", "Vampire", "Slayer", "Vengeance Demon"],
	    correctAnswer: "Witch",
	    image: ""
	  },
	  {
	    question: "What does the team name Spike's android-Buffy",
	    choices: ["RoboBuffy", "Slayerbot 3000", "Buffybot", "Buffy 2.0"],
	    correctAnswer: "Buffybot",
	    image: ""
	  },
	  {
	    question: "Until Season Seven, who are the other slayers present in the series? ",
	    choices: ["Kendra & Anya", "Harmony & Nikki", "Faith & Harmony", "Faith & Kendra"],
	    correctAnswer: "Faith & Kenya",
	    image: ""
	  },
	  {
	    question: "What season contains the musical episode?",
	    choices: ["Three", "Six", "Four", "Seven"],
	    correctAnswer: "Six",
	    image: ""
	  },
	  {
	    question: "Who is Giles' main love in the series?",
	    choices: ["Jenny Calendar", "Anya", "Jules", "Joyce"],
	    correctAnswer: "Jenny Calendar",
        image: ""
    	  },
	  {
	    question: "When does Spike first appear?",
	    choices: ["Season One", "Season Three", "Season Two", "Season Four"],
	    correctAnswer: "Season Two",
	    image: ""
	  },
	  {
	    question: "What is Spike's first vampire-girlfriend's name?",
	    choices: ["Drusilla", "Harmony", "Anya", "Cordelia"],
	    correctAnswer: "Drusilla",
	    image: ""
	  },
	  {
	    question: "Who is the Buffy theme song by?",
	    choices: ["Blink 182", "Nerfherder", "Vampire Weekend", "My Chemical Romance"],
	    correctAnswer: "Nerfherder",
	    image: ""
	  },
	  {
	    question: "What seasons have Halloween episodes?",
	    choices: ["Two, Four, & Six", "One, Three, & Five", "One & Seven", "One, Five, & Seven"],
	    correctAnswer: "Bioware",
	    image: ""
	  },
	  {
	    question: "In what season was Angel the villain?",
	    choices: ["One", "Four", "Two", "Seven"],
	    correctAnswer: "Two",
	    image: ""
	  },
	  {
	    question: "Who is the love of Willow's life?",
	    choices: ["Buffy", "Anya", "Dawn", "Tara"],
	    correctAnswer: "Tara",
	    image: ""
      },
      {
	    question: "Which actor did NOT make an appearance on Buffy?",
	    choices: ["David Ritter", "Amy Adams", "Nathan Fillion", "Vincent Kartheiser"],
	    correctAnswer: "Vincent Kartheiser (Sorry he was on Angel!)",
	    image: ""

      }];
	  

	// create question contents according to question count
	function questionContent() {
		// a for loop would be cool here...
    	$("#gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Perfection! You truly know your Buffyverse";
			var bottomText = "'Just because you’re better than us doesn’t mean you can be all superior.' – Xander Harris";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Good work! Just brush up on some Chosen One facts";
			var bottomText =  "'I may be dead, but I’m still pretty. Which is more than I can say for you.' – Buffy Summers";
		}
		else {
			var endMessage = "Try again after watching the series! It's a great show";
			var bottomText = "'Strangely, I feel like staying at home… and doing my homework… and flossing… and dying a virgin.' – Willow Rosenberg";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});
