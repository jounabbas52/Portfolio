import { Download, FileText } from 'lucide-react';
import { getDocuments } from '@/lib/documents';

/**
 * CV / Résumé download buttons.
 *
 * Sized for the phone first. At full size "Download CV" and "Download Résumé"
 * together are wider than a 390px screen, so each button drops to its short
 * label and tighter padding below `sm` — three actions then sit on one row
 * instead of stacking into a wall of pills.
 */
export default function DocumentLinks({ className = '', ...rest }) {
  const documents = getDocuments();

  return (
    <div className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`} {...rest}>
      {documents.map((doc) => (
        <a
          key={doc.key}
          href={doc.href}
          {...(doc.isFile
            ? { download: doc.filename }
            : { 'aria-label': `${doc.label} — opens the printable page instead` })}
          className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/12 sm:gap-2.5 sm:px-6 sm:py-3 sm:text-sm"
        >
          {doc.isFile ? (
            <Download
              size={14}
              className="shrink-0 transition-transform duration-300 group-hover:translate-y-0.5 sm:size-4"
            />
          ) : (
            <FileText size={14} className="shrink-0 sm:size-4" />
          )}
          <span className="sm:hidden">{doc.short}</span>
          <span className="hidden sm:inline">{doc.label}</span>
        </a>
      ))}
    </div>
  );
}
