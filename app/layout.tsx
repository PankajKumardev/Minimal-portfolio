import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

// Google Font Setup
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

// Metadata for the website
export const metadata: Metadata = {
  title: 'Pankaj Kumar',
  description: 'Portfolio of Pankaj Kumar, a Full-stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const canonicalUrl = `https://www.pankajk.tech${pathname}`;

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={canonicalUrl} />
        {/* Add any other <head> tags here */}
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {/* Vercel Analytics */}
        <Analytics />

        {/* Tracking Script */}
        <Script
          defer
          data-domain="pankajk.tech" // Replace with your domain
          src="https://analytics-code.vercel.app/tracking-script.js"
        />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
