import styles from "@/styles/Home.module.css";

/**
 * A react component that contains a scoreboard for the rock paper scissors game.
 *
 * @returns HTML representing a scoreboard footer.
 */
export function Scoreboard() {
  return (
    <footer className={styles.scoreboard}>
      <p id="wins">Wins: 0</p>
      <p id="losses">Losses: 0</p>
      <p id="ties">Ties: 0</p>
      <p id="rounds">Rounds: 0</p>
    </footer>
  );
}