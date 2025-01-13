export default function Skills() {
  const skills = [
    'TailwindCss',
    'Javascript',
    'Typescript',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQl',
    'Prisma',
    'Nextauth',
    'Zod',
    'Docker',
    'CI/CD,',
  ];
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
