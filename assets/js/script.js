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
var beginButtonEl = document.querySelector(".begin-button");
var mainEl = document.querySelector(".quizContainer");
var listEl = document.querySelector(".answer-list");
var messageWrapEl = document.querySelector(".message-list");
var submitWrapEl = document.querySelector(".submit-wrapper");
var questionEl;

//time left function
function timeLeft() {
  var timeInterval = setInterval(function () {
    if (timer > 0) {
      timerEl.textContent = timer;
      timer--;
    } else {
      timerEl.textContent = " ";
      clearInterval(timeInterval);
    }
  }, 1000);
}

//questions array with objects containing questions, answer options and the correct answer
var questionsArray = [
  {
    question1: "Question 1: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "d. idk",
  },
  {
    question2: "Question 2: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "c. maybe",
  },
  {
    question3: "Question 3: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "b. no",
  },
  {
    question4: "Question 4: Blah blah blah blah",
    answerOptions: ["a. yes", "b. no", "c. maybe", "d. idk"],
    correctAnswer: "a. yes",
  },
];

//start function: begin button pressed, timer started and question 1 appears
beginButtonEl.addEventListener("click", function () {
  timeLeft();
  beginQuiz();
});

function beginQuiz() {
  var mainHeading = document.querySelector(".heading");
  mainHeading.remove();
  var mainDescription = document.querySelector(".description");
  mainDescription.remove();
  beginButtonEl.remove();

  firstQuestion();
}

function firstQuestion() {
  questionEl = document.createElement("h2");
  questionEl.textContent = questionsArray[0].question1;
  // questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[0].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    //buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[0].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Sorry, that's not right!";
        //falseMessage.setAttribute("class", "incorrect-message");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "That's right!";
        //trueMessage.setAttribute("class", "correct-message");
        messageWrapEl.appendChild(rightResponse);
        window.setTimeout(function () {
          rightResponse.setAttribute("style", "display: none");
        }, 500);
      }
      secondQuestion();
    };
  });
}

function secondQuestion() {
  mainEl.innerHTML = "";
  listEl.innerHTML = "";
  questionEl = document.createElement("h2");
  questionEl.textContent = questionsArray[1].question2;
  // questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[1].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    //buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[1].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Sorry, that's not right!";
        //falseMessage.setAttribute("class", "incorrect-message");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "That's right!";
        //trueMessage.setAttribute("class", "correct-message");
        messageWrapEl.appendChild(rightResponse);
        window.setTimeout(function () {
          rightResponse.setAttribute("style", "display: none");
        }, 500);
      }
      thirdQuestion();
    };
  });
}

function thirdQuestion() {
  mainEl.innerHTML = "";
  listEl.innerHTML = "";
  questionEl = document.createElement("h2");
  questionEl.textContent = questionsArray[2].question3;
  // questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[2].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    //buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[2].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Sorry, that's not right!";
        //falseMessage.setAttribute("class", "incorrect-message");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "That's right!";
        //trueMessage.setAttribute("class", "correct-message");
        messageWrapEl.appendChild(rightResponse);
        window.setTimeout(function () {
          rightResponse.setAttribute("style", "display: none");
        }, 500);
      }
      fourthQuestion();
    };
  });
}

function fourthQuestion() {
  mainEl.innerHTML = "";
  listEl.innerHTML = "";
  questionEl = document.createElement("h2");
  questionEl.textContent = questionsArray[3].question4;
  // questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[3].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    //buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[3].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Sorry, that's not right!";
        //falseMessage.setAttribute("class", "incorrect-message");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "That's right!";
        //trueMessage.setAttribute("class", "correct-message");
        messageWrapEl.appendChild(rightResponse);
        window.setTimeout(function () {
          rightResponse.setAttribute("style", "display: none");
        }, 500);
      }
    };
  });
}
