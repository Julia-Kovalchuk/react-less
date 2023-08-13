import React, { useState } from "react";
import styles from "./styles.less";
import { Star } from "../../assets/icons/Star";
import { v4 as uuidv4 } from "uuid";
import { EyeOpen } from "../../assets/icons/EyeOpen";
import { EyeClose } from "../../assets/icons/EyeClose";

export const PlayerInfo = ({ user }) => {
  const { id, userName, stars, balance, avatar } = user;
  const [isVisibleBalance, setIsvisibleBalance] = useState(true);

  const handleChangeBalanceView = () => {
    setIsvisibleBalance(!isVisibleBalance);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{userName}</h2>
        <div>
          <div className={styles.stars}>
            {[...Array(stars)].map(() => (
              <Star key={uuidv4()} />
            ))}
          </div>
        </div>
      </div>

      <img src={avatar} className={styles.image} />

      {isVisibleBalance ? (
        <div className={styles.balance}>
          <button className={styles.button} onClick={handleChangeBalanceView}>
            <EyeClose />
          </button>
          <div>${balance}</div>
        </div>
      ) : (
        <button
          className={styles.buttonShow + " " + styles.button}
          onClick={handleChangeBalanceView}
        >
          <EyeOpen />
          <p>Show balance</p>
        </button>
      )}
    </div>
  );
};
