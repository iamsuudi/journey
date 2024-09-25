"use client";

import { HTMLAttributes, useEffect, useState } from "react";

import WaveReveal from "@/components/animata/text/wave-reveal";
import { cn } from "@/lib/utils";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
	item: { image: string; title: string };
	index: number;
	activeItem: number;
}

interface ExpandableProps {
	list?: { image: string; title: string }[];
	autoPlay?: boolean;
	className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
	return (
		<div
			className={cn(
				"relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
				{
					"flex-grow": index === activeItem,
				},
				className
			)}
			{...props}>
			<img
				src={item.image}
				alt={item.title}
				className={cn("h-full w-full object-cover", {
					"blur-[2px]": index !== activeItem,
				})}
			/>
			{index === activeItem && (
				<div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
					<WaveReveal
						duration="1000ms"
						className="items-start justify-start text-lg sm:text-2xl md:text-5xl"
						text={item.title}
						direction="up"
					/>
				</div>
			)}
		</div>
	);
};

const items = [
	{
		image: "https://media.licdn.com/dms/image/D5612AQF5rTJ_o63x4A/article-cover_image-shrink_720_1280/0/1716992507183?e=2147483647&v=beta&t=ITHIXE3ryB-artG1dNje12AOQ4LlSbVDacBO55lq4-o",
		title: "",
	},
	{
		image: "https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/6584ce50b417f2b4cfae947a_Mobile%20App%20Developer%20Stats%2C%20Trends%2C%20and%20Forecasts%20for%202024.webp",
		title: "MobileApps",
	},
	{
		image: "https://community.aws/raw-post-images/concepts/devops-essentials/images/devops_loop.jpeg?imgSize=1600x960",
		title: "",
	},
];

export default function Expandable({
	list = items,
	autoPlay = true,
	className,
}: ExpandableProps) {
	const [activeItem, setActiveItem] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		if (!autoPlay) {
			return;
		}

		const interval = setInterval(() => {
			if (!isHovering) {
				setActiveItem((prev) => (prev + 1) % list.length);
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [autoPlay, list.length, isHovering]);

	return (
		<div className={cn("flex h-96 w-full gap-1", className)}>
			{list.map((item, index) => (
				<List
					key={item.title}
					item={item}
					index={index}
					activeItem={activeItem}
					onMouseEnter={() => {
						setActiveItem(index);
						setIsHovering(true);
					}}
					onMouseLeave={() => {
						setIsHovering(false);
					}}
				/>
			))}
		</div>
	);
}
