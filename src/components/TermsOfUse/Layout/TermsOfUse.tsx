import React from 'react';
import Image from 'next/image';
import styles from './termsofuse.module.css';

export default function TermsOfUse() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
            <Image width={20} height={20} src="/document-white.svg" alt="Document Icon" className={styles.icon} />
                <h1>Terms of Use</h1>
            </div>
            <section className={styles.section}>
                <h2>Legal Notice</h2>
                <p>The terms and conditions set out below (the «Terms and Service») apply to and govern any services used by you («you», the «user») and marketed by us under the brand name ‘BetShark’ including any services provided through any website with a domain name ending ‘BetShark’ (the «Website»), and to any email and other correspondence between us relating to such a service. ‘BetShark’ is for entertainment purposes only, real money is exchanged on our platform. Therefore players participate in bets with virtual money of value in a closed gaming system. You must be at least 18 years old to play on BetShark. Usage of our site, ‘BetShark’ and its services constitute your acceptance of this agreement. If you do not agree to any of these stipulations please leave the site immediately. By participating in ‘BetShark’ you agree that you are not a resident of the United Kingdom.</p>
            </section>
            <section className={styles.section}>
                <h2>Limitations of Liability</h2>
                <p>Use of our services is at your own risk. ‘BetShark’, its owners and affiliates should be held liable for any individual’s profits / loss gained on ‘BetShark’. ‘BetShark’ and it’s affiliates assume responsibility for any missed bets or loss of virtual currency.</p>
            </section>
            <section className={styles.section}>
                <h2>Virtual Currency</h2>
                <p>You acknowledge that ‘BetShark’ virtual currency is redeemable for any sum of «real-world» money from us at any time. We make no guarantee and take no responsibility as to the nature, value, or quality of the features of the Service or any third-party goods or services that will be accessible through the use of ‘BetShark’ virtual currency.</p>
            </section>
            <section className={styles.section}>
                <h2>Content</h2>
                <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice. This website contains material which is owned by us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and service.</p>
            </section>
            <section className={styles.section}>
                <h2>Bet Participation and Game Participation</h2>
                <p>’BetShark’ is intended for an adult audience and you must be 18 or older, of sound mind and capable of taking responsibility for your own actions. ‘BetShark’ comes with no guarantees, expressed or implied, in connection with the service which is provided to you ‘as is’ and we provide you with no warranty whatsoever regarding its quality, completeness or accuracy. ‘BetShark’ reserves the right to suspend and/or cancel any bet/wager at any time. When a platform is suspended, any bets entered will be on hold. ‘BetShark’ also reserves the right to cease betting at any time without notice.</p>
            </section>
            <section className={styles.section}>
                <h2>Support</h2>
                <p>Our technical support team is available 24/7 to answer your questions. Ask your questions in the chat or through the ticket system. We are happy to answer your questions.</p>
            </section>
            <section className={styles.section}>
                <h2>Deposit, Withdraw, or Lost Virtual Currency</h2>
                <p>If any loss occur during a bet caused by a software or network issue, you have 7 days to make a claim by opening a ticket at our website, after which these virtual-money will be considered seized. We strongly encourage you to withdraw your winning as soon as possible to avoid any issues. Keep in mind that the virtual-money you get after winning around may not be the same as the one you deposit, meaning that cryptocurrency changing too fast. However the total value when will stay the same. It also depends on the type of cryptocurrency through which you withdraw your winnings. Deposit fee is 1%.</p>
            </section>
            <section className={styles.section}>
                <h2>Protections from Bots</h2>
                <p>This is protection against hackers and third-party software, cases of suspicious activity have become frequent. If it notices suspicious activity, assigns additional verification, if protection has assigned you additional verification, do not worry after you have completed additional verification, nothing will change and you can use our site without any problems like before.</p>
            </section>
            <section className={styles.section}>
                <h2>Multi-Account</h2>
                <p>According to the rules of the site, one account per player. The multi-account is prohibited.</p>
            </section>
        </div>
    );
}
