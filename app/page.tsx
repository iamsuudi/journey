import HeroSection from "@/app/_components/hero";
import Socials from "./_components/social";
import { CarouselSpacing } from "./_components/articles-highligh";
import AboutMe from "./_components/about-me";
import Worksection from "./_components/work-section";
import ProjectsSection from "./_components/projects-section";
import Footer from "./_components/footer";

export default function Home() {
	return (
		<div className="py-10 pb-0 md:p-20 md:pb-0 dark:bg-black">
			<HeroSection />
			<Socials />
			<CarouselSpacing />
			<AboutMe />
			<Worksection />
			<ProjectsSection />
			<Footer />
			<Socials footer />
		</div>
	);
}
