import React from "react";
import clsx from "clsx";
import { roboto } from "@/lib/fonts";

function Page() {
    return (
        <div
            className={clsx(
                roboto.className,
                "antialiased",
                "prose prose-md py-10 px-5 dark:prose-invert prose-violet dark:prose-pre:bg-gray-500/20 mx-auto"
            )}
        >
            <p>Blogs</p>
        </div>
    );
}

export default Page;
