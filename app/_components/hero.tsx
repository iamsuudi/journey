import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { patuaOneFont } from "@/lib/fonts";

export default function HeroSection() {
	return (
		<div className="w-full flex flex-col relative gap-4 items-center px-5">
			<div className="w-full flex relative gap-10 items-center max-w-screen-lg">
				<div className="hidden gap-3 mt-auto mb-3">
					<span className="w-5 h-5 rounded-full bg-foreground"></span>
					<span className="w-5 h-5 rounded-full bg-foreground"></span>
					<span className="w-5 h-5 rounded-full bg-foreground"></span>
				</div>

				<p
					className={cn(
						"text-5xl sm:text-6xl md:text-8xl mr-auto text-nowrap lg:text-[8rem]",
						patuaOneFont.className
					)}>
					Full-stack
				</p>

				<Link href={"/projects"} className="gap-2 hidden md:flex">
					<Button className="rounded-full">
						<span className="mr-auto font-bold ml-2 w-40">
							Projects
						</span>
					</Button>
					<Button className="rounded-full">
						<ArrowRight className="size-3 scale-150" />
					</Button>
				</Link>

				{/* <div className=" gap-20 hidden h-fit mt-20 border">
					<div className="h-fit border border-white text-nowrap">
						<Terminal />
						<span className="opacity-90 text-sm">Projects</span>
					</div>

					<div className="flex flex-col h-fit border border-white text-nowrap">
						<span className="font-bold">Front-end Developer</span>
						<span className="opacity-90 text-sm">
							Contract 2024 May-Jun
						</span>
					</div>

					<div className="flex flex-col h-fit border border-white text-nowrap">
						<span className="font-bold">Full-stack developer</span>
						<span className="opacity-90 text-sm">2024 Aug</span>
					</div>
				</div> */}
			</div>

			<div className="w-full flex gap-10 items-center max-w-screen-lg">
				{/* <div className="md:flex flex-col h-fit border border-white text-nowrap hidden">
					<span className="font-bold">Full-stack developer</span>
					<span className="opacity-90 text-sm">2024 Aug</span>
				</div> */}

				<div className="text-nowrap text-foreground/70 w-fit hidden md:block text-sm lg:text-lg">
					<p>
						My goal is to{" "}
						<span className="text-foreground">
							write maintainable, clean
						</span>
					</p>
					<p>
						and{" "}
						<span className="text-foreground">
							understandable code
						</span>{" "}
						to process
					</p>
					<p>development was enjoyable.</p>
				</div>

				<p
					className={cn(
						"text-5xl ml-auto sm:text-6xl md:text-8xl lg:text-[8rem]",
						patuaOneFont.className
					)}>
					Developer
				</p>

				{/* <div className="hidden gap-3 mt-auto mb-20 border border-white">
					<span className="w-5 h-5 rounded-full bg-foreground"></span>
					<span className="w-5 h-5 rounded-full bg-foreground"></span>
					<span className="w-5 h-5 rounded-full bg-foreground"></span>
				</div> */}
			</div>

			<div className="text-nowrap text-foreground/70 w-fit md:hidden mt-7 mr-auto">
				<p>
					My goal is to{" "}
					<span className="text-foreground">
						write maintainable, clean
					</span>
				</p>
				<p>
					and{" "}
					<span className="text-foreground">understandable code</span>{" "}
					to process
				</p>
				<p>development was enjoyable.</p>
			</div>

			<Link href={"/projects"} className="gap-2 flex md:hidden mr-auto">
				<Button className="rounded-full w-60">
					<span className="mr-auto font-bold ml-2">Projects</span>
				</Button>
				<Button className="rounded-full">
					<ArrowRight className="size-3 scale-150" />
				</Button>
			</Link>
		</div>
	);
}
