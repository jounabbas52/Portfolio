import { Inter, Outfit } from 'next/font/google';
import { site } from '@/config/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  title: `${site.fullName} — ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
  },
  icons: { icon: '/favicon.ico', apple: '/logo192.png' },
};

export const viewport = {
  themeColor: '#0a0a0f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
