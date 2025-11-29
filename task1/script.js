document.addEventListener('DOMContentLoaded', () => {

  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);

  document.querySelectorAll('.project').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const link = card.querySelector('a');
      if (link) {
        window.open(link.href, '_blank');
      }
    });
  });

  revealOnScroll();
});
