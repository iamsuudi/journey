import { roboto } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={cn(
                roboto.className,
                "antialiased",
                "prose prose-md py-10 px-5 dark:prose-invert prose-violet dark:prose-pre:bg-gray-500/20 mx-auto"
            )}
        >
            {children}
        </div>
    );
}

export default Layout;
