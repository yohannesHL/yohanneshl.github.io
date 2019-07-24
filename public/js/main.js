function Carousel(itemSelector, viewSelector, activeItemCls, activeViewCls) {
  const $items = document.querySelectorAll(itemSelector);

  const context = {
    delay: 3000,
    position: 0,
    activeItemCls: activeItemCls,
    activeViewCls: activeViewCls,
    $items: $items,
    $views: document.querySelectorAll(viewSelector),
    ticker: null,
    running: false,
    start: function() {
      this.stop();
      this.ticker = setInterval(this.next.bind(this), this.delay);
      this.running = true;
    },
    stop: function() {
      clearInterval(this.ticker);
      this.running = false;
    },
    next: function() {
      //   console.info("next", this.position, this);
      this.$items.forEach((item, index) => {
        const $view = this.$views[index];
        if (index === this.position) {
          item.classList.add(this.activeItemCls);
          if ($view) $view.classList.add(this.activeViewCls);
          return;
        }
        item.classList.remove(this.activeItemCls);

        if ($view) $view.classList.remove(this.activeViewCls);
      });

      this.position++;
      if (this.position >= this.$items.length) {
        this.position = 0;
      }
    }
  };

  $items.forEach(($item, index) => {
    $item.addEventListener("click", event => {
      if (context.running) context.stop();

      context.position = index;
      context.next();
    });
  });

  return context;
}

window.addEventListener("load", function() {
  const carousel = Carousel(
    ".featured-projects__item",
    ".featured-projects__img",
    "featured-projects__item--active",
    "featured-projects__img--active"
  );
  window.workCarousel = carousel;
  carousel.start();
});
