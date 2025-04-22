let homeScore = 0;

  function changeHomeScoreDisplay() {
    document.getElementById("home-score").textContent = homeScore;
  }

function plusOneH() {
    homeScore += 1;
    changeHomeScoreDisplay()
}

function plusTwoH() {
    homeScore += 2;
    changeHomeScoreDisplay()
}

function plusThreeH() {
    homeScore += 3;
    changeHomeScoreDisplay()
}

let guestScore = 0

function updateGuestScoreDisplay() {
    document.getElementById("guest-score").textContent = guestScore;
  }
  
function plusOneG() {
    guestScore += 1;
    updateGuestScoreDisplay()
}

function plusTwoG() {
    guestScore += 2;
    updateGuestScoreDisplay()
}

function plusThreeG() {
    guestScore += 3;
    updateGuestScoreDisplay()
}

function resetScores() {
    homeScore = 0;
    guestScore = 0;
    changeHomeScoreDisplay();
    updateGuestScoreDisplay();
}