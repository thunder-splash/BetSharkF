"use client";

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import Image from 'next/image';
import stylesContent from '../../../styles/settings/settings__content.module.css';
import stylesNavigation from '../../../styles/settings/settings__navigation.module.css';

export default function NavigationList() {
    const items = [
        {id: 1, text: 'Account', link: '/settings/account', icon: '/user.svg'},
        {id: 2, text: 'Social media', link: '/settings/socialmedia', icon: '/link.svg'},
        {id: 3, text: 'Verification', link: '/settings/verification', icon: '/file-plus.svg'},
        {id: 4, text: 'Security', link: '/settings/security', icon: '/shield.svg'},
    ];

    const [searchParams] = useSearchParams();
    const [activeLink, setActiveLink] = useState(items[0].link);

    useEffect(() => {
        const savedLink = localStorage.getItem('activeLink');
        if (savedLink) {
            setActiveLink(savedLink);
        }
    }, []);

    const listButtonClick = (link: string) => {
        setActiveLink(link);
        localStorage.setItem('activeLink', link);
    };

    return (
        <div>
            <div className={stylesContent.block}>
                <div className={stylesContent.header}>
                    <Image width={20} height={20} alt="icon" src="/settings-white.svg" className={stylesContent.icon}/>
                    <div className={stylesContent.title}>Settings</div>
                </div>
                <div className={stylesContent.content}>
                    <ul className={stylesNavigation.navigation}>
                        {items.map(item => (
                            <li key={item.id}>
                                <Link href={item.link}>
                                    <div
                                        onClick={() => listButtonClick(item.link)}
                                        className={`${activeLink === item.link ? stylesNavigation.active : ""}`}
                                    >
                                        <Image width={16} height={16} alt="icon" src={item.icon}/>
                                        {item.text}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}