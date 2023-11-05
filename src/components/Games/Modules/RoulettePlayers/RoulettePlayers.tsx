import styles from "./rouletteplayers.module.css";
import Image from "next/image";

type ListItem = {
    id: number;
    name: string;
    bet: string;
};
export default function RoulettePlayers() {

    const tableData: ListItem[] = [
        {
            id: 1,
            name: 'паша',
            bet: '1234',
        },
        {
            id: 2,
            name: 'Pants`of Fortune',
            bet: '1234',
        },
        {
            id: 3,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 4,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 5,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 6,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 7,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 8,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 9,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 10,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 11,
            name: 'Вася Пупкин',
            bet: '1',
        },
        {
            id: 12,
            name: 'Вася Пупкин',
            bet: '1',
        },
    ];

    const columns = [
        { image: "/redsquare.svg", text: "X2", headerStyle: styles.headerRed, buttonStyle: styles.buttonRed, pStyle: styles.pRed , users:"12", adaptheaderStyle: styles.adaptheaderRed,},
        { image: "/greensquare.svg", text: "X14", headerStyle: styles.headerGreen, buttonStyle: styles.buttonGreen, pStyle: styles.pGreen, users:"23", adaptheaderStyle: styles.adaptheaderGreen, },
        { image: "/graysquare.svg", text: "X2", headerStyle: styles.headerGray, buttonStyle: styles.buttonGray, pStyle: styles.pGray, users:"111", adaptheaderStyle: styles.adaptheaderGray, }
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.adaptivebar}>
                {columns.map((column, index) => (
                <div key={index} className={`${styles.block} ${column.adaptheaderStyle}`}>
                    <div className={styles.blockheader}>
                        <Image src={column.image} alt="Icon" width={24} height={24}/>
                        <p className={column.pStyle}>{column.text}</p>
                    </div>
                    <button className={column.buttonStyle}>Play</button>
                </div>
                ))}
            </div>

            {columns.map((column, index) => (
                <div key={index} className={styles.column}>
                    <div className={column.headerStyle}>
                        <div className={styles.xsection}>
                            <Image src={column.image} alt="Icon" width={24} height={24}/>
                            <p className={column.pStyle}>{column.text}</p>
                        </div>
                        <button className={column.buttonStyle}>Play</button>
                    </div>
                    <div key={index} className={`${styles.gameinfo} ${styles[`gameinfo-${index}`]}`}>
                        <div className={styles.gameinfosec}>
                            <Image src={column.image} alt="Icon" width={24} height={24} className={`${styles.imgin} ${styles[`imgin-${index}`]}`}/>
                            <p className={`${styles.gamebet} ${styles[`gamebet-${index}`]}`}>Total bet:
                                {new Intl.NumberFormat('us-US', {
                                    currency: 'USD',
                                    style: 'currency',
                                }).format(parseFloat("0"))}
                            </p>
                        </div>
                        <div className={`${styles.xsection} ${styles[`xsection-${index}`]}`} >
                            <p className={`${styles.usersnum} ${styles[`usersnum-${index}`]}`}>{column.users}</p>
                            <Image src="/users.svg" alt="users" width={20} height={20} className={`${styles.usersimg} ${styles[`usersimg-${index}`]}`}/>
                        </div>
                    </div>
                    <div className={styles.list}>
                        <div className={styles.list_header}>
                            <p>USER</p>
                            <p>RATE</p>
                        </div>
                        <div className={styles.playeroverflow}>
                            {tableData.map((item , index) => (
                                <div key={item.id} className={index % 2 === 0 ? styles.playersection : styles.playersectionsec}>
                                    <div className={styles.prof}>
                                        <Image src="/Avatar.png" alt="profile" width={32} height={32}/>
                                        <p className={styles.name}>{item.name}</p>
                                    </div>
                                    <p className={styles.bet}>
                                        {new Intl.NumberFormat('us-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(parseFloat(item.bet))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}