const projects = [
  {
    title: 'Ui-Unify',
    description:
      'A unified platform integrating multiple UI libraries for seamless development.',
    tech: [
      'Nextjs',
      'TailwindCSS',
      'TypeScript',
      'Gemini API',
      'Framer Motion',
    ],
    github: 'https://github.com/pankajkumardev/ui-unify',
    live: 'https://ui-unify.vercel.app',
  },
  {
    title: 'FlowPay',
    description:
      'A peer-to-peer payment system offering real-time transaction tracking and secure wallet management.',
    image: '',
    tech: [
      'Next.js',
      'TailwindCSS',
      'Docker',
      'AWS EC2',
      'PostgreSQL',
      'Prisma',
    ],
    github: 'https://github.com/PankajKumardev/flowpay',
    live: 'https://flowpay-one.vercel.app',
  },

  {
    title: 'Feed-Wall',
    description: '',
    tech: [
      'Next.js',
      'TailwindCSS',
      'Docker',
      'AWS EC2',
      'PostgreSQL',
      'Prisma',
    ],
    github: 'https://github.com/PankajKumardev/feedwall',
    live: 'https://flowpay-one.vercel.app',
  },
];
export default function Projects() {
  return (
    <div className="mt-8 mx-auto max-w-2xl sm:px-2 md:px-4 px-8">
      <h1 className="text-xl text-slate-100">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="my-4 rounded-lg ">
            <h2 className="text-base font-semibold text-slate-200">
              {index + 1}. {project.title}
            </h2>
            <p className="text-slate-400 mt-1 text-sm">
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
            <div className="mt-2 text-sm">
              <a
                href={project.github}
                className="text-slate-100 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span className="mx-2">|</span>
              <a
                href={project.live}
                className="text-slate-100 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
