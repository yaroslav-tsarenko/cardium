"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { FloatingRings } from "@/components/ui/VectorShapes";
import { HiCheck, HiArrowRight } from "react-icons/hi2";

const amounts = ["$10", "$100", "$500", "$1,000", "$5,000"];

export function RatesPreview() {
  const t = useTranslations("rates");

  const features = t.raw("features") as string[];
  const highlights = t.raw("highlights") as { title: string; value: string; description: string }[];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.15} className="absolute top-20 left-[5%]">
          <FloatingRings className="w-40 h-40 opacity-20" />
        </ParallaxElement>
        <ParallaxElement speed={-0.2} className="absolute bottom-10 right-[8%]">
          <FloatingRings className="w-32 h-32 opacity-15" />
        </ParallaxElement>
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4">{t("sectionTag")}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-4 tracking-[-0.025em]">
              {t("title")}
            </h2>
            <p className="text-text-secondary mt-4">{t("subtitle")}</p>
          </div>
        </ScrollReveal>

        {/* Top-up amount showcase */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-16">
            <Card hover={false} className="text-center p-10">
              <p className="text-sm font-medium text-text-tertiary uppercase tracking-widest mb-3">
                {t("topUpLabel")}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {amounts.map((amount) => (
                  <span
                    key={amount}
                    className="inline-flex items-center rounded-xl border border-primary-200 bg-primary-50 px-5 py-2.5 text-lg font-bold font-mono text-primary-600 transition-all hover:bg-primary-100 hover:scale-105 cursor-default"
                  >
                    {amount}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-lg font-bold font-mono text-text-secondary">
                  {t("customAmount")}
                </span>
              </div>
              <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">{t("topUpDescription")}</p>
              <Button size="lg" className="group">
                {t("topUpCta")}
                <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </div>
        </ScrollReveal>

        {/* Highlight stats */}
        <ScrollReveal stagger={0.1}>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {highlights.map((item) => (
              <Card key={item.title} className="text-center">
                <div className="text-3xl font-bold font-mono text-primary-500 mb-1">{item.value}</div>
                <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Features included */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-text-primary text-center mb-8">
              {t("includesTitle")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature: string) => (
                <div key={feature} className="flex items-center gap-3 text-sm">
                  <HiCheck className="h-4 w-4 shrink-0 text-accent-emerald" />
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
