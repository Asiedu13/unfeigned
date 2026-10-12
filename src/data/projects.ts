export type Project = {
  name: string;
  year: string;
  href: string | null;
  blurb: string;
};

export const PROJECTS: Project[] = [
  {
    name: "GESA",
    year: "2026",
    href: "https://gesaknust.com/",
    blurb:
      "The official site for the Ghana Engineering Students' Association at KNUST. A small but precise piece of campus civic infrastructure — events, exec, archives.",
  },
  {
    name: "Obaa",
    year: "2025",
    href: null,
    blurb:
      "A sexual and reproductive health companion (mobile). Quietly designed for women who want answers without the clinic awkwardness — cycle tracking, guidance, and a private question line.",
  },
  {
    name: "TTYM Global",
    year: "2025",
    href: "https://www.talktoyourmidwife.com/",
    blurb:
      "Talk To Your Midwife — a platform connecting expectant mothers with midwives in real time. I currently lead engineering as CTO; I rewrote the platform from the ground up after stepping into the role.",
  },
  {
    name: "Repcollect",
    year: "2024",
    href: "https://repcollect.app/",
    blurb:
      "How social groups, associations, and welfare clubs track member payments. Built end-to-end — payment rails, dues schedules, group bookkeeping, the receipts your treasurer wishes they had.",
  },
];
