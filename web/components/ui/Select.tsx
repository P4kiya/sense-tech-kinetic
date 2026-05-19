import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className="relative w-full">
      <select className={cn("select-field", className)} {...props}>
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant"
        strokeWidth={2.25}
        aria-hidden
      />
    </div>
  );
}
