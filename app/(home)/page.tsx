import Footer from "@/components/footer";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Services />
      {/* <div className="w-full h-screen"></div> */}
      <Footer />
    </main>
  );
}
