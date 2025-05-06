import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Newsletter } from "@/components/sections/Newsletter";
import { Programs } from "@/components/sections/Programs";
import { Testimonials } from "@/components/sections/Testimonials";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Programs />
      <About />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
}
