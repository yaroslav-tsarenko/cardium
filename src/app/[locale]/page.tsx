import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { RatesPreview } from "@/components/sections/RatesPreview";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <LogoCarousel />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <IntegrationsSection />
      <HowItWorks />
      <ComparisonSection />
      <RatesPreview />
      <SecuritySection />
      <FAQSection />
      <CTASection />
    </>
  );
}
