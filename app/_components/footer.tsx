import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex justify-center px-5 mt-40">
			<div className="flex flex-wrap-reverse items-end justify-between w-full max-w-screen-lg gap-y-20 gap-x-10">
				<MyName />
				<Contact />
			</div>
		</div>
	);
}

export function Contact() {
	return (
		<div className="w-full ml-auto space-y-6 max-w-80">
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
				<CardContent className="text-sm">
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
		<div className="w-full max-w-screen-sm mt-auto">
			<p
				className={cn(
					patuaOneFont.className,
					"text-6xl sm:text-6xl md:text-8xl text-nowrap antialiased w-fit"
				)}>
				Abdulfetah
			</p>
			<div className="flex items-center justify-between w-full">
				<div className="ml-5 lg:ml-20 text-md text-foreground/80 w-fit sm:text-lg md:text-xl">
					<p>Full-stack</p>
					<p>developer</p>
				</div>
				<p
					className={cn(
						patuaOneFont.className,
						"text-6xl w-fit sm:text-6xl md:text-8xl text-nowrap antialiased"
					)}>
					Suudi
				</p>
			</div>
		</div>
	);
}
