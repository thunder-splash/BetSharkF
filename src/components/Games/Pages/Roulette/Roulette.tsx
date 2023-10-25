import styles from "./roulette.module.css"
import Image from 'next/image';
import BetContainer from "@/components/Games/Modules/BetContainer/BetContainer";
import GameSecurity from "@/components/Games/Modules/GameSecurity/GameSecurity";

export default function Roulette() {
    return (
        <div className={`${styles.main}`}>
            <div className={styles.upper}>
                <div className={styles.jackcollumn}>
                    <div className={`${styles.game}`}>
                        <div className={`${styles.header}`}>
                            <img src="/Ellipse%2087.svg" alt="light" className={styles.jackpot__light1}></img>
                            <Image src="/jackpoticon.svg" alt="Jackpot Icon" width={20} height={20}/>
                            <h2>ROULETTE</h2>
                        </div>
                        <BetContainer/>
                        <div className={styles.footer}>
                            <button onClick={() => console.log('Play button clicked!')} className={styles.play__button}>
                                Play
                            </button>
                        </div>
                    </div>
                    <GameSecurity/>
                </div>
            </div>
        </div>
    );
}
