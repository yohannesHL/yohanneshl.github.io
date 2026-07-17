import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const copy =
  "I'm Yohannes a full-stack software developer based in London. I craft and ship software products fast. Whether you need to get your idea off the ground (end to end delivery), qualiity asurance and scalability of end product, need extra help with scaling or inproving quality or audit. i am your trusted expert that delivers reliable results. Schedule a quick call and  Do you have an exciting project you need delivered in a in working with me?";
const words = copy.split(" ").filter(Boolean);
const stats = [
  {
    stat: "12+",
    text: "Years of experience",
  },
  {
    stat: "10+",
    text: "Completed Projects",
  },
  {
    stat: "10+",
    text: "Great Clients",
  },
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
    <section
      ref={sectionRef}
      className=" w-full flex py-24"
    >
      <div className="container  mx-auto px-4 content-column">
        <div className=" flex flex-col justify-between gap-42 ">
          <p className="hero__text text-center text-2xl md:text-4xl font-mono leading-relaxed">
            {/* {words.map((word, index) => (
              <span
                key={index}
                ref={(el) => {
                  wordsRef.current[index] = el;
                }}
                className="inline-block mr-[0.35em] will-change-[opacity,filter]"
              >
                {word}
              </span>
            ))} */}
          </p>
  
        </div>
      </div>
    </section>
  );
}
