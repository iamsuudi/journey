import HeroSection from "@/app/_components/hero";
import Socials from "./_components/social";
import { CarouselSpacing } from "./_components/articles-highligh";
import AboutMe from "./_components/about-me";
import Worksection from "./_components/work-section";
import ProjectsSection from "./_components/projects-section";
import Footer from "./_components/footer";
import ArticlesSection from "./_components/articles_section";

export default function Home() {
	return (
		<div className="py-10 pb-0 md:p-20 md:pb-0 overflow-x-hidden">
			<HeroSection />
			<Socials />
			<CarouselSpacing />
			<AboutMe />
			<Worksection />
			<ProjectsSection />
			<ArticlesSection />
			<Footer />
			<Socials footer />
		</div>
	);
}
