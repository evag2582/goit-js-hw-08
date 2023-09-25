// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

const createItem = (item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
};

const itemsContainer = document.querySelector('.gallery');
for (const item of galleryItems) {
    const newItem = createItem(item);
    itemsContainer.innerHTML += newItem;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
