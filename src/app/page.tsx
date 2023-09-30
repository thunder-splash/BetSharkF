export default function Home() {
    return (
        <>
            <section className='main-section'>
                <h1 className='h1onpage'>New era of online<br></br> gaming crypto casino</h1>
                <p className='subtext'>We provide a ,000 welcome bonus for all new players.</p>
                <button className='join-button'>Join Now & Play</button>
            </section>
            <section className='main-section_cards'>
                <p>There's a reason 200 000 worldwide players rate us so good</p>
                <p>ACTUALLY THERE ARE A LOT OF REASONS.</p>
                <div className='card-grid'>
                    {Array(6).fill(null).map((_, i) => (
                        <div key={i} className='card'></div>
                    ))}
                </div>
            </section>
            <section className='how-it-works'>
                <h2>How it all works</h2>
            </section>
            <section className='recommended-game'>
                <h2>Recommended game</h2>
            </section>
            <section className='vip-system'>
                <h2>The #1 VIP system</h2>
            </section>
            <section className='live-payouts'>
                <h2>Live payouts & latest bet</h2>
            </section>
        </>
    )
}