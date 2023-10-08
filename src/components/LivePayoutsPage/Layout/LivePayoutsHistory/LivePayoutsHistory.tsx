import styles from "./livepayoutshistory.module.css";

interface Payout {
  id: number;
  time: string;
  username: string;
  amount: string;
  tx: string;
}

function LivePayouts() {
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

  return (
    <>
      <div className={styles.header}>
        History
      </div>
      <section className={styles.livePayoutsContainer}>
        <div className={styles.tableHeader}>
          <p>Time</p>
          <p>Username</p>
          <p>Amount</p>
          <p>Tx</p>
        </div>
        <div className={styles.tableItems}>
          {payouts.map((item) => (
            <div key={item.id} className={styles.tableItem}>
              <p className={styles.time}>{item.time}</p>
              <p>{item.username}</p>
              <p className={styles.amount}><span className={styles.amount_txt}>{item.amount}</span></p>
              <p>{item.tx}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LivePayouts;
