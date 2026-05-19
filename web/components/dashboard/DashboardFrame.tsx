"use client";

import { useEffect, useState } from "react";
import { DashboardTopBar } from "@/components/dashboard/DashboardTopBar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { cn } from "@/lib/cn";

export function DashboardFrame({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardTopBar
        onMenuClick={() => setMobileNavOpen(true)}
        onMenuClose={() => setMobileNavOpen(false)}
        mobileNavOpen={mobileNavOpen}
      />
      <div className="flex min-h-0 flex-1">
        {mobileNavOpen ? (
          <button
            type="button"
            className="fixed inset-0 top-14 z-30 bg-on-surface/25 backdrop-blur-[2px] md:hidden"
            aria-label="Close navigation"
            onClick={() => setMobileNavOpen(false)}
          />
        ) : null}
        <aside
          id="admin-sidebar"
          className={cn(
            "z-40 flex w-[264px] shrink-0 flex-col overflow-y-auto border-outline-variant/40 bg-surface transition-transform duration-200 ease-out",
            "fixed bottom-0 left-0 top-14 border-r md:static md:top-auto md:translate-x-0",
            mobileNavOpen ? "translate-x-0 shadow-card-md md:shadow-none" : "-translate-x-full md:translate-x-0",
          )}
        >
          <DashboardSidebar onNavigate={() => setMobileNavOpen(false)} />
        </aside>
        <main className="min-w-0 flex-1 overflow-y-auto px-4 py-8 sm:px-6 md:px-8 md:py-10">
          <div className="mx-auto w-full max-w-6xl pb-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
