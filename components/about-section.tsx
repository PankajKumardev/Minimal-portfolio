import {
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/Pankajkumardev0',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    url: '',
    icon: FaGithub,
  },
  {
    name: 'Twitter',
    url: '',
    icon: FaTwitterSquare,
  },
  {
    name: 'Resume',
    url: '',
    icon: FaFileAlt,
  },
];

export default function AboutSection() {
  return (
    <div className=" mx-auto max-w-2xl px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="text-xl font-semibold text-slate-200">
          Hi, I'm Pankaj 👋
        </h1>
        <div className="text-base flex items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex gap-4">
              {Socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="group relative flex items-center text-slate-100">
                    <social.icon
                      size={20}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-white text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <a
              href="mailto:Pankajams1234@gmail.com"
              className="transition-colors duration-300 flex items-center gap-2 hover:text-white"
            >
              <span className="transition-transform duration-300 text-slate-300 hover:text-white text-sm">
                Pankajdev@gmail.com
              </span>
             
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col ">
        <h2 className="text-xl text-slate-200">About Me.</h2>
        <ul className="mt-2 flex flex-col gap-2 list-disc list-inside text-base">
          <li>
            Hi, I am Pankaj Kumar, a Full-stack Developer passionate about
            creating and delivering projects that make a real-world impact.
          </li>
          <li>
            I specialize in full-stack development with Next.js and Express.js,
            using TypeScript for type safety. I have experience with modern web
            technologies and tools.
          </li>
          <li>
            Have an idea and want to collaborate? Feel free to message me! I'm
            always excited to connect and work on great projects.{' '}
            <a
              href="mailto:Pankajams1234@gmail.com"
              className="text-slate-100 hover:text-blue-300 underline"
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
