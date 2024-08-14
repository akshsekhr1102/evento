import { cn } from "@/lib/utils";
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

type childrenProps = {
    children: ReactNode;
    className?: string;
}
const H1 = ({children, className}:childrenProps) => {
  return (
    <h1 className={cn("text-3xl lg:text-6xl font-bold tracking-tighter ", className)}>{children}
    </h1>
  )
}

export default H1