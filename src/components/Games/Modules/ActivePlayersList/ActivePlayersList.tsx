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
            name: 'Вася Жмуркин',
            bet: '11',
            percent: '45'
        },
        {
            id: 4,
            name: 'Вася Пупкин',
            bet: '1221',
            percent: '23'
        },
        {
            id: 5,
            name: 'Вася Ступкин',
            bet: '1231',
            percent: '11'
        },
        {
            id: 6,
            name: 'Вася Дубкин',
            bet: '1',
            percent: '0.1'
        },{
            id: 7,
            name: 'Вася Пелкин',
            bet: '131',
            percent: '1'
        },
        {
            id: 8,
            name: 'Вася Калкин',
            bet: '121',
            percent: '12'
        },
        {
            id: 9,
            name: 'Вася Айкин',
            bet: '121',
            percent: '8'
        },
        {
            id: 10,
            name: 'Вася Мамкин',
            bet: '13311',
            percent: '19'
        },
        {
            id: 11,
            name: 'Вася Папкин',
            bet: '11111',
            percent: '99'
        },{
            id: 12,
            name: 'Вася Думкин',
            bet: '112',
            percent: '15'
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
                <div className={styles.playeroverflow}>
                    {tableData.map((item , index) => (
                        <div key={item.id} className={index % 2 === 0 ? styles.playersection : styles.playersectionsec}>
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
        </div>
    );
}
