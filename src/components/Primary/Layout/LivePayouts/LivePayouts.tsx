import { useState } from "react";
import styles from "./livepayouts.module.css";

interface Payout {
  id: number;
  time: string;
  username: string;
  amount: string;
  tx: string;
}

interface Bet {
  id: number;
  time: string;
  username: string;
  betAmount: string;
  game: string;
}

function LivePayouts() {
  const [view, setView] = useState<"livePayouts" | "bets">("livePayouts");

  const payouts: Payout[] = [
    {
      id: 1,
      time: "24 Aug 2023 19:12:08",
      username: "THEera****",
      amount: "0.6849525131487882 ETH",
      tx: "0x23842bbda37dabb57e782a3b46644f84ca55993a03a13f6d90806a0079075215",
    },
    {
      id: 2,
      time: "24 Aug 2023 18:51:03",
      username: "JohnDoe",
      amount: "2.5 BTC",
      tx: "0xabcd...",
    },
  ];

  const bets: Bet[] = [
    {
      id: 1,
      time: "24 Aug 2023 20:00:00",
      username: "Mark",
      betAmount: "0.5 ETH",
      game: "Jackpot",
    },
  ];

  const getData = () => {
    if (view === "livePayouts") {
      return payouts;
    } else {
      return bets;
    }
  };

  return (
    <>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => setView("livePayouts")}
          className={`view-button ${view === "livePayouts" ? "active" : ""}`}
        >
          Live Payouts
        </button>
        <button
          onClick={() => setView("bets")}
          className={`view-button ${view === "bets" ? "active" : ""}`}
        >
          Latest Bets
        </button>
      </div>
      <section className={styles.livePayoutsContainer}>
        <div className={styles.tableHeader}>
          {view === "livePayouts" && (
            <>
              <p>Time</p>
              <p>Username</p>
              <p>Amount</p>
              <p>Tx</p>
            </>
          )}
          {view === "bets" && (
            <>
              <p>Time</p>
              <p>Username</p>
              <p>Bet Amount</p>
              <p>Game</p>
            </>
          )}
        </div>
        <div className={styles.tableItems}>
          {getData().map((item) => (
            <div key={item.id} className={styles.tableItem}>
              {view === "livePayouts" && (
                <>
                  <p>{item.time}</p>
                  <p>{item.username}</p>
                  <p>{(item as Payout).amount}</p>
                  <p>{(item as Payout).tx}</p>
                </>
              )}
              {view === "bets" && (
                <>
                  <p>{item.time}</p>
                  <p>{(item as Bet).username}</p>
                  <p>{(item as Bet).betAmount}</p>
                  <p>{(item as Bet).game}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LivePayouts;
