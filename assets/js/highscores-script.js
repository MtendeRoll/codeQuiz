//global variables
var scoresListEl = document.querySelector(".highscores-list");
var deleteButtonEl = document.querySelector(".clear-btn");

//Delete Button Event Listener
deleteButtonEl.addEventListener("click", function () {
  scoresListEl.innerHTML = "";
  localStorage.clear();
});

//function that saves high scores from last page
var loadScores = function () {
  var savedScores = JSON.parse(localStorage.getItem("userScoreArray")) || [];
  savedScores.sort((a, b) => {
    return b.score - a.score;
  });
  for (var i = 0; i < savedScores.length; i++) {
    var loadedScore = document.createElement("li");
    loadedScore.textContent = savedScores[i].name + ": " + savedScores[i].score;
    loadedScore.classList.add("highscores-list-item");
    scoresListEl.appendChild(loadedScore);
  }
};

loadScores();
