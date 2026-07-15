import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const callUrl = 'https://calendly.com/yohannes-7/15min';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 40 });

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center py-24"
    >
      <div ref={contentRef} className="container mx-auto px-4 content-column text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Lets talk</h2>
        <hr className="animation__line animation--delay-2 mx-auto w-24 mb-12" />
        <a
          className="btn inline-block text-lg px-8 py-4 rounded-full"
          href={callUrl}
        >
          Book a call
        </a>
      </div>
    </section>
  );
}
