import Link from "next/link";
import Notification from "./Notifications";
import UserMenu from "./UserMenu";
import styles from "./header.module.css";
import { useState } from "react";
import SignUpPopup from "./SignUpPopup"; 

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
            <img src="/logo.svg" alt="" />
            BetShark
          </Link>

          <ul className={`${styles.navigation}`}>
            <li>
              <Link href="#">Terms of use</Link>
            </li>
            <li>
              <Link href="#">Provably fair</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Live Payouts</Link>
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
              <img src="/present.svg" alt="" />
            </Link>
            <Link href="#" className="btn">
              <img src="/supporting.svg" alt="" />
            </Link>

            <Notification />
            <UserMenu onLogout={handleLogout} />
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

export default Header;
