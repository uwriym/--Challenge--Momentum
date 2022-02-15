const imageArr = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const randomImage = imageArr[parseInt(Math.random() * imageArr.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;
document.body.prepend(bgImage);

bgImage.classList.add("bgImage");
