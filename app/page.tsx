import AboutSection from "@/components/about-section";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return <div className="flex flex-col  justify-center items-center w-full text-slate-400 mx-auto ">
    <AboutSection/>
    <Skills/>
    <Projects/>
    {/* <Contact/> */}
  </div>;
}
