const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const instance = basicLightbox.create(`
    <div class="modal">
        <div class="modalPhoto">
          <img width="1112" height="640" src="https://placehold.it/1112x640">
        </div>
    </div>
`);

const element = document.querySelector("ul.gallery");
element.addEventListener("click", openModal);

const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const galleryListElement = document.createElement("li");
  galleryListElement.classList = "gallery-item";
  const galleryLink = document.createElement("a");
  galleryLink.classList = "gallery-link";
  galleryLink.href = image.original;
  galleryListElement.appendChild(galleryLink);
  const galleryImage = document.createElement("img");
  galleryImage.classList = "gallery-image";
  galleryImage.src = image.preview;
  galleryImage.alt = image.description;
  galleryImage.dataset.source = galleryLink.href;
  galleryLink.appendChild(galleryImage);
  fragment.appendChild(galleryListElement);
});
element.appendChild(fragment);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let currentModalPhoto = document.querySelector("div.modalPhoto > img");
  const currentImage = event.target.dataset.source;
  console.log(currentImage);
  // currentModalPhoto.src = event.target.dataset.source;
  instance.show();
}

// ESC do close
document.addEventListener("keydown", closeModal);

function closeModal(event) {
  if (event.keyCode == 27) {
    instance.close();
  }
  // document.removeEventListener("keydown", closeModal);
}
