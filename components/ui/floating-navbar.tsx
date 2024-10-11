"use client";

import React, { useState } from "react";

import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import debounce from "debounce";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const pathname = usePathname();

    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    const handler = debounce((current: number) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (direction < 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    }, 20);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        handler(current);
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.1,
                }}
                className={cn(
                    "flex max-w-fit fixed sm:top-10 top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.1] rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative items-center flex space-x-1 text-neutral-300 dark:hover:text-neutral-100 hover:text-neutral-500 hover:underline",
                            {
                                "text-violet-500 hover:text-violet-500":
                                    navItem.link == "/"
                                        ? pathname == "/"
                                        : pathname.startsWith(navItem.link),
                            }
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden text-sm sm:block">
                            {navItem.name}
                        </span>
                        <ArrowUpRightIcon className="hidden w-3 h-3 ml-1 sm:block" />
                    </Link>
                ))}
                {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                    <span>Login</span>
                    <span className="absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                </button> */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-b from-white/80 to-white/50"></div>
            </motion.div>
        </AnimatePresence>
    );
};
