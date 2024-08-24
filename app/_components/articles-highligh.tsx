import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSpacing() {
	return (
		<div className="w-full flex justify-center py-10 px-5">
			<Carousel className="w-full max-w-screen-lg ">
				<CarouselContent className="">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="">
							<div className="">
								<Card className="rounded-2xl">
									<CardContent className="flex items-center justify-center p-6 h-[30dvh]">
										<span className="text-2xl font-semibold">
											{index + 1}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>

				<CarouselPrevious />

				<CarouselNext />
			</Carousel>
		</div>
	);
}
