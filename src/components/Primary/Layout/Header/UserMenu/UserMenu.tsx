import Link from "next/link";
import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";

import styles from "../header.module.css"

type UserMenuProps = {
    onLogout: () => void;
};

export default function UserMenu({onLogout}: UserMenuProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className="flex flex-row">
                <Menu.Button className="btn dropdown">
                    <img className="avatar" src="/Avatar.png" alt="ava"/>
                    janstay
                </Menu.Button>
                <Menu.Button className="btn chat">
                    <img src="/chaticon.svg" alt="chat" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="dropdown-list account absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y focus:outline-none">
                    <Menu.Item>
                        <Link href="#" className="dropdown-item">
                            <div className={`${styles.userName} py-1`}>
                                <img className={`${styles.avatar}`} src="/Avatar.png" alt=""/>
                                <div className={`${styles.userId}`}>
                                    janstay
                                    <span>ID: 420848</span>
                                </div>
                            </div>
                        </Link>
                    </Menu.Item>
                    <div className="divider py-1">
                        <Menu.Item>
                            <Link href="#" className="dropdown-item">
                                <img src="/document.svg" alt=""/>
                                Edit
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/settings/account" className="dropdown-item">
                                <img src="/settings.svg" alt=""/>
                                Settings
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/transactions/bets" className="dropdown-item">
                                <img src="/clock.svg" alt=""/>
                                Bets
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="#" className="dropdown-item">
                                <img src="/shield.svg" alt=""/>
                                Provably Fair
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/support" className="dropdown-item">
                                <img src="/supporting.svg" alt=""/>
                                Support
                            </Link>
                        </Menu.Item>
                    </div>
                    <div className="divider py-1">
                        <Menu.Item>
                            <Link href="#" className="dropdown-item logout" onClick={onLogout}>
                                <img src="/log-out.svg" alt=""/>
                                Logout
                            </Link>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}