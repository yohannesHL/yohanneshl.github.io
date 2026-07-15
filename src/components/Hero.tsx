import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = [
  "I'm",
  'Yohannes,',
  'a',
  'full-stack',
  'software',
  'developer',
  'based',
  'in',
  'London.',
  'Now',
  'available',
  'for',
  'hire.',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(wordsRef.current, {
        opacity: 0.15,
        filter: 'blur(8px)',
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(wordsRef.current, {
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.06,
        duration: 0.5,
        ease: 'power2.out',
      });

      tl.to(
        wordsRef.current,
        {
          opacity: 0.15,
          filter: 'blur(8px)',
          stagger: 0.04,
          duration: 0.4,
          ease: 'power2.in',
        },
        '+=0.2'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 content-column">
        <p className="hero__text text-center text-2xl md:text-4xl font-mono leading-relaxed">
          {words.map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                wordsRef.current[index] = el;
              }}
              className="inline-block mr-[0.35em] will-change-[opacity,filter]"
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
