import AboutSection from '@/components/about-section';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="flex flex-col max-w-3xl md:px-4 px-8  mt-10  w-full text-slate-300 mx-auto ">
      <AboutSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
