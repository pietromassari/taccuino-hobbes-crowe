document.querySelectorAll('.entry button').forEach((button) => {
  button.addEventListener('click', () => {
    const entry = button.closest('.entry');
    const isOpen = entry.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('.entry-arrow').textContent = isOpen ? '−' : '+';
  });
});
