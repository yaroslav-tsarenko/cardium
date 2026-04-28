"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { HiPaperAirplane } from "react-icons/hi2";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa6";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative bg-slate-900 pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-accent-violet to-accent-cyan" />
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-[22px] font-bold tracking-tight text-white">
              Cardium
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t("products")}
            </h4>
            <ul className="space-y-3">
              {[
                { key: "virtualCards", href: "/" },
                { key: "cardFunding", href: "/rates" },
                { key: "apiAccess", href: "/contact" },
                { key: "teamManagement", href: "/about" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {[
                { key: "aboutUs", href: "/about" },
                { key: "blog", href: "/blog" },
                { key: "careers", href: "/" },
                { key: "contact", href: "/contact" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {t("newsletter")}
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = new FormData(form).get("email") as string;
                if (email) {
                  fetch("/api/waitlist", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, source: "footer" }),
                  });
                  form.reset();
                }
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={t("emailPlaceholder")}
                className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-white outline-none focus:border-primary-500 transition-colors placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-primary-500 px-4 py-2.5 text-white hover:bg-primary-600 transition-colors cursor-pointer"
              >
                <HiPaperAirplane className="h-4 w-4" />
              </button>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-4">
                {t("legal")}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {t("terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {t("privacy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment network logos */}
        <div className="mt-12 flex items-center justify-center gap-6 border-t border-slate-800 pt-8">
          <img src="/cards/visa.png" alt="Visa" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/cards/mastercard.png" alt="Mastercard" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
          <img src="/cards/pci-dss-compliant-logo-vector.svg" alt="PCI DSS Compliant" className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity invert" />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Cardium. {t("rights")}
          </p>
          <div className="flex gap-4">
            {[
              { icon: FaXTwitter, label: "Twitter" },
              { icon: FaLinkedinIn, label: "LinkedIn" },
              { icon: FaGithub, label: "GitHub" },
              { icon: FaDiscord, label: "Discord" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
