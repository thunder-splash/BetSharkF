"use client";

import styles from "../latestgames.module.css"
import Image from 'next/image';

type ListItem = {
    id: number;
    game:string;
    winner: string;
    bet: number;
    chance: string;
    prize: string;
    time: string;
};
export default function LatestGames() {

    const tableData: ListItem[] = [
        {
            id: 10,
            game: '401',
            winner: 'Pants`of Fortune',
            bet: 240,
            chance: '69',
            prize: '19234',
            time: '25 Aug 2023 23:23:23'
        },
        {
            id: 11,
            game: '402',
            winner: 'Pants`of Fortune',
            bet: 2450,
            chance: '2',
            prize: '1000',
            time: '14 Aug 2023 19:12:08'
        },
        {
            id: 12,
            game: '403',
            winner: 'Pants`of Fortune',
            bet: 450,
            chance: '100',
            prize: '100021',
            time: '28 Aug 2023 14:22:18'
        },
        {
            id: 13,
            game: '403',
            winner: 'Pants`of Fortune',
            bet: 450,
            chance: '100',
            prize: '100021',
            time: '28 Aug 2023 14:22:18'
        },
        {
            id: 14,
            game: '403',
            winner: 'Pants`of Fortune',
            bet: 450,
            chance: '100',
            prize: '100021',
            time: '28 Aug 2023 14:22:18'
        },
        {
            id: 15,
            game: '403',
            winner: 'Pants`of Fortune',
            bet: 450,
            chance: '100',
            prize: '100021',
            time: '28 Aug 2023 14:22:18'
        },
        {
            id: 16,
            game: '403',
            winner: 'Pants`of Fortune',
            bet: 450,
            chance: '100',
            prize: '100021',
            time: '28 Aug 2023 14:22:18'
        },
        {
            id: 17,
            game: '403',
            winner: 'Pants`of Fortune',
            bet: 450,
            chance: '100',
            prize: '100021',
            time: '28 Aug 2023 14:22:18'
        },
        {
            id: 18,
            game: '403',
            winner: 'Pants`of Fortune',
            bet: 450,
            chance: '100',
            prize: '100021',
            time: '28 Aug 2023 14:22:18'
        },
    ];

    return (
        <div className={`${styles.game}`}>
            <div className={`${styles.header}`}>
                <img src="/Ellipse%2087.svg" alt="light" className={styles.jackpot__light1}></img>
                <Image src="/clockjack.svg" alt="Icon" width={20} height={20}/>
                <h2>LATEST GAMES</h2>
            </div>
            <div className={styles.list}>
                <div className={styles.list__header}>
                    <p>Game</p>
                    <p>Winner</p>
                    <p>Bet</p>
                    <p>Chance</p>
                    <p>Prize</p>
                    <p>Time</p>
                </div>
                <div className={styles.playeroverflow}>
                    {tableData.map((item , index) => (
                        <div key="id" className={index % 2 === 0 ? styles.playersection : styles.playersectionsec}>
                            <p className={styles.gamenum}>#{item.game}</p>
                            <div className={styles.prof}>
                                <Image src="/Avatar.png" alt="profile" width={32} height={32}/>
                                <p className={styles.winner}>{item.winner}</p>
                            </div>
                            <p className={styles.bet}>${item.bet}</p>
                            <div className={styles.chanceContainer}>
                                <p className={styles.chance}>{item.chance}%</p>
                            </div>
                            <div className={styles.prizesection}>
                                <Image src="/dol.svg" alt="icon" width={16} height={16}/>
                                <p className={styles.prize}>
                                    {parseFloat(item.prize).toLocaleString('en-US')}
                                </p>
                            </div>
                            <p className={styles.time}>{item.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
