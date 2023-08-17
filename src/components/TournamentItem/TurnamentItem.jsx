import React from "react";
import styles from "./styles.less";
import { TimeSimple } from "../../assets/icons/TimeSimple";
import { Players } from "../../assets/icons/Players";
import { Prize } from "../../assets/icons/Prize";
import { Pin } from "../../assets/icons/Pin";
import { Time } from "../../assets/icons/Time";
import { FreeRoll } from "../../assets/icons/FreeRoll";
import { Bounty } from "../../assets/icons/Bounty";
import { Knockout } from "../../assets/icons/Knockout";
import { ProBounty } from "../../assets/icons/ProBounty";
import { Rapid } from "../../assets/icons/Rapid";

export const TournamentItem = ({ tournamentData }) => {
  const getTagIcon = (tag) => {
    let icon;

    switch (tag) {
      case "rapid":
        icon = <Rapid />;
        break;
      case "time":
        icon = <Time />;
        break;
      case "freeroll":
        icon = <FreeRoll />;
        break;
      case "knockout":
        icon = <Knockout />;
        break;
      case "bounty":
        icon = <Bounty />;
        break;
      case "proBounty":
        icon = <ProBounty />;
        break;

      default:
        break;
    }
    return icon;
  };

  return (
    <ul className={styles.wrapper}>
      {tournamentData.map((item) => {
        const {
          id,
          status,
          name,
          pinned,
          gameType,
          tags,
          startAt,
          playersMax,
          playersAre,
          prize,
        } = item;
        return (
          <li className={styles.container} key={id}>
            <div
              className={
                status === "registering"
                  ? `${styles.status} ${styles["status--active"]}`
                  : `${styles.status} ${styles["status--notActive"]}`
              }
            >
              <p className={styles.status__text}>{status}</p>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.main}>
                <div className={styles.main__container}>
                  <div className={styles.main__tags}>
                    {pinned && <Pin />}
                    <p className={styles.main__gameName}>{gameType}</p>
                    {tags.map((item) => (
                      <div key={item}>{getTagIcon(item)}</div>
                    ))}
                  </div>

                  <div
                    className={
                      tags.includes("rapid")
                        ? `${styles.main__name} ${styles["main__name--rapid"]}`
                        : styles.main__name
                    }
                  >
                    {name}
                  </div>
                </div>

                <button
                  className={
                    status === "registering"
                      ? `${styles.button} ${styles["status--active"]}`
                      : `${styles.button} ${styles["status--notActive"]}`
                  }
                  disabled={status === "canceled"}
                >
                  {status === "registering" ? "Join table" : "Canceled"}
                </button>
              </div>

              <div className={styles.description}>
                <div className={styles.description__time}>
                  <TimeSimple />
                  <p>{startAt}</p>
                </div>

                <div className={styles.description__players}>
                  <Players />
                  <p>
                    {playersAre}/{playersMax}
                  </p>
                </div>

                <div className={styles.description__prize}>
                  <Prize />
                  <p>{prize}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
