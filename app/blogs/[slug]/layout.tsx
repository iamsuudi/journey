"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    
    return (
        <div className="relative">
            <Button
                size={"sm"}
                variant={"link"}
                className="px-0 absolute -top-14"
                onClick={() => router.back()}
            >
                <ArrowLeft className="size-4" />
                Go Back
            </Button>
            {children}
        </div>
    );
}

export default Layout;
