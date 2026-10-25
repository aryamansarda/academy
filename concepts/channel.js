(() => {
  const panels = [...document.querySelectorAll('.stage-panel')];
  const links = [...document.querySelectorAll('a[href^="#"]')];
  const previous = document.querySelector('[data-previous]');
  const next = document.querySelector('[data-next]');
  const chapter = document.querySelector('[data-chapter]');
  const position = document.querySelector('[data-position]');
  let current = 0;

  function render(moveFocus = false) {
    const requested = panels.findIndex(panel => `#${panel.id}` === location.hash);
    current = location.hash === '#content' ? current : requested < 0 ? 0 : requested;
    panels.forEach((panel, index) => { panel.hidden = index !== current; });
    links.forEach(link => {
      if (link.getAttribute('href') === `#${panels[current].id}`) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    previous.disabled = current === 0;
    next.disabled = current === panels.length - 1;
    const heading = panels[current].querySelector('h1, h2');
    chapter.textContent = current === 0 ? 'introduction' : heading.childNodes[0].textContent.trim();
    position.textContent = `${String(current).padStart(2, '0')} / 05`;
    document.title = `aryaman sarda / ${chapter.textContent}`;
    if (moveFocus) {
      heading.focus({preventScroll:true});
      window.scrollTo({top:0, behavior:'instant'});
    }
  }

  function go(offset) {
    const target = panels[current + offset];
    if (target) location.hash = target.id;
  }

  previous.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  window.addEventListener('hashchange', () => render(true));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.target.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      go(event.key === 'ArrowRight' ? 1 : -1);
    }
  });

  document.documentElement.classList.add('is-enhanced');
  render();
})();
