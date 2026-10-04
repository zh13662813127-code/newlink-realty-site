const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.hidden = isOpen;
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.hidden = true;
  });
});

const filterButtons = document.querySelectorAll('[data-filter]');
const listingCards = document.querySelectorAll('.listing-card');
const listingEmpty = document.querySelector('.listing-empty');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    let visibleCount = 0;
    listingCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.kind === filter;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    listingEmpty.hidden = visibleCount > 0;
  });
});

const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = contactForm.querySelector('.form-note');
  note.textContent = 'Thanks. Your enquiry is ready to send to the Newlink team.';
  contactForm.reset();
});
