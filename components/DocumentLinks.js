import { Download, FileText } from 'lucide-react';
import { getDocuments } from '@/lib/documents';

/**
 * CV / Résumé download buttons.
 *
 * `tone="dark"` for placement on the dark hero and contact panels,
 * `tone="light"` for the paper-coloured sections.
 */
export default function DocumentLinks({ tone = 'dark', className = '', ...rest }) {
  const documents = getDocuments();

  const base =
    'group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300';

  const styles =
    tone === 'dark'
      ? 'border border-white/20 bg-white/[0.06] text-white backdrop-blur-xl hover:bg-white/15'
      : 'border border-ink/15 bg-white text-ink hover:border-ink/35 hover:shadow-[0_18px_40px_-24px_rgba(10,10,15,0.5)]';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} {...rest}>
      {documents.map((doc) => (
        <a
          key={doc.key}
          href={doc.href}
          {...(doc.isFile
            ? { download: doc.filename }
            : { 'aria-label': `${doc.label} — opens the printable résumé page` })}
          className={`${base} ${styles}`}
        >
          {doc.isFile ? (
            <Download size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          ) : (
            <FileText size={16} />
          )}
          {doc.label}
        </a>
      ))}
    </div>
  );
}
