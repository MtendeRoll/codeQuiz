//psuedo code

//timer starts at 120 seconds
//when "start" button clicked, timer starts counting down
//questions 1 starts
//question incorrect timer subtracts 10s
//when questions answered  move to the next question
//when all questions are answered or timer hits 0 the game is over
//once game is over, add initials and save score
//clicking view highscores shows the stored highscores

//create variables
var timer = 120;
//create elements
var timerEl = document.querySelector("#timeLeft");
var buttonEl = document.querySelector(".button");
var containerEl = document.querySelector(".quizContainer");
var questionEl;

//time left function
function timeLeft() {
  var timeInterval = setInterval(function () {
    if (timer > 0) {
      timerEl = timer;
      timer--;
    } else {
      timerEl = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

//questions array with objects containing questions, answer options and the correct answer

var questions = [
  {
    questions: "Question 1: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "d. idk",
  },
  {
    questions: "Question 2: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "c. maybe",
  },
  {
    questions: "Question 3: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "b. no",
  },
  {
    questions: "Question 4: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "a. yes",
  },
];

//start function: start button pressed, timer started and question 1 appears

function startQuiz() {
  container.remove();
  questionBegins();
}

function questionBegins() {
  questionEl = document.createElement("h2");
  questionEl.textContent = questions[0].question1;
  questionEl.setAttribute("class", "question");

  containerEl.append(questionEl);
  questions[0].answers.each(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    //buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    buttonEl.onclick = function () {
      if (this.value !== questionsObj[0].correct) {
        var falseMessage = document.createElement("h3");
        falseMessage.textContent = "Sorry, that's not right!";
        //falseMessage.setAttribute("class", "incorrect-message");
        listEl.appendChild(falseMessage);
        timeLeft = timeLeft - 10;
      } else {
        var trueMessage = document.createElement("h3");
        trueMessage.textContent = "That's right!";
        //trueMessage.setAttribute("class", "correct-message");
        listEl.appendChild(trueMessage);
      }
      questionEl.remove();
      listEl.innerHTML = "";
    };
    listEl.appendChild(buttonEl);
  });

  questions[1].answer.each(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    //buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    buttonEl.onclick = function () {
      if (this.value !== questionsObj[0].correct) {
        var falseMessage = document.createElement("h3");
        falseMessage.textContent = "Sorry, that's not right!";
        //falseMessage.setAttribute("class", "incorrect-message");
        listEl.appendChild(falseMessage);
        timeLeft = timeLeft - 10;
      } else {
        var trueMessage = document.createElement("h3");
        trueMessage.textContent = "That's right!";
        //trueMessage.setAttribute("class", "correct-message");
        listEl.appendChild(trueMessage);
      }
      questionEl.remove();
      listEl.innerHTML = "";
    };
    listEl.appendChild(buttonEl);
  });
}

buttonEl.addEventListener("click", function () {
  timeLeft();
  questionBegins();
});
