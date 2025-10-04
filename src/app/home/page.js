import Hero from "./components/hero";
import HeroParticles from "./components/hero-particles";
import Services from "./components/services";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";


export const metadata = {
    title: "Devshift",
    description: "Professional web development, design, and digital marketing services",
};

export default function HomePage() {
    return (
        <>
            {/* Hero Section - Grid Pattern */}
            <Hero />
            
            {/* Hero Section - Particles Effect */}
            <HeroParticles />
            
            {/* Services Section */}
            <Services />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Process Section */}
            <Process />
        </>
    );
}
