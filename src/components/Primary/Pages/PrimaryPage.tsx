"use client";

import Link from "next/link";
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
            <section className='main-section'>
                <h1 className='h1onpage'>New era of online<br></br> gaming crypto casino</h1>
                <p className='subtextmain'>We provide a $3,000 welcome bonus for all new players.</p>
                <button className='join-button'>Join Now & Play</button>
            </section>
            <section className='main-section_cards'>
                <p className='secondtitlet'>There's a reason 200 000 worldwide players rate us so good</p>
                <p className='secondtitleb'>ACTUALLY THERE ARE A LOT OF REASONS.</p>
                <div className='card-grid'>
                    {cardsMain.map((card) => (
                        <div key={card.id} className='cardmain'>
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
                    {cardsHiw.map((card) => (
                        <div key={card.id} className='cardhiw'>
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
                    {cardsRec.map((card) => (
                        <div key={card.id} className='cardrec'>
                            <img src={card.image}/>
                            <button className='playnow'>Play now</button>
                        </div>
                    ))}
                </div>
                <div className="rec-pay">
                    <p>Want to play? Deposit now</p>
                    {recCoins.map((coin) => (
                        <div key={coin.id}>
                            <img src={coin.image}/>
                        </div>
                    ))}
                    <Link href="/transactions/deposit" className="recbut">
                        Deposit
                    </Link>
                </div>
            </section>
            <section className='vip-system'>
                <h2 className="text-center">The #1 VIP system</h2>
                <p className='abouttext text-center'>We tell you more about the possible bonuses of each status.</p>
                <div className="vip-system-container p-4 rounded-lg w-full max-w-screen-lg mx-auto grid grid-cols-4 gap-4">
                    <div className="vip-row-images col-span-4 flex justify-center">
                        <img src="/vip_crd_regular.svg" className="mx-4" />
                        <img src="/vip_crd_silver.svg" className="mx-4" />
                        <img src="/vip_crd_gold.svg" className="mx-4" />
                    </div>
                    <div className="vip-row col-span-4 p-4 rounded-lg grid grid-cols-4 gap-4">
                        <div className="vip-column col-span-1">
                            <p>Your turnover</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>$0-10,000</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>$10,000 - 20,000</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>$20,000+</p>
                        </div>
                    </div>
                    <div className="vip-row col-span-4 p-4 rounded-lg grid grid-cols-4 gap-4">
                        <div className="vip-column col-span-1">
                            <p>Withdrawal fee</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>1%</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>0.5%</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>0</p>
                        </div>
                    </div>
                    <div className="vip-row col-span-4 p-4 rounded-lg grid grid-cols-4 gap-4">
                        <div className="vip-column col-span-1">
                            <p>Weekly bonus</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>#402</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>#402</p>
                        </div>
                        <div className="vip-column col-span-1">
                            <p>#402</p>
                        </div>
                    </div>
                </div>
                </section>

            <section className='live-payouts'>
                <h2>Live payouts & latest bet</h2>
                <p className='abouttext'>The latest payouts and bets are collected here.</p>
                <LivePayouts />
            </section>
        </>
    );
}