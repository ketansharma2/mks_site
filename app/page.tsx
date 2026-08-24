// app/page.tsx

import Hero from "./components/ui/Hero";
import Statistics from "./components/ui/Statistics";
import AboutPreview from "./components/ui/AboutPreview";
import SolutionsSection from "./components/ui/SolutionsSection";
import ProductsPreview from "./components/ui/ProductsPreview";
import IndustriesSection from "./components/ui/IndustriesSection";
import EngineeringProcess from "./components/ui/EngineeringProcess";
import ProjectsPreview from "./components/ui/ProjectsPreview";
import FinalCTA from "./components/ui/FinalCTA";



export default function Home() {
  return (
    <main>
   
      <Hero />
      <Statistics />
      <AboutPreview />
      {/* <SolutionsSection />  */}
      <ProductsPreview />
      <IndustriesSection />
      <EngineeringProcess />
      <ProjectsPreview />
       <FinalCTA />
   
    </main>
  );
}