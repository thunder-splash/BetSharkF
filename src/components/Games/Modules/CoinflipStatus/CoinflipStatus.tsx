import styles from "./coinflipstatus.module.css";
import Image from "next/image";

export default function CoinflipStatus() {

    return (
        <div className={styles.summery}>
            <div className={styles.header}>
                <p>Your coinflip status</p>
            </div>
            <div className={styles.info}>
                <div className={styles.text}>
                    <p className={styles.graytext}>Total amount of bets:</p>
                    <p className={styles.value}>$
                        {new Intl.NumberFormat('us-US', {
                            style: 'decimal',
                        }).format(parseFloat("0"))}
                    </p>
                </div>
            </div>
        </div>
    );
}