
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCap = document.getElementById('modal-cap');
const closeBtn = document.querySelector('#modal .close');

document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    const cap = img.closest('figure')?.querySelector('figcaption')?.innerText || '';
    modalCap.textContent = cap;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
});
