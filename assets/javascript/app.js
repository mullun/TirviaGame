
var questionsAndAnswers = [
	{
		question:"How many lakes are in the Great Lakes?",
		answerOne: "Four",
		answerTwo: "Twenty",
		answerThree: "Five",
		answerFour: "Eight",
		rightAnswer:"Five"
	},
	{
		question:"How many states are in the United States of America?",
		answerOne: "Two",
		answerTwo: "Nineteen",
		answerThree: "Nine",
		answerFour: "Fifty",
		rightAnswer:"Fifty"
	},
	{
		question:"Name the Sixteenth President of the United States of America?",
		answerOne: "Abraham Lincoln",
		answerTwo: "Ulysees Grant",
		answerThree: "George Washington",
		answerFour: "Donald Trump",
		rightAnswer:"Abraham Lincoln"
	},
	{
		question:"In which year was the US Constitution signed?",
		answerOne: "1776",
		answerTwo: "1778",
		answerThree: "1965",
		answerFour: "2010",
		rightAnswer:"1776"
	},
	{
		question:"Which country has the best score in PISA?",
		answerOne: "United States of America",
		answerTwo: "Singapore",
		answerThree: "South Korea",
		answerFour: "China",
		rightAnswer:"Singapore"
	}
];

var currentTime = 30;  // initialize with 30 seconds
var timeFormatted = "30";
var arrayIndex = 0;  // index into array of questions
var userAnswer;

var timerHandler;  // variable to kill the timer
function startTimer () {
	timerHandler = setInterval(updateTimerField, 1 * 1000);
};

function stopTimer () {
	clearInterval(timerHandler);
}

function checkAnswerAndProceed (userClick) {
	if (userClick === questionsAndAnswers[arrayIndex].rightAnswer) {
		console.log("checkAnswerAndProceed called");
		stopTimer();
		$("#answerPanels").html("You Are Right");
		// timerHandler = setInterval(initTimerValue, 2*1000);   // show Victory message for 1 second
		console.log("calling updateQuestion arrayIndex = " + arrayIndex);
		arrayIndex = updateQuestion (arrayIndex);  // update screen with next question
		startTimer();
	}
};

function initTimerValue() {
	currentTime = 30;
}

//  This code will run as soon as the page loads.
window.onload = function() {
	$("#replayQuestions").hide();
	console.log("before updateQuestion arrayIndex = " + arrayIndex);
	arrayIndex = updateQuestion (arrayIndex);
	console.log("after updateQuestion arrayIndex = " + arrayIndex);
	startTimer();

    $("#answerOne").on("click", function(event) {
    	userAnswer = $(this).text();
    	console.log("One userAnswer = " + userAnswer);
    	console.log("right answer = " + questionsAndAnswers[arrayIndex].rightAnswer);
    	if (userAnswer === questionsAndAnswers[arrayIndex-1].rightAnswer) {
    		stopTimer();
    		$("#answerPanels").html("You Are Right");
    		arrayIndex = updateQuestion (arrayIndex);
    		startTimer();
    	}
    });

	$("#answerTwo").on("click", function(event) {
		userAnswer = $(this).text();
    	console.log("Two userAnswer =" + userAnswer);
    	console.log("right answer = " + questionsAndAnswers[arrayIndex-1].rightAnswer);
    	if (userAnswer === questionsAndAnswers[arrayIndex-1].rightAnswer) {
    		stopTimer();
    		$("#answerPanels").html("You Are Right");
    		arrayIndex = updateQuestion (arrayIndex);
    		startTimer();
    	}
	});

    $("#answerThree").on("click", function(event) {
    	userAnswer = $(this).text();
    	console.log("Three userAnswer = " + userAnswer);
    	console.log("right answer = " + questionsAndAnswers[arrayIndex].rightAnswer);
    	if (userAnswer === questionsAndAnswers[arrayIndex-1].rightAnswer) {
    		stopTimer();
    		$("#answerPanels").html("You Are Right");
    		arrayIndex = updateQuestion (arrayIndex);
    		startTimer();
    	}
    });

	$("#answerFour").on("click", function(event) {
		userAnswer = $(this).text();
    	console.log("Four userAnswer =" + userAnswer);
    	console.log("right answer = " + questionsAndAnswers[arrayIndex-1].rightAnswer);
    	if (userAnswer === questionsAndAnswers[arrayIndex-1].rightAnswer) {
    		stopTimer();
    		$("#answerPanels").html("You Are Right");
    		arrayIndex = updateQuestion (arrayIndex);
    		startTimer();
    	}
	});
};

function updateTimerField () {
	currentTime --;
	if (currentTime > 0) {
		timeFormatted = timeConverter (currentTime);
		$("#timerDisplay").html(timeFormatted);
	} else {
		console.log("Time Expired");
		stopTimer ();
		currentTime = 30;  // set timer for next question
		arrayIndex = updateQuestion (arrayIndex);
	}
}

function updateQuestion(indexIntoArray) {
	console.log("inside updateQuestion indexIntoArray = " + indexIntoArray);
	if (indexIntoArray < questionsAndAnswers.length) {
		$("#question").html(questionsAndAnswers[indexIntoArray].question);
		$("#answerOne").html(questionsAndAnswers[indexIntoArray].answerOne);
		$("#answerTwo").html(questionsAndAnswers[indexIntoArray].answerTwo);
		$("#answerThree").html(questionsAndAnswers[indexIntoArray].answerThree);
		$("#answerFour").html(questionsAndAnswers[indexIntoArray].answerFour);
		currentTime = 30;
		indexIntoArray ++;
		console.log("inside updateQuestion indexIntoArray = " + indexIntoArray);
		return indexIntoArray;
	} else {
		console.log("All Questions Answered")
		$("#answerPanels").html("Want to Play Again ?")
		$("#replayQuestions").show();
	}

}


function timeConverter (t) {
	//  Takes the current time in seconds and formats it (ss)
	var seconds = t;
	if (seconds < 10) {
	  seconds = "0" + seconds;
	}
	return seconds;
};