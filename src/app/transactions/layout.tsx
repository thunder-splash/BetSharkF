import NavigationList from "../../components/Transactions/Layout/NavigationList";
import styles from "../../styles/transactions/layouttransactions.module.css";

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <NavigationList/>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </div>
    );
}