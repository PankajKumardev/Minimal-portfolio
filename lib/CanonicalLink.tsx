'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const CanonicalLink = () => {
  const pathname = usePathname();
  const canonicalUrl = `https://www.pankajk.tech${pathname}`;

  useEffect(() => {
    const link: HTMLLinkElement | null = document.querySelector(
      'link[rel="canonical"]'
    );

    if (link) {
      link.setAttribute('href', canonicalUrl);
    } else {
      const newLink = document.createElement('link');
      newLink.setAttribute('rel', 'canonical');
      newLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(newLink);
    }
  }, [canonicalUrl]);

  return null;
};

export default CanonicalLink;
