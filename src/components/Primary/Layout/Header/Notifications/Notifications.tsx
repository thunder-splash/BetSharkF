import Link from "next/link";
import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";

export default function Notification() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="btn">
                    <img src="/bell.svg" alt="bell"/>
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
                    className="dropdown-list absolute right-0 z-10 mt-2 w-96 origin-top-right divide-y focus:outline-none">
                    <Menu.Item>
                        <div className="dropdown-item notification-header">
                            Notifications <span>Mark all as read</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="#" className="dropdown-item notification active">
                            <div className="title">Ticket #355110</div>
                            <p>
                                Ahhh, I won the battle without losing a single ship and the
                                mission was not completed, why is that?
                            </p>
                            <div className="date">5h ago</div>
                        </Link>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}