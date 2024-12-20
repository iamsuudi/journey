import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/app/_components/navbar";
import { SparklesCore } from "@/components/ui/sparkles";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Abdulfetah Suudi",
    description: "Abdulfetah Suudi's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "font-sans antialiased bg-black",
                    inter.variable
                )}
            >
                <SparklesCore
                    className="w-screen h-screen -z-[100] fixed"
                    background="#00000000"
                    particleColor="#555"
                    particleDensity={5}
                    speed={1}
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
