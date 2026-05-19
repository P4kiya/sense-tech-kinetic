import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  padding?: boolean;
  /** Disable hover lift (e.g. dense data tables) */
  staticSurface?: boolean;
}

export function Card({
  children,
  className,
  elevated = false,
  padding = true,
  staticSurface = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-outline-variant/50 bg-surface overflow-hidden transition-[box-shadow,border-color] duration-300",
        elevated ? "shadow-card-md" : "shadow-card-sm",
        !staticSurface &&
          (elevated
            ? "hover:border-outline-variant"
            : "hover:border-outline-variant hover:shadow-card-md"),
        padding && "p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
