"use client";

import { stylesContent, stylesForm, stylesTable, stylesBadge, style } from '../../../../styles/transactions';
export default function Withdrawal() {

    const tableData = [
        {id: '1', date: '24 Aug 2023 19:12:08', image: '/coins/USDT.svg', amount: 50, status: 'Cancel', badgeColor: stylesBadge.red},
        {id: '2', date: '24 Aug 2023 19:12:08', image: '/coins/USDT.svg', amount: 50, status: 'Process', badgeColor: stylesBadge.orange},
        {id: '3', date: '24 Aug 2023 19:12:08', image: '/coins/USDT.svg', amount: 50, status: 'Process', badgeColor: stylesBadge.orange},
    ];

    return (
        <div>
            <div className={`${stylesContent.block}`}>
                <div className={`${stylesContent.header}`}>
                    <div className={`${stylesContent.title}`}>Withdrawal</div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                    <div className={`${style.coins}`}>
                        <div className={style.coinItem}>
                            <img src="/coins/USDT.svg" className={style.icon} alt="" />
                            USDT
                        </div>
                    </div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                    <div className={`${stylesForm.formGroup} flex-col`}>
                        <label htmlFor="username">Enter the amount</label>
                        <div className="relative">
                            <input id="username" type="text" placeholder="0" />
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup} flex-col`}>
                        <label htmlFor="username">Your wallet address</label>
                        <div className="relative">
                            <input id="username" type="text" placeholder="Enter your wallet" />
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup}`}>
                        <button className="w-full mt-4">Create</button>
                    </div>
                </div>
            </div>
            <div className={`${stylesContent.block}`}>
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
                        <div className={`${stylesTable.row} grid grid-cols-12`}>
                            {tableData.map((item) => (
                                <div className={`${stylesTable.row} grid grid-cols-12`} key={item.id}>
                                    <div className={`${stylesTable.col} col-span-5`}>{item.date}</div>
                                    <div className={`${stylesTable.col} col-span-4 text-white`}>
                                        <img src={item.image} alt="" />
                                        {item.amount}
                                    </div>
                                    <div className={`${stylesTable.col} col-span-3 text-right`}>
                                        <span className={`${stylesBadge.badge} ${item.badgeColor} ${stylesBadge.small} ${stylesBadge.round}`}>{item.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}