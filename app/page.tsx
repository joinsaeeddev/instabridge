import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import PortalLogin from "./components/PortalLogin";
import Features from "./components/Features";
import WhatIs from "./components/WhatIs";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <PortalLogin />
      <Features />
      <WhatIs />
      <Steps />
      <Pricing />
      <CTA />
    </>
  );
}
