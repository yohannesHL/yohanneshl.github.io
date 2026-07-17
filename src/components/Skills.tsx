import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

const services: Service[] = [
  {
    title: 'Full-stack product delivery',
    description:
      'Build or extend production-ready web and mobile products, from discovery and architecture through launch and handover.',
    deliverables: [
      'MVPs and product features',
      'Accessible interfaces and design systems',
      'Web and cross-platform mobile delivery',
    ],
  },
  {
    title: 'AI features and automation',
    description:
      'Add useful AI to products and workflows, with the safeguards needed to move beyond a fragile demonstration.',
    deliverables: [
      'AI discovery and working prototypes',
      'Agents, RAG and knowledge search',
      'Evaluation, guardrails and human approval flows',
    ],
  },
  {
    title: 'APIs, cloud and integrations',
    description:
      'Connect products to the services and data they rely on, then deploy them on maintainable cloud infrastructure.',
    deliverables: [
      'REST, GraphQL, gRPC and WebSocket APIs',
      'System and data integrations',
      'Microservices, infrastructure as code and CI/CD',
    ],
  },
  {
    title: 'Modernisation and technical leadership',
    description:
      'Stabilise existing products, remove delivery bottlenecks and leave teams with maintainable software.',
    deliverables: [
      'Architecture and code audits',
      'Testing, reliability and performance improvements',
      'Embedded leadership, mentoring and handover',
    ],
  },
];

const engagementOptions = [
  'Discovery sprint',
  'Fixed-scope build',
  'Embedded contract',
  'Modernisation or rescue',
];

const stacks = [
  {
    label: 'Core',
    items: [
      'TypeScript',
      'React / Next.js',
      'React Native / Expo',
      'NestJS / Fastify / Hono',
      'Node.js',
      'Python',
      'Go',
      'PostgreSQL',
      'MySQL',
      'SQLServer',
      'MongoDB',
      'Redis',
      'AWS / Azure / GCP',
      'Docker',
      'Terraform',
    ],
  },
  {
    label: 'Applied AI',
    items: ['LangGraph', 'Qdrant', 'Mem0', 'Vertex AI', 'OpenAI API', 'Claude API'],
  },
];

const callUrl = 'https://calendly.com/yohannes-7/15min';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        '(min-width: 40rem) and (prefers-reduced-motion: no-preference)',
        () => {
          const header = section.querySelector('.services__header');
          const serviceStatements = gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll('.service__statement'),
          );
          const closingBlocks = gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll('.services__engagement, .services__stack'),
          );

          if (!header || serviceStatements.length === 0) return;

          const timeline = gsap.timeline({
            defaults: { ease: 'power3.out' },
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              once: true,
            },
          });

          timeline.from(header, {
            opacity: 0,
            y: 24,
            duration: 0.5,
          });

          serviceStatements.forEach((statement, index) => {
            const statementOffset = index % 2 === 0 ? -28 : 28;
            const position = index === 0 ? '-=0.12' : '-=0.32';

            timeline.from(
              statement,
              {
                opacity: 0,
                x: statementOffset,
                duration: 0.5,
              },
              position,
            );
          });

          if (closingBlocks.length > 0) {
            timeline.from(
              closingBlocks,
              {
                opacity: 0,
                y: 16,
                duration: 0.45,
                stagger: 0.08,
              },
              '-=0.2',
            );
          }
        },
      );
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="services section-alt w-full"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-4 content-column">
        <header className="services__header">
          <h2 id="services-title">How I can help</h2>
          <div className="services__introduction">
            <p className="services__lede">
              I design, build and improve production software for startups and product
              teams—from full-stack products to reliable AI features.
            </p>
            <p className="services__availability">
              Available for fixed-scope delivery, embedded contracts and technical rescue
              work.
            </p>
          </div>
        </header>

        <div className="services__list">
          {services.map((service) => (
            <Service key={service.title} service={service} />
          ))}
        </div>

        <aside
          className="services__engagement"
          aria-labelledby="services-engagement-title"
        >
          <div className="services__engagement-copy">
            <h3 id="services-engagement-title">Ways to work together</h3>
            <ul className="services__engagement-list">
              {engagementOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
          <a className="services__cta" href={callUrl}>
            Discuss your project <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <div className="services__stack" aria-labelledby="services-stack-title">
          <h3 id="services-stack-title">Working stack</h3>
          <div className="services__stack-groups">
            {stacks.map((stack) => (
              <div key={stack.label} className="services__stack-group">
                <p className="services__stack-label">{stack.label}</p>
                <ul>
                  {stack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Service({ service }: { service: Service }) {
  return (
    <article className="service">
      <div className="service__statement">
        <h3>{service.title}</h3>
        <p className="service__description">{service.description}</p>
        <ul
          className="service__deliverables"
          aria-label={`${service.title} deliverables`}
        >
          {service.deliverables.map((deliverable) => (
            <li key={deliverable}>{deliverable}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
