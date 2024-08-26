const btn = document.querySelector('[data-js="btn"]');
const yt = document.querySelector('[data-js="yt"]');

btn.addEventListener('click', () => {
  yt.classList.add('active');
});
