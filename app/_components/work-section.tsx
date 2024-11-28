import { patuaOneFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
    formatDistanceStrict,
    formatDistanceToNow,
    formatDistanceToNowStrict,
} from "date-fns";

const works = [
    {
        time: "2024 May - July",
        duration: formatDistanceStrict(
            new Date(2024, 4),
            new Date(2024, 6, 25)
        ),
        company: "HINTA (Government Institution)",
        technologies: ["React", "Express"],
        role: "Fullstack developer (contract)",
    },
    {
        time: "2024 July - Aug",
        duration: formatDistanceStrict(
            new Date(2024, 6),
            new Date(2024, 7, 25)
        ),
        company: "Kihloot (Online learning platform)",
        technologies: [],
        role: "Technical Support (Remote)",
    },
    {
        time: "2024 Sep - Present",
        duration: formatDistanceStrict(new Date(2024, 8), new Date()),
        company: "HulmiTech",
        technologies: [],
        role: "Fullstack developer (Hybrid)",
    },
];

export default function Worksection() {
    return (
        <div className="flex justify-center mt-40">
            <div className="w-full max-w-screen-xl space-y-8">
                {/* <p className="mx-5 font-mono text-sm">.../Work...</p> */}
                <p
                    className={cn(
                        "text-5xl text-right sm:text-6xl md:text-8xl mr-auto text-nowrap mx-5 xl:mx-0",
                        "text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70",
                        patuaOneFont.className
                    )}
                >
                    Work
                </p>
                <div className="">
                    {works.map((work, i) => {
                        return (
                            <div
                                key={work.time}
                                className={cn(
                                    { "border-b-[1px] ": i == works.length - 1 },
                                    "group flex border-t-[1px] p-5 gap-5 md:px-10 border-white/20 backdrop-blur-sm",
                                    "hover:text-background hover:bg-gradient-to-b from-foreground to-foreground/90"
                                )}
                            >
                                <div className="flex flex-col w-2/5 text-foreground/70 group-hover:text-background">
                                    <p className="font-bold text-md">
                                        {work.time}
                                    </p>
                                    <em className={cn("text-xs")}>
                                        {work.duration}
                                    </em>
                                </div>
                                <div className="flex flex-wrap justify-between w-3/5 gap-3 font-mono font-bold">
                                    <p className="text-md">{work.company}</p>
                                    <p className="text-md">{work.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col items-end px-10">
                    <p className="text-md text-foreground/80">
                        Work experience
                    </p>
                    <em>{formatDistanceToNow(new Date(2024, 1))}</em>
                </div>
            </div>
        </div>
    );
}
