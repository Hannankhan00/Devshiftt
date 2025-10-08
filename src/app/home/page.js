import HeroParticles from "./components/hero-particles";
import Services from "./components/services";
import Results from "./components/Results";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";


export const metadata = {
    title: "Devshift",
    description: "Professional web development, design, and digital marketing services",
};

export default function HomePage() {
    return (
        <>
            {/* Hero Section - Particles Effect */}
            <HeroParticles />
            
            {/* Services Section */}
            <Services />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Process Section */}
            <Process />

            {/* Results Section */}
            <Results />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Final CTA Section */}
            <FinalCTA />
        </>
    );
}
