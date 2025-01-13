export default function Skills() {
  const skills = [
    { skill: 'TailwindCSS' },
    { skill: 'Javascript' },
    { skill: 'Typescript' },
    { skill: 'React' },
    { skill: 'Next.js' },
    { skill: 'Node.js' },
    { skill: 'Express.js' },
    { skill: 'MongoDB' },
    { skill: 'Prisma' },
    { skill: 'PostgreSQL' },
    { skill: 'Nextauth' },
    { skill: 'Zod' },
    { skill: 'Docker' },
    { skill: 'CI/CD' },
    {skill : 'Postman'},
    {skill : 'Git'},
    {skill : 'VS Code'},
    {skill : 'C++'},
    {skill : 'Python'}
  ];
  return (
    <div className="mt-4 mx-auto max-w-2xl sm:px-2 md:px-4 px-8">
      <h2 className="text-xl text-slate-100">Skills & Tools</h2>
      <div className="flex flex-wrap gap-2 mt-2 max-w-2xl">
      {skills.map((skill) => (
        <div
        key={skill.skill}
        className="bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold"
        >
        {skill.skill}
        </div>
      ))}
      </div>
    </div>
  );
}
