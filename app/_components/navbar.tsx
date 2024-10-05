import { FloatingNav } from "@/components/ui/floating-navbar";
import { Brain, Home, Workflow } from "lucide-react";

export default function NavBar() {
    return (
        <FloatingNav
            navItems={navItems}
            className="flex items-center gap-3 bg-white/5 backdrop-blur-sm"
        />
    );
}

const navItems = [
    {
        name: "Home",
        link: "/",
		icon: <Home className="size-4" />
    },
    {
        name: "Projects",
        link: "/projects",
		icon: <Workflow className="size-4" />
    },
    {
        name: "Blogs",
        link: "/blogs",
		icon: <Brain className="size-4" />
    },
];
