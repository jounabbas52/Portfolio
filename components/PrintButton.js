'use client';

import { Printer } from 'lucide-react';

/**
 * Opens the browser print dialog — "Save as PDF" produces the downloadable CV.
 * Shrinks to "PDF" on phones so it shares a row with the download buttons.
 */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(110deg,#8b5cf6,#6366f1_55%,#22d3ee)] px-3.5 py-2 text-xs font-medium text-white shadow-[0_10px_34px_-10px_rgba(99,102,241,0.9)] transition-transform duration-300 hover:scale-[1.03] sm:gap-2.5 sm:px-6 sm:py-3 sm:text-sm"
    >
      <Printer
        size={14}
        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 sm:size-4"
      />
      <span className="sm:hidden">PDF</span>
      <span className="hidden sm:inline">Save as PDF</span>
    </button>
  );
}
