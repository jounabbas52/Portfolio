/** The outlined gradient pill that heads each section. */
export default function SectionLabel({ children, tone = 'light' }) {
  const surface = tone === 'dark' ? 'rgba(10,10,15,0.9)' : '#f6f6f8';

  return (
    <span
      className="border-gradient inline-flex items-center rounded-full px-5 py-2 text-sm font-medium tracking-wide"
      style={{ '--tw-gradient-surface': surface }}
    >
      <span className="text-gradient">{children}</span>
    </span>
  );
}
