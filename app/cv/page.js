import { site } from '@/config/site';
import DocumentSheet from '@/components/DocumentSheet';

export const metadata = {
  title: `${site.fullName} — Curriculum Vitae`,
  description: `Full CV for ${site.fullName}, ${site.role}. The condensed résumé is at /resume.`,
  alternates: { canonical: '/cv' },
};

export default function CVPage() {
  return <DocumentSheet variant="cv" />;
}
