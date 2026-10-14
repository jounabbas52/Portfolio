'use client';

import { Printer } from 'lucide-react';

/** Opens the browser print dialog — "Save as PDF" produces the downloadable CV. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
    >
      <Printer size={16} />
      Save as PDF
    </button>
  );
}
