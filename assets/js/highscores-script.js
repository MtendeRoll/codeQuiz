var highscoresListEl = document.querySelector(".highscores-list");
var clearButtonEl = document.querySelector(".clear-btn");

function scoresList() {
  //retrieve JSON array from local storage, parse it, and save to var highscores
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  //sorts highscores high to low by userScore
  highscores.sort((a, b) => {
    return b.userScore - a.userScore;
  });

  //creates an li for each object in highscores, sets values with object references, and appends the li to ol
  for (var i = 0; i < highscores.length; i++) {
    var listItemEl = document.createElement("li");
    listItemEl.textContent = highscores[i].userInitials + " - " + highscores[i].userScore;
    highscoresListEl.append(listItemEl);
  }
}

// clear high scores button
clearButtonEl.addEventListener("click", function () {
  highscoresListEl.innerHTML = "";
  localStorage.clear();
});

scoresList();
