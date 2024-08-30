import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex justify-center px-5 mt-40">
			<div className="flex flex-wrap-reverse items-end justify-between w-full max-w-screen-xl gap-10">
				<MyName />
				<Contact />
			</div>
		</div>
	);
}

export function Contact() {
	return (
		<div className="w-full max-w-sm space-y-6">
			<p className="font-mono">... /Contacts ...</p>
			<div className="flex w-full">
				<Button variant={"link"} size={"sm"} asChild>
					<Link href={"/"}>Main</Link>
				</Button>
				<Button variant={"link"} size={"sm"} asChild>
					<Link href={"#about"}>About</Link>
				</Button>
				<Button variant={"link"} size={"sm"} asChild>
					<Link href={"/projects"}>Projects</Link>
				</Button>
				<Button variant={"link"} size={"sm"} asChild>
					<Link href={"/blogs"}>Articles</Link>
				</Button>
			</div>

			<Card className="font-mono">
				<CardHeader>
					<CardTitle>Site</CardTitle>
				</CardHeader>
				<CardContent className="">
					<p className="">Handcrafted by ME /</p>
					<p>Designed by Taisia /</p>
					<p>Powered by Next.Js /</p>
				</CardContent>
			</Card>
		</div>
	);
}

export function MyName() {
	return (
		<div className="w-full max-w-screen-md mt-auto">
			<p
				className={cn(
					patuaOneFont.className,
					"text-6xl sm:text-6xl md:text-8xl text-nowrap lg:text-[8rem] antialiased w-fit"
				)}>
				Abdulfetah
			</p>
			<div className="flex items-center justify-between w-full">
				<div className="flex flex-col ml-5 lg:ml-20 text-md text-foreground/90 w-fit sm:text-xl md:text-2xl">
					<p>Full-stack</p>
					<p>developer</p>
				</div>
				<p
					className={cn(
						patuaOneFont.className,
						"text-6xl w-fit sm:text-6xl md:text-8xl text-nowrap lg:text-[8rem] antialiased"
					)}>
					Suudi
				</p>
			</div>
		</div>
	);
}
