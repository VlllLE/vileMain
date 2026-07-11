export interface SkillCategory {
  name: string;
  skills: string[];
  easterEgg?: boolean;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Vite', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    skills: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    name: 'Data & Machine Learning',
    skills: ['pandas', 'scikit-learn', 'XGBoost', 'SHAP', 'PostgreSQL', 'Data analysis'],
  },
  {
    name: 'Infrastructure & Tooling',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Git', 'Vercel', 'Supabase'],
  },
  {
    name: 'Professional Capabilities',
    skills: [
      'Technical writing',
      'System design',
      'Research',
      'Team collaboration',
      'Problem solving',
      'PGP',
      'onions',
    ],
    easterEgg: false,
  },
];
