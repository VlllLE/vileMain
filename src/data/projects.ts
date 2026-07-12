export type ProjectStatus =
  | 'active-development'
  | 'in-progress'
  | 'live'
  | 'frontend-live'
  | 'coming-soon'
  | 'archived';

export interface CaseStudyContent {
  overview: string;
  problem: string;
  contribution: string;
  architecture: string;
  features: string[];
  technicalDecisions: string[];
  challenges: string[];
  limitations: string[];
  futureImprovements: string[];
  screenshots: { src: string; alt: string; caption?: string }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  keyFeatures: string[];
  engineeringDecisions: string[];
  status: ProjectStatus;
  statusLabel: string;
  image: string;
  imageAlt: string;
  liveUrl: string | null;
  liveUrlLabel?: string;
  githubUrl: string | null;
  featured: boolean;
  caseStudy: CaseStudyContent;
}

const statusLabels: Record<ProjectStatus, string> = {
  'active-development': 'Active development - final-year dissertation',
  'in-progress': 'In progress',
  live: 'Live',
  'frontend-live': 'Frontend live - backend local only',
  'coming-soon': 'Coming soon',
  archived: 'Archived',
};

export const PROJECTS: Project[] = [
  {
    id: 'hr-decision-support',
    slug: 'hr-decision-support',
    title: 'Automated HR Decision Support Tool',
    summary:
      'Explainable machine-learning and HR case-management platform for attrition prediction with compliance-by-design.',
    problem:
      'HR teams need data-driven attrition insights without sacrificing transparency, auditability or human oversight.',
    role: 'Sole developer - full-stack, ML pipeline, system design',
    stack: [
      'React',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'scikit-learn',
      'XGBoost',
      'SHAP',
    ],
    keyFeatures: [
      'Role-based access control',
      'Audit logging',
      'Attrition prediction (Logistic Regression, Random Forest, XGBoost)',
      'SHAP explanations & ROC curves',
      'Fairness metrics',
      'Compliance-by-design workflows',
      'Human oversight gates',
    ],
    engineeringDecisions: [
      'Separated ML inference from case-management API for clearer audit trails',
      'PostgreSQL for relational HR data with explicit audit tables',
      'SHAP for model explainability rather than black-box predictions',
      'Docker Compose for reproducible local development',
      'Compliance-by-design: no automated dismissal decisions',
    ],
    status: 'active-development',
    statusLabel: statusLabels['active-development'],
    image: '/projects/hr-decision-support.png',
    imageAlt: 'HR Decision Support Tool dashboard preview',
    liveUrl: null,
    githubUrl: 'https://github.com/VlllLE/hrbot',
    featured: true,
    caseStudy: {
      overview:
        'My final-year dissertation project: a platform combining HR case management with explainable ML for employee attrition prediction. Built to demonstrate that predictive HR tooling can be transparent, auditable and human-supervised.',
      problem:
        'Organisations want to identify attrition risk early, but off-the-shelf HR analytics tools often lack explainability, audit trails and fairness visibility. This project explores how to build predictive tooling that HR professionals can actually trust.',
      contribution:
        'End-to-end development: React/TypeScript frontend, FastAPI backend, PostgreSQL schema design, Docker deployment config, ML pipeline (feature engineering through model evaluation), and compliance-oriented UX flows.',
      architecture:
        'React SPA communicates with a FastAPI REST API. PostgreSQL stores cases, users, roles and audit logs. ML models run as a separate service layer with SHAP explanation generation. Docker Compose orchestrates local development.',
      features: [
        'User authentication with role-based access control',
        'HR case creation, assignment and status tracking',
        'Immutable audit log for all significant actions',
        'Attrition prediction with multiple model comparison',
        'SHAP-based feature importance explanations',
        'ROC curve and fairness metric dashboards',
        'Human review step before any predictive insight is acted upon',
      ],
      technicalDecisions: [
        'FastAPI over Flask for async support and automatic OpenAPI docs',
        'Logistic Regression as baseline, Random Forest and XGBoost for comparison',
        'SHAP TreeExplainer for tree-model explanations',
        'Explicit fairness metrics (demographic parity, equalised odds) on held-out test data',
        'No auto-actions on predictions - insights only, human decides',
      ],
      challenges: [
        'Balancing ML accuracy with explainability requirements',
        'Designing audit schemas that capture enough context without over-logging',
        'Synthetic/restricted training data for university project scope',
        'RBAC that maps to realistic HR organisational structures',
      ],
      limitations: [
        'Active dissertation project - not all features are complete',
        'ML models trained on synthetic/limited datasets',
        'No production deployment yet',
        'Fairness metrics are illustrative, not validated on real organisational data',
        'GitHub repository not yet public',
      ],
      futureImprovements: [
        'Complete end-to-end case workflow',
        'Real dataset integration with proper anonymisation',
        'Production deployment with CI/CD',
        'A/B model comparison dashboard',
        'Exportable compliance reports',
      ],
      screenshots: [
        {
          src: '/projects/hr-decision-support.png',
          alt: 'HR Decision Support dashboard - placeholder',
          caption: 'Dashboard overview (screenshot pending)',
        },
        {
          src: '/projects/hr-decision-support-ml.png',
          alt: 'ML explanation view - placeholder',
          caption: 'SHAP explanation view (screenshot pending)',
        },
      ],
    },
  },
  {
    id: 'mirror',
    slug: 'mirror',
    title: 'Mirror',
    summary:
      'Local introspective AI assistant for structured self-reflection - not a replacement for therapy.',
    problem:
      'People want a private space to think through problems without cloud data exposure or generic chatbot responses.',
    role: 'Full-stack developer - frontend, backend, prompt engineering',
    stack: ['React', 'Python', 'Flask', 'Mistral-7B', 'HuggingFace'],
    keyFeatures: [
      'Local Mistral-7B inference',
      'Persistent chat history',
      'Input tagging & categorisation',
      'Cognitive-bias detection',
      'Perspective inversion prompts',
      'Recursive response evaluation',
      'Safety-focused prompt design',
    ],
    engineeringDecisions: [
      'Local model inference to keep conversations private',
      'Multi-stage prompt pipeline for bias detection before response generation',
      'Recursive evaluation loop to catch shallow or repetitive answers',
      'Frontend deployed separately from local backend',
    ],
    status: 'frontend-live',
    statusLabel: statusLabels['frontend-live'],
    image: '/projects/mirror.png',
    imageAlt: 'Mirror introspective AI assistant interface',
    liveUrl: 'https://mirrorq.ai/',
    liveUrlLabel: 'Frontend demo',
    githubUrl: 'https://github.com/VlllLE/mirror',
    featured: true,
    caseStudy: {
      overview:
        'Mirror is a local introspective AI assistant designed for structured self-reflection. It runs Mistral-7B locally and uses a multi-stage prompt pipeline to detect cognitive biases, invert perspectives and evaluate its own responses before presenting them.',
      problem:
        'Cloud-based chatbots store conversation data remotely and tend toward generic supportive responses. Mirror explores whether a locally-run model with deliberate prompt engineering can offer more structured, private reflection.',
      contribution:
        'Built the React frontend, Python/Flask backend, Mistral-7B integration, prompt pipeline (bias detection, perspective inversion, recursive evaluation) and chat persistence layer.',
      architecture:
        'React frontend (deployed at mirrorq.ai) connects to a local Flask API serving Mistral-7B via HuggingFace transformers. Chat history persists in local storage/database. Prompt pipeline runs as pre/post-processing stages around inference.',
      features: [
        'Chat interface with persistent history',
        'Input tagging for topic categorisation',
        'Cognitive-bias detection pass on user input',
        'Perspective inversion — "how might someone else see this?"',
        'Recursive response evaluation for depth and relevance',
        'Safety prompts discouraging harmful advice',
      ],
      technicalDecisions: [
        'Mistral-7B for capable local inference on consumer hardware',
        'Flask for lightweight local API serving',
        'Multi-pass prompting rather than single-shot generation',
        'Frontend deployed to Vercel; backend intended for local use only',
      ],
      challenges: [
        'Local inference latency on consumer GPUs',
        'Prompt engineering for consistent bias detection without over-triggering',
        'Separating "introspective assistant" from "therapist" positioning',
        'Frontend/backend split means live demo has limited backend functionality',
      ],
      limitations: [
        'Backend is not deployed - live site is frontend only',
        'Local model requires capable hardware to run',
        'Not a substitute for professional mental health support',
        'Bias detection is heuristic, not clinically validated',
      ],
      futureImprovements: [
        'Optional cloud backend with end-to-end encryption',
        'Improved bias detection with fine-tuned classifiers',
        'Export reflection journals',
        'Mobile-responsive offline PWA',
      ],
      screenshots: [
        {
          src: '/projects/mirror.png',
          alt: 'Mirror chat interface - placeholder',
          caption: 'Chat interface',
        },
      ],
    },
  },
  {
    id: 'repacked',
    slug: 'repacked',
    title: 'Repacked',
    summary:
      'Second-hand clothing marketplace with auth, listings, search and image storage.',
    problem:
      'Buying and selling pre-owned clothing needs a simple, trustworthy platform with good search and visual listings.',
    role: 'Full-stack - frontend and backend implementation',
    stack: ['React', 'TypeScript', 'Next.js', 'Supabase', 'PostgreSQL'],
    keyFeatures: [
      'User authentication',
      'Product listings with image upload',
      'Search and filters',
      'Responsive UI',
      'Mock checkout flow',
      'Supabase image storage',
    ],
    engineeringDecisions: [
      'Next.js for SSR and file-based routing',
      'Supabase for auth, database and storage in one platform',
      'Row-level security policies on listings table',
      'Mock checkout to demonstrate UX without payment integration',
    ],
    status: 'in-progress',
    statusLabel: statusLabels['in-progress'],
    image: '/projects/repacked.png',
    imageAlt: 'Repacked marketplace listing page',
    liveUrl: 'https://repacked.vercel.app/',
    githubUrl: 'https://github.com/Roberttgreat/vile',
    featured: true,
    caseStudy: {
      overview:
        'Repacked is a second-hand clothing marketplace I built across both frontend and backend in collaboration with my good friend /@roberttgreat. Users can register, list items with photos, search and filter listings, and walk through a mock checkout.',
      problem:
        'Existing resale platforms are either too complex for casual sellers or lack good filtering. Repacked targets a straightforward listing-and-browse experience.',
      contribution:
        'Full-stack implementation: Next.js pages and components, Supabase auth integration, PostgreSQL schema, image upload to Supabase Storage, search/filter API and responsive layout.',
      architecture:
        'Next.js app with Supabase client for auth and data. PostgreSQL via Supabase with RLS policies. Images stored in Supabase Storage buckets. Client-side filtering with server-side search.',
      features: [
        'Email/password authentication',
        'Create and manage clothing listings',
        'Image upload and display',
        'Category, size and price filters',
        'Text search across listings',
        'Real-time messaging between buyers and sellers',
        'Mock checkout flow (no real payments)',
      ],
      technicalDecisions: [
        'Supabase over custom auth for faster development',
        'Next.js App Router for modern React patterns',
        'Image optimisation via Next.js Image component',
        'Mock checkout to scope MVP without Stripe integration',
      ],
      challenges: [
        'Image upload size limits and optimisation',
        'Designing filter UX that works on mobile',
        'RLS policies for multi-user listing ownership',
      ],
      limitations: [
        'No real payment processing',
        'Search is basic text match, not full-text indexed',
      ],
      futureImprovements: [
        'Stripe integration for real checkout',
        'Favourites and watchlists',
      ],
      screenshots: [
        {
          src: '/projects/repacked.png',
          alt: 'Repacked marketplace - placeholder',
          caption: 'Listing browse page',
        },
      ],
    },
  },
  {
    id: 'booking-system',
    slug: 'booking-system',
    title: 'Yoga Studio Booking System',
    summary: 'Full CRUD booking system with authentication for a local yoga studio.',
    problem: 'A local yoga studio needed online class booking to replace manual sign-up sheets.',
    role: 'Full-stack developer',
    stack: ['React', 'TypeScript', 'Supabase'],
    keyFeatures: ['Class scheduling', 'User authentication', 'Booking management', 'Admin CRUD'],
    engineeringDecisions: [
      'Supabase for rapid auth and database setup',
      'React with TypeScript for type-safe UI components',
    ],
    status: 'live',
    statusLabel: statusLabels.live,
    image: '/projects/booking-system.png',
    imageAlt: 'Yoga studio booking system',
    liveUrl: 'https://wad-2-sigma.vercel.app/',
    githubUrl: 'https://github.com/VlllLE/WAD2',
    featured: false,
    caseStudy: {
      overview: 'A booking system built for a local yoga studio with full CRUD operations and user authentication.',
      problem: 'Manual class sign-ups were error-prone and inconvenient for both staff and students.',
      contribution: 'Designed and built the full application including auth, scheduling and admin views.',
      architecture: 'React SPA with Supabase backend for auth and PostgreSQL data storage.',
      features: ['User registration and login', 'Class browsing and booking', 'Admin class management'],
      technicalDecisions: ['Supabase for managed auth and database', 'Vercel deployment for frontend'],
      challenges: ['Handling booking conflicts', 'Responsive design for mobile booking'],
      limitations: ['Built for a single studio, not multi-tenant'],
      futureImprovements: ['Email booking confirmations', 'Calendar integration'],
      screenshots: [
        { src: '/projects/booking-system.png', alt: 'Booking system - placeholder', caption: 'Landing page' },
      ],
    },
  },
  {
    id: 'canumix',
    slug: 'canumix',
    title: 'CanUMix',
    summary: 'Substance dosage and interaction calculator for harm reduction.',
    problem: 'People mixing substances need accessible interaction and dosage information.',
    role: 'Developer',
    stack: ['Next.js', 'TypeScript'],
    keyFeatures: ['Dosage calculator', 'Interaction lookup', 'Harm reduction focus'],
    engineeringDecisions: ['Next.js for fast iteration', 'External API for interaction data'],
    status: 'coming-soon',
    statusLabel: statusLabels['coming-soon'],
    image: '/projects/canumix.png',
    imageAlt: 'CanUMix harm reduction calculator',
    liveUrl: null,
    githubUrl: 'https://github.com/VlllLE/canumix',
    featured: false,
    caseStudy: {
      overview: 'A harm reduction tool for checking substance interactions and dosages.',
      problem: 'Accessible, non-judgemental interaction information is hard to find in one place.',
      contribution: 'Building the Next.js frontend and API integration layer.',
      architecture: 'Next.js app with external drug interaction API.',
      features: ['Dosage calculator', 'Interaction checker'],
      technicalDecisions: ['Next.js for SSR and API routes'],
      challenges: ['Sourcing reliable interaction data', 'Presenting medical info responsibly'],
      limitations: ['Not medical advice - educational only', 'Not yet deployed'],
      futureImprovements: ['Deploy public beta', 'User-submitted interaction reports'],
      screenshots: [
        { src: '/projects/canumix.png', alt: 'CanUMix - placeholder', caption: 'Landing page ' },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getSecondaryProjects(): Project[] {
  return PROJECTS.filter((p) => !p.featured);
}

export const PRIMARY_FEATURED_SLUG = 'hr-decision-support';
