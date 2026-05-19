import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  padding?: boolean;
  /** Disable hover lift (e.g. dense data tables) */
  staticSurface?: boolean;
  /** Default clips children to rounded corners; use `visible` only when needed */
  overflow?: "hidden" | "visible";
}

export function Card({
  children,
  className,
  elevated = false,
  padding = true,
  staticSurface = false,
  overflow = "hidden",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-outline-variant/50 bg-surface",
        overflow === "hidden" ? "overflow-hidden" : "overflow-visible",
        elevated ? "shadow-card-md" : "shadow-card-sm",
        !staticSurface &&
          "transition-[box-shadow,border-color,transform] duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:border-outline/80 hover:shadow-card-lg motion-reduce:hover:translate-y-0",
        padding && "p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
