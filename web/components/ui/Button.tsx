import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1d1d1f] text-white shadow-sm hover:bg-[#333336] active:scale-[0.98]",
  secondary:
    "bg-white text-[#1d1d1f] border border-[#d2d2d7] backdrop-blur-sm hover:bg-[#f5f5f7] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[#0071e3] hover:bg-[#f5f5f7]",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-semibold leading-none tracking-tight transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
