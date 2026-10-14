import fs from 'node:fs';
import path from 'node:path';
import { documents } from '@/config/site';

/**
 * Resolves the CV and Résumé download targets.
 *
 * Each entry in `documents` (config/site.js) names a file in /public. If the
 * file is there we link straight to it and mark it downloadable; if it is
 * missing we fall back to /resume, the generated print-ready page, so a button
 * is never a dead link.
 *
 * Runs on the server at build time — replace a PDF, then rebuild.
 */
export function getDocuments() {
  const dir = path.join(process.cwd(), 'public');

  return documents.map((doc) => {
    let exists = false;
    try {
      exists = fs.existsSync(path.join(dir, doc.file));
    } catch {
      exists = false;
    }

    return {
      key: doc.key,
      label: doc.label,
      href: exists ? `/${doc.file}` : '/resume',
      isFile: exists,
      filename: exists ? doc.file : undefined,
    };
  });
}
