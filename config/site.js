// ─────────────────────────────────────────────────────────────
// Everything on the site reads from this file.
// Content below is taken from Joun-Abbas-CV.pdf / -Resume.pdf.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'JOUN',
  fullName: 'Joun Abbas',
  brand: 'JOUN',
  role: 'Full Stack & Android Developer',
  email: 'jounabs52@gmail.com',
  location: 'Bhakkar, Punjab, Pakistan',
  locationFull: 'New Galla Mandi, Bhakkar, Punjab, Pakistan',
  tagline:
    'I build responsive websites with Next.js and Android apps with Flutter — database-driven, fast, and reliable end to end.',
  // Cycled one at a time in the hero subline — keep them short, they share one line.
  roles: ['Next.js', 'React', 'Flutter', 'Supabase', 'MySQL', 'PHP'],
  // Digits only, international format, no + or spaces — used to build the wa.me link.
  whatsapp: '923449890302',
  whatsappDisplay: '+92 344 9890302',
  whatsappMessage: 'Hi Joun! I saw your portfolio and I would like to talk about a project.',
  available: true,
};

// In-page sections, in the order they appear in app/page.js.
//
// Every section that a reader spends real time in wants an entry here: the nav
// highlight attributes a section with no entry of its own to the nearest one
// above it, so a missing entry shows up as the previous button staying lit.
export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
  { label: 'Estimate', href: '#estimate' },
];

// Standalone routes, shown as their own buttons beside the section links.
export const pages = [
  { label: 'CV', href: '/cv' },
  { label: 'Résumé', href: '/resume' },
];

export const socials = [
  {
    label: 'GitHub',
    handle: 'jounabbas52',
    href: 'https://github.com/jounabbas52',
  },
  {
    label: 'LinkedIn',
    handle: 'joun-abbas',
    href: 'https://www.linkedin.com/in/joun-abbas-4304302a2',
  },
];

// Marks in the hero strip — the stack you actually work in.
export const clients = [
  { name: 'Next.js', accent: '#e0e7ff' },
  { name: 'JavaScript', accent: '#c7d2fe' },
  { name: 'Flutter', accent: '#a5b4fc' },
  { name: 'Supabase', accent: '#818cf8' },
  { name: 'MySQL', accent: '#6366f1' },
  { name: 'PHP', accent: '#8b5cf6' },
];

export const stats = [
  { num: '1+', label: 'Year professional at AiroxLab' },
  { num: '3.4', label: 'CGPA / 4.0, Thal University' },
  { num: '2', label: 'Platforms — web & Android' },
  { num: '2', label: 'Languages — English & Urdu' },
];

export const about = {
  heading: 'Full stack on the web, Flutter on Android — and the database behind both.',
  body: [
    'I am a full stack and Android developer with a year of professional experience at AiroxLab, where I build responsive websites and Android applications end to end — from layout and component work, through backend integration, to release.',
    'My day-to-day runs from JavaScript and Next.js on the front end to PHP, SQL, MySQL and Supabase behind it, with Flutter and Dart for Android. I am most at home on database-driven features, and on applications that stay fast and behave predictably for the people using them.',
  ],
};

// Live, deployed systems — each href opens the running app.
export const projects = [
  {
    title: 'Office Management System',
    description:
      'A workspace for running an office end to end — staff records, task assignment and day-to-day operations behind a single authenticated dashboard.',
    tags: ['Next.js', 'JavaScript', 'Supabase', 'Dashboard'],
    year: '2025',
    accent: ['#818cf8', '#6366f1'],
    href: 'https://office-management-system-mu.vercel.app/login',
    shot: '/work/office.png',
    caseStudy: {
      // ⚠ REVIEW: written from the public app. Correct anything inaccurate.
      problem:
        'Office admin was spread across spreadsheets and chat — staff records in one place, task assignment in another, and no single view of who was doing what.',
      approach:
        'One Supabase schema covering staff, tasks and day-to-day operations, behind a single authenticated Next.js dashboard. Every view reads from the same tables, so a record updated anywhere is correct everywhere.',
      scope: [
        { value: 'FinDash', label: 'Shipped and live in production' },
        { value: '1', label: 'Sign-in for every office function' },
        { value: 'Next.js', label: 'With Supabase behind it' },
      ],
      // ⚠ ADD YOUR OUTCOMES — these are what actually convert clients.
      // Ask the client for real figures, e.g.
      //   { value: '-60%', label: 'Time to assign a week of work' }
      //   { value: '12', label: 'Staff using it daily' }
      outcomes: [],
    },
  },
  {
    title: 'School Operating System',
    description:
      'School administration in one place — students, classes, staff and records, with role-based access for the people who need each part.',
    tags: ['Next.js', 'SQL', 'Role-based access'],
    year: '2025',
    accent: ['#6366f1', '#8b5cf6'],
    href: 'https://school-operating-system-theta.vercel.app/login',
    shot: '/work/school.png',
    caseStudy: {
      // ⚠ REVIEW: written from the public app. Correct anything inaccurate.
      problem:
        'Every school wants the same core system but a different slice of it, and running a separate build per school does not scale past the first two.',
      approach:
        'A multi-tenant platform instead of a product per school. One console provisions a tenant, assigns a plan, and switches individual modules on or off for that school alone. Role-based access then narrows each person to their own part of it.',
      scope: [
        { value: '19', label: 'Modules, toggled per school' },
        { value: '5', label: 'Categories — academic, finance, HR, operations, platform' },
        { value: 'Multi-tenant', label: 'One console, many schools' },
      ],
      // ⚠ ADD YOUR OUTCOMES, e.g.
      //   { value: '4', label: 'Schools live on the platform' }
      //   { value: '1 day', label: 'To stand up a new school' }
      outcomes: [],
    },
  },
  {
    title: 'Clinic Management System',
    description:
      'Clinic software covering patients, appointments and visit history — built so front-desk staff can move through a busy day without fighting the UI.',
    tags: ['Next.js', 'MySQL', 'Appointments'],
    year: '2025',
    accent: ['#22d3ee', '#6366f1'],
    href: 'https://clinic-management-system-software-s.vercel.app/login',
    shot: '/work/clinic.png',
    caseStudy: {
      // ⚠ REVIEW: written from the public app. Correct anything inaccurate.
      problem:
        'Front-desk staff work under time pressure with a patient in front of them. Anything that takes more than a few clicks gets abandoned and written on paper instead.',
      approach:
        'Patients, appointments and visit history modelled in MySQL as one record per patient, so history is never re-keyed. The admin portal is built around the actual front-desk sequence rather than the shape of the database.',
      scope: [
        { value: '3', label: 'Records joined — patients, appointments, visits' },
        { value: 'MySQL', label: 'Relational core, queried directly' },
        { value: 'Live', label: 'Running for a working clinic' },
      ],
      // ⚠ ADD YOUR OUTCOMES, e.g.
      //   { value: '-40%', label: 'Time to book a returning patient' }
      outcomes: [],
    },
  },
];

// Grouped exactly as the CV lists them — no invented proficiency scores.
export const skillGroups = [
  { group: 'Web', items: ['HTML5', 'CSS3', 'JavaScript', 'Next.js', 'Responsive layout'] },
  { group: 'Mobile', items: ['Flutter', 'Dart', 'Android development'] },
  { group: 'Backend', items: ['PHP', 'Supabase'] },
  { group: 'Databases', items: ['SQL', 'MySQL', 'Schema design', 'Queries'] },
  { group: 'Tools', items: ['Git', 'Version control & collaboration'] },
];

export const services = [
  {
    title: 'Web Development',
    body: 'Responsive websites in Next.js and vanilla JavaScript, built to hold up on every screen size.',
    icon: 'code',
  },
  {
    title: 'Android Development',
    body: 'Flutter and Dart applications, taken from screen layout through data to release.',
    icon: 'smartphone',
  },
  {
    title: 'Databases & Backend',
    body: 'SQL, MySQL and Supabase — schema design, queries, and the features built on them.',
    icon: 'database',
  },
];

// ─────────────────────────────────────────────────────────────
// Résumé / CV
// The PDFs in /public are the download targets; this same data
// also renders the printable page at /resume.
// ─────────────────────────────────────────────────────────────

// The LONG form — mirrors Joun-Abbas-CV.pdf. Also feeds the Experience
// section on the home page, which wants the fuller wording.
export const resume = {
  profile: [
    'Full stack and Android developer with a year of professional experience at AiroxLab, where I build responsive websites and Android applications end to end — from layout and component work, through backend integration, to release.',
    'My day-to-day runs from JavaScript and Next.js on the front end to PHP, SQL, MySQL and Supabase behind it, with Flutter and Dart for Android. I am most at home on database-driven features, and on applications that stay fast and behave predictably for the people using them.',
  ],

  experience: [
    {
      role: 'Senior Website & App Developer',
      company: 'AiroxLab',
      period: '2025 — Present',
      points: [
        'Develop responsive websites using HTML5, CSS3, JavaScript and Next.js, built to hold up across phone, tablet and desktop screens.',
        'Build Android applications with Flutter and Dart, from screen layout through to data and release.',
        'Design and query SQL, MySQL and Supabase databases, and wire them into the application features that depend on them.',
        'Work on application performance — faster loads, fewer wasted queries — and on the day-to-day reliability of what ships, using Git for version control throughout the delivery cycle.',
      ],
    },
  ],

  education: [
    {
      qualification: 'BS Computer Science (BSCS)',
      institution: 'Thal University, Bhakkar, Pakistan',
      period: '2023 — 2027',
      note: 'In progress, expected 2027 · CGPA 3.4 / 4.0',
    },
    {
      qualification: 'Computer Applications',
      institution: 'Brain College, Bhakkar, Pakistan',
      period: '2023 — 2024',
    },
    {
      qualification: 'Intermediate in Computer Science (ICS)',
      institution: 'Government Post Graduate College, Bhakkar',
      period: '2021 — 2023',
    },
  ],

  languages: [
    { name: 'English', level: 'Professional working' },
    { name: 'Urdu', level: 'Native' },
  ],

  reference: {
    name: 'Hamza Maqsood',
    title: 'Co-founder, AiroxLab',
    note: 'Contact details available on request.',
  },

  updated: 'October 2026',
};

// Downloadable documents — files live in /public.
export const documents = [
  // `short` is what shows on phones, where "Download Résumé" is most of the row.
  { key: 'cv', label: 'Download CV', short: 'CV', file: 'Joun-Abbas-CV.pdf', page: '/cv' },
  { key: 'resume', label: 'Download Résumé', short: 'Résumé', file: 'Joun-Abbas-Resume.pdf', page: '/resume' },
];

// ─────────────────────────────────────────────────────────────
// The SHORT form — mirrors Joun-Abbas-Resume.pdf.
// Same facts as `resume` above, tightened: one profile paragraph,
// fewer skill rows, three bullets, short institution names, no
// proficiency levels, and references on request rather than named.
// ─────────────────────────────────────────────────────────────

export const resumeShort = {
  profile: [
    'Full stack and Android developer with a year of professional experience at AiroxLab, building responsive websites and Android applications. I work across the stack — JavaScript and Next.js on the front end, PHP, MySQL and Supabase behind it, Flutter and Dart on mobile — with a focus on database-driven features and reliable, user-focused software.',
  ],

  experience: [
    {
      role: 'Senior Website & App Developer',
      company: 'AiroxLab',
      period: '2025 — Present',
      points: [
        'Build and maintain responsive websites with HTML5, CSS3, JavaScript and Next.js, and Android applications with Flutter and Dart.',
        'Model and query SQL, MySQL and Supabase databases to power database-driven application features.',
        'Work on application performance and day-to-day reliability, delivering user-focused software to clients.',
      ],
    },
  ],

  education: [
    {
      qualification: 'BS Computer Science',
      institution: 'Thal University, Bhakkar',
      period: '2023 — 2027',
      note: 'In progress · CGPA 3.4 / 4.0',
    },
    {
      qualification: 'Computer Applications',
      institution: 'Brain College, Bhakkar',
      period: '2023 — 2024',
    },
    {
      qualification: 'Intermediate in Computer Science (ICS)',
      institution: 'Government Post Graduate College, Bhakkar',
      period: '2021 — 2023',
    },
  ],

  languages: [{ name: 'English' }, { name: 'Urdu' }],

  reference: null,
  referenceNote: 'References available on request.',

  updated: 'October 2026',
};

// Skill rows as the résumé PDF lists them — four rows, no sub-skills.
export const skillGroupsShort = [
  { group: 'Web', items: ['HTML5', 'CSS3', 'JavaScript', 'Next.js'] },
  { group: 'Mobile', items: ['Flutter', 'Dart', 'Android'] },
  { group: 'Backend', items: ['PHP', 'SQL', 'MySQL', 'Supabase'] },
  { group: 'Tools', items: ['Git'] },
];

// ─────────────────────────────────────────────────────────────
// What /cv and /resume each render.
// Keyed to match `documents` above, so a download button and its
// on-site page always describe the same document.
// ─────────────────────────────────────────────────────────────

export const documentVariants = {
  cv: {
    key: 'cv',
    kind: 'Curriculum Vitae',
    label: 'CV',
    path: '/cv',
    blurb:
      'The long form — the full detail on every role, qualification and skill, plus a named reference.',
    location: site.locationFull,
    data: resume,
    skills: skillGroups,
    showLanguageLevels: true,
    counterpart: { label: 'Want the one-page version?', cta: 'View résumé', path: '/resume' },
  },
  resume: {
    key: 'resume',
    kind: 'Résumé',
    label: 'Résumé',
    path: '/resume',
    blurb: 'The one-page version — the essentials only, ready to send with an application.',
    location: site.location,
    data: resumeShort,
    skills: skillGroupsShort,
    showLanguageLevels: false,
    counterpart: { label: 'Need the full detail?', cta: 'View CV', path: '/cv' },
  },
};

// ─────────────────────────────────────────────────────────────
// How a project runs, start to finish.
// ⚠ REVIEW THESE — they are commitments a client will hold you
// to. Change any you would not want to promise.
// ─────────────────────────────────────────────────────────────
export const process = [
  {
    step: '01',
    title: 'You get in touch',
    body: 'Message me on WhatsApp or email with the rough shape of the idea. No brief needed — a paragraph is plenty to start from.',
    meta: 'Usually a reply the same day',
  },
  {
    step: '02',
    title: 'We scope it together',
    body: 'One call to work out what the system actually has to do, who uses it, and what it must not do. You get a fixed price and a timeline before anything is built.',
    meta: 'Fixed price, agreed up front',
  },
  {
    step: '03',
    title: 'I build it in the open',
    body: 'A staging link goes up early and stays current, so you watch it come together instead of waiting for a reveal. Changes are cheapest while it is still moving.',
    meta: 'Live staging link throughout',
  },
  {
    step: '04',
    title: 'Launch and handover',
    body: 'Deployed, with the source, the database schema and a walkthrough of how to run it. You own all of it — nothing is locked to me.',
    meta: 'Full source and schema, yours',
  },
];

// ─────────────────────────────────────────────────────────────
// Project estimator.
//
// ⚠ THESE NUMBERS ARE PLACEHOLDERS. I do not know your rates.
// Set `base` and `weeks` to what you actually charge and how
// long you actually take, or set `estimator.enabled = false`
// to hide the section until you have.
//
// The figure shown is always a RANGE, and the UI says it is
// indicative and confirmed on a call — never quote a single
// number you have not agreed to honour.
// ─────────────────────────────────────────────────────────────
export const estimator = {
  enabled: true,

  // Rupees. `locale` drives digit grouping; en-PK groups in thousands.
  currency: 'PKR',
  symbol: 'Rs ',
  locale: 'en-PK',

  // Everything is rounded to this before display, so the cart never shows
  // a figure like Rs 47,312 that implies more precision than exists.
  roundTo: 1000,

  // The high end of the range = subtotal × spread.
  spread: 1.3,

  kinds: [
    { key: 'site', label: 'Website', base: 25000, weeks: 2, blurb: 'Marketing or business site' },
    { key: 'app', label: 'Web app', base: 45000, weeks: 4, blurb: 'Dashboard, logins, real data' },
    { key: 'android', label: 'Android app', base: 55000, weeks: 5, blurb: 'Flutter, published to Play' },
  ],

  scales: [
    { key: 's', label: 'Small', mult: 1, weeks: 0, blurb: 'A few screens' },
    { key: 'm', label: 'Medium', mult: 1.6, weeks: 2, blurb: 'A dozen or so' },
    { key: 'l', label: 'Large', mult: 2.4, weeks: 5, blurb: 'A full system' },
  ],

  // Database is the 20,000 anchor; the rest step up in 5,000s.
  features: [
    { key: 'db', label: 'Database', add: 20000, weeks: 1, blurb: 'Schema, queries, migrations' },
    { key: 'auth', label: 'Accounts & roles', add: 25000, weeks: 1, blurb: 'Login, permissions' },
    { key: 'dash', label: 'Reports & dashboard', add: 30000, weeks: 1, blurb: 'Charts, exports' },
    { key: 'pay', label: 'Payments', add: 35000, weeks: 1, blurb: 'Checkout and receipts' },
  ],
};
