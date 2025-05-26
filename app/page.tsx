import RealEstateHero from "@/components/RealEstateHero";
import FeaturedProperties from "@/components/FeaturedProperties";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import AnimatedBackground from "@/components/AnimatedBackground";

const Home = () => {
  return (
    <>
      {/* <AnimatedBackground /> */}
      <div className="relative z-10 bg-white">
        <RealEstateHero />

        {/* Section Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100 to-transparent h-32" />
        </div>

        <FeaturedProperties />

        {/* Section Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100 to-transparent h-32" />
        </div>

        <ValueProposition />

        {/* Section Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100 to-transparent h-32" />
        </div>

        <HowItWorks />

        {/* Section Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100 to-transparent h-32" />
        </div>

        <Testimonials />

        {/* Section Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100 to-transparent h-32" />
        </div>

        <Newsletter />
      </div>
    </>
  );
};

export default Home;
