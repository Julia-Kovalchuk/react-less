import { Loader } from "./components/Loader/Loader";
import { PlayerInfo } from "./components/PlayerInfo/PlayerInfo";
import { Spinner } from "./components/Spinner/Spinner";
import { TournamentItem } from "./components/TournamentItem/TurnamentItem";
import styles from "./index.less";
import { userData } from "./data/userData";
import { tournamentData } from "./data/tournamentData";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.header}>Poker</h1>
        </div>
        <Spinner />
        <PlayerInfo user={userData} />
        <Loader />
        <TournamentItem tournamentData={tournamentData} />
      </div>
    </div>
  );
};
