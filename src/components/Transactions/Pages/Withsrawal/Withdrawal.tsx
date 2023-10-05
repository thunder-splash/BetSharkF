"use client";

import {stylesContent, stylesForm, style} from '../../../../styles/transactions';
import TransactionHistoryList from "@/components/Transactions/Modules/TransactionHistoryList/TransactionHistoryList";

export default function Withdrawal() {

    return (
        <div>
            <div className={`${stylesContent.block}`}>
                <div className={`${stylesContent.header}`}>
                    <div className={`${stylesContent.title}`}>Withdrawal</div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                    <div className={`${style.coins}`}>
                        <div className={style.coinItem}>
                            <img src="/coins/USDT.svg" className={style.icon} alt=""/>
                            USDT
                        </div>
                    </div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                    <div className={`${stylesForm.formGroup} flex-col`}>
                        <label htmlFor="username">Enter the amount</label>
                        <div className="relative">
                            <input id="username" type="text" placeholder="0"/>
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup} flex-col`}>
                        <label htmlFor="username">Your wallet address</label>
                        <div className="relative">
                            <input id="username" type="text" placeholder="Enter your wallet"/>
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup}`}>
                        <button className="w-full mt-4">Create</button>
                    </div>
                </div>
            </div>
            <TransactionHistoryList/>
        </div>
    );
}