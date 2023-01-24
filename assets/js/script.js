var startButton = document.querySelector("#start-button");
var startPage = document.querySelector(".start-page");
var timerElement = document.querySelector("#timer-count");
var points = document.querySelector("#points-count");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answers");
var option1 = document.querySelector("#a1");
var option2 = document.querySelector("#a2");
var option3 = document.querySelector("#a3");
var option4 = document.querySelector("#a4");
var submitButton = document.querySelector("#submit");
var highscoreButton = document.querySelector("#high-scores");
var initialsBox = document.querySelector("#initials");

var currentPoints = 0;
var questionCounter = 0;
var initials = initialsBox.value;
var timer;
var timerCount = 60;
var highscoreNames = [];
var highscoreScores = [];
var highscoreList = [];
var questions = [
    
    {
    question: "What is the difference between Java & JavaScript?",
    answers: [ {option:"There is no difference", answer:"incorrect"}, {option:"Functions are values, & there is no distinction between methods & fields", answer: "correct"}, {option:"Functions are considered as fields", answer:"incorrect"}, {option:"Variables are specific", answer:"incorrect"}]
    },
    {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answers: [ {option:"It is an ordered list of values", answer:"correct"}, {option:"It is an ordered list of objects", answer: "incorrect"}, {option:"It is an ordered list of string", answer:"incorrect"}, {option:"It is an ordered list of functions", answer:"incorrect"}]
    },
    {
    question: "Which of the following is NOT javascript data types?",
    answers: [ {option:"Null type", answer:"incorrect"}, {option:"Undefined type", answer: "incorrect"}, {option:"All of the mentioned", answer:"correct"}, {option:"Number type", answer:"incorrect"}]
    },
    {
    question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    answers: [ {option:"Position", answer:"incorrect"}, {option:"Window", answer: "correct"}, {option:"Standard", answer:"incorrect"}, {option:"Location", answer:"incorrect"}]
    },
    {
    question: "Which is the correct syntax to call an external JavaScript file in the current HTML document?",
    answers: [ {option:"< script" + "src='jsfile.js'>< /script>", answer:"correct"}, {option:"< script href='jsfile.js'>< /script>", answer: "incorrect"}, {option:"< import src='jsfile.js'>< /import>", answer:"incorrect"}, {option:"< script link='jsfile.js'>< /script>", answer:"incorrect"}]
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        answers: [{option:"getElementById()", answer:"incorrect"}, {option:"getElement(id)", answer:"incorrect"}, {option:"getElementById(id)", answer:"correct"}, {option:"elementById(id)", answer:"incorrect"}]
    },
    {
        question: "Which JavaScript method is used to write into an alert box?",
        answers: [{option:"window.alertHTML()", answer:"incorrect"}, {option:"window.alert()", answer:"correct"}, {option:"window.alertBox()", answer:"incorrect"}, {option:"window.alertContent()", answer:"incorrect"}] 
    },
    {
        question: "In JavaScript, single line comment begins with ___.",
        answers: [{option:"#", answer:"incorrect"}, {option:"/*", answer:"incorrect"}, {option:"$", answer:"incorrect"}, {option:"//", answer:"correct"}] 
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answers: [{option:"Var", answer:"incorrect"}, {option:"var", answer:"correct"}, {option:"Let", answer:"incorrect"}, {option:"All of the above", answer:"incorrect"}] 
    },
    {
        question: "In JavaScript a variable contains one value while an object may contain ___.",
        answers: [{option:"Many values", answer:"correct"}, {option:"Three values", answer:"incorrect"}, {option:"Two values", answer:"incorrect"}, {option:"One value", answer:"incorrect"}] 
    }
    
];


// hides the start button, input box for initials, and starting page. Makes the highscores button visible. runs the startTimer() and question() functions to start the game
function startGame(){
    currentPoints = 0;
    
    if(startButton.style.visibility = "visible") {
        startButton.style.visibility = "hidden";
    }
    if (startButton.style.visibility = "hidden"){
        startPage.style.visibility = "hidden";
    }
    initialsBox.style.visibility = "hidden";
    highscoreButton.style.visibility = "visible";
    questionEl.style.height = "28rem"
    startTimer();
    question();
}

// Function to add questions and answer options to the page
function question(){
    questionEl.style.visibility = "visible";
    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
    option4.style.visibility = "visible";
        
    if(questionCounter < questions.length){
    questionEl.innerHTML = questions[questionCounter].question;
    option1.innerHTML = questions[questionCounter].answers[0].option;
    option2.innerHTML = questions[questionCounter].answers[1].option;
    option3.innerHTML = questions[questionCounter].answers[2].option;
    option4.innerHTML = questions[questionCounter].answers[3].option;
    }
}

// Event listeners for each option. Checks to see if the option selected is correct. If so runs correct() function, if not runs incorrect() function
option1.addEventListener("click", function(){
    if (questions[questionCounter].answers[0].answer === "correct"){
        correct();
    } else {
        incorrect();
    }
});

// Event listeners for each option. Checks to see if the option selected is correct. If so runs correct() function, if not runs incorrect() function
option2.addEventListener("click", function(){
    if (questions[questionCounter].answers[1].answer === "correct"){
        correct();
    } else {
        incorrect();
    }
});

// Event listeners for each option. Checks to see if the option selected is correct. If so runs correct() function, if not runs incorrect() function
option3.addEventListener("click", function(){
    if (questions[questionCounter].answers[2].answer === "correct"){
        correct();
    } else {
        incorrect();
    }
});

// Event listeners for each option. Checks to see if the option selected is correct. If so runs correct() function, if not runs incorrect() function
option4.addEventListener("click", function(){
    if (questions[questionCounter].answers[3].answer === "correct"){
        correct();
    } else {
        incorrect();
    }
});

// Starts the timer for the quiz
function startTimer(){
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = "Timer: " + timerCount;
        timerElement.style.color = "black"

        if (timerCount <= 0 || questionCounter === questions.length){
            clearInterval(timer);
            timesUp();
            localStorage.setItem('currentPoints', currentPoints);
        }
    }, 1000);
}

// Function that hides all of the questions and answers, shows your score and makes the initialsBox visible for users to enter their initials
function timesUp() {
    questionEl.innerHTML = "Game Over! <br> Your Score: "  + currentPoints + "<br> Enter Your Initials: <br><br>";
    submitButton.style.visibility = "visible";
    initialsBox.style.visibility = "visible";
    option1.style.visibility = "hidden";
    option2.style.visibility = "hidden";
    option3.style.visibility = "hidden";
    option4.style.visibility = "hidden";

    
    timerCount = 60;
    questionCounter = 0;
    
}

// function that runs if the correct answer was selected. adds to the current points, adds to the questionCounter to get the next question and answers set, then re-runs question() function
function correct() {
    questionCounter ++;
    currentPoints += 5;
    points.innerHTML = "Points: " + currentPoints;
    question();
}

// funciton that runs if the incorrect answer was selected. removes 5 seconds from the timer and flashes it red to show the user. Then adds to the questionCounter to get the next question and answers set, then re-runs the question() function
function incorrect() {
    timerCount -= 5;
    timerElement.style.color = "red"
    timerElement.append("-5")
    questionCounter ++;
    question();
}

// function that runs addScores() function, then hides all other elements to make a highscore sheet and a "restart" button visible
function seeScores() {
        startPage.style.visibility = "hidden";
        option1.style.visibility = "hidden";
        option2.style.visibility = "hidden";
        option3.style.visibility = "hidden";
        option4.style.visibility = "hidden";        
        initialsBox.style.visibility = "hidden";
        highscoreButton.style.visibility = "hidden";
        submitButton.style.visibility = "hidden";
        startButton.innerHTML = "Restart";
        startButton.style.visibility = "visible";
        questionEl.style.visibility = "visible";
        localStorage.getItem("highscoreList");
        getScores();
    }
    
    // grabs the highscoreList from local storage to use
    function getHighscores(){
        return JSON.parse(localStorage.getItem("highscoreList"))
    }
    
    // clears the timer so the game doesn't reset while looking at scores, then displays the list of scores from the highscore object and removes the commas 
    function getScores() {
        clearInterval(timer);
        highscoreList = getHighscores();
        questionEl.innerHTML = "";
        questionEl.style.height = "50rem";
        questionEl.innerHTML = highscoreList.join('');
    }

    // function to grab highscoreNames from local storage
    function getInitials() {
        return localStorage.getItem("highscoreNames");
    }
    
    // function to add the scores to an array as well as store them locally (client-side)
    function addScores() {
        
        var score = currentPoints;
        initials = initialsBox.value;

        highscoreNames.unshift("Initials: " +initials);
        highscoreScores.unshift(" | Score: " + score);
        
        localStorage.setItem("highscoreNames", JSON.stringify(highscoreNames));
        localStorage.setItem("highscoreScores", JSON.stringify(highscoreScores));
        for (let i = 0; i < highscoreNames; i ++){
            highscoreList.push(highscoreNames[i]);
            highscoreList.push(highscoreScores[i]);
        }

        initials = getInitials();
        console.log(initials);
        highscoreList = getHighscores();
        var score = localStorage.getItem("score");
        for (let i = 0; i < highscoreNames.length; i++){
            JSON.stringify(highscoreList);
            highscoreList.push(highscoreNames[i] + highscoreScores[i]);
            highscoreList.push("<br>---------------------<br>");
            i++;
        };
        localStorage.setItem("highscoreList", JSON.stringify(highscoreList));
        seeScores();
        currentPoints = 0;
    }
    // button listener that starts the game when the start (or restart) button is "clicked"
    startButton.addEventListener("click", startGame);

    // button listener that lets the user see the list of highscores when "clicked"
    highscoreButton.addEventListener("click", seeScores);

    // button listener that submits user initials and score, then brings user to the high score list when "clicked"
    submitButton.addEventListener("click", addScores);