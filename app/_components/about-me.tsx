import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FaGithub } from "react-icons/fa";

const skills: { [key: string]: string[] } = {
    "Front-end": [
        "TypeScript",
        "NextJs",
        "React",
        "Redux Toolkit",
        "TanStack",
        "Zustand",
        "React Native",
    ],
    Styling: [
        "SASS",
        "MUI",
        "Daisy UI",
        "Radix UI",
        "ShadCN UI",
        "TailwindCSS",
        "Framer Motion",
        "GSAP",
    ],
    "Back-end": [
        "Golang",
        "NodeJs",
        "ExpressJs",
        "Python",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Mongoose",
    ],
    DevOps: ["Nginx", "Docker", "(CI/CD)", "Bash"],
};

function Container({ name, bgWhite }: { name: string; bgWhite?: boolean }) {
    return (
        <Card
            className={cn(
                "w-full rounded-3xl bg-transparent backdrop-blur-sm",
                { "bg-foreground/80 text-background": bgWhite }
            )}
        >
            <CardHeader>
                <CardTitle className="opacity-60 font-normal">{name}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 text-sm">
                {skills[name].map((skill, index) => {
                    if (index === 0) return <span key={skill}>{skill}</span>;
                    return (
                        <Fragment key={skill}>
                            <span>{" / "}</span>
                            <span>{skill}</span>
                        </Fragment>
                    );
                })}
            </CardContent>
        </Card>
    );
}

export default function AboutMe() {
    return (
        <div className="mt-32 flex justify-center px-5 bg-gradient-to-b from-black via-white/5" id="about">
            <div className="max-w-screen-xl w-full space-y-10 md:space-y-20">
                <div className="flex justify-between flex-wrap gap-5">
                    <span className="text-sm font-mono">.../About me...</span>
                    <p className="max-w-96 text-foreground/70 mx-auto mt-5">
                        Hello, I am
                        <span className="text-foreground">
                            {" "}
                            Abdulfetah Suudi.{" "}
                        </span>
                        A full-stack developer with the experience of building
                        dynamic
                        <span className="text-foreground">
                            {" "}
                            web applications{" "}
                        </span>
                        and
                        <span className="text-foreground"> mobile apps.</span>
                    </p>
                </div>

                <div>
                    <div className="flex flex-wrap-reverse gap-10 justify-between">
                        <div className="flex flex-col gap-6 w-full max-w-screen-md">
                            <Container name="Front-end" bgWhite />

                            <div className="flex">
                                <Container name="Styling" />
                                <button className="sm:w-full p-5 flex justify-center items-center">
                                    <Link
                                        href={"https://github.com/iamsuudi"}
                                        className="relative"
                                    >
                                        <FaGithub className="size-10 p-1 rounded-full" />
                                        <ArrowUpRight className="bg-foreground text-background size-8 p-1 rounded-full absolute top-1 left-2/3" />
                                    </Link>
                                </button>
                            </div>

                            <Container name="Back-end" />

                            <div className="flex items-center gap-5">
                                <p className="text-foreground/70 max-w-80 w-full text-sm">
                                    Some of my{" "}
                                    <span className="text-foreground">
                                        favorite technologies, topics or tools
                                    </span>{" "}
                                    that I worked with.
                                </p>
                                <Container name="DevOps" />
                            </div>
                        </div>

                        <Image
                            src={
                                "https://ik.imagekit.io/1xdonvuj2/my-pic-1-bg.jpg?updatedAt=1727619666547"
                            }
                            width={1000}
                            height={1000}
                            alt="Abdulfetah Suudi's picture"
                            className="max-w-96 h-fit w-full bg-foreground/50 mb-auto rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
