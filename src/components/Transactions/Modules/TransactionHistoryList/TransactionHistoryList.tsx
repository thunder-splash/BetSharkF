import {stylesBadge, stylesContent, stylesTable} from "@/styles/transactions";
import Image from 'next/image';
export default function TransactionHistoryList() {

    const tableData = [
        {
            id: '1',
            date: '24 Aug 2023 19:12:08',
            image: '/coins/USDT.svg',
            amount: 50,
            status: 'Cancel',
            badgeColor: stylesBadge.red,
            imageadpt: '/stcancel.svg'
        },
        {
            id: '2',
            date: '24 Aug 2023 19:12:08',
            image: '/coins/USDT.svg',
            amount: 50,
            status: 'Process',
            badgeColor: stylesBadge.orange,
            imageadpt: '/stwait.svg'
        },
        {
            id: '3',
            date: '24 Aug 2023 19:12:08',
            image: '/coins/USDT.svg',
            amount: 50,
            status: 'Successful',
            badgeColor: stylesBadge.green,
            imageadpt: '/stdone.svg'
        },
    ];

    return (<div className={`${stylesContent.block}`}>
            <div className={`${stylesContent.header}`}>
                <div className={`${stylesContent.title}`}>History</div>
            </div>
            <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                <div className={`${stylesTable.table}`}>
                    <div className={`${stylesTable.row} ${stylesTable.header} grid grid-cols-12`}>
                        <div className={`${stylesTable.col} col-span-5`}>Time</div>
                        <div className={`${stylesTable.col} col-span-4`}>Amount</div>
                        <div className={`${stylesTable.col} col-span-3 text-right`}>Status</div>
                    </div>
                    {tableData.map((item) => (
                        <div className={`${stylesTable.row} grid grid-cols-12`} key={item.id}>
                            <div className={`${stylesTable.col} col-span-5`}>{item.date}</div>
                            <div className={`${stylesTable.col} col-span-4`}>
                                <Image width={52} height={52} src={item.image} alt="coin"/>
                                {item.amount}
                            </div>
                            <div className={`${stylesTable.col} col-span-3 text-right`}>
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
