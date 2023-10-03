import NavigationList from "../../components/Transactions/Layout/NavigationList";

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="container colums">
            <NavigationList/>
            {children}
        </div>
    );
}