import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Client {
  name: string;
  url: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'FSB Technology', url: 'https://fsbtech.com/', logo: '/img/logos/fsb.png' },
  { name: 'SES Global', url: 'https://www.ses.com', logo: '/img/logos/ses.svg' },
  { name: 'Deloitte', url: 'https://www.deloitte.com/', logo: '/img/logos/deloitte.png' },
  { name: 'Klekt', url: 'https://klekt.com', logo: '/img/logos/klekt.svg' },
  { name: 'Sky', url: 'https://sky.com', logo: '/img/logos/sky.png' },
];

export default function WorkedWith() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const logoElements = logosRef.current.filter(Boolean) as HTMLAnchorElement[];

      gsap.set(headerRef.current, { opacity: 0, y: 40 });
      gsap.set(logoElements, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 0.6,
        },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });

      tl.to(
        logoElements,
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.1'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-alt min-h-screen w-full flex flex-col items-center justify-center py-24"
    >
      <div className="container mx-auto px-4 content-column">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Worked with</h2>
          <hr className="animation__line animation--delay-2 mx-auto w-24" />
        </div>
        <div className="work__logos flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <a
              key={client.name}
              ref={(el) => {
                logosRef.current[index] = el;
              }}
              href={client.url}
              title={client.name}
              className="inline-flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-14 w-auto"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
