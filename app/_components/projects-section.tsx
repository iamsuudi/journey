import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const projects = [
	{
		title: "DaloChat",
		descriptions: [
			"Real-time messaging app",
			`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				adipisci alias amet sint molestias ad itaque dolor quam
				exercitationem, necessitatibus id mollitia voluptates maiores
				aperiam dolores odio delectus cumque reiciendis?`,
		],
		image: "https://github.com/iamsuudi/messaging-app/raw/main/client/public/readme/landing.png",
		href: "/projects/1",
		technologies: [
			"Typescript",
			"React",
			"Express",
			"Mongodb",
			"Tailwindcss",
			"GSAP Animation",
		],
	},
	{
		title: "Ubuntu",
		descriptions: [
			"Ubuntu workspace",
			`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				adipisci alias amet sint molestias ad itaque dolor quam
				exercitationem, necessitatibus id mollitia voluptates maiores
				aperiam dolores odio delectus cumque reiciendis?`,
		],
		image: "https://raw.githubusercontent.com/iamsuudi/ubuntu/main/public/readme/landing.png",
		href: "/projects/2",
		technologies: [
			"Typescript",
			"React",
			"Express",
			"Mongodb",
			"Tailwindcss",
			"GSAP Animation",
		],
	},
	{
		title: "HINTA",
		descriptions: [
			"Full stack system with landing page",
			`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				adipisci alias amet sint molestias ad itaque dolor quam
				exercitationem, necessitatibus id mollitia voluptates maiores
				aperiam dolores odio delectus cumque reiciendis?`,
		],
		image: "/hinta.png",
		href: "/projects/3",
		technologies: [
			"Typescript",
			"React",
			"Express",
			"Mongodb",
			"Tailwindcss",
			"GSAP Animation",
		],
	},
	{
		title: "DaloDrive",
		descriptions: [
			"Cloud storage",
			`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				adipisci alias amet sint molestias ad itaque dolor quam
				exercitationem, necessitatibus id mollitia voluptates maiores
				aperiam dolores odio delectus cumque reiciendis?`,
		],
		image: "/dalo-drive.png",
		href: "/projects/4",
		technologies: [
			"Typescript",
			"React",
			"Express",
			"Mongodb",
			"Tailwindcss",
			"GSAP Animation",
		],
	},
];

export default function ProjectsSection() {
	return (
		<div className="flex justify-center mt-40 px-5">
			<div className="w-full max-w-screen-xl space-y-10">
				<p
					className={cn(
						"text-5xl text-right sm:text-6xl md:text-8xl mr-auto text-nowrap lg:text-[8rem]",
						patuaOneFont.className
					)}>
					Projects
				</p>

				<hr />
				<div className="space-y-40">
					{projects.map((project, index) => {
						return (
							<div
								key={project.title}
								className={cn("gap-10 flex flex-wrap", {
									"flex-row-reverse": index % 2 === 0,
								})}>
								<div className="flex flex-col w-full max-w-md gap-10">
									<div
										className="w-full max-w-md aspect-video rounded-3xl h-fit"
										style={{
											backgroundImage: `url('${project.image}')`,
											backgroundSize: "cover",
										}}></div>
									<button className="items-center justify-center hidden p-5 lg:flex">
										<Link
											href={project.href}
											className="relative">
											<FaGithub className="p-1 rounded-full size-10" />
											<ArrowUpRight className="absolute p-1 rounded-full bg-foreground text-background size-8 top-1 left-2/3" />
										</Link>
									</button>
								</div>

								<div className="w-full h-full max-w-lg space-y-10">
									<p
										className={cn(
											"text-lg",
											patuaOneFont.className
										)}>
										{project.title}
									</p>

									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech) => {
											return (
												<Button
													variant={"outline"}
													className="px-8 rounded-full"
													key={project.title + tech}>
													{tech}
												</Button>
											);
										})}
									</div>

									<div className="space-y-4 text-sm">
										{project.descriptions.map((desc, i) => {
											return (
												<p key={project + i.toString()}>
													{desc}
												</p>
											);
										})}
									</div>

									<button className="flex items-center justify-center w-full p-5 lg:hidden">
										<Link
											href={project.href}
											className="relative">
											<FaGithub className="p-1 rounded-full size-10" />
											<ArrowUpRight className="absolute p-1 rounded-full bg-foreground text-background size-8 top-1 left-2/3" />
										</Link>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
