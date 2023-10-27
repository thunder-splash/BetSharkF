import styles from "./activeplayerslist.module.css"
import Image from 'next/image';

type ListItem = {
    id: number;
    name: string;
    bet: string;
    percent: string;
};

export default function ActivePlayersList() {

    const tableData: ListItem[] = [
        {
            id: 1,
            name: 'паша',
            bet: '1234',
            percent: '12'
        },
        {
            id: 2,
            name: 'Pants`of Fortune',
            bet: '1234',
            percent: '12'
        },
        {
            id: 3,
            name: 'Вася Пупкин',
            bet: '1',
            percent: '1'
        },
    ];

    return (
        <div className={`${styles.players}`}>
            <div className={`${styles.header}`}>
                <img src="/Ellipse%2087.svg" alt="light" className={styles.jackpot__light1}></img>
                <Image src="/playersicon.svg" alt="Players Icon" width={20} height={20}/>
                <h2>PLAYERS</h2>
                <p className={styles.badge}>27</p>
            </div>
            <div className={styles.list}>
                <div className={styles.list__header}>
                    <Image src="/dot.svg" alt="dot" width={10} height={10} className={styles.dot__inheader}/>
                    <p>User</p>
                    <p>Rate</p>
                    <p>Chance</p>
                </div>
                {tableData.map((item) => (
                    <div key={item.id} className={styles.playersection}>
                        <Image src="/dot.svg" alt="dot" width={10} height={10} className={styles.dot__inbody}/>
                        <div className={styles.prof}>
                            <Image src="/Avatar.png" alt="profile" width={32} height={32}/>
                            <p className={styles.name}>{item.name}</p>
                        </div>
                        <p className={styles.bet}>
                            {new Intl.NumberFormat('us-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(parseFloat(item.bet))}
                        </p>
                        <div className={styles.percentContainer}>
                            <p className={styles.percent}>{item.percent}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
