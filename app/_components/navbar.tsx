"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { dancing_ScriptFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function NavBar() {
	const pathname = usePathname();

	return (
		<div className="fixed top-0 z-10 flex justify-center w-full backdrop-blur-lg">
			<nav className="flex items-center justify-between w-full max-w-screen-xl py-1 mx-auto sm:p-2">
				<Link href={"/"} className={cn(dancing_ScriptFont.className, "ml-3 antialiased text-sm")}>
					@iamsuudi
				</Link>

				<ul className="flex">
					<li hidden={pathname.startsWith("/blogs")}>
						<Button
							variant={"link"}
							size={"sm"}
							asChild
							className="text-xs text-foreground/80 hover:text-foreground sm:text-sm">
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
							className="text-xs text-foreground/80 hover:text-foreground sm:text-sm">
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
							className="text-xs text-foreground/80 hover:text-foreground sm:text-sm">
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
