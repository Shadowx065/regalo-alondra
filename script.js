
// ======================================
// REGALO DIGITAL: ALONDRA & URIEL
// ======================================

// Reproductor musical
const song = document.getElementById('song');

if (song) {
  song.addEventListener('error', () => {
    console.info(
      'Añade Hermanos.mp3 junto a index.html para activar la música.'
    );
  });
}

// Aparición de las fotografías al desplazarse
const cards = document.querySelectorAll('.photo-card');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
}
