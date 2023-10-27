"use client";

import styles from "./roulette.module.css"
import Image from 'next/image';
import BetContainer from "@/components/Games/Modules/BetContainer/BetContainer";
import GameSecurity from "@/components/Games/Modules/GameSecurity/GameSecurity";

export default function Roulette() {
    return (
        <div className={`${styles.main}`}>
            <div className={styles.upper}>
                <div className={styles.roulcollumn}>
                    <div className={`${styles.game}`}>
                        <div className={`${styles.header}`}>
                            <img src="/Ellipse%2087.svg" alt="light" className={styles.roulette__light1}></img>
                            <Image src="/rouletteicon.svg" alt="Roulette Icon" width={20} height={20}/>
                            <h2>ROULETTE</h2>
                        </div>
                        <div className={styles.footer}>
                            <BetContainer/>
                        </div>
                    </div>
                    <GameSecurity/>
                </div>

            </div>
        </div>
    );
}
