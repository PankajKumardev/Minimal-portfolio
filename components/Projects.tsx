'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FlowPay',
    description:
      'A P2P payment system offering seamless bank integration, real-time transaction tracking, and wallet management.',
    tech: [
      'TailwindCSS',
      'Next.js',
      'PostgreSQL',
      'Prisma',
      'NextAuth',
      'Turborepo',
      'Docker',
      'AWS EC2',
      'CI/CD',
    ],
    github: 'https://github.com/PankajKumardev/flowpay',
    live: 'https://flowpay-one.vercel.app',
    demo: 'https://drive.google.com/file/d/1C5EYXgttfM7UXPuQ__ytBI0Cm21jrnml/view',
  },
  {
    title: 'Feed-Wall',
    description:
      'A platform to collect feedback by integrating a widget with easily embeddable code, analyze the feedback, and download feedbacks with AI-powered summaries.',
    tech: [
      'TailwindCSS',
      'Next.js',
      'Gemini API',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'NextAuth',
      'Docker',
    ],
    github: 'https://github.com/PankajKumardev/feedwall',
    live: 'https://feedwall.vercel.app',
    demo: 'https://drive.google.com/file/d/1-I8RIAP4__Cu2Yxz-rTAwNUP7Y1T3AtU/view',
  },
  {
    title : 'Bolt',
    description: "Bolt is a dynamic web-based platform where you can generate complete websites from simple prompts.",
    tech : [
      "TailwindCS",
      "React.js",
      "Express.js",
      'Gemini API',
      'TypeScript',
      'StackBlitz WebContainer'
    ],
    github : 'https://github.com/PankajKumardev/Bolt-Clone',
    live : "https://boltweb-ai.vercel.app",
  },
  {
    title: 'Ui-Unify',
    description:
      'A platform integrating multiple UI libraries with AI-powered developer tools for seamless interface creation.',
    tech: [
      'TailwindCSS',
      'Next.js',
      'TypeScript',
      'Gemini API',
      'Framer Motion',
    ],
    github: 'https://github.com/pankajkumardev/ui-unify',
    live: 'https://ui-unify.vercel.app',
    demo: 'https://drive.google.com/file/d/1klxRjHmezRuy9FRvQsxLL6U80oS8cd-g/view',
  },
];

export default function Projects() {
  return (
    <motion.div
      className="mx-auto  mt-8"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className=" my-4 rounded-lg ">
            <h2 className="text-base font-semibold text-slate-200">
              {index + 1}. {project.title}
            </h2>
            <p className="text-slate-300 mt-1 text-base tracking-tight">
              {project.description || 'No description available.'}
            </p>
            <div className="mt-2">
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 text-sm flex gap-3">
              <a
              href={project.github}
              className="text-slate-100 hover:text-blue-400 transition-colors font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              >
              GitHub
              </a>
              <span className="text-slate-400">|</span>
              <a
              href={project.live}
              className="text-slate-100 hover:text-blue-400 transition-colors font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              >
              Live
              </a>
              <span className="text-slate-400">|</span>
              <a
              href={project.demo}
              className="text-slate-100 hover:text-blue-400 transition-colors font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              >
              Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
