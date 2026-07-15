import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = [
  "I'm",
  "Yohannes,",
  "a",
  "full-stack",
  "software",
  "developer",
  "based",
  "in",
  "London.",
  "Now",
  "available",
  "for",
  "hire.",
];

const callUrl = "https://calendly.com/yohannes-7/15min";

export default function Hero() {
  const divRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = divRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(wordsRef.current, {
        opacity: 0.15,
        filter: "blur(8px)",
      });

      gsap.to(wordsRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "top 25%",
          scrub: 0.6,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={divRef}
      className="hero flex items-center justify-center py-12"
    >
      <div className="container flex flex-col gap-30">
        <span>Hi I'm Yohannes </span>
        <p className="hero__text text-black text-6xl md:text-6xl leading-relaxed font-sans">
          expert full-stack engineer for your webapp/enterprise app/mobile
          app/ai integration/platform,
        </p>

        <div className="grid gap-6 grid-cols-[1fr_180px]">
          <div>based in London</div>
          <div className="flex flex-col gap-2  col-start-2">
            <div className="capitalize grid grid-cols-[16px_1fr] ">
              <div className="rounded-full bg-emerald-500 w-3 h-3"></div>
              Available for projects
            </div>
            <a
              className="btn inline-block text-lg px-8 py-4 rounded-full"
              href={callUrl}
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
