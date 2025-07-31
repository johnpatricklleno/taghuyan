class Carousel {
  constructor(element) {
    this._element = element;
    this._items = element.querySelectorAll('.carousel-item');
    this._current = 0;
    this._interval = null;
    this._init();
  }

  _init() {
    this._items[this._current].classList.add('active');

    const nextBtn = this._element.querySelector('.carousel-control-next');
    const prevBtn = this._element.querySelector('.carousel-control-prev');

    nextBtn?.addEventListener('click', () => this.next());
    prevBtn?.addEventListener('click', () => this.prev());
  }

  next() {
    this._goTo(this._current + 1);
  }

  prev() {
    this._goTo(this._current - 1);
  }

  _goTo(index) {
    this._items[this._current].classList.remove('active');
    this._current = (index + this._items.length) % this._items.length;
    this._items[this._current].classList.add('active');
  }

  start(interval = 5000) {
    this._interval = setInterval(() => this.next(), interval);
  }

  stop() {
    clearInterval(this._interval);
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(el => {
    const carousel = new Carousel(el);
    carousel.start();
  });
});
