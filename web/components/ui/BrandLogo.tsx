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
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-sm transition-[box-shadow,transform] duration-300 group-hover:shadow-card-sm">
          <span
            className="relative w-[3px] rounded-full bg-on-surface"
            style={{ height: 18 }}
            aria-hidden
          />
        </span>
        <span className="flex min-w-0 flex-col items-start leading-none">
          <span className="font-bold tracking-[0.18em] text-[12px] text-on-surface sm:text-[13px]">
            SENSE-TECH
          </span>
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-on-surface-variant sm:text-[11px]">
            Kinetic
          </span>
        </span>
      </span>
    );

    if (href) {
      return (
        <Link
          href={href}
          className="inline-flex shrink-0 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {inner}
        </Link>
      );
    }
    return inner;
  }

  const content = (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span
        className="w-[3px] rounded-full bg-on-surface"
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
