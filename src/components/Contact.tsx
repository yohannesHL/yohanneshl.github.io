import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const callUrl = "https://calendly.com/yohannes-7/15min";

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
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="flex items-center justify-center py-24 px-20">
      <div
        ref={contentRef}
        className="container flex flex-col items-center justify-center "
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-4 w-full md:w-130 text-black">
          Have an exciting project? Let's talk
        </h2>
        <div>
          <a className="btn text-lg p-4 rounded-full" href={callUrl}>
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
