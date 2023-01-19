/**
 * This class holds all of the necessary code in order to play an infinite number of rounds
 * of rock paper scissors. The class will also track all the relevent scoreboard information.
 */
export default class GameLogic {

  /**
   * Constructor for the game logic class.
   */
  constructor() {
    this.resetScoreboard();
  }

  /**
   * Increments the number of rounds played.
   */
  #incRounds() {
    this.numOfRounds++;
  }

  /**
   * Increments the number of wins for the corresponding player.
   */
  #incWins(playerNumber) {
    if (playerNumber == 1) {
      this.player1Wins++;
    } else if (playerNumber == 2) {
      this.player2Wins++;
    } else {
      throw Error("Not a valid player number.");
    }
  }

  /**
   * Increments the number of losses for the corresponding player. 
   */
  #incLosses(playerNumber) {
    if (playerNumber == 1) {
      this.player1Losses++;
    } else if (playerNumber == 2) {
      this.player2Losses++;
    } else {
      throw Error("Not a valid player number.");
    }
  }

  /**
   * Increments the number of ties.
   */
  #incTies() {
    this.numOfTies++;
  }

  resetScoreboard() {
    this.numOfRounds = 0;
    this.player1Wins = 0;
    this.player2Wins = 0;
    this.player1Losses = 0;
    this.player2Losses = 0;
    this.numOfTies = 0;
  }

  generateAiMove() {
    return Math.floor(Math.random() * 3);
  }

  playRound(firstPlayerMove, secondPlayerMove) {
    this.#incRounds();

    if (firstPlayerMove == secondPlayerMove) {
      this.#incTies();
      return 2;

    } else if (firstPlayerMove == 0 && secondPlayerMove == 1) {
      this.#incWins(2);
      this.#incLosses(1);
      return 1;

    } else if (firstPlayerMove == 1 && secondPlayerMove == 2) {
      this.#incWins(2);
      this.#incLosses(1);
      return 1;

    } else if (firstPlayerMove == 2 && secondPlayerMove == 0) {
      this.#incWins(2);
      this.#incLosses(1);
      return 1;

    } else if (firstPlayerMove == 0 && secondPlayerMove == 2) {
      this.#incWins(1);
      this.#incLosses(2);
      return 0;

    } else if (firstPlayerMove == 1 && secondPlayerMove == 0) {
      this.#incWins(1);
      this.#incLosses(2);
      return 0;

    } else if (firstPlayerMove == 2 && secondPlayerMove == 1) {
      this.#incWins(1);
      this.#incLosses(2);
      return 0;

    } else {
      throw Error("Not a valid player move. Choose 0, 1, or 2.");
    }
  }
}