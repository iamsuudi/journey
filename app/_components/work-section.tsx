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
        duration: formatDistanceToNowStrict(new Date(2024, 8)),
        company: "HulmiTech Agency",
        technologies: [],
        role: "Fullstack developer (Hybrid)",
    },
];

export default function Worksection() {
    return (
        <div className="mt-40 flex justify-center">
            <div className="space-y-8 max-w-screen-xl w-full">
                {/* <p className="text-sm font-mono mx-5">.../Work...</p> */}
                <p
                    className={cn(
                        "text-5xl text-right sm:text-6xl md:text-8xl mr-auto text-nowrap",
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
                                    { "border-b-[1px]": i == works.length - 1 },
                                    "group flex border-t-[1px] p-5 gap-5 md:px-10 hover:text-background hover:bg-foreground/95"
                                )}
                            >
                                <div className="w-2/5 text-foreground/70 group-hover:text-background flex flex-col">
                                    <p className="text-md font-bold">
                                        {work.time}
                                    </p>
                                    <em className={cn("text-xs")}>
                                        {work.duration}
                                    </em>
                                </div>
                                <div className="flex gap-3 justify-between w-3/5 flex-wrap font-bold font-mono">
                                    <p className="text-md">{work.company}</p>
                                    <p className="text-md">{work.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="px-10 flex flex-col items-end">
                    <p className="text-md text-foreground/80">
                        Work experience
                    </p>
                    <em>{formatDistanceToNow(new Date(2024, 1))}</em>
                </div>
            </div>
        </div>
    );
}
