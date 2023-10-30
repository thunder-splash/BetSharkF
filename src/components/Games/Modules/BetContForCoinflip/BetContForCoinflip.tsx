import styles from "./betcontforcoinflip.module.css";
import {useState} from "react";
import Image from "next/image";

export default function BetContForCoinflip() {

    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    const handleClick1 = () => {
        setIsClicked1(!isClicked1);
    };

    const handleClick2 = () => {
        setIsClicked2(!isClicked2);
    };

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
        <div className={styles.bet}>
            <p>Enter the amount</p>
            <div className={styles.maininput}>
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
                <div className={styles.bitbuttons}>
                    {/*<button> <Image src="/btcfront.png" alt="btc" width={32} height={32}/></button>*/}
                    {/*<button> <Image src="/btcback.jpg" alt="btc" width={32} height={32}/></button>*/}
                    <button onClick={handleClick1}
                            className={isClicked1 ? 'btcbtrue' : 'btcbdef'}>btc1</button>
                    <button onClick={handleClick2}
                            className={isClicked2 ? 'btcbtrue' : 'btcbdef'}>btc2</button>
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
    );
}