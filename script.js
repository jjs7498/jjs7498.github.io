const pages = document.querySelectorAll('.page');
let currentPage = 0;

function goToPage(pageIndex) {
  pages[currentPage].style.transform = `translateY(-${100 * currentPage}%)`;
  pages[pageIndex].style.transform = `translateY(0%)`;
  currentPage = pageIndex;
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1);
    }
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }
});

goToPage(currentPage);