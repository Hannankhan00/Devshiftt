import Header from "../components/header";
import Hero from "./components/hero";
import HeroParticles from "./components/hero-particles";
import Services from "./components/services";

export const metadata = {
    title: "Devshift",
    description: "…",
};

export default function HomePage() {
    return (
        <>
            {/* Hero Section - Grid Pattern */}
            <Hero />
            
            {/* Hero Section - Particles Effect */}
            <HeroParticles />
            
            <main className="pt-16">
                {/* Services Section */}
                <Services />
            </main>
        </>
    );
}
