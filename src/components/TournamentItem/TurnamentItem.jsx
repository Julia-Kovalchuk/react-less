import React from "react";
import styles from "./styles.less";

export const TournamentItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>Registering</div>
      <div className={styles.infoBox}>
        <div className={styles.box}>
          <div>NL 2-7 Triple Draw</div>
          <div>OFC Pineapple</div>
        </div>
        <div>
          <button>Join table</button>
        </div>
      </div>
    </div>
  );
};
