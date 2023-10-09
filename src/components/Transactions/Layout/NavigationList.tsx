"use client";

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import Image from 'next/image';
import stylesContent from '../../../styles/transactions/transactions__content.module.css';
import stylesNavigation from '../../../styles/transactions/transactions__navigation.module.css';

export default function NavigationList() {
    const items = [
        {id: 1, text: 'Deposit', link: '/transactions/deposit', icon: '/credit-card.svg'},
        {id: 2, text: 'Withdrawal', link: '/transactions/withdrawal', icon: '/withdrawl.svg'},
        {id: 3, text: 'Bets', link: '/transactions/bets', icon: '/clock.svg'},
        {id: 4, text: 'Transfer', link: '/transactions/transfer', icon: '/coin-stack.svg'},
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
                    <Image width={20} height={20} alt="icon" src="/document-white.svg" className={stylesContent.icon}/>
                    <div className={stylesContent.title}>Transactions</div>
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