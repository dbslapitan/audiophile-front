import type { Metadata } from "next";
import "./globals.scss";
import { manrope } from "@/libs/fonts";
import Header from "@/ui/header/header";
import Footer from "@/ui/footer/footer";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
