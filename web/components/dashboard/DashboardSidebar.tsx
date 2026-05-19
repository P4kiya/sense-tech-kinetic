"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { ADMIN_BASE, adminNavItems } from "@/lib/admin-nav";

interface DashboardSidebarProps {
  onNavigate?: () => void;
}

export function DashboardSidebar({ onNavigate }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col py-4 md:py-6">
      <p className="text-overline mb-3 px-4 md:mb-4">Admin</p>
      <nav className="flex flex-1 flex-col gap-0.5 px-2" aria-label="Admin navigation">
        {adminNavItems.map((item) => {
          const active =
            item.href === ADMIN_BASE
              ? pathname === ADMIN_BASE || pathname === `${ADMIN_BASE}/`
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
                active
                  ? "bg-primary-container text-primary"
                  : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface",
              )}
            >
              <Icon className="h-5 w-5 shrink-0 opacity-90" strokeWidth={2} aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-outline-variant/50 px-4 pt-4">
        <Link
          href="/"
          onClick={onNavigate}
          className="text-caption font-medium text-on-surface-variant transition-colors hover:text-primary"
        >
          ← Back to site
        </Link>
      </div>
    </div>
  );
}
