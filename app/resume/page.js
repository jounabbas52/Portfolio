import { site } from '@/config/site';
import DocumentSheet from '@/components/DocumentSheet';

export const metadata = {
  title: `${site.fullName} — Résumé`,
  description: `One-page résumé for ${site.fullName}, ${site.role}. The full CV is at /cv.`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return <DocumentSheet variant="resume" />;
}
