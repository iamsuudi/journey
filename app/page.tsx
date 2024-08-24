import HeroSection from "@/app/_components/hero";
import Socials from "./_components/social";
import { CarouselSpacing } from "./_components/articles-highligh";

export default function Home() {
	return (
		<div className="p-10 md:p-20">
			<HeroSection />
			<Socials />
			<CarouselSpacing />
		</div>
	);
}
