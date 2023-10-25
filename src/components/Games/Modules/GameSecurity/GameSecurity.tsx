import styles from "./gamesecurity.module.css";
import Image from "next/image";

export default function GameSecurity() {

    return (
        <div className={styles.gamesecure}>
            <div className={styles.secname}>
                <Image width={16} height={16} src="/shieldgreen.svg" alt="shield"/>
                <h1>GАME #402</h1>
            </div>
            <div className={styles.secnum}>
                <p>number</p>
                <Image width={16} height={16} src="/copygreen.svg" alt="copy"/>
            </div>
        </div>
    );
}