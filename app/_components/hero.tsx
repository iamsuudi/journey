import { cn } from "@/lib/utils";
import { patuaOneFont } from "@/lib/fonts";
import { GridBeam } from "@/components/lukacho/GridBeam";
import DecoratedButton from "@/components/DecoratedButton";

export default function HeroSection() {
    return (
        <GridBeam>
            <div className="w-full flex flex-col relative gap-4 items-center px-5">
                <div className="w-full flex relative gap-10 items-center max-w-screen-lg">
                    <p
                        className={cn(
                            "text-5xl sm:text-6xl md:text-8xl mr-auto text-nowrap lg:text-[8rem] antialiased",
                            patuaOneFont.className,
                            "text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70"
                        )}
                    >
                        Full-stack
                    </p>

                    <DecoratedButton
                        text="Projects"
                        href="/projects"
                        className="hidden md:flex"
                    />
                </div>

                <div className="w-full flex gap-10 items-center max-w-screen-lg">
                    <div className="text-nowrap text-foreground/70 w-fit hidden md:block text-sm lg:text-lg">
                        <p>
                            My goal is to{" "}
                            <span className="text-foreground">
                                write maintainable, clean
                            </span>
                        </p>
                        <p>
                            and{" "}
                            <span className="text-foreground">
                                understandable code
                            </span>{" "}
                            to process
                        </p>
                        <p>development was enjoyable.</p>
                    </div>

                    <p
                        className={cn(
                            "text-5xl ml-auto sm:text-6xl md:text-8xl lg:text-[8rem] antialiased",
                            patuaOneFont.className,
                            "text-transparent bg-clip-text bg-gradient-to-t from-foreground/70 to-foreground"
                        )}
                    >
                        Developer
                    </p>
                </div>

                <div className="text-nowrap text-foreground/70 w-fit md:hidden mt-7 mr-auto">
                    <p>
                        My goal is to{" "}
                        <span className="text-foreground">
                            write maintainable, clean
                        </span>
                    </p>
                    <p>
                        and{" "}
                        <span className="text-foreground">
                            understandable code
                        </span>{" "}
                        to process
                    </p>
                    <p>development was enjoyable.</p>
                </div>

                <DecoratedButton
                    text="Projects"
                    href="/projects"
                    className="flex md:hidden mr-auto mt-5"
                />
            </div>
        </GridBeam>
    );
}
