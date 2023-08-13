import { Loader } from "./components/Loader/Loader";
import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { Spinner } from "./components/Spinner/Spinner";
import { TournamentItem } from "./components/TournamentItem/TurnamentItem";
import styles from "./index.less";
import { userData } from "./data/userData";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>Poker</h1>
        {/* <Spinner /> */}
        <PlayerInfo user={userData} />
        <Loader />
        <TournamentItem />
      </div>
    </div>
  );
};
