"use client";

import {stylesContent, stylesForm, stylesBadge, stylesTable} from "@/styles/transactions";
import TransactionHistoryList from "@/components/Transactions/Modules/TransactionHistoryList/TransactionHistoryList";

export default function Transfer() {
    return (
        <div>
            <div className={`${stylesContent.block}`}>
                <div className={`${stylesContent.header}`}>
                    <div className={`${stylesContent.title}`}>Transfer</div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                    <div className={`${stylesForm.formGroup} flex-col`}>
                        <label htmlFor="username">Recipient username</label>
                        <div className="relative">
                            <input id="username" type="text" placeholder="Enter username"/>
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup} flex-col`}>
                        <label htmlFor="username">Enter the amount</label>
                        <div className="relative">
                            <input id="username" type="text" placeholder="0"/>
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
