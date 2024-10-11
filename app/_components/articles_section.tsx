"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";
import { blogs } from "../blogs/blogs";
import DecoratedButton from "@/components/DecoratedButton";

const totalArticles = blogs.length;
const articlesPerPage = 4;
const totalPages = Math.ceil(totalArticles / articlesPerPage);

function ArticlesSection() {
    const [currentPage, setcurrentPage] = useState(1);

    const [first, setfirst] = useState(currentPage);
    const [second, setsecond] = useState(currentPage + 1);

    const incrementPage = () => {
        if (currentPage == second) {
            setfirst(second + 1);
            setsecond(second + 2);
        }
        setcurrentPage(currentPage + 1);
    };

    const decrementPage = () => {
        if (currentPage == first) {
            setfirst(first - 2);
            setsecond(first - 1);
        }
        setcurrentPage(currentPage - 1);
    };

    const handleClick = (type: string) => {
        if (type == "first" && currentPage == second) return decrementPage;
        if (type == "second" && currentPage == first) return incrementPage;
    };

    return (
        <div className="flex justify-center w-full px-5 mt-40">
            <div className="w-full max-w-screen-lg space-y-10">
                <p
                    className={cn(
                        "text-5xl text-right sm:text-6xl md:text-8xl mr-auto text-nowrap",
                        "text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70",
                        patuaOneFont.className
                    )}
                >
                    Articles
                </p>

                <div
                    className={cn(
                        "relative flex flex-col items-center gap-5 justify-center overflow-hidden lg:flex-row lg:items-start",
                        "py-10 border-t border-white/50"
                    )}
                >
                    <div className="flex flex-wrap md:justify-start justify-center w-full gap-5 max-w-[800px]">
                        {fetchArticlesByPage(currentPage).map((article) => {
                            return (
                                <Card
                                    key={article.href}
                                    className="flex flex-col w-full max-w-sm gap-6 px-8 py-5 border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl h-60"
                                >
                                    <h3 className="text-xl font-bold">
                                        {article.title}
                                    </h3>
                                    <p className="mb-auto text-sm">
                                        {article.description}
                                    </p>
                                    <div>
                                        <DecoratedButton
                                            href={article.href}
                                            className="flex"
                                            text="Read more"
                                        />
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="flex flex-row gap-3 lg:flex-col w-fit">
                        <PaginationButton
                            variant={"outline"}
                            className={cn({
                                invisible: second <= 2,
                            })}
                            onClick={decrementPage}
                        >
                            <ArrowUp className="scale-[2] size-full lg:block hidden" />
                            <ArrowLeft className="scale-[2] size-full lg:hidden" />
                        </PaginationButton>
                        <PaginationButton
                            variant={
                                currentPage == first ? "default" : "outline"
                            }
                            onClick={() => handleClick("first")}
                        >
                            {first}
                        </PaginationButton>
                        <PaginationButton
                            variant={
                                currentPage == second ? "default" : "outline"
                            }
                            className={cn({
                                invisible: second > totalPages,
                            })}
                            onClick={() => handleClick("second")}
                        >
                            {second}
                        </PaginationButton>
                        <PaginationButton
                            variant={"outline"}
                            className={cn({
                                invisible:
                                    second > totalPages || totalPages <= 2,
                            })}
                            onClick={incrementPage}
                        >
                            <ArrowDown className="scale-[2] size-full lg:block hidden" />
                            <ArrowRight className="scale-[2] size-full lg:hidden" />
                        </PaginationButton>
                    </div>

                    <div className="w-[70%] h-[60%] bg-[#ffffff13] rounded-[100%] absolute -z-10 sm:top-[10%]  blur-3xl"></div>
                </div>
            </div>
        </div>
    );
}

export default ArticlesSection;

function fetchArticlesByPage(page = 1) {
    /**
     * page 1 -> slice(0, 4)
     * page 2 -> slice(4, 8)
     * page 3 -> slice(8, 12)
     */
    const to = page * 4;
    const from = to - 4;
    return blogs.slice(from, to);
}

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    variant:
        | "default"
        | "outline"
        | "link"
        | "destructive"
        | "secondary"
        | "ghost"
        | null
        | undefined;
    className?: String;
}

function PaginationButton({ children, onClick, variant, className }: Props) {
    return (
        <Button
            className={cn(
                "bg-transparent bg-gradient-to-b from-foreground to-foreground/80",
                "rounded-full w-10 h-10",
                className
            )}
            onClick={onClick}
            variant={variant}
        >
            {children}
        </Button>
    );
}
