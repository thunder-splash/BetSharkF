import styles from "./allgamescoinflip.module.css"
import Image from "next/image";

export default function AllGamesCoinflip() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.allgames}>
                <div className={styles.header}>
                    <img src="/Ellipse%2087.svg" alt="light" className={styles.coinflip__light1}></img>
                    <h2>All Games</h2>
                </div>
                <div className={styles.body}>

                </div>
            </div>
        </div>
    );
}
