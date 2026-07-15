function Carousel(itemSelector, viewSelector, activeItemCls, activeViewCls) {
  const items = document.querySelectorAll(itemSelector);

  const context = {
    delay: 8000,
    position: 0,
    activeItemCls,
    activeViewCls,
    items,
    views: document.querySelectorAll(viewSelector),
    ticker: null,
    running: false,
    start() {
      this.stop();
      this.ticker = setInterval(this.next.bind(this), this.delay);
      this.running = true;
    },
    stop() {
      clearInterval(this.ticker);
      this.running = false;
    },
    next() {
      this.items.forEach((item, index) => {
        const view = this.views[index];
        if (index === this.position) {
          item.classList.add(this.activeItemCls);
          if (view) view.classList.add(this.activeViewCls);
          return;
        }
        item.classList.remove(this.activeItemCls);
        if (view) view.classList.remove(this.activeViewCls);
      });

      this.position += 1;
      if (this.position >= this.items.length) {
        this.position = 0;
      }
    },
  };

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      if (context.running) context.stop();

      context.position = index;
      context.next();
    });
  });

  return context;
}

window.addEventListener('load', () => {
  const carousel = Carousel(
    '.projects__item',
    '.projects__view',
    'projects__item--active',
    'projects__view--active'
  );
  window.workCarousel = carousel;
  carousel.start();
});
