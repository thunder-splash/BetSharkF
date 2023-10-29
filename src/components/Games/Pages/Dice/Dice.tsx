"use client";

import styles from "./dice.module.css"
import Image from 'next/image';
import LatestGames from "@/components/Games/Modules/LatestGames/Dice/LatestGames";
import BetContainer from "@/components/Games/Modules/BetContainer/Dice/BetContainer";
import GameSecurity from "@/components/Games/Modules/GameSecurity/GameSecurity";
import ActivePlayersList from "@/components/Games/Modules/ActivePlayersList/ActivePlayersList";

export default function Dice() {

    return (
        <div className={`${styles.main}`}>
            <div className={styles.upper}>
                <div className={styles.jackcollumn}>
                    <div className={`${styles.game}`}>
                        <div className={`${styles.header}`}>
                            <img src="/Ellipse%2087.svg" alt="light" className={styles.jackpot__light1}></img>
                            <Image src="/diceicon.svg" alt="Dice Icon" width={20} height={20}/>
                            <h2>DICE</h2>
                        </div>
                        <div className={styles.footer}>
                            <BetContainer/>
                            <button onClick={() => console.log('Play button clicked!')} className={styles.play__button}>
                                Play
                            </button>
                        </div>
                    </div>
                    <GameSecurity/>
                </div>
                <ActivePlayersList/>
            </div>
            <LatestGames/>
        </div>
    );
}
