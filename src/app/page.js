import Hero from "@/app/home/components/hero";
import Services from "@/app/home/components/services";
import WhyChooseUs from "@/app/home/components/WhyChooseUs";

export const metadata = {
    title: "Devshift",
    description: "Professional web development, design, and digital marketing services",
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <WhyChooseUs />
        </> 
    );
}