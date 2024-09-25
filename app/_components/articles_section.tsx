"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const articles = [
    {
        id: "articel-1",
        title: "1 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-2",
        title: "2 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-3",
        title: "3 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-4",
        title: "4 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-5",
        title: "5 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-6",
        title: "6 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-7",
        title: "7 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-8",
        title: "8 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-9",
        title: "9 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-10",
        title: "10 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-11",
        title: "11 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-12",
        title: "12 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-13",
        title: "13 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-14",
        title: "14 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-15",
        title: "15 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-16",
        title: "16 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
    {
        id: "articel-17",
        title: "17 The simplest example is kafka + golang",
        body: "This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker",
    },
];

const totalArticles = articles.length;
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
        <div className="flex justify-center px-5 mt-40 w-full">
            <div className="w-full max-w-screen-lg space-y-10">
                <p
                    className={cn(
                        "text-5xl text-right sm:text-6xl md:text-8xl mr-auto text-nowrap lg:text-[8rem]",
                        patuaOneFont.className
                    )}
                >
                    Articles
                </p>

                <hr />

                <div className="flex flex-col-reverse lg:flex-row gap-5 items-center lg:items-start">
                    <div className="flex lg:flex-col flex-row gap-3 w-fit">
                        <Button
                            variant={"outline"}
                            className={cn({
                                "rounded-full w-10 h-10": true,
                                invisible: second <= 2,
                            })}
                            onClick={decrementPage}
                        >
                            <ArrowUp className="scale-[2] size-full lg:block hidden" />
                            <ArrowLeft className="scale-[2] size-full lg:hidden" />
                        </Button>
                        <Button
                            variant={
                                currentPage == first ? "default" : "outline"
                            }
                            className="rounded-full w-10 h-10"
                            onClick={handleClick("first")}
                        >
                            {first}
                        </Button>
                        <Button
                            variant={
                                currentPage == second ? "default" : "outline"
                            }
                            className={cn({
                                "rounded-full w-10 h-10": true,
                                invisible: second > totalPages,
                            })}
                            onClick={handleClick("second")}
                        >
                            {second}
                        </Button>
                        <Button
                            variant={"outline"}
                            className={cn({
                                "rounded-full w-10 h-10": true,
                                invisible:
                                    second > totalPages || totalPages <= 2,
                            })}
                            onClick={incrementPage}
                        >
                            <ArrowDown className="scale-[2] size-full lg:block hidden" />
                            <ArrowRight className="scale-[2] size-full lg:hidden" />
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-5 w-full justify-center lg:justify-end">
                        {fetchArticlesByPage(currentPage).map((article) => {
                            return (
                                <Card
                                    key={article.id}
                                    className="bg-white/5 py-5 px-8 max-w-sm w-full space-y-6 rounded-3xl"
                                >
                                    <h3 className="font-bold text-xl">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm">{article.body}</p>
                                    <div>
                                        <Link
                                            href={"/projects"}
                                            className="gap-2 flex"
                                        >
                                            <Button className="rounded-full">
                                                <span className="font-bold w-40">
                                                    Read more
                                                </span>
                                            </Button>
                                            <Button className="rounded-full">
                                                <ArrowRight className="size-3 scale-150" />
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
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
    return articles.slice(from, to);
}
