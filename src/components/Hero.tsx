import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const words = [
//   "I'm",
//   "Yohannes,",
//   "a",
//   "full-stack",
//   "software",
//   "developer",
//   "based",
//   "in",
//   "London.",
//   "Now",
//   "available",
//   "for",
//   "hire.",
// ];

// other of based in London. I craft and ship software products fast. Whether you need to get your idea off the ground (end to end delivery), qualiity asurance and scalability of end product, need extra help with scaling or inproving quality or audit. i am your trusted expert that delivers reliable results. Schedule a quick call and  Do you have an exciting project you need delivered in a in working with me?
const copy =
  "I'm Yohannes, a senior full-stack software developer with expertise in crafting & delivering scalable solutions for startups and enterprises in fintech and eccomerce space ";
const words = copy.split(" ").filter(Boolean);

const callUrl = "https://calendly.com/yohannes-7/15min";
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
        animationDelay: 1
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={divRef} className="hero flex flex-col items-center justify-center ">
        <div className="container h-full ">
          <p className="hero__text text-black text-6xl md:text-6xl leading-relaxed font-sans">
       

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

          {/* <div className="grid gap-6 grid-cols-[1fr_180px]">
            <span className="inline-flex gap-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-locate-icon lucide-locate"
              >
                <line x1="2" x2="5" y1="12" y2="12" />
                <line x1="19" x2="22" y1="12" y2="12" />
                <line x1="12" x2="12" y1="2" y2="5" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <circle cx="12" cy="12" r="7" />
              </svg>
              <span>based in London</span>
            </span>
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
          </div> */}
        </div>
        {/* <div className="grid grid-cols-3 gap-36">
          {stats.map(({ stat, text }) => (
            <div className="flex flex-wrap items-center justify-center">
              <span className="text-5xl font-bold"> {stat}</span>
              <span className="font-semibold wrap-break-word whitespace-break-spaces ">
                {" "}
                {text}
              </span>
            </div>
          ))}
        </div> */}
    </div>
  );
}
