import styles from "../betcontainer.module.css";
import {useState} from "react";
import Image from "next/image";

export default function BetContainer() {

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
            <div className={styles.profit}>
                <p>Profit</p>
                <div className={styles.input__container2}>
                    <Image src="/dol.svg" alt="icon" width={16} height={16} style={{marginRight: "8px", width: "16px"}}/>
                    <input
                        className={styles.profitinput}
                        type="text"
                        placeholder="0"
                        value={value}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
}