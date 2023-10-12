import styles from "./jackpot.module.css"

export default function Jackpot(){
    return(
        <div className={`${styles.main}`}>
            <div className={`${styles.gamesection}`}>
                <div className={`${styles.game}`}>
                    <div className={`${styles.header}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                            <path d="M13.9935 12.0362C13.6116 12.0362 13.2416 12.0906 12.8923 12.1912L9.64477 5.07312H12.6029C14.3498 5.07312 15.7654 3.6575 15.7654 1.91062V0H12.0604C10.3135 0 8.89789 1.41562 8.89789 3.1625V3.70438C8.89789 2.45312 7.88352 1.43875 6.63227 1.43875H3.81164V2.8075C3.81164 4.05875 4.82602 5.07312 6.07727 5.07312H8.35602L5.10977 12.1912C4.78039 12.0931 4.40227 12.0362 4.01102 12.0362C4.00977 12.0362 4.00914 12.0362 4.00789 12.0362C1.81164 12.0362 0.0253906 13.8225 0.0253906 16.0181C0.0253906 18.2137 1.81164 20 4.00727 20C6.20289 20 7.98914 18.2137 7.98914 16.0181C7.98914 14.6213 7.26602 13.39 6.17414 12.6787L8.99977 6.48438L11.8254 12.6787C10.7266 13.3994 10.011 14.625 10.0104 16.0175C10.0104 18.2125 11.7966 19.9994 13.9923 19.9994C16.1879 19.9994 17.9741 18.2131 17.9741 16.0175C17.9741 13.8219 16.1879 12.0356 13.9923 12.0356L13.9935 12.0362Z" fill="white"/>
                        </svg>
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
                    <div className={`${styles.bet}`}>
                        <p>Enter the amount</p>
                        <input className={`${styles.sum}`} type="text" placeholder="0.00"></input>
                    </div>
                </div>
                <div className={`${styles.players}`}>

                </div>
            </div>
            <div className={`${styles.latestgames}`}>

            </div>
        </div>
    );
}