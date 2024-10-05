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
                    "font-sans antialiased bg-black relative",
                    inter.variable
                )}
            >
                <SparklesCore
				className="w-full h-full -z-[100] absolute"
				background="#00000000"
				particleDensity={10}
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
