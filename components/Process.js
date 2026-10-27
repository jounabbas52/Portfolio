import { process as steps } from '@/config/site';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

/**
 * How a project runs, start to finish.
 *
 * The rail between the steps draws itself from scroll position using a view
 * timeline — the line's scaleY IS the section's progress through the
 * viewport, not a transition fired by an observer. Where view timelines are
 * unsupported the rail is simply drawn full height, which looks intentional
 * rather than broken.
 */
export default function Process() {
  return (
    <section id="process" className="acc-emerald relative px-4 py-14 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div>
            <SectionLabel index="04">Process</SectionLabel>
            <h2 className="mt-4 font-display sm:mt-6 text-[clamp(1.6rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              How we&apos;ll work together.
            </h2>
          </div>
          <p className="max-w-sm text-white/55">
            Hiring one developer should feel less risky than hiring an agency, not more. This is
            exactly what happens after you message me.
          </p>
        </Reveal>

        <ol className="relative mx-auto mt-9 max-w-3xl pl-8 sm:mt-16 sm:pl-14">
          {/* The rail. Track sits behind; the fill is scroll-driven. */}
          <span aria-hidden className="absolute inset-y-0 left-[5px] w-px bg-white/10 sm:left-[11px]" />
          <span
            aria-hidden
            className="process-rail absolute inset-y-0 left-[5px] w-px origin-top sm:left-[11px]"
            style={{ background: 'linear-gradient(to bottom, rgb(var(--accent-rgb)), rgb(var(--accent-rgb)/0.3))' }}
          />

          {steps.map((item, i) => (
            <li key={item.step} className="relative pb-8 last:pb-0 sm:pb-14">
              {/* Node */}
              <span
                aria-hidden
                className="absolute -left-8 top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-void ring-4 ring-void sm:-left-14 sm:h-4 sm:w-4"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: 'rgb(var(--accent-rgb))',
                    boxShadow: '0 0 16px 0 rgb(var(--accent-rgb) / 0.8)',
                  }}
                />
              </span>

              <Reveal delay={i * 70}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span
                    className="text-mono-label tabular-nums"
                    style={{ color: 'rgb(var(--accent-rgb) / 0.8)' }}
                  >
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{item.title}</h3>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55 sm:mt-3 sm:text-base">{item.body}</p>
                <p
                  className="mt-2.5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium sm:mt-3 sm:px-3.5 sm:py-1.5 sm:text-xs"
                  style={{
                    color: 'rgb(var(--accent-rgb))',
                    borderColor: 'rgb(var(--accent-rgb) / 0.25)',
                    background: 'rgb(var(--accent-rgb) / 0.07)',
                  }}
                >
                  {item.meta}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
