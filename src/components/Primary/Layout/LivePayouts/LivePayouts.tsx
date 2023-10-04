import { useState } from 'react';
import styles from './livepayouts.module.css'; 

interface Payout {
  id: number;
  time: string;
  username: string;
  amount: string;
  tx: string;
}

interface Bet {
  id: number;
  user: string;
  betAmount: string;
  game: string;
}

function LivePayouts() {
  const [view, setView] = useState<'livePayouts' | 'bets'>('livePayouts');

  const payouts: Payout[] = [
    {
      id: 1,
      time: '24 Aug 2023 19:12:08',
      username: 'THEera****',
      amount: '0.6849525131487882 ETH',
      tx: '0x23842bbda37dabb57e782a3b46644f84ca55993a03a13f6d90806a0079075215',
    },
    {
      id: 2,
      time: '24 Aug 2023 18:51:03',
      username: 'JohnDoe',
      amount: '2.5 BTC',
      tx: '0xabcd...',
    },
  ];

  const bets: Bet[] = [
    {
      id: 1,
      user: 'Mark',
      betAmount: '0.5 ETH',
      game: 'Blackjack',
    },
  ];

  const getData = () => (view === 'livePayouts' ? payouts : bets);

  return (
    <>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => setView('livePayouts')}
          className={`view-button ${view === 'livePayouts' ? 'active' : ''}`}
        >
          Live Payouts
        </button>
        <button
          onClick={() => setView('bets')}
          className={`view-button ${view === 'bets' ? 'active' : ''}`}
        >
          Latest Bets
        </button>
      </div>
      <section className={styles.livePayoutsContainer}>
        <div className={styles.tableHeader}>
          <p>ID</p>
          {isPayout(getData()[0]) && <p>User</p>}
          <p>Amount</p>
          {isPayout(getData()[0]) && <p>Transaction</p>}
        </div>
        <div className={styles.tableItems}>
          {getData().map((item) => (
            <div key={item.id} className={styles.tableItem}>
              <p>{item.id}</p>
              {isPayout(item) && <p>{item.username}</p>}
              {isPayout(item) && <p>{item.amount}</p>}
              {isPayout(item) && <p>{item.tx}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function isPayout(item: Payout | Bet): item is Payout {
  return 'username' in item;
}

export default LivePayouts;
