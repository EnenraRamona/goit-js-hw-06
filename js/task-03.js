const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryUlEl = document.querySelector(`.gallery`);
// images.forEach((image) => {
//   const galleryLiEl = document.createElement(`li`);
//   galleryLiEl.classList.add(`gallery-item`);
//   galleryUlEl.append(galleryLiEl);

// });
// console.log(galleryUlEl);


const newGallery = images.map((image) => `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-image"></li>`).join(``);
galleryUlEl.insertAdjacentHTML('beforeend', newGallery);

const galleryItems = document.querySelectorAll(`.gallery-item`);
galleryItems.forEach((item) => {
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.justifyContent = "center";
  item.style.marginBottom = "15px";
});


const galleryImages = document.querySelectorAll(`.gallery-image`);
galleryImages.forEach((image) => {
  image.style.maxWidth = "480px";
  image.style.height = "auto";
})

console.log(galleryUlEl);


