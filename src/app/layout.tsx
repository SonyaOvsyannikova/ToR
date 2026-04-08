import '../shared/styles/globals.css'
import { ReactNode } from "react";
import Provider from "@/app/provider/provider";


type RootLayoutProps = {
    children?: ReactNode
}
export default function RootLayout(props: RootLayoutProps) {
    const {
        children
    } = props

    return (
        <html lang="ru">
            <body className="bg-[#2D3233] font-sans">
                <Provider>
                    {children}
                </Provider>
            </body>
        </html>
    );
}
