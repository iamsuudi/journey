import { Button } from "@/components/ui/button";
import { FaDiscord, FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BiLogoGmail } from "react-icons/bi";

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
		name: "Discord",
		icon: <FaDiscord />,
		href: "https://discord.com/users/1147595040319868999",
	},
	{
		name: "Telegram",
		icon: <FaTelegram />,
		href: "https://t.me/iamsuudi",
	},
	{
		name: "Email",
		icon: <BiLogoGmail />,
		href: "mailto:suudiabdulfetah@gmail.com",
	},
	{
		name: "WhatsApp",
		icon: <FaWhatsapp />,
		href: "https://wa.me/+251991752985",
	},
];

export default function Socials({ footer }: { footer?: boolean }) {
	return (
		<div className="flex justify-center px-5">
			<div
				className={cn(
					"flex flex-wrap w-full max-w-screen-xl gap-3 py-10 sm:gap-5 md:justify-between",
					{ "md:py-20 max-w-screen-lg": !footer }
				)}>
				{links.map((link) => {
					return (
						<Link key={link.href} href={link.href}>
							<Button
								variant={"outline"}
								className="flex gap-2 px-6 py-3 rounded-full h-fit">
								{link.icon}
								{link.name}
							</Button>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
