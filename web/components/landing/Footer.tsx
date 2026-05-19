import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/40 bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <BrandLogo href="/" />
        <p className="text-caption max-w-xs leading-relaxed sm:text-center">
          © {new Date().getFullYear()} SENSE-TECH Kinetic. Industrial safety monitoring.
        </p>
        <nav className="flex gap-8 text-caption" aria-label="Footer">
          <a href="#features" className="transition-colors hover:text-primary">
            Features
          </a>
          <a href="/admin" className="transition-colors hover:text-primary">
            Admin
          </a>
        </nav>
      </div>
    </footer>
  );
}
