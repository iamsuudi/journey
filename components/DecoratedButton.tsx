import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    text: string;
    className: string;
    href: string;
}

const DecoratedButton = ({ text, className, href }: Props) => {
    return (
        <Link href={href} className={cn("gap-2", className)}>
            <Button className="rounded-full bg-transparent bg-gradient-to-b from-foreground to-foreground/80">
                <em className="mr-auto font-bold ml-2 w-40">{text}</em>
            </Button>
            <Button className="rounded-full bg-transparent bg-gradient-to-b from-foreground to-foreground/80">
                <ArrowRight className="size-3 scale-150" />
            </Button>
        </Link>
    );
};

export default DecoratedButton;
