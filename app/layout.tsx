import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import CanonicalLink from '../lib/CanonicalLink';
import LenisProvider from '@/providers/LenisProvider';

// Google Font Setup
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

// Metadata for the website
export const metadata: Metadata = {
  title: 'Pankaj Kumar | Full-stack Developer Portfolio',
  description: 'Portfolio of Pankaj Kumar, a Full-stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <CanonicalLink />
        <Analytics />
        <Script
          defer
          data-domain="pankajk.tech" // Replace with your domain
          src="https://analytics-code.vercel.app/tracking-script.js"
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
