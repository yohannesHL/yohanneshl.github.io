import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// other of based in London. I craft and ship software products fast. Whether you need to get your idea off the ground (end to end delivery), qualiity asurance and scalability of end product, need extra help with scaling or inproving quality or audit. i am your trusted expert that delivers reliable results. Schedule a quick call and  Do you have an exciting project you need delivered in a in working with me?
const copy =
  "I’m Yohannes, a senior software engineer who crafts customer-facing products, internal platforms/tools and AI systems for startups and enterprises.";
const words = copy.split(" ").filter(Boolean);
const what = ['Digital products', 'Internal tools', 'AI systems'];
const whatColors = [
  'var(--color-hero-product)',
  'var(--color-hero-tools)',
  'var(--color-hero-ai)',
];

export default function Hero() {
  const divRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const whatRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = divRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const rotatingWords = whatRefs.current.filter(
          (word): word is HTMLSpanElement => word !== null,
        );
        const paragraphWords = wordsRef.current.filter(
          (word): word is HTMLSpanElement => word !== null,
        );

        if (rotatingWords.length > 0) {
          const rotatingLetters = rotatingWords.flatMap((word) =>
            Array.from(word.querySelectorAll('.hero__rotating-character')),
          );

          gsap.set(rotatingWords, { autoAlpha: 0 });
          gsap.set(rotatingWords[0], { autoAlpha: 1 });
          gsap.set(rotatingLetters, {
            opacity: 1,
            yPercent: 0,
            force3D: false,
          });

          const rotation = gsap.timeline({
            delay: 1.8,
            repeat: -1,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              toggleActions: 'play pause resume pause',
            },
          });

          rotatingWords.forEach((currentWord, phraseIndex) => {
            const nextWord = rotatingWords[(phraseIndex + 1) % rotatingWords.length];
            const currentLetters = Array.from(
              currentWord.querySelectorAll('.hero__rotating-character'),
            );
            const nextLetters = Array.from(
              nextWord.querySelectorAll('.hero__rotating-character'),
            );

            rotation
              .to(currentLetters, {
                opacity: 0,
                yPercent: -65,
                duration: 0.22,
                stagger: 0.025,
                ease: 'power2.in',
                force3D: false,
              })
              .set(currentWord, { autoAlpha: 0 })
              .set(nextWord, { autoAlpha: 1 })
              .set(nextLetters, {
                opacity: 0,
                yPercent: 70,
              })
              .to(nextLetters, {
                opacity: 1,
                yPercent: 0,
                duration: 0.32,
                stagger: 0.035,
                ease: 'power3.out',
                force3D: false,
              })
              .set(nextLetters, { clearProps: 'transform' })
              .to({}, { duration: 1.85 });
          });
        }

        if (paragraphWords.length > 0) {
          gsap.set(paragraphWords, {
            opacity: 0.15,
            filter: 'blur(8px)',
            willChange: 'opacity,filter',
          });

          gsap.to(paragraphWords, {
            opacity: 1,
            filter: 'blur(0px)',
            stagger: 0.06,
            duration: 0.45,
            delay: 0.3,
            ease: 'power2.out',
            clearProps: 'opacity,filter,willChange',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              once: true,
            },
          });
        }
      });
    }, section);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={divRef} className="hero" aria-labelledby="hero-title">
      <div className="container mx-auto px-4 hero__layout">
        <div className="hero__heading">
          <h1 id="hero-title">
            
            <span className="sr-only">
              {' '}digital products, internal tools and AI systems
            </span>
            <span className="hero__rotating-wrap " aria-hidden="true">
              {what.map((phrase, phraseIndex) => (
                <span
                  key={phrase}
                  ref={(el) => {
                    whatRefs.current[phraseIndex] = el;
                  }}
                  className="hero__rotating-word"
                  style={{ color: whatColors[phraseIndex] }}
                >
                  {phrase.split(' ').map((word, wordIndex, phraseWords) => (
                    <span key={`${phrase}-${word}`}>
                      <span className="hero__rotating-token">
                        {Array.from(word).map((character, characterIndex) => (
                          <span key={`${word}-${characterIndex}`} className="hero__rotating-character">
                            {character}
                          </span>
                        ))}
                      </span>
                      {wordIndex < phraseWords.length - 1 ? ' ' : null}
                    </span>
                  ))}
                </span>
              ))}
            </span> expertly delivered
          </h1>
        </div>

        <div className="hero__introduction">
          {/* <p>
        I’m Yohannes, a senior software engineer who crafts customer-facing products, internal platforms/tools and applied AI workflows for startups and enterprises.
      </p> */}
          <p>
            {words.map((word, index) => (
              <span
                key={index}
                ref={(el) => {
                  wordsRef.current[index] = el;
                }}
                className="inline-block mr-[0.35em]"
              >
                {word}
              </span>
            ))}
          </p>
          <div className="hero__actions">
            <a className="btn" href="#services">
              Explore services
            </a>
            <a className="hero__secondary" href="#work">
              View featured work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
