const map = document.querySelector(".map-invitation__source");
const image = document.querySelector(".map-invitation__bg-image");

if (typeof window.innerWidth !== 'undefined') {
  // JavaScript включен
  image.style.display = 'none';
  map.style.display = 'block';
} else {
  // JavaScript отключен
  image.style.display = 'block';
  map.style.display = 'none';
}
