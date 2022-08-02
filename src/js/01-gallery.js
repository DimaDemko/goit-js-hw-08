// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const gallery = document.querySelector('.gallery');
const newHtmlCodeFull = newHtmlCode(galleryItems);
gallery.insertAdjacentHTML('beforeend', newHtmlCodeFull);

function newHtmlCode(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
