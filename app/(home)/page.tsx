import Hero from "@/components/sections/hero";
import About from "../../components/sections/about";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <div className="w-full h-screen"></div>
    </main>
  );
}
