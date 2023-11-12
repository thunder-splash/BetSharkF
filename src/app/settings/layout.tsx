import NavigationList from "../../components/Settings/Layout/NavigationList";
import styles from "../../styles/settings/layoutsetting.module.css"

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
``