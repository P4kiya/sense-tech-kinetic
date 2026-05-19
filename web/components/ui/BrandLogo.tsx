import Link from "next/link";
import { cn } from "@/lib/cn";

interface BrandLogoProps {
  className?: string;
  href?: string;
  size?: "sm" | "md";
  /** Richer lockup for marketing header only */
  variant?: "default" | "landing";
}

export function BrandLogo({
  className,
  href = "/",
  size = "md",
  variant = "default",
}: BrandLogoProps) {
  if (variant === "landing") {
    const inner = (
      <span className={cn("group inline-flex items-center gap-3", className)}>
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface/90 shadow-sm ring-1 ring-white/80 transition-[box-shadow,transform] duration-300 group-hover:shadow-card-sm group-hover:ring-primary/20">
          <span
            className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container/30 to-transparent opacity-70"
            aria-hidden
          />
          <span
            className="relative w-[3px] rounded-full bg-gradient-to-b from-primary to-primary/70"
            style={{ height: 18 }}
            aria-hidden
          />
        </span>
        <span className="flex min-w-0 flex-col items-start leading-none">
          <span className="font-bold tracking-[0.18em] text-[12px] text-on-surface sm:text-[13px]">
            SENSE-TECH
          </span>
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-[11px]">
            Kinetic
          </span>
        </span>
      </span>
    );

    if (href) {
      return (
        <Link href={href} className="inline-flex shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl">
          {inner}
        </Link>
      );
    }
    return inner;
  }

  const content = (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span
        className="w-[3px] rounded-full bg-primary"
        style={{ height: size === "sm" ? 14 : 16 }}
        aria-hidden
      />
      <span
        className={cn(
          "font-bold tracking-[1.4px] text-on-surface",
          size === "sm" ? "text-sm tracking-[1.4px]" : "text-brand",
        )}
      >
        SENSE-TECH
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
