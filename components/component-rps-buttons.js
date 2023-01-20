import styles from "@/styles/Home.module.css";
import Image from "next/image";
import {
  rockHandler,
  paperHandler,
  scissorsHandler,
} from "@/lib/page-logic-index";

/**
 * A react component containing the buttons needed to make functional rock paper scissors buttons.
 *
 * @returns HTML representing the rock paper scissors buttons.
 */
export function RpsButtons() {
  return (
    <div>
      <button className={styles.button} id="rock" onClick={rockHandler}>
        <Image
          priority
          src="/images/rock_cropped.png"
          width={144}
          height={144}
          alt="rock"
        />
      </button>
      <button className={styles.button} id="paper" onClick={paperHandler}>
        <Image
          priority
          src="/images/paper_cropped.png"
          width={144}
          height={144}
          alt="paper"
        />
      </button>
      <button className={styles.button} id="scissors" onClick={scissorsHandler}>
        <Image
          priority
          src="/images/scissors_cropped.png"
          width={144}
          height={144}
          alt="scissors"
        />
      </button>
    </div>
  );
}
