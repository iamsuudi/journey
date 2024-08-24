"use client";

import { Rubik_Moonrocks } from "next/font/google";

import { usePathname } from "next/navigation";
import Link from "next/link";

import ModeToggle from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

const font = Rubik_Moonrocks({ subsets: ["latin"], weight: ["400"] });

export default function NavBar() {
	const pathname = usePathname();

	return (
		<div className="w-full fixed top-0 backdrop-blur-sm z-10 flex justify-center">
			<nav className="w-full flex items-center max-w-screen-lg mx-auto justify-between py-1 sm:p-2">
				<p className={cn(font.className, "text-xl ml-5")}>@iamsuudi</p>

				<ul className="flex">
					<li hidden={pathname.startsWith("/blogs")}>
						<Button
							variant={"link"}
							size={"sm"}
							asChild
							className="text-foreground/80 hover:text-foreground text-xs sm:text-sm">
							<Link href={"/blogs"}>
								Blogs{" "}
								<ArrowUpRightIcon className="w-3 h-3 ml-1" />
							</Link>
						</Button>
					</li>
					<li hidden={pathname === "/"}>
						<Button
							variant={"link"}
							size={"sm"}
							asChild
							className="text-foreground/80 hover:text-foreground text-xs sm:text-sm">
							<Link href={"/"}>
								Home
								<ArrowUpRightIcon className="w-3 h-3 ml-1" />
							</Link>
						</Button>
					</li>
					<li hidden={pathname.startsWith("/projects")}>
						<Button
							variant={"link"}
							size={"sm"}
							asChild
							className="text-foreground/80 hover:text-foreground text-xs sm:text-sm">
							<Link href={"/projects"}>
								Projects
								<ArrowUpRightIcon className="w-3 h-3 ml-1" />
							</Link>
						</Button>
					</li>
				</ul>

				{/* <ModeToggle /> */}
			</nav>
		</div>
	);
}