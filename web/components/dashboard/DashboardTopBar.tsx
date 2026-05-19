import { Menu, User, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface DashboardTopBarProps {
  onMenuClick?: () => void;
  onMenuClose?: () => void;
  /** When true, mobile drawer is open (show close in bar) */
  mobileNavOpen?: boolean;
}

export function DashboardTopBar({
  onMenuClick,
  onMenuClose,
  mobileNavOpen = false,
}: DashboardTopBarProps) {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-outline-variant/40 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 w-full items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2">
          {onMenuClick ? (
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-outline-variant/50 bg-surface text-on-surface transition-colors hover:bg-surface-container-highest md:hidden"
              aria-expanded={mobileNavOpen}
              aria-controls="admin-sidebar"
              onClick={mobileNavOpen ? onMenuClose : onMenuClick}
            >
              {mobileNavOpen ? (
                <X className="h-5 w-5" strokeWidth={2} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2} />
              )}
            </button>
          ) : null}
          <BrandLogo href="/admin" size="sm" />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden text-caption sm:inline">Admin</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/80 ring-1 ring-primary/10">
            <User className="h-4 w-4 text-primary" strokeWidth={2} />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="text-section-title truncate text-sm font-semibold leading-tight tracking-tight">
              Marie Dupont
            </p>
            <p className="text-caption">Facility Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
