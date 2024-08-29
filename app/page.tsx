import HeroSection from "@/app/_components/hero";
import Socials from "./_components/social";
import { CarouselSpacing } from "./_components/articles-highligh";
import AboutMe from "./_components/about-me";
import Worksection from "./_components/work-section";
import ProjectsSection from "./_components/projects-section";

export default function Home() {
	return (
		<div className="py-10 md:p-20">
			<HeroSection />
			<Socials />
			<CarouselSpacing />
			<AboutMe />
			<Worksection />
			<ProjectsSection />
		</div>
	);
}
