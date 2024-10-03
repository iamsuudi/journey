import HeroSection from "@/app/_components/hero";
import Socials from "./_components/social";
import { CarouselSpacing } from "./_components/articles-highligh";
import AboutMe from "./_components/about-me";
import Worksection from "./_components/work-section";
import ProjectsSection from "./_components/projects-section";
import Footer from "./_components/footer";
import ArticlesSection from "./_components/articles_section";
import Skills from "./_components/Skills";

export default function Home() {
	return (
		<div className="overflow-x-hidden pt-32">
			<HeroSection />
			<Socials className="mb-20 mt-32 px-5" />
			<CarouselSpacing />
			<AboutMe />
			<Skills />
			<Worksection />
			<ProjectsSection />
			<ArticlesSection />
			<Footer />
		</div>
	);
}
