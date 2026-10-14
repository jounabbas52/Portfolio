import Link from 'next/link';
import { site } from '@/config/site';

export default function Footer() {
  return (
    <footer className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-ink/45 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
        <p className="flex items-center gap-5">
          <Link href="/resume" className="transition-colors hover:text-ink">
            Résumé
          </Link>
          <span>{site.location}</span>
        </p>
      </div>
    </footer>
  );
}
