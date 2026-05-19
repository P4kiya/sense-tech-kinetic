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
    "bg-primary text-on-primary shadow-sm shadow-primary/20 hover:brightness-[1.03] active:brightness-[0.97]",
  secondary:
    "bg-surface/90 text-on-surface border border-outline-variant/60 backdrop-blur-sm hover:bg-surface-container-highest/80 hover:border-outline-variant",
  ghost:
    "bg-transparent text-primary hover:bg-primary-container/60",
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
