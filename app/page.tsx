import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Certifications />
      <Skills />
      <Contact />
    </>
  );
}
