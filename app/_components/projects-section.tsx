import { Button } from "@/components/ui/button";
import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "HINTA",
        descriptions: [
            "Full stack system with landing page",
            `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				adipisci alias amet sint molestias ad itaque dolor quam
				exercitationem, necessitatibus id mollitia voluptates maiores
				aperiam dolores odio delectus cumque reiciendis?`,
        ],
        imageDesktop:
            "https://ik.imagekit.io/1xdonvuj2/project-one-desktop.png?updatedAt=1727589199044",
        imageMobile:
            "https://ik.imagekit.io/1xdonvuj2/project-one-mobile.png?updatedAt=1727589389184",
        href: "/projects/hinta-ems",
        technologies: [
            "Typescript",
            "React",
            "Express",
            "Mongodb",
            "Tailwindcss",
            "GSAP Animation",
        ],
    },
    {
        title: "DaloChat",
        descriptions: [
            "Real-time messaging app",
            `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                adipisci alias amet sint molestias ad itaque dolor quam
                exercitationem, necessitatibus id mollitia voluptates maiores
                aperiam dolores odio delectus cumque reiciendis?`,
        ],
        imageDesktop:
            "https://ik.imagekit.io/1xdonvuj2/project-two.png?updatedAt=1727590217347",
        imageMobile:
            "https://ik.imagekit.io/1xdonvuj2/project-two.png?updatedAt=1727590217347",
        href: "/projects/chat-app",
        technologies: [
            "Typescript",
            "React",
            "Express",
            "Mongodb",
            "Tailwindcss",
            "GSAP Animation",
        ],
    },
    {
        title: "DaloDrive",
        descriptions: [
            "Cloud storage",
            `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				adipisci alias amet sint molestias ad itaque dolor quam
				exercitationem, necessitatibus id mollitia voluptates maiores
				aperiam dolores odio delectus cumque reiciendis?`,
        ],
        imageDesktop:
            "https://ik.imagekit.io/1xdonvuj2/project-three-desktop.png?updatedAt=1727594829409",
        imageMobile:
            "https://ik.imagekit.io/1xdonvuj2/project-three-mobile.png?updatedAt=1727594798202",
        href: "/projects/file-uploader",
        technologies: [
            "Typescript",
            "React",
            "Express",
            "Mongodb",
            "Tailwindcss",
            "GSAP Animation",
        ],
    },
];

export default function ProjectsSection() {
    return (
        <div className="flex justify-center px-5 mt-40">
            <div className="w-full max-w-screen-lg space-y-10">
                <p
                    className={cn(
                        "text-5xl text-right sm:text-6xl md:text-8xl mr-auto text-nowrap lg:text-[8rem]",
                        patuaOneFont.className
                    )}
                >
                    Projects
                </p>

                <hr />
                <div className="space-y-40">
                    {projects.map((project, index) => {
                        return (
                            <div
                                key={project.title}
                                className={cn(
                                    "gap-10 flex flex-wrap lg:justify-between justify-center",
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

                                <div className="w-full h-full max-w-[20rem] space-y-10">
                                    <p
                                        className={cn(
                                            "text-lg",
                                            patuaOneFont.className
                                        )}
                                    >
                                        {project.title}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => {
                                            return (
                                                <Button
                                                    variant={"outline"}
                                                    size={"sm"}
                                                    className="px-8 rounded-full"
                                                    key={project.title + tech}
                                                >
                                                    {tech}
                                                </Button>
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
