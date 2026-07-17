const motionQuery = window.matchMedia(
  '(min-width: 40rem) and (prefers-reduced-motion: no-preference)',
);

const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
const revealed = new WeakSet<HTMLElement>();
const activeAnimations = new Set<Animation>();
let observer: IntersectionObserver | undefined;

const stopMotion = () => {
  observer?.disconnect();
  observer = undefined;

  activeAnimations.forEach((animation) => animation.cancel());
  activeAnimations.clear();
};

const startMotion = () => {
  if (observer || !motionQuery.matches) return;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const element = entry.target as HTMLElement;
        revealed.add(element);
        observer?.unobserve(element);

        const animation = element.animate(
          [
            { opacity: 0, transform: 'translateY(18px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          {
            duration: 500,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          },
        );

        activeAnimations.add(animation);
        animation.addEventListener('finish', () => activeAnimations.delete(animation), {
          once: true,
        });
        animation.addEventListener('cancel', () => activeAnimations.delete(animation), {
          once: true,
        });
      }
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.01,
    },
  );

  revealItems.forEach((element) => {
    if (!revealed.has(element)) observer?.observe(element);
  });
};

const syncMotion = () => {
  stopMotion();
  startMotion();
};

motionQuery.addEventListener('change', syncMotion);
startMotion();
