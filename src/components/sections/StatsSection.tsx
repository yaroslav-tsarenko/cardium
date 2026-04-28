"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { CountUp } from "@/components/animations/CountUp";

const stats = [
  { key: "cards", value: "50", prefix: "", suffix: "K+" },
  { key: "volume", value: "100", prefix: "", suffix: "+" },
  { key: "uptime", value: "99.99", prefix: "", suffix: "%" },
  { key: "countries", value: "150", prefix: "", suffix: "+" },
] as const;

export function StatsSection() {
  const t = useTranslations("hero.stats");

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Parallax floating shapes */}
      <ParallaxElement speed={0.2} className="absolute top-4 left-[10%] w-20 h-12 rounded-lg border border-white/10 rotate-6 opacity-20" />
      <ParallaxElement speed={-0.15} className="absolute bottom-4 right-[15%] w-16 h-10 rounded-lg border border-white/10 -rotate-6 opacity-15" />

      <Container className="relative z-10">
        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm sm:text-base text-white/70">{t(stat.key)}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
