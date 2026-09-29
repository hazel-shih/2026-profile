document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const slides = track.children;
  const current = carousel.querySelector('[data-current]');
  const total = carousel.querySelector('[data-total]');
  let index = 0;

  total.textContent = String(slides.length).padStart(2, '0');

  const render = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    current.textContent = String(index + 1).padStart(2, '0');
  };

  carousel.querySelector('[data-prev]').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });
  carousel.querySelector('[data-next]').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    render();
  });
});
