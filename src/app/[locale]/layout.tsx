import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { satoshi, dmSans, jetbrainsMono } from "@/styles/fonts";
import { locales } from "@/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: [
      "virtual cards",
      "media buying",
      "ad spend",
      "Google Ads",
      "Meta Ads",
      "Bing Ads",
      "fintech",
      "Cardium",
    ],
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      siteName: "Cardium",
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
    },
    alternates: {
      languages: { en: "/en", uk: "/uk", es: "/es" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${satoshi.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="relative z-[1] min-h-full flex flex-col bg-background text-text-primary font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
