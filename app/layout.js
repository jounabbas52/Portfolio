import { Inter, Outfit } from 'next/font/google';
import { site } from '@/config/site';
import Aurora from '@/components/Aurora';
import ScrollProgress from '@/components/ScrollProgress';
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
  themeColor: '#06070f',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Scroll-reveal starts elements at opacity 0 and an observer brings
            them in. If JS never runs there is no observer — this keeps the
            whole page readable rather than blank. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        {/* One backdrop and one progress bar for every route — the whole site
            scrolls over the same composition. */}
        <Aurora />
        <ScrollProgress />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
