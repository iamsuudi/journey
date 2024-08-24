import { Button } from "@/components/ui/button";
import { FaGithub, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const links = [
	{
		name: "Github",
		icon: <FaGithub />,
		href: "https://github.com/iamsuudi",
	},
	{
		name: "Linkedin",
		icon: <FaLinkedin />,
		href: "https://linkedin.com/in/iamsuudi",
	},
	{
		name: "Twitter",
		icon: <FaXTwitter />,
		href: "https://twitter.com/iamsuudi",
	},
	{
		name: "Telegram",
		icon: <FaTelegram />,
		href: "https://t.me/iamsuudi",
	},
];

export default function Socials() {
	return (
		<div className="flex flex-wrap py-10 gap-3 sm:gap-5">
			{links.map((link) => {
				return (
					<Link key={link.href} href={link.href}>
						<Button
							variant={"outline"}
							className="rounded-full px-6 py-3 h-fit flex gap-2">
							{link.icon}
							{link.name}
						</Button>
					</Link>
				);
			})}
		</div>
	);
}
