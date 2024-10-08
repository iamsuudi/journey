import { Button } from "@/components/ui/button";
import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "../projects/projects";

export default function ProjectsSection() {
    return (
        <div className="flex justify-center px-5 mt-40">
            <div className="w-full max-w-screen-lg space-y-10">
                <p className="text-sm font-mono mx-5">.../Projects...</p>

                <div className="space-y-40 py-10 border-t border-white/50">
                    {projects.map((project, index) => {
                        return (
                            <div
                                key={project.title}
                                className={cn(
                                    "gap-10 flex flex-wrap lg:justify-between justify-center items-center",
                                    {
                                        "flex-row-reverse": index % 2 === 0,
                                    }
                                )}
                            >
                                <Link href={project.href}>
                                    <Image
                                        src={project.imageDesktop}
                                        alt=""
                                        width={1000}
                                        height={1000}
                                        className="w-full max-w-screen-sm h-fit xl:block hidden hover:cursor-pointer"
                                    />
                                    <Image
                                        src={project.imageMobile}
                                        alt=""
                                        width={1000}
                                        height={1000}
                                        className="w-full max-w-sm h-fit xl:hidden"
                                    />
                                </Link>

                                <div className="w-full h-full max-w-[20rem] space-y-7">
                                    <p
                                        className={cn(
                                            "md:text-2xl text-lg",
                                            patuaOneFont.className,
                                            "text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70"
                                        )}
                                    >
                                        {project.title}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => {
                                            return (
                                                <button
                                                    className={cn(
                                                        "text-xs px-6 py-1 border",
                                                        "rounded-full bg-transparent backdrop-blur-lg",
                                                        "hover:bg-transparent hover:bg-gradient-to-b from-foreground to-foreground/80 hover:text-background"
                                                    )}
                                                    key={project.title + tech}
                                                >
                                                    {tech}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="space-y-4 text-sm">
                                        {project.descriptions.map((desc, i) => {
                                            return (
                                                <p key={project + i.toString()}>
                                                    {desc}
                                                </p>
                                            );
                                        })}
                                    </div>

                                    <button className="flex items-center justify-center w-full p-5">
                                        <Link
                                            href={project.href}
                                            className="relative"
                                        >
                                            <FaGithub className="p-1 rounded-full size-10" />
                                            <ArrowUpRight className="absolute p-1 rounded-full bg-foreground text-background size-8 top-1 left-2/3" />
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
