import styles from "./supporthistory.module.css";

interface SupportTicket {
  id: number;
  time: string;
  category: string;
  topic: string;
  status: string;
}

function SupportHistory() {
  const tickets: SupportTicket[] = [
    {
      id: 355110,
      time: "24 Aug 2023 19:12:08",
      category: "Game",
      topic: "How to play coinflip?",
      status: "Process",
    },
    {
      id: 355110,
      time: "24 Aug 2023 19:12:08",
      category: "Game",
      topic: "How to play coinflip?",
      status: "Resolved",
    },
    {
      id: 355110,
      time: "24 Aug 2023 19:12:08",
      category: "Game",
      topic: "How to play coinflip?",
      status: "Resolved",
    },
    {
      id: 355110,
      time: "24 Aug 2023 19:12:08",
      category: "Game",
      topic: "How to play coinflip?",
      status: "Closed",
    },
    {
      id: 355110,
      time: "24 Aug 2023 19:12:08",
      category: "Game",
      topic: "How to play coinflip?",
      status: "Closed",
    },
  ];
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Process':
        return styles.statusProcess;
      case 'Resolved':
        return styles.statusResolved;
      case 'Closed':
        return styles.statusClosed;
      default:
        return '';
    }
  };  
  return (
    <>
      <div className={styles.header}>
      Your tickets
      </div>
      <section className={styles.livePayoutsContainer}>
        <div className={styles.tableHeader}>
          <p>#</p>
          <p>Time</p>
          <p>Category</p>
          <p>Topic</p>
          <p>Status</p>
        </div>
        <div className={styles.tableItems}>
          {tickets.map((item) => (
            <div key={item.id} className={styles.tableItem}>
              <p>{item.id}</p>
              <p className={styles.time}>{item.time}</p>
              <p>{item.category}</p>
              <p>{item.topic}</p>
              <p>
                <span className={`${styles.status} ${getStatusClass(item.status)}`}>
                  {item.status}
                </span>
              </p>
              <button className={styles.openButton}>Open</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SupportHistory;

