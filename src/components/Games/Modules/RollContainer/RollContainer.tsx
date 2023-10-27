import styles from "./rollcontainer.module.css";
import Image from "next/image";

export default function RollContainer() {

    return (
        <div className={`${styles.roll}`}>
            <div className={`${styles.header}`}>
                <p>Before the start</p><span>40 seconds</span>
            </div>
            <div className={`${styles.spin}`}>
                крутилочка
            </div>
            <div className={`${styles.rollhistory}`}>
                <p>Previous rolls</p>
            </div>
        </div>
    );
}