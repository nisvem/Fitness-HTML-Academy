document.querySelectorAll('[data-video]').forEach((video)=> {
  const btn = video.querySelector('[data-video-btn]');
  const iframe = video.querySelector('[data-video-iframe]');

  btn.addEventListener('click', (e)=> {
    e.preventDefault();

    const src = iframe.dataset.src;
    // скрываем постер
    video.classList.add('is-active');
    // подставляем в src параметр из data
    iframe.src = src;
    iframe.src += '?autoplay=1';
  });
});
