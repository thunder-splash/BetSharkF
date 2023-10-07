import Link from "next/link";
import styles from "./PrimaryPage.module.css"
import LivePayouts from "@/components/Primary/Layout/LivePayouts/LivePayouts";

export default function PrimaryPage() {

    const cardsMain = [
        {id: '1', image: '/speed.svg', title: 'Speed', subtitle: 'Instant deposits and withdrawals'},
        {id: '2', image: '/secure.svg', title: 'Security', subtitle: '2FA/SLL to protect your data and funds'},
        {id: '3', image: '/support.svg', title: 'Support', subtitle: 'Support service is ready to help you 24/7'},
        {id: '4', image: '/games.svg', title: 'Games', subtitle: 'The best crypto casino experience'},
        {id: '5', image: '/vip.svg', title: 'VIP', subtitle: 'VIP program with the highest rewards'},
        {id: '6', image: '/rtp.svg', title: 'Highest RTP', subtitle: 'The RTP in our games is 99% percent'},
    ];

    const cardsHiw = [
        {id: '1', image: '/one.svg', title: 'Sign up', subtitle: 'Instant deposits and withdrawals'},
        {id: '2', image: '/two.svg', title: 'Make a deposit', subtitle: 'Accept all major cryptocurrencies.'},
        {id: '3', image: '/three.svg', title: 'Play', subtitle: 'Spin the reels until you get a big win.'},
    ];

    const cardsRec = [
        {id: '1', image: '/jackpot.svg'},
        {id: '2', image: '/roulette.svg'},
        {id: '3', image: '/coinflip.svg'},
        {id: '4', image: '/dice.svg'},
    ];

    const recCoins = [
        {id: '1', image: '/btc.svg'},
        {id: '2', image: '/bch.svg'},
        {id: '3', image: '/eth.svg'},
        {id: '4', image: '/ltc.svg'},
        {id: '5', image: '/doge.svg'},
        {id: '6', image: '/usdt.svg'},
        {id: '7', image: '/trx.svg'},
        {id: '8', image: '/ada.svg'},
        {id: '9', image: '/bnbbsc.svg'},
        {id: '10', image: '/xrp.svg'}
    ];

    return (
        <>
            <section className={styles.main_section}>
                <div className={styles.mainlsec}>
                    <img src="/mainl1.svg" className={styles.mainl1}></img>
                    <img src="/mainl2.svg" className={styles.mainl2}></img>
                </div>
                <h1 className={styles.h1onpage}>New era of online<br></br> gaming crypto casino</h1>
                <p className={styles.subtextmain}>We provide a $3,000 welcome bonus for all new players.</p>
                <button className={styles.join_button}>Join Now & Play</button>
            </section>
            <section className={styles.main_section_cards}>
                    <img src="/lefttoplight.svg" className={styles.cardsl1}></img>
                    <p className={styles.secondtitlet}>There`s a reason 200 000 worldwide players rate us so good</p>
                    <p className={styles.secondtitleb}>ACTUALLY THERE ARE A LOT OF REASONS.</p>
                    <div className={styles.card_grid}>
                        {cardsMain.map((card) => (
                            <div key={card.id} className={styles.cardmain}>
                                <img src={card.image}/>
                                <p className={styles.cardtt}>{card.title}</p>
                                <p className={styles.cardut}>{card.subtitle}</p>
                            </div>
                        ))}
                    </div>
                    <img src="/rightbottomlight.svg" className={styles.cardsl2}></img>
            </section>
            <section className={styles.how_it_works}>
                <div className={styles.greengrad}></div>
                <h2 className={styles.pmtitle}>How it all works</h2>
                <p className={styles.abouttext}>Step-by-step instructions on how it all works.</p>
                <div className={styles.hiw_grid}>
                    {cardsHiw.map((card) => (
                        <div key={card.id} className={styles.cardhiw}>
                            <img src={card.image}/>
                            <p className={styles.hiwtt}>{card.title}</p>
                            <p className={styles.hiwut}>{card.subtitle}</p>
                        </div>
                    ))}
                </div>
                <button className={styles.join_button_hiw}>JOIN NOW & PLAY</button>
            </section>
            <section className={styles.recommended_game}>
                <h2>Recommended game</h2>
                <p className={styles.abouttext}>This is a selection of our games, you can play any of them.</p>
                <div className={styles.rec_grid}>
                    {cardsRec.map((card) => (
                        <div key={card.id} className={styles.cardrec}>
                            <img src={card.image}/>
                            <button className={styles.playnow}>Play now</button>
                        </div>
                    ))}
                </div>
                <div className={styles.rec_pay}>
                    <p>Want to play? Deposit now</p>
                    {recCoins.map((coin) => (
                        <div key={coin.id}>
                            <img src={coin.image}/>
                        </div>
                    ))}
                    {/* Предполагается, что вы импортируете Link из 'next/link' */}
                    {/* Если это не так, замените Link на соответствующий компонент или элемент */}
                    {/* Если вы используете 'react-router-dom', замените Link на NavLink или RouterLink */}
                    {/* Если вы не используете маршрутизацию, замените Link на button или a, в зависимости от вашего случая */}
                    <Link href="/transactions/deposit" className={styles.recbut}>
                        Deposit
                    </Link>
                </div>
            </section>
            <section className={styles.vip_system}>
                <div className={styles.greengrad}></div>
                <h2 className={styles.pmtitle}>The #1 VIP system</h2>
                <p className={styles.abouttext}>We tell you more about the possible bonuses of each status.</p>
            <div className={styles.vip_system_container}>
                <div className={styles.vip_row_images}>
                    <img src="/vip_crd_regular.svg" className={styles.cardimg}/>
                    <img src="/vip_crd_silver.svg" className={styles.cardimg} />
                    <img src="/vip_crd_gold.svg" className={styles.cardimg} />
                </div>
                <div className={styles.vip_row}>
                    <div className={styles.vip_column}>
                        <p>Your turnover</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>$0-10,000</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>$10,000 - 20,000</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>$20,000+</p>
                    </div>
                </div>
                <div className={styles.vip_row}>
                    <div className={styles.vip_column}>
                        <p>Withdrawal fee</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>1%</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>0.5%</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>0</p>
                    </div>
                </div>
                <div className={styles.vip_row}>
                    <div className={styles.vip_column}>
                        <p>Weekly bonus</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>#402</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>#402</p>
                    </div>
                    <div className={styles.vip_column}>
                        <p>#402</p>
                    </div>
                </div>
            </div>
        </section>
            <section className={styles.live_payouts}>
                <h2>Live payouts & latest bet</h2>
                <p className={styles.abouttext}>The latest payouts and bets are collected here.</p>
                <LivePayouts/>
            </section>
        </>
    );
}