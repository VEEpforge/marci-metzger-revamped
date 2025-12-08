import Footer from "@/components/footer";
import About from "@/components/sections/about";
import Background from "@/components/sections/background";
import Hero from "@/components/sections/hero";
import Properties from "@/components/sections/properties";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Background />
      <About />
      <Services />
      <Properties />
      <Footer />
    </main>
  );
}
