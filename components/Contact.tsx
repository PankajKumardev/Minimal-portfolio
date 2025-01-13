import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contactMethods = [
  {
    href: 'https://twitter.com/yourprofile',
    icon: <FaTwitter />,
    label: 'Twitter',
  },
  {
    href: 'https://linkedin.com/in/yourprofile',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:your.email@example.com',
    icon: <FaEnvelope />,
    label: 'Email',
  },
];

export default function Contact() {
  return (
    <div className="mt-4 mx-auto max-w-2xl sm:px-2 md:px-4 px-8">
      <h1 className="text-xl text-slate-100">Reach out to me.</h1>
      <p className="text-base tracking-tight">
        Feel free to reach out to me via email, LinkedIn, or Twitter for any
        queries, collaboration opportunities, or further details.
      </p>
      <div className="mt-4 mb-4">
        <div className="mt-4 flex flex-wrap gap-4">
          {contactMethods.map((method, index) => (
            <Link legacyBehavior key={index} href={method.href} passHref>
              <a
          className="bg-slate-100 text-slate-800 p-2 border rounded shadow text-sm font-semibold flex items-center"
          target="_blank"
          rel="noopener noreferrer"
              >
          {method.icon}
          <span className="ml-2">{method.label}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
