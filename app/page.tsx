import HeroSection from "./components/hero-page";
import AbouteMe from "./components/abt-me";
import MyServices from "./components/services";
import SectionGap from "./components/reusabls/section-gap";
import MyProjects from "./components/MyProjects";
import Contact from "./components/contact";

export default function Home() {
  return (
<main>
  <HeroSection />
  <SectionGap />
  <AbouteMe />
  <SectionGap />
  <MyServices />
  <SectionGap/>
  <MyProjects />
  <SectionGap />
  <Contact />
</main>    
  )
}
