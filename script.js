// Get all the animated elements
const animatedElements = document.querySelectorAll('.animate');

// Function to check if an element is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle the scroll event
const handleScroll = () => {
  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
};

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);
