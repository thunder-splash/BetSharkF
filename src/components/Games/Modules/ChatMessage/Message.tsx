import { useState } from 'react';
import styles from './message.module.css'

interface MessageProps {
    avatar: string;
    name: string;
    perk?: string;
    time: string;
    message?: string;
}

export default function Message(props: MessageProps){
    let newProps = props;

    let [userName, setUserName] = useState("janstay");

    return(
        <div className={`${styles.main}`}>
            <img className={`${styles.avatar}`} src={newProps.avatar} width={'40px'}></img>
            <div className={`${styles.content}`}>
                <div className={`${styles.wrapper}`}>
                    <div className={`${styles.name}`}>
                        <h2>{newProps.name}</h2>
                        {userName === newProps.name ? <h3 className={`${styles.me}`}>me</h3> : <h3>{newProps.perk}</h3>}
                    </div>
                    <div className={`${styles.time}`}>{newProps.time}</div>
                </div>
                <div className={`${styles.message}`}>
                    <h3>{newProps.message}</h3>
                </div>
            </div>
        </div>
    );
}
