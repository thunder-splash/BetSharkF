"use client";

import {stylesContent, stylesForm, style} from '../../../../styles/settings';
import Image from 'next/image';

export default function Account() {
    const username = "janstay"; // Replace with actual username
    const id = 420848; // Replace with actual ID

    return (
        <div>
            <div className={`${stylesContent.block}`}>
                <div className={`${stylesContent.header}`}>
                    <div className={`${stylesContent.title}`}>Account</div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider} flex items-center`}>
                  <Image width={52} height={52} src="/Avatar.png" className={style.icon} alt="icon"/>
                  <div className="ml-4">
                    <div className="text-white font-inter text-md font-semibold leading-6">{username}</div>
                    <div className={`${stylesContent.id_block}`}>
                        <div className={`${stylesContent.id_txt} text-center font-inter text-xs font-medium leading-5`}>ID: {id}</div>
                    </div>
                  </div>
                </div>
                <div className={`${stylesContent.content} ${stylesContent.divider}`}>
                    <div className={`${stylesForm.formGroup} ${stylesForm.iconLeft}  flex-col`}>
                        <label htmlFor="username">Username</label>
                        <div className="relative">
                            <Image width={20} height={20} src="/user.svg" alt="username-icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input id="username" type="text" placeholder="Enter your username" className="pl-10"/>
                        </div>
                    </div>
                    <div className={`${stylesForm.formGroup} ${stylesForm.iconLeft} flex-col`}>
                        <label htmlFor="email">Email</label>
                        <div className="relative">
                            <Image width={20} height={20} src="/mail.svg" alt="email-icon" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input id="email" type="text" placeholder="Enter your email" className="pl-10"/>
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