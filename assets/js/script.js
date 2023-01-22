var startButton = document.querySelector("#start-button");
var startPage = document.querySelector(".start-page")
var timerElement = document.querySelector("#timer-count");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers");
var option1 = document.querySelector("#a1");
var option2 = document.querySelector("#a2");
var option3 = document.querySelector("#a3");
var option4 = document.querySelector("#a4");

var currentPoints = 0;
var currentQuestion = 0;
var initials;
var highscore;
var timer;
var timerCount = 60;
var chosenAnswer;
var correctAnswer;
var questions = [
    
    {
    question: "How much wood could a woodchuck chuck?",
    answers: [ {option:"if a wouldchuck could", answer:"incorrect"}, {option:"if a woodchuck would", answer: "incorrect"}, {option:"a woodchuck would chuck", answer:"incorrect"}, {option:"all that he could chuck", answer:"correct"}]
    },

];

console.log(questions[0])

function startGame(){
    if(startButton.style.visibility = "visible") {
        startButton.style.visibility = "hidden";
    }
    if (startButton.style.visibility = "hidden"){
        startPage.style.visibility = "hidden";
    }
    startTimer();
    question();
}

function question(){
    questionEl.style.visibility = "visible";
    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
    option4.style.visibility = "visible";
    questionEl.innerHTML = questions[0][0]
    
}

function startTimer(){
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Timer: " + timerCount;
        if (timerCount > 0){
            if (chosenAnswer === correctAnswer){
                timerCount += 10;
                currentPoints += 5;
            } else {
                timerCount -= 10;
            }
        }
        if (timerCount <= 0){
            clearInterval(timer);
            localStorage.setItem('currentPoints', currentPoints);
        }
    }, 1000);
}

function getScores() {

}

function addScores() {

}

startButton.addEventListener("click", startGame);