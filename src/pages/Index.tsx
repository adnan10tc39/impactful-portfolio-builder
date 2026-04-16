import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Insights } from "@/sections/Insights";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Insights />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
