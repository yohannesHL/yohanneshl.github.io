import { useRef, useLayoutEffect, type MutableRefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  title: string;
  description: string;
  variant: 'frontend' | 'backend' | 'native';
  capabilities: string[];
  tools: { src: string; title: string }[];
}

const skills: Skill[] = [
  {
    title: 'Frontend',
    description: 'I develop impactful and intuitive user experiences adhering to industry best practices.',
    variant: 'frontend',
    capabilities: ['Product interfaces', 'Design systems', 'Performance & accessibility'],
    tools: [
      { src: '/img/logos/css-3.svg', title: 'CSS' },
      { src: '/img/logos/html-5.svg', title: 'HTML' },
      { src: '/img/logos/typescript-icon.svg', title: 'TypeScript' },
      { src: '/img/logos/react.svg', title: 'React' },
      { src: '/img/logos/vue.svg', title: 'Vue' },
    ],
  },
  {
    title: 'Backend',
    description: 'I architect & build clean, robust & scalable services and APIs for either on-premises or cloud native systems.',
    variant: 'backend',
    capabilities: ['Service architecture', 'APIs & integrations', 'Cloud delivery'],
    tools: [
      { src: '/img/logos/typescript-icon.svg', title: 'TypeScript' },
      { src: '/img/logos/nodejs.svg', title: 'NodeJS' },
      { src: '/img/logos/python.svg', title: 'Python' },
      { src: '/img/logos/docker.svg', title: 'Docker' },
      { src: '/img/logos/nginx.svg', title: 'NginX' },
      { src: '/img/logos/aws.svg', title: 'AWS' },
    ],
  },
  {
    title: 'Native Apps',
    description: 'I deliver beautifully crafted experiences for iOS and Android devices using frameworks such as React Native.',
    variant: 'native',
    capabilities: ['Cross-platform apps', 'Native integrations', 'Store-ready delivery'],
    tools: [
      { src: '/img/logos/react.svg', title: 'React Native' },
      { src: '/img/logos/expo.svg', title: 'Expo' },
      { src: '/img/logos/nativescript.svg', title: 'NativeScript' },
      { src: '/img/logos/ios.svg', title: 'iOS' },
      { src: '/img/logos/android.svg', title: 'Android OS' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cardElements = cardsRef.current.filter(Boolean) as HTMLElement[];

      gsap.set(headerRef.current, { opacity: 0, y: 40 });
      gsap.set(cardElements, {
        yPercent: 40,
        opacity: 0,
      });

      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      cardElements.forEach((card, index) => {
        gsap.to(card, {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.08,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-alt min-h-screen w-full flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 content-column">
        <div ref={headerRef} className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">What I do</h2>
          <hr className="animation__line animation--delay-2 mx-auto w-24" />
        </div>

        <div className="services__list">
          {skills.map((skill, index) => (
            <Service
              key={skill.title}
              skill={skill}
              index={index}
              cardsRef={cardsRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceProps {
  skill: Skill;
  index: number;
  cardsRef: MutableRefObject<(HTMLElement | null)[]>;
}

function Service({ skill, index, cardsRef }: ServiceProps) {
  return (
    <article
      ref={(element) => {
        cardsRef.current[index] = element;
      }}
      className={`service service--${skill.variant}`}
    >
      <div className="service__number" aria-label={`Service ${index + 1}`}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="service__statement">
        <p className="service__eyebrow">Studio capability</p>
        <h3>{skill.title}</h3>
        <p className="service__description">{skill.description}</p>

        <ul className="service__capabilities" aria-label={`${skill.title} deliverables`}>
          {skill.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>

      <div className="service__stack">
        <div className="service__stack-heading">
          <span>Working stack</span>
          <span>{String(skill.tools.length).padStart(2, '0')} tools</span>
        </div>
        <div className="service__cloud">
          {skill.tools.map((tool, toolIndex) => (
            <div
              key={tool.title}
              className={`service__tool service__tool--${(toolIndex % 3) + 1}`}
            >
              <img src={tool.src} alt="" loading="lazy" />
              <span>{tool.title}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
