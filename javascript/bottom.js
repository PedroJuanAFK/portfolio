






// scroll body
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    navbar.classList.add('top');
  } else {
    navbar.classList.remove('top');
  }
});


// Carousel
const track = document.getElementById('track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = track.clientWidth / 2;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

prevBtn?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 2) % 2;
  updateCarousel();
});

nextBtn?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 2;
  updateCarousel();
});


// cards

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert('Você clicou no card: ' + card.querySelector('.card-text').textContent);
  });
});

