// NAV MÓVIL
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('navDrawer');
const drawerClose = document.querySelector('.drawer-close');


/* hamburger.addEventListener('click', () => {
  navDrawer.classList.add('nav-open');
  document.body.classList.add('no-scroll');
});
drawerClose.addEventListener('click', () => {
  navDrawer.classList.remove('nav-open');
  document.body.classList.remove('no-scroll');
});
navDrawer.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    navDrawer.classList.remove('nav-open');
    document.body.classList.remove('no-scroll');
  }
}); */

// SLIDER
const slider = document.getElementById('serviciosSlider');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function slide(dir) {
  const cardW = slider.querySelector('.servicio-card').offsetWidth + 24;
  slider.scrollBy({ left: dir * cardW, behavior: 'smooth' });
}

function updateSliderButtons() {
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  prevBtn.style.display = slider.scrollLeft > 10 ? 'flex' : 'none';
  nextBtn.style.display = slider.scrollLeft < maxScroll - 10 ? 'flex' : 'none';
}

prevBtn.addEventListener('click', () => {
  slide(-1);
  setTimeout(updateSliderButtons, 400);
});
nextBtn.addEventListener('click', () => {
  slide(1);
  setTimeout(updateSliderButtons, 400);
});
slider.addEventListener('scroll', updateSliderButtons);
window.addEventListener('load', updateSliderButtons);

// MODALES
const modalTriggers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');

modalTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.modal).style.display = 'flex';
  });
});
modals.forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target.dataset.close !== undefined || e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// FORMULARIO A WHATSAPP
document.getElementById('wsp-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  const txt = `Hola, mi nombre es ${nombre}. Mi correo es ${email}. Quisiera cotizar un servicio. Detalles: ${mensaje}`;
  const url = `https://wa.me/56974188951?text=${encodeURIComponent(txt)}`;
  window.open(url, '_blank');
});

