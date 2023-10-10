import Link from "next/link";
import Notification from "./Notifications/Notifications";
import UserMenu from "./UserMenu/UserMenu";
import styles from "./header.module.css";
import {useState} from "react";
import Image from 'next/image';
import SignUpPopup from "./SignUpPopup/SignUpPopup";

export const Header = () => {

    const [isAuth, setIsAuth] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const toggleSignUpForm = () => {
        setShowSignUpForm(!showSignUpForm);
    };

    const handleLogin = () => {
        setIsAuth(true);
    };

    const handleSignUp = () => {
        setIsAuth(true);
    };

    const handleLogout = () => {
        setIsAuth(false);
    };

    return (
        <header className={isAuth ? `${styles.headerAuth}` : `${styles.header}`}>
            <div className={isAuth ? `${styles.wrapperAuth}` : `${styles.wrapper}`}>
                <div className={`${styles.navWrapper}`}>
                    <Link href="/" className={`${styles.logo}`}>
                        <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                        BetShark
                    </Link>

                    <ul className={`${styles.navigation}`}>
                        <li>
                            <Link href="/termsofuse">Terms of use</Link>
                        </li>
                        <li>
                            <Link href="/provablyfair">Provably fair</Link>
                        </li>
                        <li>
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/livepayouts">Live Payouts</Link>
                        </li>
                    </ul>
                </div>

                {isAuth ? (
                    <div className="flex">
                        <Link href="#" className="btn sum">
                            10 004 250.<span>19</span>
                        </Link>
                        <Link href="/transactions" className="btn blue">
                            Deposit
                        </Link>
                        <Link href="#" className="btn">
                            <Image src="/present.svg" alt="present" width={20} height={20}/>
                        </Link>
                        <Link href="#" className="btn">
                            <Image src="/supporting.svg" alt="support" width={20} height={20}/>
                        </Link>

                        <Notification/>
                        <UserMenu onLogout={handleLogout}/>
                    </div>
                ) : (
                    <div className={`${styles.loginPanel}`}>
                        <button onClick={handleLogin} className={`${styles.login}`}>
                            Login
                        </button>
                        <button onClick={toggleSignUpForm} className={`${styles.signUp}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M9.99996 4.16667V15.8333M4.16663 10H15.8333"
                                    stroke="white"
                                    strokeWidth="1.67"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Sign up
                        </button>
                        {showSignUpForm && (
                            <SignUpPopup
                                handleSignUp={handleSignUp}
                                onClose={toggleSignUpForm}
                            />
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};