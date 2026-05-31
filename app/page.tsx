import AIChat from "@/components/AIChat"; 
import LeadQualification from "@/components/LeadQualification";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Tools } from "@/components/sections/Tools";
import { WhyWorkWithMe } from "@/components/sections/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Tools /> 
      <About />
      <Services />
      <WhyWorkWithMe />
      <CaseStudies />
      <Certifications />
      <Skills />
      <Contact />
      <LeadQualification />
      <AIChat />
    </>
  );
}
