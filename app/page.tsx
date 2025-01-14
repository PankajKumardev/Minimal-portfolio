import { motion } from 'framer-motion';
import AboutSection from '@/components/about-section';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="flex flex-col w-full text-slate-300 mx-auto">
      <motion.div
        initial={{ filter: 'blur(0px)' }}
        whileHover={{ filter: 'blur(5px)' }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        initial={{ filter: 'blur(0px)' }}
        whileHover={{ filter: 'blur(5px)' }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ filter: 'blur(0px)' }}
        whileHover={{ filter: 'blur(5px)' }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.div>
      <motion.div
        initial={{ filter: 'blur(0px)' }}
        whileHover={{ filter: 'blur(5px)' }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
