import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Автосервис Машина времени | Магнитогорск",
    description:
        "Ремонт и обслуживание автомобилей в Магнитогорске. Автосервис Машина времени, адрес: Магнитная 105.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}