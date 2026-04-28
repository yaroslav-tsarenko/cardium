"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { DiamondGrid, WaveLine } from "@/components/ui/VectorShapes";
import { HiCreditCard, HiUserGroup, HiCodeBracket, HiChartBar, HiShieldCheck, HiWallet } from "react-icons/hi2";

const featureIcons = {
  instantCards: HiCreditCard,
  flexibleTopUp: HiWallet,
  teamAccounts: HiUserGroup,
  api: HiCodeBracket,
  analytics: HiChartBar,
  security: HiShieldCheck,
};

const featureKeys = [
  "instantCards",
  "flexibleTopUp",
  "teamAccounts",
  "api",
  "analytics",
  "security",
] as const;

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Parallax decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.15} className="absolute -top-10 right-[8%]">
          <DiamondGrid className="w-48 h-48 opacity-30" />
        </ParallaxElement>
        <ParallaxElement speed={-0.2} className="absolute bottom-0 left-0 right-0">
          <WaveLine className="w-full h-20 opacity-40" />
        </ParallaxElement>
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">{t("sectionTag")}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4 tracking-[-0.025em]">
              {t("title")}
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureKeys.map((key) => {
              const Icon = featureIcons[key];
              return (
                <Card key={key} className="group">
                  <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-500 group-hover:bg-primary-100 transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>
                </Card>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
