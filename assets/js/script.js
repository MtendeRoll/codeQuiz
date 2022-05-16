//create variables
var timer = 90;

//create elements
var timerEl = document.querySelector("#timeLeft");
var showTime = document.querySelector("#showTime");
var timeHeadingEl = document.querySelector(".time");
var beginButtonEl = document.querySelector(".begin-button");
var mainEl = document.querySelector(".question-wrapper");
var listEl = document.querySelector(".answer-list");
var messageWrapEl = document.querySelector(".message-list");
var submitContainerEl = document.querySelector(".submitContainer");
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
      alert("Your time is up!");
      window.location.href = "highscores.html";
    }
  }, 1000);
}

//questions array with objects containing questions, answer options and the correct answer
var questionsArray = [
  {
    question1: "Question 1: When you are stuck with a problem in your code, you should?",
    answerOptions: ["a. cry yourself to sleep", "b. enter existential crisis mode", "c. give up", "d. Google...gooogle is always your friend"],
    correctAnswer: "d. Google...gooogle is always your friend",
  },
  {
    question2: "Question 2: Which statement correctly stores data into the Web Storage API?",
    answerOptions: ["a. the submit button", "b. localStorage.getItem", "c. localStorage.setItem", "d. setItem.localStorage"],
    correctAnswer: "c. localStorage.setItem",
  },
  {
    question3: "Question 3: Which of the following is NOT a reason to validate a user's responses?",
    answerOptions: ["a. Increases the overall quality of the user data", "b. Improves the user experience", "c. Offers the user an opportunity to enter a correct response", "d. Reduces bogus answers getting stored in the database."],
    correctAnswer: "b. Improves the user experience.",
  },
  {
    question4: "Question 4: What makes webpages fully interactive",
    answerOptions: ["a. JavaScript", "b. CSS", "c. HTML", "d. A new developer"],
    correctAnswer: "a. JavaScript",
  },
];

//start function: begin button pressed, timer started and question 1 appears
beginButtonEl.addEventListener("click", function () {
  showTime.removeAttribute("class", "hide");
  timeLeft();
  beginQuiz();
});

function firstQuestion() {
  questionEl = document.createElement("h2");
  questionEl.textContent = questionsArray[0].question1;
  questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[0].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[0].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Incorrect!";
        wrongResponse.setAttribute("class", "wrongResponse");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "Correct!";
        rightResponse.setAttribute("class", "rightResponse");
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
  questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[1].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[1].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Incorrect!";
        wrongResponse.setAttribute("class", "wrongResponse");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "Correct!";
        rightResponse.setAttribute("class", "rightResponse");
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
  questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[2].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[2].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Incorrect!";
        wrongResponse.setAttribute("class", "wrongResponse");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "Correct!";
        rightResponse.setAttribute("class", "rightResponse");
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
  questionEl.setAttribute("class", "question");

  mainEl.append(questionEl);
  questionsArray[3].answerOptions.forEach(function (answer) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answer;
    buttonEl.setAttribute("class", "answer");
    buttonEl.setAttribute("value", answer);
    listEl.appendChild(buttonEl);
    buttonEl.onclick = function () {
      if (this.value !== questionsArray[3].correctAnswer) {
        messageWrapEl.innerHTML = "";
        var wrongResponse = document.createElement("h3");
        wrongResponse.textContent = "Incorrect!";
        wrongResponse.setAttribute("class", "wrongResponse");
        messageWrapEl.appendChild(wrongResponse);
        window.setTimeout(function () {
          wrongResponse.setAttribute("style", "display: none");
        }, 500);
        timer -= 10;
      } else {
        messageWrapEl.textContent = "";
        var rightResponse = document.createElement("h3");
        rightResponse.textContent = "Correct!";
        rightResponse.setAttribute("class", "rightResponse");
        messageWrapEl.appendChild(rightResponse);
        window.setTimeout(function () {
          rightResponse.setAttribute("style", "display: none");
        }, 500);
      }
      initialsPrompt(timer);
    };
  });
}

function initialsPrompt() {
  questionEl.remove();
  listEl.innerHTML = "";
  timeHeadingEl.remove();

  var finalScore = timer;
  var headingEl = document.createElement("h1");
  headingEl.textContent = "Your final score is " + finalScore + " !";
  headingEl.setAttribute("class", "finalScoreText");

  var labelEl = document.createElement("label");
  labelEl.setAttribute("for", "name");
  labelEl.textContent = "Enter Name:";
  labelEl.classList.add("label");

  var submitEl = document.createElement("input");
  submitEl.setAttribute("type", "text");
  submitEl.setAttribute("name", "name");
  submitEl.setAttribute("placeholder", "Name");
  submitEl.classList.add("name-input");

  var submitButtonEl = document.createElement("button");
  submitButtonEl.href = "./highscores.html";
  submitButtonEl.textContent = "Submit";
  submitButtonEl.classList.add("submit-button");

  mainEl.append(headingEl);
  submitContainerEl.append(labelEl);
  submitContainerEl.append(submitEl);
  submitContainerEl.append(submitButtonEl);

  messageWrapEl.innerHTML = "";

  if (submitEl.value !== null) {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    submitButtonEl.addEventListener("click", function (event) {
      event.preventDefault();
      var userName = submitEl.value;
      var userScore = {
        userScore: finalScore,
        userInitials: userName,
      };

      // checking + updating usernames in local storage
      var updated = false;

      for (var i = 0; i < highscores.length; i++) {
        if (highscores[i].userInitials === userName) {
          highscores[i].userScore = finalScore;
          updated = true;
        }
      }

      if (!updated) {
        highscores.push(userScore);
      }

      localStorage.setItem("highscores", JSON.stringify(highscores));
      window.open("./highscores.html", "_self");
    });
  }

  mainEl.append(headingEl);
}

function beginQuiz() {
  var mainHeading = document.querySelector(".heading");
  mainHeading.remove();
  var mainDescription = document.querySelector(".description");
  mainDescription.remove();
  beginButtonEl.remove();

  firstQuestion();
}
