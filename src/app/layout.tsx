import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const robotoSans = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bankan",
    description: "A kanban app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${robotoSans.variable} ${robotoMono.variable} antialiased h-dvh flex flex-col`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Navbar />
                    <main className="px-4 grow flex-auto h-full">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
