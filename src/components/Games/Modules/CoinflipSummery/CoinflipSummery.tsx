import styles from "./coinflipsummery.module.css";
import Image from "next/image";

export default function CoinflipSummery() {

    return (
        <div className={styles.summery}>
            <div className={styles.header}>
                <p>Coinflip summary</p>
            </div>
            <div className={styles.info}>
                <div className={styles.text}>
                    <p className={styles.graytext}>Total value:</p>
                    <p className={styles.value}>$
                        {new Intl.NumberFormat('us-US', {
                            style: 'decimal',
                        }).format(parseFloat("0"))}
                    </p>
                </div>
                <div className={styles.text1}>
                    <p className={styles.graytext}>Total flips:</p>
                    <p className={styles.value}>456</p>
                </div>
            </div>
        </div>
    );
}