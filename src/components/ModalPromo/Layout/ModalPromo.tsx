"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ModalPromo.module.css'

export default function ModalPromo() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        isOpen && (
            <div className={styles.promowrapper}>
                <div className={styles.window}>
                    <div className={styles.promoheader}>
                        <h1>Promocode</h1>
                        <Image className={styles.close} alt="close" width={24} height={24} src="/close.svg" onClick={() => setIsOpen(false)} />
                    </div>
                    <div className={styles.promobody}>
                        <p>Exclusive discounts just for you: activate promo code and get benefit right now!</p>
                        <input type="text" placeholder="Promocode" />
                        <button>Activate</button>
                    </div>
                </div>
            </div>
        )
    );
}
