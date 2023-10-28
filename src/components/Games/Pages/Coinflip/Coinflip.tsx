"use client";

import styles from "./coinflip.module.css"
import Image from 'next/image';
import BetContForCoinflip from "@/components/Games/Modules/BetContForCoinflip/BetContForCoinflip";
import CoinflipSummery from "@/components/Games/Modules/CoinflipSummery/CoinflipSummery";
import RollContainer from "@/components/Games/Modules/RollContainer/RollContainer";
import CoinflipStatus from "@/components/Games/Modules/CoinflipStatus/CoinflipStatus";
import AllGamesCoinflip from "@/components/Games/Modules/AllGamesCoinflip/AllGamesCoinflip";
// import GameSecurity from "@/components/Games/Modules/GameSecurity/GameSecurity";
// import RollContainer from "@/components/Games/Modules/RollContainer/RollContainer";
// import RoulettePlayers from "@/components/Games/Modules/RoulettePlayers/RoulettePlayers";

export default function Coinflip() {
    return (
        <div className={`${styles.main}`}>
            <div className={styles.upper}>
                <div className={styles.coinflipcollumn}>
                    <div className={`${styles.game}`}>
                        <div className={`${styles.header}`}>
                            <img src="/Ellipse%2087.svg" alt="light" className={styles.coinflip__light1}></img>
                            <Image src="/Coinflipicon.svg" alt="coinflipIcon" width={20} height={20}/>
                            <h2>COINFLIP</h2>
                        </div>
                        <div className={styles.footer}>
                            <BetContForCoinflip/>
                            <button onClick={() => console.log('select button clicked!')} className={styles.select_button}>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.infocase}>
                    <CoinflipSummery/>
                    <CoinflipStatus/>
                </div>
            </div>
            <AllGamesCoinflip/>
        </div>
    );
}
