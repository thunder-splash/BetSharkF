"use client";

import styles from "./jackpot.module.css"
import Image from 'next/image';
import ActivePlayersList from "@/components/Games/Modules/ActivePlayersList/ActivePlayersList";
import LatestGames from "@/components/Games/Modules/LatestGames/Jackpot/LatestGames";
import BetContainer from "@/components/Games/Modules/BetContainer/Jackpot/BetContainer";
import GameSecurity from "@/components/Games/Modules/GameSecurity/GameSecurity";

export default function Jackpot() {

    return (
        <div className={`${styles.main}`}>
            <div className={styles.upper}>
                <div className={styles.jackcollumn}>
                    <div className={`${styles.game}`}>
                        <div className={`${styles.header}`}>
                            <img src="/Ellipse%2087.svg" alt="light" className={styles.jackpot__light1}></img>
                            <Image src="/jackpoticon.svg" alt="Jackpot Icon" width={20} height={20}/>
                            <h2>JACKPOT</h2>
                        </div>
                        <div className={`${styles.wheel}`}>
                            <div className={`${styles.outsideCircle}`}></div>
                            <div className={`${styles.mainCircle}`}></div>
                            <div className={`${styles.timer}`}>
                                <h2>
                                    120
                                </h2>
                                <h3>
                                    SECONDS
                                </h3>
                            </div>
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
