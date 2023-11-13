import {stylesBadge, stylesContent, stylesTable} from "@/styles/transactions";
import Image from 'next/image';
export default function BetsHistoryList() {

    const tableData = [
        {
            id: '1',
            icon: '/coinflip_bet_icon.svg',
            game: 'Coinflip',
            date: '24 Aug 2023 19:12:08',
            image: '/coins/USDT.svg',
            amount: 50,
            status: 'Win',
            badgeColor: stylesBadge.green,
            imageadpt: '/stcancel.svg'
        },
        {
            id: '2',
            icon: '/dice_bet_icon.svg',
            game: 'Dice',
            date: '24 Aug 2023 19:12:08',
            image: '/coins/USDT.svg',
            amount: 50,
            status: 'Lose',
            badgeColor: stylesBadge.red,
            imageadpt: '/stwait.svg'
        },
        {
            id: '3',
            icon: '/jackpot_bet_icon.svg',
            game: 'Jackpot',
            date: '24 Aug 2023 19:12:08',
            image: '/coins/USDT.svg',
            amount: 50,
            status: 'Lose',
            badgeColor: stylesBadge.red,
            imageadpt: '/stdone.svg'
        },
    ];

    return (<div className={`${stylesContent.block}`}>
            <div className={`${stylesContent.header}`}>
                <div className={`${stylesContent.title}`}>History</div>
            </div>
            <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                <div className={`${stylesTable.table}`}>
                    <div className={`${stylesTable.row} ${stylesTable.header} grid grid-cols-5`}>
                        <div className={`${stylesTable.col} col-span-1`}>Game</div>
                        <div className={`${stylesTable.col} col-span-2`}>Time</div>
                        <div className={`${stylesTable.col} col-span-1`}>Amount</div>
                        <div className={`${stylesTable.col} col-span-1 text-right`}>Status</div>
                    </div>
                    {tableData.map((item) => (
                        <div className={`${stylesTable.row} grid grid-cols-5`} key={item.id}>
                            <div className={`${stylesTable.col} col-span-1`}><Image width={16} height={16} src={item.icon} alt="coin"/>{item.game}</div>
                            <div className={`${stylesTable.col} col-span-2`}>{item.date}</div>
                            <div className={`${stylesTable.col} col-span-1`}>
                                <Image width={52} height={52} src={item.image} alt="coin"/>
                                {item.amount}
                            </div>
                            <div className={`${stylesTable.col} col-span-1 text-right`}>
                        <span
                            className={`${stylesBadge.badge} ${item.badgeColor} ${stylesBadge.small} ${stylesBadge.round}`}>{item.status}
                        </span>
                                <span
                                    className={`${stylesBadge.adtpimg}`}><Image width={52} height={52} src={item.imageadpt} alt="coin"/>
                        </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
