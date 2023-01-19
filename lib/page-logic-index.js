import GameLogic from "./game-logic-rps";

// The game object that controls the game logic and keeps track of information pertaining
// to the previous round.
let game = new GameLogic(); 

/**
 * This function handles all of the logic performed when the rock button is clicked.
 */
export function rockHandler() {
  let aiMove = game.generateAiMove();

  updatePage(aiMove, game.playRound(0, aiMove));
}

/**
 * This function handles all of the logic performed when the paper button is clicked.
 */
export function paperHandler() {
  let aiMove = game.generateAiMove();

  updatePage(aiMove, game.playRound(1, aiMove));
}

/**
 * This function handles all of the logic performed when the paper button is clicked.
 */
export function scissorsHandler() {
  let aiMove = game.generateAiMove();

  updatePage(aiMove, game.playRound(2, aiMove));
}

/**
 * The function responsible for updating the html page upon each button click.
 * 
 * @param {integer} aiMove An integer representing the move made by the ai.
 * @param {integer} gameResult An integer representing the result of the round.
 */
function updatePage(aiMove, gameResult) {
  // Update the page with what move the ai made.
  if (aiMove == 0) {
    document.getElementById("aiMoveDisplay").innerHTML = "Rock";
  } else if (aiMove == 1) {
    document.getElementById("aiMoveDisplay").innerHTML = "Paper";
  } else if (aiMove == 2) {
    document.getElementById("aiMoveDisplay").innerHTML = "Scissors";
  }

  // Update the page with the result of the round.
  if (gameResult == 0) {
    document.getElementById("roundResult").innerHTML = "You win!";
  } else if (gameResult == 1) {
    document.getElementById("roundResult").innerHTML = "Too bad...";
  } else if (gameResult == 2) {
    document.getElementById("roundResult").innerHTML = "Tie";
  }

  // Update the scoreboard elements.
  document.getElementById("wins").innerHTML = "Wins: " + game.player1Wins;
  document.getElementById("losses").innerHTML = "Losses: " + game.player1Losses;
  document.getElementById("ties").innerHTML = "Ties: " + game.numOfTies;
  document.getElementById("rounds").innerHTML = "Rounds: " + game.numOfRounds;
}
