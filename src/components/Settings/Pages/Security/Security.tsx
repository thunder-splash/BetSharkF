"use client";

import {stylesContent, stylesForm, style} from '../../../../styles/settings';
import Image from 'next/image';

export default function Security() {

    return (
        <div>
            <div className={`${stylesContent.block}`}>
                <div className={`${stylesContent.header}`}>
                    <div className={`${stylesContent.title}`}>Security</div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                    <div className={`${stylesForm.formGroup} ${stylesForm.iconRight} flex-col`}>
                        <label htmlFor="username">Old password</label>
                        <div className="relative">
                            <input id="username" type="password" placeholder="••••••••"/>
                            <Image width={20} height={20} src="/eye.svg" alt="eye-icon" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup} ${stylesForm.iconRight} flex-col`}>
                        <label htmlFor="username">New password</label>
                        <div className="relative">
                            <input id="username" type="password" placeholder="••••••••"/>
                            <Image width={20} height={20} src="/eye.svg" alt="eye-icon" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup} ${stylesForm.iconRight} flex-col`}>
                        <label htmlFor="username">Confirm new password</label>
                        <div className="relative">
                            <input id="username" type="password" placeholder="••••••••"/>
                            <Image width={20} height={20} src="/eye.svg" alt="eye-icon" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup}`}>
                        <button className="w-full mt-4">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}