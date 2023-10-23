import NavigationList from "../../components/Transactions/Layout/NavigationList";

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="container">
            <div className="flex space-x-4">
                <NavigationList/>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
        </div>
    );
}