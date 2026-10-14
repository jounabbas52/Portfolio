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
  // Digits only, international format, no + or spaces — used to build the wa.me link.
  whatsapp: '923449890302',
  whatsappDisplay: '+92 344 9890302',
  whatsappMessage: 'Hi Joun! I saw your portfolio and I would like to talk about a project.',
  available: true,
};

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
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
  { name: 'Next.js', accent: '#818cf8' },
  { name: 'JavaScript', accent: '#facc15' },
  { name: 'Flutter', accent: '#38bdf8' },
  { name: 'Supabase', accent: '#34d399' },
  { name: 'MySQL', accent: '#f472b6' },
  { name: 'PHP', accent: '#a78bfa' },
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
    accent: ['#60a5fa', '#a855f7'],
    href: 'https://office-management-system-mu.vercel.app/login',
  },
  {
    title: 'School Operating System',
    description:
      'School administration in one place — students, classes, staff and records, with role-based access for the people who need each part.',
    tags: ['Next.js', 'SQL', 'Role-based access'],
    year: '2025',
    accent: ['#34d399', '#14b8a6'],
    href: 'https://school-operating-system-theta.vercel.app/login',
  },
  {
    title: 'Clinic Management System',
    description:
      'Clinic software covering patients, appointments and visit history — built so front-desk staff can move through a busy day without fighting the UI.',
    tags: ['Next.js', 'MySQL', 'Appointments'],
    year: '2025',
    accent: ['#38bdf8', '#6366f1'],
    href: 'https://clinic-management-system-software-s.vercel.app/login',
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

export const resume = {
  summary:
    'Full stack and Android developer with a year of professional experience at AiroxLab, building responsive websites and Android applications. I work across the stack — JavaScript and Next.js on the front end, PHP, MySQL and Supabase behind it, Flutter and Dart on mobile — with a focus on database-driven features and reliable, user-focused software.',

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
  { key: 'cv', label: 'Download CV', file: 'Joun-Abbas-CV.pdf' },
  { key: 'resume', label: 'Download Résumé', file: 'Joun-Abbas-Resume.pdf' },
];
