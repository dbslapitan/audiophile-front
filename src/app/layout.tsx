import type { Metadata } from "next";
import "./globals.scss";
import { manrope } from "@/libs/fonts";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";
import { Providers } from "./provider";

export const metadata: Metadata = {
    title: "Audiophile | Home",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <Providers>
                    <Header />
                        {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
