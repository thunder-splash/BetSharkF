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
                    <div className={styles.gameinfo}>
                        <div className={styles.player}>
                            <Image src="/Avatar.png" alt="playericon" width={56} height={56}/>
                            <p>janstay</p>
                            <div className={styles.money}>
                                <Image src="/dol.svg" alt="icon" width={16} height={16}/>
                                <p>
                                    {new Intl.NumberFormat('us-US', {
                                        style: 'decimal',
                                    }).format(parseFloat("2322"))}
                                </p>
                            </div>
                        </div>
                        <div className={styles.centergamewait}>
                            {/*<p className={styles.activegame}>Active</p>*/}
                            {/*<h3 className={styles.vs}>VS</h3>*/}
                            <p className={styles.num}>2</p>
                            <button className={styles.shieldbuttonactive}><Image src="/shieldCoinflip.svg" alt="shieldicon" width={20} height={20}/></button>
                        </div>

                        {/*<p className={styles.num}>2</p>*/}
                        {/*<div className={styles.playernotfound}>*/}
                        {/*    <Image src="/Avatar.png" alt="playericon" width={56} height={56}/>*/}
                        {/*    <button className={styles.join_button}>Join game</button>*/}
                        {/*</div>*/}
                        <div className={styles.player}>
                            <Image src="/Avatar.png" alt="playericon" width={56} height={56}/>
                            <p>janstay</p>
                            <div className={styles.money}>
                                <Image src="/dol.svg" alt="icon" width={16} height={16}/>
                                <p>
                                    {new Intl.NumberFormat('us-US', {
                                        style: 'decimal',
                                    }).format(parseFloat("2322"))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
