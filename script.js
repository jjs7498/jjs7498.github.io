const pages = document.querySelectorAll('.page');
let currentPage = 0;

window.addEventListener('wheel', event => {
  event.preventDefault();
  const delta = event.deltaY;
  const direction = delta > 0 ? 1 : -1;
  currentPage += direction;
  if (currentPage < 0) {
    currentPage = 0;
  }
  if (currentPage > pages.length - 1) {
    currentPage = pages.length - 1;
  }
  pages[currentPage].scrollIntoView({
    behavior: 'smooth'
  });
});

window.addEventListener('load', () => {
  pages[0].querySelector('.animate').classList.add('active');
});

window.addEventListener('scroll', () => {
  pages.forEach((page, index) => {
    const top = page.offsetTop;
    const bottom = top + page.offsetHeight;
    const scrollTop = window.scrollY + window.innerHeight / 2;
    if (scrollTop >= top && scrollTop <= bottom) {
      currentPage = index;
      page.querySelector('.animate').classList.add('active');
    } else {
      page.querySelector('.animate').classList.remove('active');
    }
  });
});

window.addEventListener('keydown', event => {
  const key = event.key;
  if (key === 'ArrowDown' || key === 'ArrowRight') {
    event.preventDefault();
    currentPage++;
    if (currentPage > pages.length - 1) {
      currentPage = pages.length - 1;
    }
    pages[currentPage].scrollIntoView({
      behavior: 'smooth'
    });
  } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
    event.preventDefault();
    currentPage--;
    if (currentPage < 0) {
      currentPage = 0;
    }
    pages[currentPage].scrollIntoView({
      behavior: 'smooth'
    });
  }
});