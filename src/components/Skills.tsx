import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  title: string;
  description: string;
  variant: 'frontend' | 'backend' | 'native';
  tools: { src: string; title: string }[];
}

const skills: Skill[] = [
  {
    title: 'Frontend',
    description: 'I develop impactful and intuitive user experiences adhering to industry best practices.',
    variant: 'frontend',
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cardElements = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(headerRef.current, { opacity: 0, y: 40 });
      gsap.set(cardElements, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        yPercent: 100,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=250%',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.15,
        ease: 'power2.out',
      });

      cardElements.forEach((card, index) => {
        const isLast = index === cardElements.length - 1;
        const progress = 0.2 + index * 0.25;

        tl.to(
          card,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.25,
            ease: 'power3.out',
          },
          progress
        );

        if (!isLast) {
          tl.to(
            card,
            {
              scale: 0.92,
              opacity: 0.5,
              duration: 0.2,
              ease: 'power2.inOut',
            },
            progress + 0.22
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-alt h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 content-column h-full flex flex-col">
        <div ref={headerRef} className="text-center pt-12 pb-6 shrink-0">
          <h2 className="text-3xl md:text-5xl font-bold">What I do</h2>
          <hr className="animation__line animation--delay-2 mx-auto w-24" />
        </div>

        <div className="relative flex-1 min-h-0 w-full">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`skill-card skill-card--${skill.variant} rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 md:p-16`}
            >
              <h3 className="skill-card__title text-3xl md:text-5xl font-bold uppercase mb-6">
                {skill.title}
              </h3>
              <p className="text-center text-lg md:text-2xl max-w-3xl mb-8">
                {skill.description}
              </p>
              <div className="skill-card__toolset flex items-center justify-center gap-6 flex-wrap">
                {skill.tools.map((tool) => (
                  <img
                    key={tool.title}
                    src={tool.src}
                    alt={tool.title}
                    title={tool.title}
                    className="h-10 w-10 md:h-14 md:w-14"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
