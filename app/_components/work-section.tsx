import { dancing_ScriptFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { formatDistanceStrict, formatDistanceToNowStrict } from "date-fns";

const works = [
    {
        time: "2024 May - July",
        duration: formatDistanceStrict(
            new Date(2024, 4),
            new Date(2024, 6, 25)
        ),
        company: "HINTA (Govornment Institution)",
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
                <p className="text-sm font-mono mx-5">.../Work...</p>
                <div className="last:border-b-[1px]">
                    {works.map((work) => {
                        return (
                            <div
                                key={work.time}
                                className="group flex border-t-[1px] p-5 gap-5 md:px-10 hover:text-background hover:bg-foreground/95"
                            >
                                <div className="w-2/5 text-foreground/70 group-hover:text-background flex flex-col">
                                    <p className="text-md font-bold">
                                        {work.time}
                                    </p>
                                    <p
                                        className={cn(
                                            "text-xs",
                                            dancing_ScriptFont.className
                                        )}
                                    >
                                        {work.duration}
                                    </p>
                                </div>
                                <div className="flex gap-3 justify-between w-3/5 flex-wrap font-bold font-mono">
                                    <p className="text-md">{work.company}</p>
                                    <p className="text-md">{work.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
