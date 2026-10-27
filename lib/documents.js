import fs from 'node:fs';
import path from 'node:path';
import { documents } from '@/config/site';

/**
 * Resolves the CV and Résumé download targets.
 *
 * Each entry in `documents` (config/site.js) names a file in /public and the
 * on-site page that backs it. If the file is there we link straight to it and
 * mark it downloadable; if it is missing we fall back to that page — /cv for
 * the CV, /resume for the résumé — so a button is never a dead link and never
 * points at the wrong document.
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
      page: doc.page,
      label: doc.label,
      short: doc.short ?? doc.label,
      href: exists ? `/${doc.file}` : doc.page,
      isFile: exists,
      filename: exists ? doc.file : undefined,
    };
  });
}
