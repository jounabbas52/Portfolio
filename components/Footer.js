import Link from 'next/link';
import { site } from '@/config/site';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] px-4 py-7 sm:px-10 sm:py-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p className="flex items-center gap-5">
          <Link href="/resume" className="transition-colors hover:text-white">
            Résumé
          </Link>
          <span>{site.location}</span>
          <a href="#home" className="transition-colors hover:text-white">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
