import React from 'react';
import Image from 'next/image';
import styles from './ProvablyFair.module.css';

export default function ProvablyFair() {
    return (
        <div className={styles.mainwr}>
            <img src="/greenbgflow.svg" alt="light" className={styles.greenbg}/>
            <div className={styles.container}>
                <div className={styles.headerContainer}>
                    <div className={styles.headerName}>
                        <Image width={20} height={20} src="/shield-white.svg" alt="shield Icon" className={styles.icon} />
                        <h1>Game round check</h1>
                    </div>
                    <p>Enter a hashed server seed of game to check for fair.</p>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.headerForm}>
                        <h2>Server seed (hashed)</h2>
                        <div className={styles.inpsec}>
                            <input type="text" placeholder="Enter a server seed" className={styles.inputField}/>
                            <button>Check</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.pfinfoCont}>
                <h3>Provably fair</h3>
                <p>To create a roll number, BetShark uses a multi-step process to create a roll number 0-99.99. Both client and server seeds and a nonce are combined with HMAC_SHA512 which will generate a hex string. The nonce is the # of bets you made with the current seed pair. First five characters are taken from the hex string to create a roll number that is 0-1,048,575. If the roll number is over 999,999, the process is repeated with the next five characters skipping the previous set. This is done until a number less than 1,000,000 is achieved. In the astronomically unlikely event that all possible 5 character combinations are greater, 99.99 is used as the roll number. The resulting number 0-999,999 is applied a modulus of 10^4, to obtain a roll number 0-9999, and divided by 10^2 to result a 0-99.99 number.</p>
                <div className={styles.codeSec}>
                    <Image width={864} height={412} src="/code.svg" alt="codeimg" className={styles.imginto} />
                </div>
            </div>
        </div>
    );
}
