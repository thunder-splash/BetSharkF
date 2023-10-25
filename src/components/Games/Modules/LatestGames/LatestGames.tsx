"use client";

import styles from "./latestgames.module.css"
import Image from 'next/image';
import {useState} from 'react';

export default function LatestGames() {

    const [value, setValue] = useState<string>("0.00");

    const divideByTwo = () => {
        const numValue = Number(value);
        setValue((Math.floor(numValue / 2)).toString());
    };

    const multiplyByTwo = () => {
        const numValue = Number(value);
        setValue((Math.floor(numValue * 2)).toString());
    };

    const addValue = (increment: number) => {
        const numValue = Number(value);
        setValue((numValue + increment).toString());
    };

    return (
        <div className={`${styles.game}`}>
            <div className={`${styles.header}`}>
                <img src="/Ellipse%2087.svg" alt="light" className={styles.jackpot__light1}></img>
                <Image src="/jackpoticon.svg" alt="Jackpot Icon" width={20} height={20}/>
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
            <div className={styles.footer}>
                <div className={styles.bet}>
                    <p>Enter the amount</p>
                    <div className={styles.input__container}>
                        <input
                            className={styles.sum}
                            type="text"
                            placeholder="0"
                            value={value}
                            onChange={e => {
                                const val = e.target.value;

                                if (/^\d+$/.test(val) || val === "") {
                                    setValue(val.replace(/^0+/, "") || "0");
                                } else {
                                    alert("Error: Please enter only digits.");
                                }
                            }}
                        />
                        <div className={styles.button__container}>
                            <button onClick={divideByTwo}>/2</button>
                            <button onClick={multiplyByTwo}>x2</button>
                        </div>
                    </div>
                    <div className={styles.buttonimp__container}>
                        <button onClick={() => addValue(1)}>+1</button>
                        <button onClick={() => addValue(5)}>+5</button>
                        <button onClick={() => addValue(10)}>+10</button>
                        <button onClick={() => addValue(100)}>+100</button>
                        <button onClick={() => addValue(500)}>+500</button>
                        <button onClick={() => setValue("ALL")}>ALL</button>
                    </div>
                </div>
                <button onClick={() => console.log('Play button clicked!')} className={styles.play__button}>
                    Play
                </button>
            </div>
        </div>
    );
}
