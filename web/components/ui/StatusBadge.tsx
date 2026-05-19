import { cn } from "@/lib/cn";
import { sensorStatusLabels } from "@/lib/admin-i18n";

export type SensorStatus = "NORMAL" | "WARNING" | "DANGER";

const statusStyles: Record<
  SensorStatus,
  { container: string; dot: string; text: string }
> = {
  NORMAL: {
    container: "bg-success-container/90 border-[rgba(13,159,110,0.12)]",
    dot: "bg-success",
    text: "text-success",
  },
  WARNING: {
    container: "bg-warning-container/90 border-[rgba(201,138,26,0.14)]",
    dot: "bg-warning",
    text: "text-warning",
  },
  DANGER: {
    container: "bg-error-container/90 border-[rgba(229,72,77,0.12)]",
    dot: "bg-error",
    text: "text-error",
  },
};

interface StatusBadgeProps {
  status: SensorStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const s = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide",
        s.container,
        s.text,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", s.dot)} aria-hidden />
      {sensorStatusLabels[status]}
    </span>
  );
}
