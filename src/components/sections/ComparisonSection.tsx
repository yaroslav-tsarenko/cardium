"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ParallaxElement } from "@/components/animations/ParallaxElement";
import { DiamondGrid } from "@/components/ui/VectorShapes";
import { HiCheck, HiXMark } from "react-icons/hi2";

const features = [
  "instantIssuing",
  "cardFunding",
  "unlimitedCards",
  "teamManagement",
  "apiAccess",
  "flexibleTopUp",
  "realTimeAnalytics",
  "dedicatedSupport",
] as const;

const competitors = ["cardium", "competitorA", "competitorB"] as const;

export function ComparisonSection() {
  const t = useTranslations("comparison");

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <ParallaxElement speed={0.15} className="absolute top-10 left-[5%]">
          <DiamondGrid className="w-40 h-40 opacity-20" />
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

        <ScrollReveal>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-medium text-text-tertiary">
                    {t("featureLabel")}
                  </th>
                  {competitors.map((comp) => (
                    <th
                      key={comp}
                      className={`py-4 px-6 text-sm font-semibold text-center ${
                        comp === "cardium"
                          ? "text-primary-600 bg-primary-50 rounded-t-xl"
                          : "text-text-secondary"
                      }`}
                    >
                      {t(`competitors.${comp}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={feature} className={idx % 2 === 0 ? "bg-white" : ""}>
                    <td className="py-4 px-4 text-sm text-text-primary font-medium">
                      {t(`features.${feature}`)}
                    </td>
                    {competitors.map((comp) => {
                      const val = t.raw(`values.${feature}.${comp}`) as boolean;
                      return (
                        <td
                          key={comp}
                          className={`py-4 px-6 text-center ${
                            comp === "cardium" ? "bg-primary-50/50" : ""
                          }`}
                        >
                          {val ? (
                            <HiCheck className="h-5 w-5 text-accent-emerald mx-auto" />
                          ) : (
                            <HiXMark className="h-5 w-5 text-slate-300 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
