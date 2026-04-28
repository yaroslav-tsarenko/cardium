"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { cn } from "@/lib/utils/cn";
import { NAV_LINKS } from "@/lib/utils/constants";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-navbar border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-[22px] font-bold tracking-tight text-text-primary">
            Cardium
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-colors hover:text-primary-500",
                  pathname === link.href
                    ? "text-primary-500"
                    : "text-slate-600"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              {t("signIn")}
            </Button>
            <Button variant="primary" size="sm">
              {t("signUp")}
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-text-primary cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-lg">
          <Container className="py-6">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    pathname === link.href
                      ? "text-primary-500"
                      : "text-slate-600"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <Button variant="outline" size="sm" className="flex-1">
                  {t("signIn")}
                </Button>
                <Button variant="primary" size="sm" className="flex-1">
                  {t("signUp")}
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
