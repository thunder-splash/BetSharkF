import Link from "next/link";
import Image from 'next/image';
import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <>
            <footer className={`${styles.footer} container grid grid-cols-12`}>
                <div className="col-span-6">
                    <Link href="/" className={`${styles.logo}`}>
                        <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                        BetShark
                    </Link>
                    <p>
                        BetShark — is owned and operated by Nonce Gaming B.V. It is licensed
                        and regulated by the Government of Curaçao under the gaming license
                        8048/JAZ.
                    </p>
                </div>
                <div className="col-span-3">
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
                <div className="col-span-2">
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
                <div className="col-span-1">
                    <Link href="/">
                        <img src="/Telegram.svg" alt=""/>
                    </Link>
                </div>
            </footer>
            <div className={styles.rights}>
                <p className={styles.rtext}>© 2023, All Rights Reserved</p>
            </div>
        </>
    );
};