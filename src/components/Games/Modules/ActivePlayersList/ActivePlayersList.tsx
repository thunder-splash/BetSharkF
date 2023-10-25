import styles from "./activeplayerslist.module.css"
import Image from 'next/image';
import {stylesBadge} from "@/styles/transactions";

export default function ActivePlayersList() {

    const tableData = [
        {
            id: '1',
        },
        {
            id: '2',
        },
        {
            id: '3',
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
                    <Image src="/dot.svg" alt="dot" width={10} height={10}/>
                    <p>User</p>
                    <p>Rate</p>
                    <p>Chance</p>
                </div>
            </div>
        </div>
    );
}
