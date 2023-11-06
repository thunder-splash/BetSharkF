import styles from "./dicechance.module.css"
import Image from "next/image";

export default function ActivePlayersList() {

    return (
        <div className={`${styles.main}`}>
            <div className={styles.dicemenu}>
                <div className={styles.menuwrapper}>
                    <p className={styles.menuname}>Win is between</p>
                    <p className={styles.menuinfo}>28.8 / 90.21</p>
                </div>
                <div className={styles.menuwrapper}>
                    <p className={styles.menuname}>Win chance</p>
                    <p className={styles.menuinfo}>47.70%</p>
                </div>
                <div className={styles.menuwrapper}>
                    <p className={styles.menuname}>Payout</p>
                    <p className={styles.menuinfo}>2.420 x</p>
                </div>
            </div>
            <div className={styles.bodydice}>
                    <Image src="/Groupdice.svg" alt="diceicon" width={100} height={100} className={styles.imgdice}/>
                <div className={styles.dicebar}>
                    <div className={styles.controlbar}></div>
                </div>
            </div>
        </div>
    );
}
