import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const works = [
	{
		time: "2024 May - July",
		duration: "3 months",
		company: "HINTA",
		technologies: ["React", "Express"],
		role: "Fullstack developer",
	},
];

export default function Worksection() {
	return (
		<div className="mt-40  flex justify-center">
			<div className="space-y-8 max-w-screen-xl w-full">
				<p className="text-sm font-mono">.../Work...</p>
				<div className="last:border-b-[1px]">
					{works.map((work) => {
						return (
							<div
								key={work.time}
								className="group flex border-t-[1px] p-5 gap-5 hover:text-background hover:bg-foreground/95">
								<div className="w-full text-foreground/70 group-hover:text-background text-sm flex flex-col">
									<p>{work.time}</p>
									<p>{work.duration}</p>
								</div>
								<div className="flex gap-3 justify-between w-full flex-wrap">
									<p>{work.company}</p>
									<p>
										{work.role} |{" "}
										{work.technologies.join(" & ")}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
