export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  fit?: 'cover' | 'contain';
  position?: string;
  variant?: 'lead' | 'mobile' | 'support';
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export type ProjectVisual =
  | {
      kind: 'gallery';
      images: ProjectImage[];
      caption?: string;
    }
  | {
      kind: 'placeholder';
      logo: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
      label: string;
      note?: string;
    };

export interface Project {
  id: string;
  title: string;
  period: string;
  role: string;
  services: string[];
  summary: string;
  outcomes?: string[];
  technologies: string[];
  visual: ProjectVisual;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 'sky-mobile',
    title: 'Sky Mobile',
    period: '2021',
    role: 'Senior Software Engineer',
    services: ['E-commerce', 'Full-stack engineering', 'Performance'],
    summary:
      'Worked across a React server-rendered storefront, GraphQL APIs and Node.js microservices for Sky Mobile. Used production observability to diagnose performance bottlenecks and errors, then shipped incremental, A/B-tested improvements.',
    outcomes: [
      'Performance and stability work helped reduce error rates by 70%.',
      'Together with A/B-tested frontend improvements, the work supported an 8% sales increase.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'GraphQL',
      'Apollo',
      'XState',
      'Optimizely',
      'Dynatrace',
      'Grafana',
      'Kibana',
      'Kafka',
    ],
    visual: {
      kind: 'gallery',
      images: [
        {
          src: '/img/projects/sky/sky-mobile-home.webp',
          alt: 'Current Sky Mobile storefront showing a Google Pixel offer on a narrow mobile viewport',
          width: 375,
          height: 812,
          fit: 'contain',
          position: 'top',
          variant: 'mobile',
        },
      ],
      caption:
        '',
    },
    links: [
      {
        label: 'Visit Sky Mobile',
        href: 'https://www.sky.com/shop/mobile/',
        external: true,
      },
    ],
  },
  {
    id: 'ses-global',
    title: 'SES Global',
    period: '2022–2025',
    role: 'Senior Software Engineer',
    services: ['Enterprise portal', 'Backend architecture', 'Full-stack', 'Cloud delivery'],
    summary:
      'Architected and delivered backend and full-stack capabilities for a unified customer portal serving enterprise and government customers. Built Azure-hosted Node.js microservices and integrated enterprise data sources and APIs.',
    outcomes: [
      'Built various full-stack product features.',
      'Built email, export, audit-log and notification services.',
      'Engineered the email service for capacity in the millions of requests per day.',
      'Managed infrastructure changes with Terraform.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Node.js',
      'Fastify',
      'Prisma',
      'SQL Server',
      'SAP HANA',
      'InfluxDB',
      'Redis',
      'Azure',
      'Terraform',
    ],
    visual: {
      kind: 'placeholder',
      logo: {
        src: '/img/logos/ses.svg',
        alt: 'SES',
        width: 220,
        height: 71,
      },
      label: 'Client work · visual withheld',
    },
    links: [
      {
        label: 'Visit SES',
        href: 'https://www.ses.com/',
        external: true,
      },
    ],
  },
  {
    id: 'klekt',
    title: 'Klekt Marketplace',
    period: '2021–2022',
    role: 'Senior Software Engineer',
    services: ['E-commerce', 'Greenfield delivery', 'Testing and CI/CD'],
    summary:
      'Built product, search and seller-account experiences for a greenfield marketplace using server-rendered Next.js. Developed GraphQL APIs and middleware, evaluated technology choices and mentored engineers.',
    outcomes: [
      'Established unit, integration and end-to-end testing alongside CI/CD.',
      'Delivered across product discovery, search and seller-account journeys.',
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'Apollo GraphQL',
      'Vendure',
      'Jest',
      'Cypress',
      'Redis',
      'Vercel',
      'GCP',
      'Terraform',
    ],
    visual: {
      kind: 'gallery',
      images: [
        {
          src: '/img/projects/klekt/klekt-home.webp',
          alt: 'Current Klekt marketplace homepage with navigation, campaign artwork and product discovery',
          width: 1265,
          height: 712,
          position: 'top',
          variant: 'lead',
        },
        {
          src: '/img/projects/klekt/klekt-products.webp',
          alt: 'Current Klekt product catalogue with category filters and a grid of authenticated footwear',
          width: 1265,
          height: 712,
          position: 'top',
          variant: 'support',
        },
      ],
      caption:
        '',
    },
    links: [
      {
        label: 'Visit Klekt',
        href: 'https://klekt.com/',
        external: true,
      },
    ],
  },
  {
    id: 'mode-banking',
    title: 'Mode Banking',
    period: '2020–2021',
    role: 'Senior Backend Engineer',
    services: ['Fintech', 'Backend modernisation', 'Cloud architecture'],
    summary:
      'Migrated a Koa.js and MongoDB monolith towards an AWS microservice architecture, built customer and merchant onboarding APIs in NestJS, and implemented OAuth 2.0 authentication aligned with RFC 6749.',
    outcomes: [
      'Integrated onboarding services with AWS ECS, KMS, RDS, Cognito, API Gateway, SQS and SNS.',
      'Streamlined CI tasks to improve build speed, developer productivity and operating cost.',
    ],
    technologies: [
      'TypeScript',
      'NestJS',
      'Koa.js',
      'MongoDB',
      'PostgreSQL',
      'OAuth 2.0',
      'REST',
      'CQRS',
      'Docker',
      'Terraform',
      'AWS',
    ],
    visual: {
      kind: 'gallery',
      images: [
        {
          src: '/img/projects/modebanking/mode-hero.webp',
          alt: 'Archived Mode Banking homepage section introducing its money and Bitcoin mobile app',
          width: 1600,
          height: 900,
          position: 'center',
          variant: 'lead',
        },
        {
          src: '/img/projects/modebanking/mode-product.webp',
          alt: 'Archived Mode Banking product section showing a Bitcoin account and transaction interface',
          width: 1600,
          height: 900,
          position: 'top',
          variant: 'support',
        },
      ],
      caption:
        ''
    },
  },
  {
    id: 'deloitte-fintech',
    title: 'Deloitte FinTech',
    period: '2020',
    role: 'Full-stack Software Engineer',
    services: ['Fintech', 'Full-stack delivery', 'Cloud infrastructure'],
    summary:
      'Built a multi-tenant, cloud-native SaaS for a fintech AML/KYC solution, integrating React frontends with NestJS microservices and blockchain-based identity technology.',
    outcomes: [
      'Developed the fullstack app.',
      'Built the CI/CD pipeline and AWS infrastructure for APIs, access control and service delivery.',
      'Shipped to production and used by well known banking clients.',
    ],
    technologies: [
      'TypeScript',
      'React',
      'Redux',
      'NestJS',
      'TypeORM',
      'WebSockets',
      'Docker',
      'MySQL',
      'AWS',
      'CloudFormation',
    ],
    visual: {
      kind: 'placeholder',
      logo: {
        src: '/img/logos/deloitte.avif',
        alt: 'Deloitte',
        width: 182,
        height: 34,
      },
      label: 'Client work · visual withheld',
    },
  },
  {
    id: 'digital-detox',
    title: 'Digital Detox',
    period: '2018–2019',
    role: 'Full-stack Software Engineer',
    services: ['Agency delivery', 'Technical consultancy', 'Web and mobile'],
    summary:
      'Delivered web and mobile products across cryptocurrency, telecoms, IoT and education. Work included serverless APIs, React applications, a unified frontend framework and mobile delivery.',
    technologies: [
      'JavaScript',
      'React',
      'React Native',
      'Redux',
      'Node.js',
      'Next.js',
      'Jest',
      'Storybook',
      'Expo',
      'AWS Lambda',
    ],
    visual: {
      kind: 'gallery',
      images: [
        {
          src: '/img/projects/dd/1.webp',
          alt: 'Digital Detox project collage showing mobile and web interface work',
          width: 1243,
          height: 740,
          variant: 'lead',
        },
        {
          src: '/img/projects/dd/2.webp',
          alt: 'Digital Detox website view presenting its product-delivery work',
          width: 1259,
          height: 709,
          variant: 'support',
        },
      ],
      caption:
        '',
    },
  },
    {
    id: 'lbx',
    title: 'LBX Mobile App',
    period: '2018',
    role: 'Full-stack Software Engineer via Digital Detox',
    services: ['Cryptocurrency', 'Cross-platform mobile', 'Full-stack delivery'],
    summary:
      'Built a cross-platform exchange and wallet application alongside a full-stack registration and KYC web flow for London Blockchain Exchange.',
    outcomes: [
      'Delivered feature development, code review, maintenance, builds and deployments.',
    ],
    technologies: [
      'React Native',
      'React',
      'Redux Saga',
      'Node.js',
      'Next.js',
      'Jest',
      'Expo',
      'Sentry',
    ],
    visual: {
      kind: 'gallery',
      images: [
        {
          src: '/img/projects/lbx/1.webp',
          alt: 'LBX exchange interface showing account balances and cryptocurrency prices',
          width: 1272,
          height: 603,
          position: 'top',
          variant: 'lead',
        },
        {
          src: '/img/projects/lbx/2.webp',
          alt: 'LBX mobile wallet interface on an iPhone',
          width: 663,
          height: 605,
          fit: 'contain',
          variant: 'support',
        },
      ],
      caption:
        '',
    },
  },
  {
    id: 'fsb',
    title: 'FSB Technology',
    period: '2015–2017',
    role: 'Frontend Software Engineer; Lead Frontend, 2016–2017',
    services: ['SaaS platform', 'Frontend leadership', 'Performance'],
    summary:
      'Led frontend delivery for a multi-tenant back-office SaaS platform and contributed to customer-facing white-label applications for global clients.',
    outcomes: [
      'Built 40 bespoke back-office applications across sportsbook, CRM, CMS, analytics, site management and operations.',
      'Built customer facing web app and managed deployements for 15+ global clients.',
      'Caching reduced XHR requests by 40%.',
    ],
    technologies: [
      'JavaScript',
      'ExtJS',
      'Node.js',
      'Express',
      'Jasmine',
      'Nightwatch',
      'Docker',
      'Bash',
      'Ant',
      'Jenkins',
    ],
    visual: {
      kind: 'gallery',
      images: [
        {
          src: '/img/projects/010_fsbbo/1.webp',
          alt: 'FSB back-office dashboard showing account and operational controls',
          width: 487,
          height: 425,
          fit: 'contain',
          variant: 'lead',
        },
        {
          src: '/img/projects/010_fsbbo/2.webp',
          alt: 'FSB SaaS interface showing detailed operational data',
          width: 475,
          height: 305,
          fit: 'contain',
          variant: 'support',
        },
      ],
      caption:
        '',
    },
  },

];
