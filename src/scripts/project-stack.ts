import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll<HTMLElement>('.projects');

sections.forEach((section) => {
  const pin = section.querySelector<HTMLElement>('[data-project-pin]');
  const stage = section.querySelector<HTMLElement>('[data-project-stage]');
  const cards = Array.from(
    section.querySelectorAll<HTMLElement>('[data-project-card]'),
  );

  if (!pin || !stage || cards.length === 0) return;

  const media = gsap.matchMedia();

  const resetCards = () => {
    section.classList.remove('projects--stacked');
    cards.forEach((card) => {
      card.inert = false;
      card.removeAttribute('aria-hidden');
    });
    gsap.set(cards, { clearProps: 'all' });
  };

  media.add(
    '(min-width: 64rem) and (min-height: 44rem) and (prefers-reduced-motion: no-preference)',
    () => {
      section.classList.add('projects--stacked');

      gsap.set(cards, {
        xPercent: 108,
        rotationZ: 1.25,
        transformOrigin: '50% 50%',
      });
      gsap.set(cards[0], { xPercent: 0, rotationZ: 0 });
      gsap.set(cards, { zIndex: (index) => index + 1 });

      let activeIndex = -1;
      const setActiveCard = (nextIndex: number) => {
        if (nextIndex === activeIndex) return;
        activeIndex = nextIndex;

        cards.forEach((card, index) => {
          const isActive = index === activeIndex;
          card.inert = !isActive;
          if (isActive) card.removeAttribute('aria-hidden');
          else card.setAttribute('aria-hidden', 'true');
        });
      };

      setActiveCard(0);

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: pin,
          start: 'top 1rem',
          end: () => `+=${(cards.length - 1) * window.innerHeight * 0.82}`,
          pin,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              cards.length - 1,
              Math.round(self.progress * (cards.length - 1)),
            );
            setActiveCard(index);
          },
        },
      });

      cards.slice(1).forEach((card, index) => {
        const previousCard = cards[index];
        const position = index;

        timeline
          .to(
            previousCard,
            {
              xPercent: -10,
              rotationZ: -0.6,
              scale: 0.985,
              duration: 1,
            },
            position,
          )
          .to(
            card,
            {
              xPercent: 0,
              rotationZ: 0,
              duration: 1,
            },
            position,
          );
      });

      return resetCards;
    },
  );

  media.add(
    [
      '(min-width: 40rem) and (max-width: 63.999rem) and (prefers-reduced-motion: no-preference)',
      '(min-width: 64rem) and (max-height: 43.999rem) and (prefers-reduced-motion: no-preference)',
    ].join(', '),
    () => {
      const animations = cards.map((card) =>
        gsap.fromTo(
          card,
          { autoAlpha: 0, xPercent: 12 },
          {
            autoAlpha: 1,
            xPercent: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 86%',
              once: true,
            },
          },
        ),
      );

      return () => {
        animations.forEach((animation) => animation.kill());
        resetCards();
      };
    },
  );
});
