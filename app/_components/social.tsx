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
        name: "Email",
        icon: <BiLogoGmail />,
        href: "mailto:suudiabdulfetah@gmail.com",
    },
    {
        name: "Telegram",
        icon: <FaTelegram />,
        href: "https://t.me/iamsuudi",
    },
    // {
    // 	name: "WhatsApp",
    // 	icon: <FaWhatsapp />,
    // 	href: "https://wa.me/+251991752985",
    // },
];

export default function Socials({ className }: { className?: string }) {
    return (
        <div className={cn("flex justify-center z-20", className)}>
            <div
                className={cn(
                    "flex flex-wrap w-full max-w-screen-lg gap-3 sm:gap-5"
                )}
            >
                {links.map((link) => {
                    return (
                        <Link key={link.href} href={link.href}>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "flex gap-2 px-8 py-2 rounded-full h-fit bg-white/5 backdrop-blur-sm border-white/5",
                                    "hover:bg-transparent hover:bg-gradient-to-b from-foreground to-foreground/80 hover:text-background hover:border-none"
                                )}
                            >
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
