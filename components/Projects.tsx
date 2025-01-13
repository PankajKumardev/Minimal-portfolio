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
      'CI/CD'
     
    ],
    github: 'https://github.com/PankajKumardev/flowpay',
    live: 'https://flowpay-one.vercel.app',
  },
  {
    title: 'Feed-Wall',
    description:
      'A platform to collect, analyze, and download feedback for projects with AI-powered summaries.',
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
  },
];

export default function Projects() {
  return (
    <div className="mt-8 mx-auto max-w-2xl sm:px-2 md:px-4 px-8">
      <h1 className="text-xl text-slate-100">Projects</h1>
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
