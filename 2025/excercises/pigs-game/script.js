"use Strict";

// Selecting  elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let playing = true; // actice game state

let currentScore = 0; // state variable for current score
let activePlayer = 0; // 0 or 1 for player 1 or 2
let scores = [0, 0]; // scores for player 1 and 2

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // if active player is 0 then switch to 1 else switch to 0
  currentScore = 0;
  player0El.classList.toggle("player--active"); // toggle active class
  player1El.classList.toggle("player--active"); // toggle active class
}

// Rolling dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    // generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // random no. between 1 and 6
    console.log(`rolled dice: ${dice}`);

    // display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `./images/dice-${dice}.png`;

    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //dynamically setting current user score
      // current0El.textContent = currentScore; // change later
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // score > 100 finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden"); // hide dice

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }

  // switch to the next player
});
