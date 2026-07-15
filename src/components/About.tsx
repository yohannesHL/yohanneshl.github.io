import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const copy =  "I'm Yohannes a full-stack software developer based in London. Now available for hire." 
const words = copy.split(' ').filter(Boolean)

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

      gsap.to(wordsRef.current, {
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about  w-full flex items-center justify-center py-24"
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
