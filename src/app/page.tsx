import Link from "next/link";

export default function Home() {

    const cardsMain = [
        { image: '/speed.svg', title: 'Speed', subtitle: 'Instant deposits and withdrawals' },
        { image: '/secure.svg', title: 'Security', subtitle: '2FA/SLL to protect your data and funds' },
        { image: '/support.svg', title: 'Support', subtitle: 'Support service is ready to help you 24/7' },
        { image: '/games.svg', title: 'Games', subtitle: 'The best crypto casino experience' },
        { image: '/vip.svg', title: 'VIP', subtitle: 'VIP program with the highest rewards' },
        { image: '/rtp.svg', title: 'Highest RTP', subtitle: 'The RTP in our games is 99% percent' },
    ];

    const cardsHiw = [
        { image: '/one.svg', title: 'Sign up', subtitle: 'Instant deposits and withdrawals' },
        { image: '/two.svg', title: 'Make a deposit', subtitle: 'Accept all major cryptocurrencies.' },
        { image: '/three.svg', title: 'Play', subtitle: 'Spin the reels until you get a big win.' },
    ];

    const cardsRec = [
        { image: '/jackpot.svg', },
        { image: '/roulette.svg', },
        { image: '/coinflip.svg', },
        { image: '/dice.svg', },
    ];

    const recCoins = [
        { image: '/btc.svg', },
        { image: '/bch.svg', },
        { image: '/eth.svg', },
        { image: '/ltc.svg', },
        { image: '/doge.svg', },
        { image: '/usdt.svg', },
        { image: '/trx.svg', },
        { image: '/ada.svg', },
        { image: '/bnbbsc.svg', },
        { image: '/xrp.svg', },
    ];

    return (
        <>
            <section className='main-section'>
                <h1 className='h1onpage'>New era of online<br></br> gaming crypto casino</h1>
                <p className='subtextmain'>We provide a $3,000 welcome bonus for all new players.</p>
                <button className='join-button'>Join Now & Play</button>
            </section>
            <section className='main-section_cards'>
                <p className='secondtitlet'>There's a reason 200 000 worldwide players rate us so good</p>
                <p className='secondtitleb'>ACTUALLY THERE ARE A LOT OF REASONS.</p>
                <div className='card-grid'>
                    {cardsMain.map((card, i) => (
                        <div key={i} className='cardmain'>
                            <img src={card.image}/>
                            <p className="cardtt">{card.title}</p>
                            <p className="cardut">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className='how-it-works'>
                <h2 className='pmtitle'>How it all works</h2>
                <p className='abouttext'>Step-by-step instructions on how it all works.</p>
                <div className='hiw-grid'>
                    {cardsHiw.map((card, i) => (
                        <div key={i} className='cardhiw'>
                            <img src={card.image}/>
                            <p className="hiwtt">{card.title}</p>
                            <p className="hiwut">{card.subtitle}</p>
                        </div>
                    ))}
                </div>
                <button className='join-button-hiw'>JOIN NOW & PLAY</button>
            </section>
            <section className='recommended-game'>
                <h2>Recommended game</h2>
                <p className='abouttext'>This is a selection of our games, you can play any of them.</p>
                <div className='rec-grid'>
                    {cardsRec.map((card, i) => (
                        <div key={i} className='cardrec'>
                            <img src={card.image}/>
                            <button className='playnow'>Play now</button>
                        </div>
                    ))}
                </div>
                <div className="rec-pay">
                    <p>Want to play? Deposite now</p>
                    {recCoins.map((coin, i) => (
                        <div>
                            <img src={coin.image}/>
                        </div>
                    ))}
                    <Link href="/transactions" className="recbut">
                        Deposit
                    </Link>
                </div>
            </section>
            <section className='vip-system'>
                <h2>The #1 VIP system</h2>
                <p className='abouttext'>We tell you more about the possible bonuses of each status.</p>
            </section>
            <section className='live-payouts'>
                <h2>Live payouts & latest bet</h2>
                <p className='abouttext'>The latest payouts and bets are collected here.</p>
            </section>
        </>
    )
}