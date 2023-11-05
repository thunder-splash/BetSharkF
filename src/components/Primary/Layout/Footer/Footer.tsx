import Link from "next/link";
import Image from 'next/image';
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <>
            <footer className={`${styles.footer}  container grid md:grid-cols-12 w-full grid-cols-1`}>
                <div className="col-span-6 pb-10">
                    <Link href="/" className={`${styles.logo}`}>
                        <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                        BetShark
                    </Link>
                    <p className="w-full">
                        BetShark — is owned and operated by Nonce Gaming B.V. It is licensed
                        and regulated by the Government of Curaçao under the gaming license
                        8048/JAZ.
                    </p>
                </div>
                <div className="md:col-span-3  w-full col-span-1">
                    <div className={`${styles.title}`}>BetShark</div>
                    <ul className={`${styles.list}`}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/termsofuse">Terms of use</Link>
                        </li>
                        <li>
                            <Link href="/support">Support</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2  w-full col-span-1">
                    <div className={`${styles.title}`}>Games</div>
                    <ul className={`${styles.list}`}>
                        <li>
                            <Link href="/">Jackpot</Link>
                        </li>
                        <li>
                            <Link href="/">Roulette</Link>
                        </li>
                        <li>
                            <Link href="/">CoinFlip</Link>
                        </li>
                        <li>
                            <Link href="/">Dice</Link>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-1 w-full col-span-1">
                    <Link href="/">
                        <img src="/Telegram.svg" alt="tg"/>
                    </Link>
                </div>
            </footer>
            <div className={styles.rights}>
                <p className={styles.rtext}>© 2023, All Rights Reserved</p>
            </div>
        </>
    );
};