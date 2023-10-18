"use client"

import styles from "./main.module.css"
import Image from 'next/image';
import {useState} from 'react';


export default function Main() {

    const [value, setValue] = useState<string>("0.00");

    const divideByTwo = () => {
        const numValue = Number(value);
        if (!isNaN(numValue)) {
            setValue((Math.floor(numValue / 2)).toString());
        } else {
            setValue("0.00");
            alert("Error: Please enter a positive number.");
        }
    };

    const multiplyByTwo = () => {
        const numValue = Number(value);
        if (!isNaN(numValue)) {
            setValue((Math.floor(numValue * 2)).toString());
        } else {
            setValue("0.00");
            alert("Error: Please enter a positive number.");
        }
    };

    const addValue = (increment: number) => {
        const numValue = Number(value);
        if (!isNaN(numValue)) {
            setValue((numValue + increment).toString());
        } else {
            setValue("0.00");
            alert("Error: Please enter a positive number.");
        }
    };

    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.game}`}>
                <div className={`${styles.header}`}>
                    <img src="/Ellipse%2087.svg" alt="light" className={styles.jackpot__light1}></img>
                    <Image src="/jackpoticon.svg" alt="Main Icon" width={20} height={20}/>
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
                                placeholder="0.00"
                                value={value}
                                onChange={e => {
                                    const val = e.target.value;
                                    if (val === "" || !isNaN(Number(val))) {
                                        setValue(val);
                                    } else {
                                        setValue("0.00");
                                        alert("Error: Please enter a positive number.");
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
        </div>
    );
}