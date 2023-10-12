"use client"

import Chat from "@/components/Games/Layout/Chat/Chat";

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex justify-center">
            <div className="container mx-auto w-full max-w-4xl">
                <Chat />
                {children}
            </div>
        </div>
    );
}
