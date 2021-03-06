//variables to manipulate dom
const start = document.getElementById("startBtn");
const time = document.getElementById("countdown");
const questionEl = document.getElementById("questionSection");
const answers = document.getElementById("options");
var startTime = 75;

var questions = [
  {
    quote: "Commonly used data types DO NOT include:",
    options: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
    correct: "C. Alerts",
  },
  {
    quote: "The conditions of an if/else statement are stored within:",
    options: ["A. Quotes", "B. Curly brackets", "C. Parentheses", "D. Square Brackets"],
    correct: "C. Parentheses",
  },
  {
    quote: "Arrays in Javascript can be used to store:",
    options: ["A. Numbers and Strings", "B. Other Arrays ", "C. Booleans", "D. All of the Above"],
    correct: "D. All of the Above",
  },
  {
    quote: "String Values must be enclosed within ____ when assigned to variables:",
    options: ["A. Commas", "B. Curly Brackets ", "C. Quotes", "D. Parentheses"],
    correct: "C. Quotes",
  },
  {
    quote: "A very useful tool used during development and debugging for printing content to be a debugger is:",
    options: ["A. Javascript", "B. Terminal/bash ", "C. For loops ", "D. Console log"],
    correct: "B. Terminal/bash",
  },
];

function timer(){
setInterval(
  countdown,1000
)

}

function countdown(){

  startTime--;
  time.textContent = startTime;
  console.log(startTime);
  if (startTime <=0){
    clearInterval(startTime = 0)
  };

}

//function to start quiz
function startQuiz() {}

//function to contain results
function results() {}

start.onclick = timer()