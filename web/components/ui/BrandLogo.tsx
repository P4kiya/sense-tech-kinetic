import Link from "next/link";
import { cn } from "@/lib/cn";

interface BrandLogoProps {
  className?: string;
  href?: string;
  size?: "sm" | "md";
}

export function BrandLogo({ className, href = "/", size = "md" }: BrandLogoProps) {
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
