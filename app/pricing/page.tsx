import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import PageHero from "../components/PageHero";

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Simple, transparent pricing for businesses of every size. No hidden fees, no surprises."
      />
      <Pricing />
      <CTA />
    </>
  );
}
