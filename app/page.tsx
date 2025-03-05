import About from "./components/about";
import FeatureSection from "./components/features";
import Header from "./components/header";
import HeroSection from "./components/hero_section";
import Grow from "./components/impact";

export default function Home() {
  return (
    <div className="bg-[#fef9f8]">
      <HeroSection />
      <About />
      <Grow />
      <FeatureSection />
    </div>
  );
}
